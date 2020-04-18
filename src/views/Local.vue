<template>
  <div class="container-fluid wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2127.769781085292!2d-46.90589494500638!3d-17.990205162723534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a8d0b50336e29f%3A0x88dce1e0ce6439a5!2sAv.%20Gustavo%20Rosa%2C%20259%20-%20Centro%2C%20Vazante%20-%20MG%2C%2038780-000!5e1!3m2!1spt-BR!2sbr!4v1587171263497!5m2!1spt-BR!2sbr"
      width="600"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Local",
  components: {}
};
</script>

<style scoped>
.container-fluid {
  padding: 0;
}

iframe {
  display: flex;
  height: 80.37vh;
  width: 100%;
  padding-top: 60px;
}
</style>