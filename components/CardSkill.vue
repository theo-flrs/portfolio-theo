<template>
  <div>
    <div
      class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card"
    >
      <div class="card" :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },

  props: ["dataImage"],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
  }),

  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },

    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`,
      };
    },
  },

  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";
.competences-section {
  .container {
    $hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
    $returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

    padding: 40px 2vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card-wrap {
      margin: 10px;
      transform: perspective(800px);
      transform-style: preserve-3d;
      cursor: pointer;

      &:hover {
        .card-info {
          transform: translateY(0);
        }
        .card-info p {
          opacity: 1;
        }
        .card-info,
        .card-info p {
          transition: 0.6s $hoverEasing;
        }
        .card-info:after {
          transition: 5s $hoverEasing;
          opacity: 1;
          transform: translateY(0);
        }
        .card-bg {
          transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
          opacity: 0.8;
        }
        .card {
          transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
          // box-shadow: rgba($couleur-tertiaire, 0.2) 0 0 40px 5px, rgba($couleur-tertiaire, 1) 0 0 0 1px,
          //   rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
          //   inset $couleur-tertiaire 0 0 0 5px;
        }
      }
    }

    .card {
      position: relative;
      flex: 0 0 240px;
      width: 190px;
      height: 310px;
      // background-color: $couleur-blanc;
      overflow: hidden;
      border-radius: 10px;
      // border: 2px solid $couleur-secondaire;
      transition: 1s $returnEasing;
    }

    .card-bg {
      opacity: 0.9;
      position: absolute;
      width: 105%;
      height: 105%;
      padding: 20px;
      border-radius: 10px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
      pointer-events: none;
    }

    .card-info {
      padding: 20px;
      position: absolute;
      bottom: 0;
      color: $couleur-secondaire;
      transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

      * {
        position: relative;
        z-index: 1;
      }

      h1 {
        font-family: $font-paragraphe;
        font-size: 22px;
        font-weight: 700;
      }
    }
  }
}
</style>
