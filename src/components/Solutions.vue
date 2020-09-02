<template>
  <v-container fluid>
    <div v-if="solutions.length">
      <!-- <v-row v-for="solution in solutions" :key="solution.id">
        <v-col v-for="sol in solution" :key="sol.id">{{sol}}</v-col>
      </v-row>-->

      <v-data-table :headers="headers" :items="items" class="elevation-1"></v-data-table>
    </div>
    <div v-else>The Array is Empty</div>
  </v-container>
</template>
      
<script>
export default {
  name: "Solutions",
  props: ["solutions"],
  data: () => ({
    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "name",
      },
    ],
    id: 0,
    items: [],
    baseText: "Group ",
    baseValue: "value",
  }),

  created() {},
  methods: {
    initHeaders() {
      this.solutions.forEach((solution) => {
        // this.headers = [
        //   {
        //     text: "id",
        //     align: "start",
        //     value: "name",
        //   },
        // ],
        this.headers = []
        this.id = 0;
        this.items = [];
        solution.forEach(() => {
          let header = {};
          header.text = this.baseText + (this.id + 1);
          header.value = this.baseValue + this.id;
          header.id = this.id;
          this.headers.push(header);
          this.id++;
        });
      });
    },
    initialize() {
      this.solutions.forEach((solution) => {
        let item = {}
        this.headers.forEach((header) => {
          item[header.value] = solution[header.id];
        });
        this.items.push(item);
      });
    },
  },
  watch: {
    solutions() {
      this.initHeaders();
      this.initialize();
    },
  },
};
</script>
      
<style>
</style>