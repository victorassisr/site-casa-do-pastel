<template>
  <div id="app" class="container-fluid">
    <nav id="navigation" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">Casa do Pastel</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/local">Localização</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/menu">Cardápio</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style>
#app {
  padding: 0;
}

#navigation {
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.65) !important;
  padding: 10px;
  z-index: 10;
}

.nav-link,
.navbar-brand {
  color: #f1ac0b !important;
  font-family: "Amarante", cursive;
}

.router-link-exact-active {
  color: #e64b16 !important;
}
</style>