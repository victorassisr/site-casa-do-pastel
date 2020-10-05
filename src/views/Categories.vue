<template>
  <div class="wrapper">
    <div class="space"></div>
    <div>
      <p class="new">
        <span class="new-text">
          <i class="fa fa-plus" aria-hidden="true"></i>
          <router-link class="link-new-category" to="/categories/new"
            >Novo</router-link
          >
        </span>
      </p>
    </div>
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Categoria</th>
          <th>Qtd de Produtos</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cat, index) in categories" :key="cat.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ cat.name }}</td>
          <td>{{ cat.products.length }}</td>
          <td>
            <router-link
              class="btn btn-warning edit"
              :to="`/categories/${cat.id}/edit`"
              >Editar</router-link
            >
            <span class="btn btn-danger" @click="deleteCategory(cat)"
              >Excluir</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { global, mixin } from "../mixins/general.mixin";
import { env } from "../env";

export default {
  name: "Categories",
  components: {},
  mixins: [global, mixin],
  beforeMount() {
    this.getCategories();
  },
  data: function () {
    return {
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      try {
        const { data } = await axios.get(`${env.baseURL}product-categories`);
        this.categories = data;
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
    async deleteCategory(cat) {
      try {
        const response = confirm(`Confirma a exclusão de ${cat.name}?`);
        if (response) {
          const { data } = await axios.delete(
            `${env.baseURL}product-categories/${cat.id}`,
            {
              headers: {
                Authorization: `Bearer ${this.ls_token}`,
              },
            }
          );
          alert("Categoria excluída!");
          this.getCategories();
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

.link-new-category {
  color: #fff;
  padding: 4px;
}
</style>