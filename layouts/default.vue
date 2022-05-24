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

// TRANSITIONS NUXT JS
.page-enter-active,
.page-leave-active {
  transition: all 0.6s ease-in-out;
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(50vh);
}
// TRANSITIONS NUXT JS

.loading-screen {
  position: relative;
  padding: 0;
  background-color: red;
  width: 0%;
  height: 100%;
}

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
