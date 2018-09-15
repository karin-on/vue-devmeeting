<template>
    <div>

        <li v-for="(p, i) in products">
          <span>{{ p.name }}</span>
          <span>{{ p.quantity }}</span>
          <!--<button v-on:click="removeTask(i)">usuń</button>-->    <!--jako parametr funkcji można przekazać też event-->
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

