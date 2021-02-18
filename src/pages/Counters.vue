<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <DateTimePicker @addCounter="newCounter"/>
        <Counter v-for="t in timestamps" :key="t.id" :timestamp="t.ts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DateTimePicker from "./../components/DateTimePicker";
import Counter from "./../components/Counter";
import crypto from 'crypto'

export default {
  name: "Counters",
  components: {
    DateTimePicker,
    Counter,
  },
  data() {
    return {
      timestamps: []
    } 
  },
  methods: {
    newCounter: function(date, time) {
      if (this.isToday(date) & this.isEarlier(time)) return alert("Popraw czas!")
      if (this.counterExists(date, time)) return alert("Taki timer już istnieje!")
      const ts = new Date(date + 'T' + time + 'Z')
      this.timestamps.push({date, time, ts, id: crypto.randomBytes(16).toString("hex")})
      localStorage.setItem('timestamps', JSON.stringify(this.timestamps))
    },
    removeCounter: function(id) {
      this.timestamps = this.timestamps.filter((el) => el.id !== id)
      localStorage.setItem('timestamps', JSON.stringify(this.timestamps))
    },
    isToday: function(date) {
      return new Date().toISOString().slice(0, 10) === date
    },
    isEarlier: function(time) {
      const now = Number(new Date().toISOString().slice(11, 16).replace(':', '.'));
      return now > parseFloat(time.replace(':', '.'))
    },
    counterExists: function(date, time) {
      let result = false;
      this.timestamps.forEach((value) => {
        if (value.date === date & value.time === time) result = true
      })
      return result
    }
  },
  // created() {
  //   localStorage.removeItem('timestamps')
  // },
  mounted() {
    if (!localStorage.getItem('timestamps')) return
    this.timestamps = JSON.parse(localStorage.getItem('timestamps'))
  }
};
</script>
