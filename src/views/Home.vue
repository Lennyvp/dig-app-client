<template>
  <div class="home">
    <GenerateSolutions v-on:sentData="updateData($event)"/>
    <Solutions :solutions="solutions"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GenerateSolutions from '@/components/GenerateSolutions.vue'
import Solutions from '@/components/Solutions.vue'

export default {
  name: 'Home',
  data: () => ({
    solutions: []
  }),
  components: {
    GenerateSolutions,
    Solutions,
  },
  methods: {
    updateData(updatedData) {
      this.solutions = updatedData
    }
  }
}
</script>
