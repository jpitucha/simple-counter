<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <DateTimePicker />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DateTimePicker from "./../components/DateTimePicker";
import Counter from "./../components/Counter";

export default {
  name: "Counters",
  components: {
    DateTimePicker,
    Counter,
  },
  data: () => ({
    timestamps: [],
  }),
  methods: {
    addTimestamp: function(current, final) {
      this.timestamps.push({
        currentTimeStamp: current,
        finalTimestamp: final,
      });
    },
  },
};
</script>
