<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Registration form</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <v-icon>mdi-account-plus</v-icon>
            <span>Register</span>
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
              label="Email"
              name="email"
              prepend-icon="mdi-email"
              type="email"
              v-model="email"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
            ></v-text-field>

            <v-text-field
              id="retypePassword"
              label="Retype Password"
              name="retypePassword"
              prepend-icon="mdi-lock"
              type="password"
              v-model="retypePassword"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="register">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      login: null,
      email: null,
      password: null,
      retypePassword: null
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:8081/register", {
          login: this.login,
          email: this.email,
          password: this.password
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