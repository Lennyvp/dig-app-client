 <template>
  <v-container fluid>
    <v-card elevation="5" class="mx-auto">
      <v-card-title>Inputs</v-card-title>
      <v-row justify="center" class="mx-auto">
        <v-col cols="4" md="3" ml="3" lg="1">
          <v-text-field label="Size" outlined v-model="size" clearable hint="Size of divided group"></v-text-field>
        </v-col>

        <v-col cols="4" md="3" ml="3" lg="1">
          <v-text-field label="Groups" outlined v-model="groups" clearable hint="Amount of groups"></v-text-field>
        </v-col>

        <v-col cols="4" md="4" ml="3" lg="1">
          <v-text-field
            label="Deviation"
            outlined
            v-model="deviation"
            clearable
            hint="Deviation from the mean value of the set of numbers"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>

    <InputValues class="my-auto" :inputValues="inputValues" v-on:updateValues="updateValues(event)" />

    <v-row justify="center">
      <div>
        <v-btn color="primary" @click="sentPost">Generate</v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import InputValues from "@/components/InputValues.vue";
export default {
  name: "GenerateSolutions",

  data: () => ({
    // exampleData: [1.0, 1.0, 2.0, 3.0, 5.0, 5.0, 7.0, 8.0, 9.0],
    groups: null,
    size: null,
    deviation: 0.15,
    inputValue: null,
    intputData: [],
    inputValues: [],
  }),
  components: {
    InputValues,
  },
  methods: {
    sentPost() {
      this.intputData = this.inputValues.map((val) => (val = val.value));
      console.log(this.intputData);
      axios
        .post("https://dig-app-server.herokuapp.com/solve", {
          username: "Lenny",
          groups: this.groups,
          size: this.size,
          // values: [1.0, 1.0, 2.0, 3.0, 5.0, 5.0, 7.0, 8.0, 9.0],
          values: this.intputData,
          deviation: this.deviation,
        })
        .then((response) => {
          console.log(response.data);
          this.$emit("sentData", response.data);
        });
    },
    updateValues(updatedValues) {
      this.inputValues = updatedValues;
    },
  },
};
</script>
