<template>
  <div>
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from "@/components/Header";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.color-white {
  .hamburger {
    path {
      stroke: $couleur-tertiaire !important;
    }
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

body {
  background-color: $couleur-blanc;
  padding: 10px;
}

.main {
  // background-color: $couleur-blanc;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: $couleur-blanc;
}

::-webkit-scrollbar-thumb {
  background: $couleur-tertiaire;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::-moz-selection {
  color: $couleur-secondaire;
  background-color: $couleur-tertiaire;
}

::selection {
  color: $couleur-secondaire;
  background-color: $couleur-tertiaire;
}
</style>
