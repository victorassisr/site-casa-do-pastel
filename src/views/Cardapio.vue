<template>
  <div class="wrapper">
    <div class="space"></div>
    <div class="table-responsive" v-for="category in categories" :key="category.id">
      <p class="category">
        <span>{{category.name}}</span>
      </p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Produto</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody v-for="(product, index) in category.products" :key="product.id">
          <tr>
            <th scope="row">{{index+1}}</th>
            <td class="spotlight">{{product.name}}</td>
            <td class="spotlight">{{product.price | formatPrice}}</td>
          </tr>
          <tr v-if="product.ingredients">
            <td class="ingredients" colspan="1">Ingredientes:</td>
            <td class="ingredients" colspan="2">{{product.ingredients}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cardapio",
  components: {},
  data: () => {
    return {
      categories: [
        {
          name: "Salgados",
          products: [
            {
              name: "Pastel de carne",
              id: 1,
              price: "3",
              ingredients: "Carne de boi, Queijo",
            },
            {
              name: "Pastel de Queijo",
              id: 2,
              price: "3",
              ingredients: "Queijo",
            },
          ],
        },
        {
          name: "Bebidas",
          products: [
            {
              name: "Coca Cola 2L",
              id: 1,
              price: "8.5",
            },
          ],
        },
      ],
    };
  },
  filters: {
    formatPrice: (value) => {
      return `R$ ${Number(value).toLocaleString("br", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  background: url("../assets/bg_wood.jpg");
}

.space {
  height: 80px;
}

.table {
  font-family: "Amarante", "cursive";
  border-radius: 10px;
  background: url("../assets/bg_menu.jpg");
  text-align: center;
}

.table > tbody {
  background: transparent;
}

.table-responsive {
  margin: 0 auto;
  width: 95%;
}

.ingredients {
  text-align: center;
}

.category {
  text-align: center;
  padding: 0;
  margin: 0;
}

.category span {
  display: block;
  width: fit-content;
  background: #f1ac0b;
  border-radius: 10px;
  padding: 4px 20px;
  margin: 6px auto;
  color: #dc143c;
  font-family: "Amarante", "cursive";
  font-size: 200%;
  box-shadow: 0 4px 10px #000;
}

.spotlight {
  color: #dc143c;
}
</style>