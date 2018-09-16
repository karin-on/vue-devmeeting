<template>
  <div id="app">

    <ProductList :products="products"/>
    <Form @add-product="onSubmit" />

  </div>
</template>

<script>
  import ProductList from './components/ProductList.vue'
  import Form from './components/Form.vue'
  // import uuid from 'uuid/v4';


  export default {
    name: 'app',
    components: {
        ProductList,
        Form
    },
      data() {
        return {
            products: []
        }
      },
      methods: {
          onSubmit(newProduct) {
              // newProduct.id = uuid();
              this.products.push(newProduct);
          },
      }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
