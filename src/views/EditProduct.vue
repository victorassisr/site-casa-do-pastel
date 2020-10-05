<template>
  <div class="wrapper">
    <div class="space"></div>
    <form @submit.prevent.stop="updateProduct()">
      <label class="title">
        <span id="mark">
          <router-link to="/products" id="nav">produtos</router-link>> </span
        >Editar Produto
      </label>
      <div class="form-group">
        <label>
          Nome
          <span class="required">*</span>
        </label>
        <input
          type="text"
          v-model="product.name"
          class="form-control"
          required
          placeholder="Nome do Produto"
        />
      </div>
      <div class="form-group price">
        <label>
          Valor
          <span class="required">*</span>
        </label>
        <div class="price-content">
          <input
            type="text"
            v-model="reals"
            class="form-control intNumber"
            required
            placeholder="R$ Reais"
            @keyup="validateReals()"
          />
          <span class="separator">,</span>
          <input
            type="text"
            class="form-control floatNumber"
            v-model="cents"
            maxlength="2"
            @keyup="validateCents()"
            required
            placeholder="Centavos"
          />
        </div>
      </div>
      <div class="form-group">
        <label>Ingredientes</label>
        <input
          type="text"
          v-model="product.ingredients"
          class="form-control"
          placeholder="Ingredientes do Produto"
        />
      </div>
      <div class="form-group">
        <label>Posição</label>
        <input
          type="number"
          v-model="product.position"
          class="form-control"
          placeholder="Posição do Produto"
        />
      </div>
      <div class="form-group">
        <label>
          Categoria
          <span class="required">*</span>
        </label>
        <select class="form-control" v-model="categoryId">
          <option disabled value>Selecione...</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">
            {{ cat.name }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-warning">Salvar</button>
    </form>
  </div>
</template>

<script>
import { mixin, global } from "../mixins/general.mixin";
import axios from "axios";
import { env } from "../env";

export default {
  name: "CreateProduct",
  components: {},
  beforeMount() {
    this.getCategories();
    this.getProduct();
  },
  mixins: [global, mixin],
  data: function () {
    return {
      product: {},
      categories: [],
      categoryId: "",
      reals: 0,
      cents: 0,
    };
  },
  methods: {
    async getProduct() {
      try {
        const { data } = await axios.get(
          `${env.baseURL}products/${this.$route.params.id}`
        );
        if (data) {
          const splited = data.price.split(".");
          this.reals = splited[0];
          this.cents = splited[1];
          this.categoryId = data.category.id;
        }
        this.product = data;
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
    updateProduct: async function () {
      try {
        this.product.price = Number(`${this.reals}.${this.cents}`).toFixed(2);
        if (!this.categoryId) {
          if (this.product.categoryId) {
            delete this.product.categoryId;
          }
        } else {
          this.product.categoryId = this.categoryId;
        }
        const { data } = await axios.put(
          `${env.baseURL}products/${this.product.id}`,
          { ...this.product },
          {
            headers: {
              Authorization: `Bearer ${this.ls_token}`,
            },
          }
        );
        this.redirect("/products");
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
    async getCategories() {
      try {
        const { data } = await axios.get(`${env.baseURL}product-categories`);

        // this.categoryId = data.length > 0 ? data[0].id : 0;
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
    validateReals() {
      const converted = Number(this.reals);
      if (Number.isNaN(converted)) {
        this.reals = 0;
      }
    },
    validateCents() {
      const converted = Number(this.cents);
      if (Number.isNaN(converted)) {
        this.cents = 0;
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

.price-content {
  max-width: 400px;
  margin: 0 !important;
  display: flex;
  justify-content: flex-start;
}

.intNumber {
  max-width: 100px;
}

.floatNumber {
  max-width: 60px;
}

.separator {
  font-size: 200%;
}

form {
  width: 100%;
  max-width: 95%;
  margin: 10px auto;
  border-radius: 6px;
  color: #fff;
  background: #333;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 150%;
  color: #fff;
}

.form-group {
  width: 95%;
  margin: 10px auto;
}

button {
  align-self: center;
}

#mark {
  font-size: 60%;
  position: relative;
  top: -4px;
}

#nav {
  color: #fff;
  padding-right: 4px;
  text-decoration: underline;
}

.required {
  color: #f00;
}
</style>