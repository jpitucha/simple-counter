<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <DateTimePicker @addCounter="newCounter"/>
        <Counter v-for="t in timestamps" :key="t.id" :timestamp="t.ts" @deleteCounter="deleteCounter" @resetCounter="resetCounter"/>
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
      if (this.isToday(date) && this.isEarlier(time)) return alert("Popraw czas!")
      if (this.counterExists(date, time)) return alert("Taki timer już istnieje!")
      const ts = new Date(date + 'T' + time + 'Z')
      ts.setHours(ts.getHours() - 1)
      this.timestamps.push({date, time, added: Date.now(), ts, id: crypto.randomBytes(16).toString("hex")})
      localStorage.setItem('timestamps', JSON.stringify(this.timestamps))
    },
    deleteCounter: function(id) {
      this.timestamps = this.timestamps.filter((el) => el.id !== id)
      localStorage.setItem('timestamps', JSON.stringify(this.timestamps))
    },
    resetCounter: function(id) {
      const i = this.timestamps.findIndex(value => value.id === id)
      const timeDiff = this.timestamps[i].ts - this.timestamps[i].added
      this.timestamps[i].ts = Date.now() + timeDiff
      this.timestamps[i].added = Date.now()
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
      const exists = this.timestamps.find((el) => { return el.date === date && el.time === time})
      if (exists) return true
      return false;
    }
  },
  created() {
    //   localStorage.removeItem('timestamps')
    if (!localStorage.getItem('timestamps')) return
    this.timestamps = JSON.parse(localStorage.getItem('timestamps'))
  }
};
</script>
