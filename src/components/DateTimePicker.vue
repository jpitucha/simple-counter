<template>
  <v-container class="pickers">
    <v-btn class="mx-2" small fab dark color="accent">
      <v-icon dark @click="onAddCounter">mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="isDatePickerOpen" width="300" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" color="secondary" dark v-bind="attrs" v-on="on"
          >{{ $t("date") }}</v-btn
        >
      </template>
      <v-date-picker v-model="currentDate" :min="minDate">
        <v-spacer></v-spacer>
        <v-btn @click="onDateCancel">{{ $t("cancel") }}</v-btn>
        <v-btn @click="onDateOk">{{ $t("ok") }}</v-btn>
      </v-date-picker>
    </v-dialog>
    <v-dialog v-model="isTimePickerOpen" width="300" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" color="secondary" dark v-bind="attrs" v-on="on"
          >{{ $t("time") }}</v-btn
        >
      </template>
      <v-time-picker format="24hr" v-model="currentTime" :allowed-hours="allowedHours" :allowed-minutes="allowedMinutes">
        <v-spacer></v-spacer>
        <v-btn @click="onTimeCancel">{{ $t("cancel") }}</v-btn>
        <v-btn @click="onTimeOk">{{ $t("ok") }}</v-btn>
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
    allowedHours: function(hour) {
      if (this.currentDate === this.today()) return hour >= new Date().getHours()
      return true
    },
    allowedMinutes: function(minutes) {
      const isToday = this.currentDate === this.today()
      const countdownFinalHour = this.currentTime.split(':')[0]
      const currentHour = new Date().getHours()
      const isCloserThanHour = countdownFinalHour === currentHour
      if (isToday && isCloserThanHour) return minutes >= new Date().getMinutes()
      return true
    },
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
      const year = now.getFullYear()
      const month = this.normalizeNumberLength(now.getMonth() + 1)
      const day = this.normalizeNumberLength(now.getDate())
      return  `${year}-${month}-${day}`;
    },
    normalizeNumberLength: function(number) {
      if (`${number}`.length === 1) return `0${number}`
      return number;
    }
  },
};
</script>

<style scoped>
.pickers {
  display: flex;
  justify-content: stretch;
  width: 550px;
}
@media (max-width: 768px) {
  .pickers {
    width: 100%;
  }
}

.pickers button {
  flex-grow: 1;
}

.pickers button:first-child {
  flex-grow: 0;
}
</style>
