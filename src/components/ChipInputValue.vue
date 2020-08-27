<template>
  <v-btn
      v-if="chip"
      close
      dark
      class="ml-2 mt-2"
      @click="removeChip"
    >
      {{ inputValue }}
      <v-icon right>mdi-close-circle-outline</v-icon>
    </v-btn>
</template>

<script>
export default {
    name: "ChipInputValue",
    props: ['inputValue'],
    data: () => ({
        chip: true,
    }),
    methods: {
      removeChip() {
        // this.$emit("removeValue", this.inputValue)
        this.chip = false
      }
    }
}
</script>

<style>

</style>