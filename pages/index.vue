<template>
  <div>
    <section>
      <div class="container hero">
        <span class="name">Théo Florès</span>
        <h1>UX/UI <span>Designer &</span> Front-end <span>Developer</span></h1>
        <NuxtLink to="/projects" class="cta">Voir mes projets</NuxtLink>
      </div>
    </section>
    <BluePlanes />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  &.hero {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    max-width: 820px;
    .name {
      font-size: 1.8rem;
      font-weight: 200;
    }

    .cta{
      display: flex;
      padding: 12px 30px;
      background-color: $secondary-color;
      border: 1px solid $primary-color;
      color: $primary-color;
      font-size: 1.6rem;
      font-weight: 400;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      &:hover {
        border-color: $hover-color;
        color: $hover-color;
      }
    }
  }
}
</style>
