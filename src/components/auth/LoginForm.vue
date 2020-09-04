<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <v-icon>mdi-account</v-icon>
            <span>Login</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form @submit.prevent>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              v-model="login"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="signIn">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      login: null,
      password: null
    };
  },
  methods: {
    signIn() {
      const username = this.login
      const password = this.password
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
      axios
        .post("http://localhost:8081/login",{
          headers: {
            'Authorization': `Basic ${token}`
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>