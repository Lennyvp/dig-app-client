 <template>
  <v-container class="my-2">
    <v-row>
      <v-col cols="5" sm="6" md="1">
        <v-text-field label="Size" outlined v-model="size"></v-text-field>
      </v-col>

      <v-col cols="5" sm="6" md="1">
        <v-text-field label="Groups" outlined v-model="groups"></v-text-field>
      </v-col>

      <v-col cols="5" sm="6" md="1">
        <v-text-field label="Deviation" outlined v-model="deviation"></v-text-field>
    </v-col>
    </v-row>

    <!-- <div>{{ inputString }}</div>

    <div class="mt-10">
      <v-text-field label="Main input" hide-details="auto" v-model="inputString"></v-text-field>
    </div> -->

    <InputValues :inputValues="inputValues" v-on:updateValues="updateValues(event)"/>

    <div class="mt-10">
      <v-btn small color="primary" @click="sentPost">Generate</v-btn>
      <v-btn small color="red" class="ml-2" @click="sentGet">Test GET</v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import InputValues from '@/components/InputValues.vue'
export default {
  name: "GenerateSolutions",

  data: () => ({
    // exampleData: [1.0, 1.0, 2.0, 3.0, 5.0, 5.0, 7.0, 8.0, 9.0],
    // outputData: [],
    inputData: [],
    inputString: "",
    groups: 0,
    size: 0,
    deviation: 0.15,
    inputValue: 0,
    inputValues: [],
  }),
  components: {
    InputValues
  },
  methods: {
    sentPost() {
      this.convertData();
      axios
        .post("https://dig-app-server.herokuapp.com/solve", {
          username: "Lenny",
          groups: this.groups,
          size: this.size,
          // values: [1.0, 1.0, 2.0, 3.0, 5.0, 5.0, 7.0, 8.0, 9.0],
          values: this.inputValues,
          deviation: this.deviation
        })
        .then((response) => {
          console.log(response.data);
          // this.outputData = response.data;
          this.$emit("sentData", response.data);
        });
    },
    sentGet() {
      axios.get("https://dig-app-server.herokuapp.com/test").then((response) => {
        console.log(response);
      });
    },
    convertData() {
      this.inputData = this.inputString.split(",");
    },
    updateValues(updatedValues) {
      this.inputValues = updatedValues
    }
  },
};
</script>
