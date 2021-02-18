<template>
  <v-app>
    <v-app-bar app color="primary" dark id="appbar" class="my-appbar">
      <div>
        <v-combobox
          class="mt-6"
          v-model="selectedLang"
          :items="langs"
          label="Language"
          outlined
          dense
        ></v-combobox>
      </div>
    </v-app-bar>

    <v-main>
      <Counters />
    </v-main>
  </v-app>
</template>

<script>
import Counters from "./pages/Counters";

export default {
  name: "app",
  components: {
    Counters,
  },
  data: () => ({
    selectedLang: "PL",
    langs: ["PL", "EN", "DE", "IE", "RO"],
  }),
  watch: {
    selectedLang: function() {
    this.$i18n.locale = this.selectedLang.toLowerCase()
    }
  }
};
</script>

<style>
#app {
  background-image: url("https://picsum.photos/2000/1000");
  background-size: cover;
  background-attachment: fixed;
}
.my-appbar .v-toolbar__content {
  justify-content: flex-end;
}
</style>
