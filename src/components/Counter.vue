<template>
  <v-container v-if="stillCounting" class="counter my-5">
    <button class="close" @click="onDelete">×</button>
    <v-row justify="center" align="center">
      <v-col><Box :value="days" description="DNI"></Box></v-col>
      <v-col><Box :value="hours" description="GODZ"></Box></v-col>
      <v-col><Box :value="minutes" description="MIN"></Box></v-col>
      <v-col><Box :value="seconds" description="SEK"></Box></v-col>
    </v-row>
  </v-container>
  <v-container v-else class="my-5 counter-finished">
    <h2 class="mb-2">Odliczanie zakończone</h2>
    <v-btn class="mx-2" @click="onDelete">Usuń</v-btn>
    <v-btn class="mx-2" @click="onReset">Reset</v-btn>
  </v-container>
</template>

<script>
import Box from "./Box";
const DAY_INTERVAL = 86400000;
const HOUR_INTERVAL = 3600000;
const MINUTE_INTERVAL = 60000;
const SECOND_INTERVAL = 1000;

export default {
  props: ["timestamp"],
  data: () => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    stillCounting: true,
    interval: 0,
  }),
  components: {
    Box,
  },
  methods: {
    updateClockState: function() {
      this.interval = setInterval(() => {
        this.calcValues();
        this.calcVisibility();
      }, 500);
    },
    calcValues: function() {
      this.days = Math.floor((new Date(this.timestamp) - Date.now() + 3600000) / DAY_INTERVAL);
      this.hours = Math.floor(
        ((new Date(this.timestamp) - Date.now()) % DAY_INTERVAL) / HOUR_INTERVAL
      );
      this.minutes = Math.floor(
        (((new Date(this.timestamp) - Date.now()) % DAY_INTERVAL) % HOUR_INTERVAL) /
          MINUTE_INTERVAL
      );
      this.seconds = Math.floor(
        ((((new Date(this.timestamp) - Date.now()) % DAY_INTERVAL) % HOUR_INTERVAL) %
          MINUTE_INTERVAL) /
          SECOND_INTERVAL
      );
    },
    calcVisibility: function() {
      if (this.seconds < 0) this.stillCounting = false;
      else this.stillCounting = true;
    },
    onReset: function() {},
    onDelete: function() {}
  },
  created() {
    this.updateClockState();
  },
};
</script>

<style>
.counter-finished {
  width: 500px;
  background: #6669;
  backdrop-filter: blur(15px);
  box-shadow: 0px 4px 4px 2px #0008;
  border-radius: 8px;
  border: 1px solid #fff4;
}

.counter {
  width: 500px;
  position: relative;
  font-size: 30px;
  background: #6669;
  backdrop-filter: blur(15px);
  box-shadow: 0px 4px 4px 2px #0008;
  border-radius: 8px;
  border: 1px solid #fff4;
}

.close {
  position: absolute;
  top: -15px;
  right: -15px;
  background: red;
  display: block;
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 1px 1px 1px #555;
}
</style>
