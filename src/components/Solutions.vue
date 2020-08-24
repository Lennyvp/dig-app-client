<template>
  <v-container fluid>
            <v-row v-for="solution in solutions" :key="solution.id">
              <!-- {{ solution }} -->
              <v-col v-for="sol in solution" :key="sol.id">
                {{sol}}
              </v-col>
            </v-row>
          </v-container>
</template>
      
<script>
export default {
  name: "Solutions",
  props: ['solutions'],     
};
</script>
      
<style>
</style>

// :headers="headers"