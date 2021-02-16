<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <DateTimePicker />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DateTimePicker from "./../components/DateTimePicker";
export default {
  name: "Counters",
  components: {
    DateTimePicker,
  },
};
</script>
