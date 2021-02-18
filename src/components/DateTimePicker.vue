<template>
  <v-container class="pickers">
    <v-btn class="mx-2" small fab dark color="indigo">
      <v-icon dark @click="onAddCounter">mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="isDatePickerOpen" width="300" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" color="red lighten-2" dark v-bind="attrs" v-on="on"
          >Data</v-btn
        >
      </template>
      <v-date-picker v-model="currentDate" :min="minDate">
        <v-spacer></v-spacer>
        <v-btn @click="onDateCancel">Cancel</v-btn>
        <v-btn @click="onDateOk">OK</v-btn>
      </v-date-picker>
    </v-dialog>
    <v-dialog v-model="isTimePickerOpen" width="300" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" color="red lighten-2" dark v-bind="attrs" v-on="on"
          >Czas</v-btn
        >
      </template>
      <v-time-picker format="24hr" v-model="currentTime">
        <v-spacer></v-spacer>
        <v-btn @click="onTimeCancel">Cancel</v-btn>
        <v-btn @click="onTimeOk">OK</v-btn>
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
      minDate: this.today(),
      currentDate: this.today(),
      currentTime: "00:00",
    };
  },
  methods: {
    onDateCancel: function() {
      this.minDate = this.today();
      this.currentDate = this.today();
      this.isDatePickerOpen = false;
    },
    onDateOk: function() {
      this.isDatePickerOpen = false;
    },
    onTimeCancel: function() {
      this.currentTime = "00:00";
      this.isTimePickerOpen = false;
    },
    onTimeOk: function() {
      this.isTimePickerOpen = false;
    },
    onAddCounter: function() {
      this.$emit('addCounter', this.currentDate, this.currentTime)
    },
    today: function() {
      const now = new Date();
      return now.getFullYear() + '-' + this.preFill(now.getMonth() + 1) + '-' + this.preFill(now.getDate());
    },
    preFill: function(str) {
      if (str.toString().length === 1) return '0' + str.toString();
      return str;
    }
  },
};
</script>

<style scoped>
.pickers {
  display: flex;
  justify-content: stretch;
  width: 550px !important;
}

.pickers button {
  flex-grow: 1;
}

.pickers button:first-child {
  flex-grow: 0;
}
</style>
