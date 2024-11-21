<template>
  <div class="navigation">
    <header class="navbar">
      <!-- Logo -->
      <NuxtLink to="/" active-class="active">
        <div class="logo">
          <NuxtImg src="/logo-theo-flores.svg" />
        </div>
      </NuxtLink>

      <!-- Menu Desktop -->
      <nav>
        <ul class="nav-links">
          <li><NuxtLink to="/" exact-active-class="active">Accueil</NuxtLink></li>
          <li><NuxtLink to="/about" exact-active-class="active">À propos</NuxtLink></li>
          <li><NuxtLink to="/projects" exact-active-class="active">Projets</NuxtLink></li>
          <!-- Point mobile -->
          <span ref="navIndicator" class="nav-indicator"></span>
          <!-- /Point mobile -->
        </ul>
      </nav>

      <!-- Bouton Hamburger (Mobile) -->
      <button class="hamburger" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }"></span>
      </button>

      <!-- Menu Mobile -->
      <nav class="menu-mobile" :class="{ open: isMenuOpen }">
        <ul>
          <li>
            <NuxtLink to="/" exact-active-class="active" @click="closeMenu">Accueil</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" exact-active-class="active" @click="closeMenu">À propos</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" exact-active-class="active" @click="closeMenu"
              >Projets</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" exact-active-class="active" @click="closeMenu"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>

      <div class="cta">
        <NuxtLink to="/contact" class="btn-contact">Contact</NuxtLink>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";

// Gestion de l'indicateur pour le menu desktop
const route = useRoute();
const navIndicator = ref(null);

const moveIndicator = async () => {
  await nextTick(); // Attendre que le DOM soit mis à jour
  const activeLink = document.querySelector(".nav-links a.active");
  if (activeLink && navIndicator.value) {
    const linkRect = activeLink.getBoundingClientRect();
    const parentRect = activeLink.parentElement.parentElement.getBoundingClientRect();

    // Positionner l'indicateur
    const offsetX = linkRect.left - parentRect.left + linkRect.width / 2 - 4;
    navIndicator.value.style.transform = `translateX(${offsetX}px)`;
  }
};

onMounted(() => {
  moveIndicator();
});

watch(route, () => {
  moveIndicator();
});

// Gestion du menu mobile
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>

/* Navigation */
.navigation {
  display: flex;
  justify-content: center;
  width: 100%;
  .navbar {
    display: flex;
    width: 1440px;
    justify-content: space-between;
    align-items: center;
    height: 95px;
    color: $primary-color;
    padding: 0 20px;

    /* Logo */
    .logo img {
      width: 60px;
      height: 60px;
    }

    /* Menu Desktop */
    nav {
      font-weight: 200;

      .nav-links {
        position: relative;
        display: flex;
        list-style: none;
        gap: 50px;

        li {
          a {
            font-size: 1.6rem;
            color: $primary-color;
            text-decoration: none;
            position: relative;
            transition: color 0.3s ease;

            &.active {
              font-weight: 500;
              color: $primary-color;

              &:hover{
                color: $primary-color;
              }
            }

            &:hover {
              color: $hover-color;
            }
          }
        }

        .nav-indicator {
          position: absolute;
          bottom: -15px;
          left: 0;
          width: 5px;
          height: 5px;
          background-color: $primary-color;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }
      }
    }

    /* Bouton Hamburger (Mobile) */
    .hamburger {
      display: none;
      width: 30px;
      height: 30px;
      background: $secondary-color;
      border: none;
      cursor: pointer;
      position: relative;

      span {
        display: block;
        width: 100%;
        height: 3px;
        background-color: $primary-color;
        position: relative;
        transition: all 0.3s ease;

        &::before,
        &::after {
          content: "";
          width: 100%;
          height: 3px;
          background-color: $primary-color;
          position: absolute;
          transition: all 0.3s ease;
        }

        &::before {
          top: -8px;
        }

        &::after {
          top: 8px;
        }

        &.open {
          background: transparent;

          &::before {
            transform: rotate(45deg);
            top: 0;
          }

          &::after {
            transform: rotate(-45deg);
            top: 0;
          }
        }
      }
    }

    /* Menu Mobile */
    .menu-mobile {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: $secondary-color;
      padding: 20px;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px);
      transition: all 0.3s ease;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li a {
          display: block;
          font-size: 1.6rem;
          color: $primary-color;
          text-decoration: none;
          margin: 10px 0;

          &.active {
            font-weight: bold;
          }
        }
      }

      &.open {
        display: block;
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
    }

    /* CTA */
    .cta .btn-contact {
      font-size: 1.6rem;
      background-color: $primary-color;
      color: $secondary-color;
      padding: 8px 30px;
      text-decoration: none;
    }

    /* Responsive */
    @media (max-width: 768px) {
      nav {
        display: none; /* Menu desktop disparaît */
      }

      .hamburger {
        display: block;
      }

      .menu-mobile {
        display: none; /* Contrôlé par JS */
      }

      .cta{
        display: none;
      }
    }
  }
}
</style>
