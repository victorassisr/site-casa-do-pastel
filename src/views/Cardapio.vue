<template>
  <div>
    <div class="container-fluid wrapper">
      <div class="banner">
        <div class="menu container-fluid">
          <div class="salgados">
            <p class="menu-title">Salgados</p>
            <div class="item">
              <p class="produto">
                1-
                <span class="spotlight">Pastel Carne</span>
                <span class="spotlight-dots">......................</span>
                <span class="spotlight">R$ 3,00</span>
              </p>
              <p class="ingredientes">Carne moída, Azeitonas, Tomate e Queijo</p>
            </div>
            <div class="item">
              <p class="produto">
                2-
                <span class="spotlight">Pastel Frango</span>
                <span class="spotlight-dots">.....................</span>
                <span class="spotlight">R$ 3,00</span>
              </p>
              <p class="ingredientes">Frango, Catupiry, Bacon, Milho</p>
            </div>
            <div class="item">
              <p class="produto">
                3-
                <span class="spotlight">Pastel Frango</span>
                <span class="spotlight-dots">.....................</span>
                <span class="spotlight">R$ 3,00</span>
              </p>
              <p class="ingredientes">Frango com Creme de Milho</p>
            </div>
            <div class="item">
              <p class="produto">
                4-
                <span class="spotlight">Pastel Queijo e Presunto</span>
                <span class="spotlight-dots">...</span>
                <span class="spotlight">R$ 3,00</span>
              </p>
              <p class="ingredientes">Queijo e Presunto</p>
            </div>
            <div class="item">
              <p class="produto">
                5-
                <span class="spotlight">Coxinha</span>
                <span class="spotlight-dots">..............................</span>
                <span class="spotlight">R$ 3,00</span>
              </p>
              <p class="ingredientes">Frango com Catupiry</p>
            </div>
            <div class="item">
              <p class="produto">
                6-
                <span class="spotlight">Enroladinho</span>
                <span class="spotlight-dots">........................</span>
                <span class="spotlight">R$ 3,00</span>
              </p>
              <p class="ingredientes">Queijo e Salsicha</p>
            </div>
            <div class="item">
              <p class="produto">
                7-
                <span class="spotlight">Espetinho</span>
                <span class="spotlight-dots">...........................</span>
                <span class="spotlight">R$ 3,00</span>
              </p>
              <p class="ingredientes">Frango com Mussarela</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid wrapper">
      <div class="banner">
        <div class="menu container-fluid">
          <div class="salgados">
            <p class="menu-title">Bebidas</p>
            <div class="item">
              <p class="produto">
                1-
                <span class="spotlight">Coca 600ML</span>
                <span class="spotlight-dots">......................</span>
                <span class="spotlight">R$ 4,50</span>
              </p>
            </div>
            <div class="item">
              <p class="produto">
                2-
                <span class="spotlight">Coca 1L</span>
                <span class="spotlight-dots">............................</span>
                <span class="spotlight">R$ 5,00</span>
              </p>
            </div>
            <div class="item">
              <p class="produto">
                3-
                <span class="spotlight">Coca 2L</span>
                <span class="spotlight-dots">...........................</span>
                <span class="spotlight">R$ 8,00</span>
              </p>
            </div>
            <div class="item">
              <p class="produto">
                4-
                <span class="spotlight">Pichula</span>
                <span class="spotlight-dots">............................</span>
                <span class="spotlight">R$ 2,50</span>
              </p>
              <p class="ingredientes">Sabores Uva e Guaraná</p>
            </div>
            <div class="item">
              <p class="produto">
                5-
                <span class="spotlight">Fanta Lata 310ML</span>
                <span class="spotlight-dots">...............</span>
                <span class="spotlight">R$ 3,00</span>
              </p>
            </div>
            <div class="item">
              <p class="produto">
                6-
                <span class="spotlight">Água</span>
                <span class="spotlight-dots">...............................</span>
                <span class="spotlight">R$ 2,50</span>
              </p>
            </div>
            <div class="item">
              <p class="produto">
                7-
                <span class="spotlight">Kuat</span>
                <span class="spotlight-dots">................................</span>
                <span class="spotlight">R$ 2,50</span>
              </p>
            </div>
            <div class="item">
              <p class="produto">
                8-
                <span class="spotlight">Skol Lata</span>
                <span class="spotlight-dots">..........................</span>
                <span class="spotlight">R$ 3,00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cardapio",
  components: {}
};
</script>

<style scoped>
.wrapper {
  padding: 0;
}
.banner {
  background: url("../assets/bg_wood.jpg");
  display: flex;
  min-height: 80.37vh;
  padding-top: 60px;
  justify-content: center;
}

.menu {
  background: url("../assets/bg_menu.jpg");
  width: 70%;
  padding: 7px;
  margin: 50px auto;
  box-shadow: 0 -6px 20px 6px #000;
  border-radius: 6px;
}

.menu-title {
  background-color: #f1ac0b;
  width: fit-content;
  margin: 7px auto 20px auto;
  padding: 7px 15px;
  border-radius: 50%;
  color: crimson;
  font-family: "Amarante", cursive;
  font-size: 200%;
  box-shadow: 0 0 10px #333;
}

.item {
  text-align: center;
  font-family: "Amarante", cursive;
}

.spotlight {
  color: crimson;
}

.spotlight-dots {
  color: #333;
}

.ingredientes {
  color: #333;
  font-weight: bolder;
}
</style>