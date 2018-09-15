<template>
  <div>

      <h2>My awesome product list</h2>
      <ul>

          <ProductItem :products="products"/>

      </ul>
      <p v-if="!products.length">No products!</p>


  </div>
</template>

<script>
    import ProductItem from './ProductItem.vue';

    export default {
      name: 'app',
        components: {
            ProductItem
        },
        props: {
            products: {
                type: Array,
            }
        }
    }

</script>

