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
      stroke: white !important;
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
  padding: 20px;
}

.main {
  // background-color: $couleur-blanc;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $couleur-blanc;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $couleur-tertiaire;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
