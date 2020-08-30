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
            v-for="value in inputValues"
            :key="value.id"
            :inputValue="value"
            v-on:removeValue="removeValue(value)"
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
    id: null,
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
      this.inputValues.push({
        id: this.id,
        value: this.inputValue
        });
        this.id++;
    },
    removeValue(inputValue) {
        this.inputValues.splice(this.inputValues.indexOf(inputValue), 1)
    },
    resetValues() {
        this.inputValues = []
        this.$emit("updateValues", this.inputValues)
    },
  },
};
</script>