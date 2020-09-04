<template>
  <v-app-bar app color="green darken-3" dense dark>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <v-toolbar-title style="cursor: pointer" @click="goHome">DIG App</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn class="red text--white mr-2" route :to="{name: 'Registration'}">Register</v-btn>
    <v-btn class="black text--white mr-2" route :to="{name: 'Login'}">Login</v-btn>
    <v-btn class="black text--white" route :to="{name: 'Logs'}">Logs</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {};
  },
  methods: {
    goHome(){
        this.$router.push('/').catch(()=>{})
    }
  }
};
</script>
