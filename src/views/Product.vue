<template>
  <div class="wrapper">
    <div class="space"></div>
    <div>
      <p class="new">
        <span class="new-text">
          <i class="fa fa-plus" aria-hidden="true"></i>
          <router-link class="link-new-product" to="/products/new">Novo</router-link>
        </span>
      </p>
    </div>
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Produto</th>
          <th>Categoria</th>
          <th>Valor</th>
          <th>Ingredientes</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(prod, index) in products" :key="prod.id">
          <th scope="row">{{index+1}}</th>
          <td>{{prod.name}}</td>
          <td>{{prod.category.name}}</td>
          <td>{{prod.price | formatPrice() }}</td>
          <td>{{prod.ingredients ? prod.ingredients : '-'}}</td>
          <td>
            <router-link class="btn btn-warning edit" :to="`/products/${prod.id}/edit`">Editar</router-link>
            <span class="btn btn-danger" @click="deleteProduct(prod)">Excluir</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { global, mixin } from "../mixins/general.mixin";

export default {
  name: "Products",
  components: {},
  mixins: [global, mixin],
  beforeMount() {
    this.getProducts();
  },
  data: function () {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      try {
        const { data } = await axios.get(
          "https://api-casa-do-pastel.herokuapp.com/products"
        );
        this.products = data;
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message);
          return;
        } else if (err.message) {
          alert(`Houve um erro tente novamente.. ${err.message}`);
          return;
        } else {
          alert("Houve um erro tente novamente");
        }
      }
    },
    async deleteProduct(item) {
      try {
        const response = confirm(`Confirma a exclusão de ${item.name}?`);
        if (response) {
          const { data } = await axios.delete(
            `https://api-casa-do-pastel.herokuapp.com/products/${item.id}`,
            {
              headers: {
                Authorization: `Bearer ${this.ls_token}`,
              },
            }
          );
          alert("Produto excluído!");
          this.getProducts();
        }
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message);
          return;
        } else if (err.message) {
          alert(`Houve um erro tente novamente.. ${err.message}`);
          return;
        } else {
          alert("Houve um erro tente novamente");
        }
      }
    },
  },
  filters: {
    formatPrice(value) {
      return `R$ ${Number(value).toLocaleString("br", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.space {
  background: transparent;
  width: 100%;
  height: 60px;
}

.table {
  text-align: center;
  width: 100%;
  max-width: 95%;
  margin: 10px auto;
  border-radius: 6px;
  display: block;
  overflow-x: scroll;
}

@media screen and (min-width: 530px) {
  .table {
    display: table;
  }
}

.table::-webkit-scrollbar {
  background: transparent;
  height: 8px;
}

.table::-webkit-scrollbar-track {
  background: transparent;
}

.table::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 8px;
}

.table::-webkit-scrollbar-button {
  background: #d0d0d0;
}

.table::-webkit-scrollbar-track-piece {
  background: #d0d0d0;
}

.edit {
  margin-right: 4px;
}

.new {
  width: 95%;
  margin: 9px auto 0 auto;
  text-align: right;
}

.new-text {
  background: #e64b16;
  padding: 6px;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
}

.new-text i {
  background: #fff;
  color: #f1ac0b;
  border-radius: 100%;
  padding: 2px 5px;
}

.link-new-product {
  color: #fff;
  padding: 4px;
}
</style>