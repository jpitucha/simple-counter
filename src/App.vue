<template>
  <v-app>
    <v-app-bar app color="primary" dark class="my-appbar">
      <div>
        <v-combobox
          class="mt-6"
          v-model="selectedTheme"
          :items="themes"
          :label='$t("theme")'
          outlined
          dense
        ></v-combobox>
      </div>
      <v-spacer>
      </v-spacer>
      <div>
        <v-combobox
          class="mt-6"
          v-model="selectedLang"
          :items="langs"
          :label='$t("language")'
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
import { themes } from "./themes"

export default {
  name: "app",
  components: {
    Counters,
  },
  data: () => ({
    selectedLang: "PL",
    selectedTheme: "Theme 1",
    langs: ["PL", "EN", "DE", "IE", "RO"],
    themes: ["Theme 1", "Theme 2"],
  }),
  methods: {
    changeTheme: function() {

    }
  },
  mounted() {
    this.$vuetify.theme.dark = true
  },
  watch: {
    selectedTheme: function() {
      const theme = themes.find((el) => { return el.name === this.selectedTheme })
      Object.keys(theme.light).forEach(i => {
        this.$vuetify.theme.themes.light[i] = theme.light[i];
      });
      Object.keys(theme.dark).forEach(i => {
        this.$vuetify.theme.themes.dark[i] = theme.dark[i];
      });
      this.$vuetify.theme.themes.name = theme.name;
    },
    selectedLang: function() {
      this.$i18n.locale = this.selectedLang.toLowerCase()
    },
  },
  created() {
    if (this.langs.includes(navigator.language.toUpperCase())) {
      this.selectedLang = navigator.language.toUpperCase()
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
.theme-picker {
  width: 10px;
  height: 10px;
}
:root {
   font-size: 16px;
}
@media (max-width: 768px) {
:root {
   font-size: 20px;
}
}
</style>
