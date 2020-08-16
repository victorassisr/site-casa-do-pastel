<template>
  <div class="wrapper">
    <div class="space"></div>
  </div>
</template>

<script>
import { global } from "../mixins/general.mixin";
export default {
  name: "Admin",
  components: {},
  mixins: [global],
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