<template>
  <v-container>
    <div class="my-2">
      <v-btn small color="primary" @click="sentPost">Generate</v-btn>
      <v-btn small color="red" class="ml-2" @click="sentGet">Test GET</v-btn>
      
      <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Size"
            outlined
          ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Deviation"
            outlined
          ></v-text-field>
      </v-col>

      <div class="mt-10">
        <v-text-field label="Main input" hide-details="auto" v-model="inputString"></v-text-field>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "GenerateSolutions",
  
  data: () => ({
    exampleData: [1.0, 1.0, 2.0, 3.0, 5.0, 5.0, 7.0, 8.0, 9.0],
    outputData: [],
    inputData: [],
    inputString: "",
  }),
  methods: {
    sentPost() {
      this.convertData()
      axios
        .post("http://localhost:8080/solve", {
          username: "Lenny",
          amountOfGroups: 3,
          size: 3,
          // values: [1.0, 1.0, 2.0, 3.0, 5.0, 5.0, 7.0, 8.0, 9.0],
          values: this.inputData,
        })
        .then((response) => {
          console.log(response.data);
          this.outputData = response.data;
          this.$emit('sentData', response.data)
        });
    },
    sentGet() {
      axios.get("http://localhost:8080/test").then((response) => {
        console.log(response);
      });
    },
    convertData() {
      this.inputData = this.inputString.split(",")
    },
  },
};
</script>
