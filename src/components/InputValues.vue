<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="5" md="1" ml="1" lg="1">
        <v-text-field label="Value" outlined v-model="inputValue" v-on:keyup.enter="addValue"></v-text-field>
      </v-col>
      <v-col cols="5" md="1" ml="1" lg="1">
        <v-text-field label="Search" outlined clearable></v-text-field>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col md="4" lg="10">
        <v-card v-if="inputValues.length">
          <v-chip-group column active-class="primary--text">
            <ChipInputValue
              v-for="value in inputValues"
              :key="value.id"
              :inputValue="value"
              v-on:removeValue="removeValue(value)"
            />
          </v-chip-group>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row justify="center"> -->
      <!-- <v-btn small color="red" class="ml-2" @click="addValue">Add Value</v-btn>
      <v-btn small color="red" class="ml-2" @click="resetValues">RESET</v-btn> -->
    <!-- </v-row> -->
  </v-container>
</template>

<script>
import ChipInputValue from "@/components/ChipInputValue.vue";
export default {
  name: "InputValues",
  props: ["inputValues"],
  data: () => ({
    id: 0,
    inputValue: null,
    exampleData: [
      {
        id: 0,
        value: 1.0,
      },
      {
        id: 1,
        value: 1.0,
      },
      {
        id: 2,
        value: 2.0,
      },
      {
        id: 3,
        value: 3.0,
      },
      {
        id: 4,
        value: 5.0,
      },
      {
        id: 5,
        value: 5.0,
      },
      {
        id: 6,
        value: 7.0,
      },
      {
        id: 7,
        value: 8.0,
      },
      {
        id: 8,
        value: 9.0,
      },
    ],
  }),
  components: {
    ChipInputValue,
  },
  methods: {
    updateValues() {
      this.$emit("updateValues", this.inputValues);
    },
    addValue() {
      this.inputValues.push({
        id: this.id,
        value: this.inputValue,
      });
      this.id++;
    },
    removeValue(inputValue) {
      this.inputValues.splice(this.inputValues.indexOf(inputValue), 1);
    },
    resetValues() {
      this.inputValues = [];
      this.$emit("updateValues", this.inputValues);
    }
  },
};
</script>