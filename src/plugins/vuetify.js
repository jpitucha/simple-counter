import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: "#E65100",
        accent: "#7CB342",
        secondary: "#689F38",
        success: "#4CAF50",
        info: "#6156d8",
        warning: "#1565C0",
        error: "#FF7043"
    },
    light: {
        primary: "#ffa450",
        accent: "#a1e754",
        secondary: "#92de4e",
        success: "#6dff74",
        info: "#7365ff",
        warning: "#2e8ac0",
        error: "#ff5e3c"
    }
  }
  }
});
