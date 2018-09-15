<template>
  <div>

      <h2>My awesome TODO list</h2>
      <ul>
        <!-- 2. Then, we're using built-in v-for directive to iterate over tasks -->
        <li v-for="(p, i) in tasks">
          <span>{{ p.name }}</span>
          <button v-on:click="removeTask(i)">usuń</button>    <!--jako parametr funkcji można przekazać też event-->
        </li>
      </ul>
      <!-- 5. v-if can be helpful with conditional statements -->
      <p v-if="!tasks.length">No tasks!</p>
      <!-- 6. v-on adds an handler and :click is the name of the event, then goes the function to invoke -->
      <input type="text" id="task-name" name="task">
      <button v-on:click="addTask()">Add task</button>        <!--zdarzenia: v-on: LUB @ np. @click.prevent (=preventDefault)-->
      <button @click="removeLast()">Remove last item</button>     <!--przy wywołaniu funkcji możemy pominąć ()-->
    <!--</div>--> 

  </div>
</template>

<script>
  export default {
      name: 'app',
      data() {
          //7/ 1. We can define any JavaScript some array of objects
          return {
            tasks: [{
                id: 0,
                name: 'Coffee'
            }, {
                id: 1,
                name: 'Pizza'
            }]
          }
      },
      // 3. To get some events from user we can define a method in 'methods'
      methods: {
          //3/ 4. The important thing is to use function with execution-based context

          addTask() {
              let taskName = document.querySelector('#task-name');
              this.tasks.push({id: 2, name: taskName.value});
              taskName.value = '';
          },
          removeTask(i) {
              this.tasks.splice(i, 1);
          },
          removeLast() {
              this.tasks.pop();
          }
      }
  }

</script>

