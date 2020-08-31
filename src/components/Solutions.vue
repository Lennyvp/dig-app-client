<template>
  <v-container fluid>
    <div v-if="solutions.length">
      <v-row v-for="solution in solutions" :key="solution.id">
        <!-- {{ solution }} -->
        <v-col v-for="sol in solution" :key="sol.id">{{sol}}</v-col>
      </v-row>

      <!-- :headers="headers" -->
      <!-- v-slot:header.name="{ header }" -->
      <!-- <v-data-table :headers="headers" :items="items" class="elevation-1"></v-data-table> -->
    </div>
    <div v-else>The Array is Empty</div>
  </v-container>
</template>
      
<script>
export default {
  name: "Solutions",
  props: ["solutions", "groups"],
  data: () => ({
    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: 'Values', value: 'values' },
    ],
    items: [],
    values: [],
    id: 0,
    id2: 0,
  }),
  // created: {
  //   created () {
  //     this.initialize()
  //   },
  computed: {
    // initHeaders() {
    //   this.solutions.forEach(() => {
    //     // this.headers.push({ text: "Values", value: {id: this.id, values: this.values} });
    //     this.headers.push({ text: "Values", value: "values"});
    //     this.id2++
    //   });
    //   return this.headers;
    // },
    // initialize() {
    //   this.solutions.forEach((sol) => {
    //     console.log("SOL = " + sol)
    //     this.items.push({name: this.id, values: sol});
    //     sol.forEach((s) => {
    //       console.log("s = " + s)
    //     });
    //    this.id++

    //   });

    //   return this.items;
    // },
  },
};
</script>
      
<style>
</style>

// :headers="headers"