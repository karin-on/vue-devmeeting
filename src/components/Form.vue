<template>
  <div>

      <form @submit.prevent="onSubmit()">
          <input type="text" id="product-name"
                 name="product"
                 v-model="newProduct.name"
                 v-validate="'required|min:3'">

          <input type="text" id="product-quantity"
                 name="quantity"
                 v-model="newProduct.quantity"
                 v-validate="'required|min_value:1'">

          <button>Add product</button>

          <div v-show="errors.has('product') || errors.has('quantity')">
              {{ errors.first('product') }}
              {{ errors.first('quantity') }}
          </div>
      </form>

  </div>
</template>

<script>
  export default {
      name: 'app',
      data() {
          return {
              newProduct: {
                  name: '',
                  quantity: ''
              }
          }
      },
      methods: {
          onSubmit(){
              this.$validator.validateAll().then(result => {
                  if (!result) {
                      return;
                  }
                  const { name, quantity } = this.newProduct;

                  this.$emit('add-product', { name, quantity });

                  this.newProduct.name = '';
                  this.newProduct.quantity = '';
                  this.$validator.reset();
              });
          }
      }
  }

</script>

