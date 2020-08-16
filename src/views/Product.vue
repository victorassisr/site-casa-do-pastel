<template>
  <div class="wrapper">
    <div class="space"></div>
    <p>Produtos</p>
  </div>
</template>

<script>
import { global, mixin } from "../mixins/general.mixin";
export default {
  name: "Product",
  components: {},
  mixins: [global, mixin],
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
</style>