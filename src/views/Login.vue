<template>
  <div class="wrapper">
    <div class="space"></div>
    <form @submit.prevent.stop="doLogin()">
      <div class="form-group">
        <label for="exampleInputEmail1">Endereço de email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Seu email"
          required
          v-model="email"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >Nunca vamos compartilhar seu email, com ninguém.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Senha</label>
        <input
          type="password"
          class="form-control"
          required
          minlength="8"
          id="exampleInputPassword1"
          placeholder="Senha"
          v-model="password"
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" v-model="remember" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Mantenha logado</label>
      </div>
      <button type="submit" class="btn btn-primary btn-login">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mixin, global } from "../mixins/general.mixin";

export default {
  name: "Login",
  components: {},
  mixins: [global, mixin],
  data: () => {
    return {
      email: "",
      password: "",
      remember: false,
    };
  },
  mounted() {},
  methods: {
    async doLogin() {
      try {
        if (this.password && this.email) {
          if (this.password.length < 8) {
            alert("A senha deve conter no mínimo 8 caracteres");
            return;
          }
          const resp = await axios.post(`${this.baseUrl}/auth/signin`, {
            email: this.email,
            password: this.password,
          });
          const { token, refreshToken, ...user } = resp.data;
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("logged", true);
          this.redirect("/admin");
        } else {
          alert("Email ou senha inválidos");
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
  justify-content: center;
  align-items: center;
}

.space {
  background: transparent;
  width: 100%;
  height: 60px;
}

form {
  max-width: 800px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.btn-login {
  display: flex;
  align-self: center;
  background: #333;
}
</style>