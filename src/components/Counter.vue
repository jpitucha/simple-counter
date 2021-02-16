<template>
  <v-container v-if="stillCounting" class="counter my-5">
    <button class="close">×</button>
    <v-row justify="center" align="center">
      <v-col><Box value="1" description="DNI"></Box></v-col>
      <v-col><Box value="1" description="GODZ"></Box></v-col>
      <v-col><Box value="1" description="MIN"></Box></v-col>
      <v-col><Box value="1" description="SEK"></Box></v-col>
    </v-row>
  </v-container>
  <v-container v-else class="my-5 counter-finished">
    <h2 class="mb-2">Odliczanie zakończone</h2>
    <v-btn class="mx-2">Usuń</v-btn>
    <v-btn class="mx-2">Reset</v-btn>
  </v-container>
</template>

<script>
import Box from "./Box";
export default {
  data: () => ({
    stillCounting: true,
  }),
  components: {
    Box,
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
