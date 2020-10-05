<template>
  <div class="wrapper">
    <div class="space"></div>
    <form @submit.prevent.stop="saveCategory()">
      <label class="title">
        <span id="mark">
          <router-link to="/categories" id="nav">categorias</router-link
          >> </span
        >Criar Categoria
      </label>
      <div class="form-group">
        <label>Nome</label>
        <input
          type="text"
          v-model="category.name"
          class="form-control"
          required
          placeholder="Nome da Categoria"
        />
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
  name: "CreateCategory",
  components: {},
  mixins: [global, mixin],
  data: function () {
    return {
      category: {},
    };
  },
  methods: {
    saveCategory: async function () {
      try {
        const { data } = await axios.post(
          `${env.baseURL}product-categories`,
          { ...this.category },
          {
            headers: {
              Authorization: `Bearer ${this.ls_token}`,
            },
          }
        );
        this.redirect("/categories");
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
</style>