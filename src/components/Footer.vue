<template>
  <div class="container-fluid wrapper">
    <div class="row">
      <div class="col">
        <div class="address">
          <p>Estamos localizados na Avenida</p>
          <p>Gustavo Rosa, 259 Bairro Centro</p>
          <p>Vazante - MG</p>
        </div>
      </div>
      <div class="col">
        <p class="style-font">Casa do Pastel</p>
        <p class="style-font">&copy; Todos os direitos reservados. - {{getYear()}}</p>
      </div>
      <div class="col">
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
  name: "Footer",
  data() {
    return {
      getYear() {
        return new Date().getFullYear();
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  padding: 20px;
  background-color: #f1ac0b;
  text-align: center;
}

.style-font,
.address {
  font-family: "Amarante", cursive;
  color: #e64b16;
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

.social {
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.social > a {
  width: fit-content;
  height: fit-content;
}
</style>
