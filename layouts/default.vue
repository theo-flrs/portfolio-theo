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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

body {
  background-color: $couleur-principale;
  padding: 15px;
}

.main{
  background-color: $couleur-blanc;
}
</style>
