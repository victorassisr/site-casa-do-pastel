<template>
  <div class="container-fluid home">
    <div class="banner">
      <div class="banner-text">
        <h2 class="style-font">Faça já o seu pedido!</h2>
        <p>Trabalhamos com salgados diversos. Pastéis de carne, coxinhas, espetinhos...</p>
        <p>Aquele refri geladinho!</p>
        <p>
          Venha conferir! Se já conhece, peça o salgado mais
          <span class="spotlight">GOSTOSO</span> e
          <span class="spotlight">BARATO</span> da
        </p>
        <p>
          <span class="spotlight">CIDADE!</span>
        </p>
        <p>Faça seu pedido através dos nossos meios de comunicação:</p>
        <div class="social">
          <a
            href="https://www.facebook.com/Casa-do-Pastel-101273161540862"
            target="_blank"
            title="Facebook"
          >
            <span class="icon icon-facebook"></span>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+5534992112128"
            target="_blank"
            title="WhatsApp"
          >
            <span class="icon icon-whatsapp"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.home {
  padding: 0;
}

.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/pastel-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.banner > img {
  flex-grow: 1;
}

.icon {
  display: inline-block;
  width: 55px;
  height: 55px;
  margin: 0 10px 0 10px;
  border-radius: 100%;
}

.icon:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.icon-facebook {
  background: url("../assets/social.jpg") -18px -11px;
  background-size: 220px;
}

.icon-whatsapp {
  background: url("../assets/social.jpg") -82px -154px;
  background-size: 220px;
}

.style-font {
  font-family: "Amarante", cursive;
  color: rgb(255, 255, 255);
}

.banner-text {
  padding: 20px;
  width: 100%;
  text-align: center;
  background: rgba(3, 3, 3, 0.6);
  font-family: "Amarante", cursive;
  color: rgb(255, 255, 255);
}

.banner-text > p {
  margin: 0;
  color: rgb(255, 255, 255);
}

.spotlight {
  font-size: 120%;
  color: crimson;
  font-weight: bolder;
}

.social {
  margin-top: 10px;
}
</style>