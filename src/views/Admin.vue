<template>
  <div class="wrapper">
    <div class="space"></div>
    <h3>Bem vindo, {{userName}}!</h3>
  </div>
</template>

<script>
import { global, mixin } from "../mixins/general.mixin";
export default {
  name: "Admin",
  components: {},
  data: function () {
    return {
      userName: "",
    };
  },
  mixins: [global, mixin],
  mounted() {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : { person: { name: "Usuário" } };
    this.userName = user.person.name;
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.space {
  background: transparent;
  width: 100%;
  height: 60px;
}

h3 {
  display: flex;
}
</style>