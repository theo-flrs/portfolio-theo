<template>
  <div>
    <header>
      <div class="header-row">
        <div class="brand-logo">
          <nuxt-link to="/">Théo Florès</nuxt-link>
        </div>
        <button class="menu-toggle" id="menuToggle" @click="ChangeColorMenu()">
          <svg viewBox="0 0 12 10" class="hamburger" height="45px" width="45px">
            <path d="M10,2 L2,2" class="bar-1"></path>
            <path d="M2,5 L10,5" class="bar-2"></path>
            <path d="M10,8 L2,8" class="bar-3"></path>
          </svg>
        </button>
      </div>
    </header>

    <section class="fullpage-menu">
      <div class="fullpage-menu-inner">
        <div class="menu-bg">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav>
          <ul class="main-menu">
            <li @click="FermerMenu()">
              <nuxt-link to="/">Accueil</nuxt-link>
            </li>
            <li @click="FermerMenu()">
              <nuxt-link to="/">Portfolio</nuxt-link>
            </li>
            <li @click="FermerMenu()">
              <nuxt-link to="/">Contact</nuxt-link>
            </li>
          </ul>
        </nav>

        <div class="header-nav-footer">
          <ul class="social-links">
            <li><a href="#">Télécharger mon CV -</a></li>
            <li><a href="#">Instagram -</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li>&copy;2022</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.HeaderMenuGSAP();
  },

  methods: {
    HeaderMenuGSAP() {
      const menuToggle = document.getElementById("menuToggle");
      const menuBar = gsap.timeline();
      const tl = gsap.timeline({ paused: true });

      tl.set("html", { overflow: "hidden" });

      menuBar
        .to(
          ".bar-1",
          0.5,
          {
            attr: { d: "M8,2 L2,8" },
            x: 1,
            ease: Power2.easeInOut,
          },
          "start"
        )

        .to(
          ".bar-2",
          0.5,
          {
            autoAlpha: 0,
          },
          "start"
        )

        .to(
          ".bar-3",
          0.5,
          {
            attr: { d: "M8,8 L2,2" },
            x: 1,
            ease: Power2.easeInOut,
          },
          "start"
        );

      menuBar.reverse();

      tl.to(".fullpage-menu", {
        duration: 0,
        display: "block",
        ease: "Expo.easeInOut",
      });

      tl.from(".menu-bg span", {
        duration: 0.7,
        x: "100%",
        stagger: 0.1,
        ease: "Expo.easeInOut",
      });

      tl.from(
        ".main-menu li a",
        {
          duration: 0.8,
          y: "100%",
          stagger: 0.2,
          ease: "Expo.easeInOut",
        },
        "-=0.5"
      );

      tl.from(
        ".social-links li",
        {
          duration: 0.5,
          y: "-100%",
          opacity: 0,
          stagger: 0.1,
          ease: "Expo.easeInOut",
        },
        "-=0.5"
      );

      tl.reverse();

      menuToggle.addEventListener("click", function () {
        menuBar.reversed(!menuBar.reversed());
        tl.reversed(!tl.reversed());
      });
    },

    ChangeColorMenu() {
      document.querySelector(".menu-toggle").classList.toggle("color-white");
    },

    FermerMenu() {
      document.getElementById("menuToggle").click();
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.brand-logo {
  a {
    text-decoration: none;
    color: $couleur-tertiaire;
    font-family: $font-paragraphe;
    font-size: 25px;
    font-weight: 700;

    animation: move 8s linear infinite;
    background-image: linear-gradient(
      to right,
      $couleur-principale,
      $couleur-secondaire,
      $couleur-tertiaire,
      $couleur-secondaire,
      $couleur-principale
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @keyframes move {
      to {
        background-position: 200% center;
      }
    }
  }
}

header {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
}

.header-row {
  padding: 40px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger {
  background-color: $couleur-secondaire;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);

  path {
    fill: none;
    stroke: $couleur-principale;
    stroke-linecap: round;
    transition: all 0.3s ease-in-out;
  }

  // &:hover {
  //   path {
  //     stroke: $couleur-secondaire;
  //     transition: all 0.3s ease-in-out;
  //   }
  // }
}

.fullpage-menu {
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: none;
}
.fullpage-menu-inner {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 100px 60px;
}
.menu-bg {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;

  span {
    height: 33.334%;
    width: 100%;
    background: $couleur-secondaire;
    border-left: 4px solid $couleur-tertiaire;
    display: block;
  }
}

nav {
  position: relative;
  z-index: 10;

  ul {
    list-style-type: none;
  }

  li {
    overflow: hidden;
    transition: transform 300ms ease-in-out 0s;

    &:hover {
      transform: translateX(50px);
      transition: all 0.3s ease-in-out;
    }
  }

  li + li {
    margin-top: 20px;
  }

  li a {
    font-size: 90px;
    font-family: $font-titre;
    color: $couleur-principale;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    display: inline-block;
    line-height: 1;

    &:hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    &::before {
      transform: scaleX(0);
      transform-origin: bottom right;
      content: " ";
      display: block;
      position: absolute;
      top: 60px !important;
      right: 0;
      bottom: 0;
      left: 0;
      inset: 0 0 0 0;
      background: $couleur-tertiaire;
      z-index: -1;
      transition: transform 0.3s ease;
    }
  }
}

.header-nav-footer {
  font-family: $font-paragraphe;
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px 60px;
  color: $couleur-tertiaire;
}
.social-links {
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 100%;

  li {
    font-size: 18px;
    font-weight: 500;
  }

  li + li {
    margin-left: 16px;
  }

  li:last-child {
    margin-left: auto;
  }

  a {
    color: $couleur-tertiaire;
    text-decoration: none;
  }
}

@media screen and (max-width: 767px) {
  .header-row,
  .header-nav-footer {
    padding: 30px;
  }
  .fullpage-menu-inner {
    padding: 70px 30px;
  }
  nav li a {
    font-size: 54px;
  }
  .social-links li {
    font-size: 16px;
  }
}
</style>
