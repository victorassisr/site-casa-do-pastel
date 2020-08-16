<template>
  <div class="wrapper">
    <div class="space"></div>
    <h1 class="center">Opps!</h1>
    <h2 class="center">Não encontramos pelo que você buscava. =/</h2>
    <h3 class="center">Você será redirecionado para a página principal em 10 segundos...</h3>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
  mounted: () => {
    setTimeout(() => {
      location.href = "http://localhost:8080";
    }, 10000);
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

.center {
  text-align: center;
}
</style>