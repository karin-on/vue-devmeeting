<template>
    <div>

        <li v-for="(p) in products">
          <span>{{ p.name }}</span>
          <span>{{ p.quantity }}</span>
        </li>

    </div>
</template>

<script>

  export default {
      name: 'app',
     props: {
          products: {
              type: Array,
          }
     }
  }

</script>

