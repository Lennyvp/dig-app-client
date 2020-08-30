<template>
  <v-container>
    <v-row>
    <v-chip class="ml-2" color="primary">{{ inputValues.length }}</v-chip>
      <v-col md="4" lg="10">
        <!-- <v-sheet elevation="10" class="pa-4"> -->
        <v-col cols="5" sm="6" md="1">
          <v-text-field label="Value" outlined v-model="inputValue" v-on:keyup.enter="addValue"></v-text-field>
        </v-col>

        <v-chip-group column active-class="primary--text">
          <ChipInputValue
            v-for="(inputValue, index) in inputValues"
            :key="index"
            :inputValue="inputValue"
            :index="index"
            v-on:removeValue="removeValue(index)"
          />
        </v-chip-group>
        <!-- </v-sheet> -->
      </v-col>
    </v-row>

    <v-btn small color="red" class="ml-2" @click="addValue">Add Value</v-btn>
    <v-btn small color="red" class="ml-2" @click="resetValues">RESET</v-btn>
  </v-container>
</template>

<script>
import ChipInputValue from "@/components/ChipInputValue.vue"
export default {
  name: "InputValues",
  props: ["inputValues"],
  data: () => ({
    inputValue: null,
  }),
  components: {
    ChipInputValue,
  },
  methods: {
    updateValues() {
         this.$emit("updateValues", this.inputValues)
    },
    addNewChip() {},
    addValue() {
      this.inputValues.push(this.inputValue);
    },
    removeValue(index) {
      console.log(index)
        this.inputValues.splice(index - 1, 1)
        console.log(this.inputValues)
    },
    resetValues() {
        this.inputValues = []
        this.$emit("updateValues", this.inputValues)
    },
  },
};
</script>