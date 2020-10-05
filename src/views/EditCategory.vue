<template>
  <div class="wrapper">
    <div class="space"></div>
    <form @submit.prevent.stop="saveChangesCategory()">
      <label class="title">
        <span id="mark">
          <router-link to="/categories" id="nav">categorias</router-link
          >> </span
        >Editar Categoria
      </label>
      <div class="form-group">
        <label>Nome</label>
        <input
          type="text"
          v-model="category.name"
          class="form-control"
          placeholder="Nome da Categoria"
        />
      </div>
      <button type="submit" class="btn btn-warning">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { global, mixin } from "../mixins/general.mixin";
import { env } from "../env";

export default {
  name: "EditCategory",
  components: {},
  mixins: [global, mixin],
  beforeMount() {
    this.getCategory(this.$route.params.id);
  },
  data: function () {
    return {
      category: {},
    };
  },
  methods: {
    async getCategory(id) {
      try {
        const { data } = await axios.get(
          `${env.baseURL}product-categories/${id}`
        );
        this.category = data;
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
    async saveChangesCategory() {
      try {
        const response = confirm("Deseja realmente alterar esta categoria?");
        if (response) {
          const { data } = await axios.put(
            `${env.baseURL}product-categories/${this.category.id}`,
            { ...this.category },
            {
              headers: {
                Authorization: `Bearer ${this.ls_token}`,
              },
            }
          );
          this.redirect("/categories");
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