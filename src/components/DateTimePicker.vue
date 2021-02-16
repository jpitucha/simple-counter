<template>
  <v-container>
    <v-btn class="mx-2" small fab dark color="indigo">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="isDatePickerOpen" width="300">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" color="red lighten-2" dark v-bind="attrs" v-on="on"
          >Data</v-btn
        >
      </template>
      <v-date-picker>
        <v-spacer></v-spacer>
        <v-btn>Cancel</v-btn>
        <v-btn>OK</v-btn>
      </v-date-picker>
    </v-dialog>
    <v-dialog v-model="isTimePickerOpen" width="300">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" color="red lighten-2" dark v-bind="attrs" v-on="on"
          >Czas</v-btn
        >
      </template>
      <v-time-picker format="24hr">
        <v-spacer></v-spacer>
        <v-btn>Cancel</v-btn>
        <v-btn>OK</v-btn>
      </v-time-picker>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "DateTimePicker",
  data() {
    return {
      isDatePickerOpen: false,
      isTimePickerOpen: false,
    };
  },
};
</script>
