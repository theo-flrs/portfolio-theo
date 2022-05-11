<template>
  <div class="main">
    <div class="hero-section">
      <canvas
        id="canvas"
        @mousemove="onMouseMove"
        @resize="onWindowResize"
      ></canvas>
      <h1>Théo <b>Florès</b></h1>
      <span>Webdesigner / Webdevelopper</span>
    </div>

    <div class="about-me-section">
      <section class="container">
        <div class="contenu-container">
          <div class="contenu-des-textes" role="marquee">
            <div class="ligne-textes">
              <div class="texte-anime -default">
                <span>A PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -effect">
                <span>A PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -default">
                <span>A PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -effect">
                <span>A PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -default">
                <span>A PROPOS DE MOI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="content-about">
        <img
          src="https://backend.theo-flores.fr/wp-content/uploads/2022/05/theo-flores-nb.jpg"
          alt=""
        />
        <div class="sub-content">
          <h1>Hey ! Moi c'est Théo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            expedita beatae asperiores, id dolores placeat eius laudantium! Quos
            quisquam quasi perferendis nulla. Rerum cupiditate vitae harum
            facere cumque voluptas eum.
          </p>
          <a href="">Découvrir mes projets</a>
        </div>
      </div>

      <section class="container">
        <div class="contenu-container">
          <div class="contenu-des-textes" role="marquee">
            <div class="ligne-textes">
              <div class="texte-anime -default">
                <span>A PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -effect">
                <span>A PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -default">
                <span>A PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -effect">
                <span>A PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -default">
                <span>A PROPOS DE MOI</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div v-if="posts">
      <div v-for="post in posts" :key="post.acf.nom_du_projet">
        <nuxt-link :to="{ name: 'portfolio-id', params: { id: post.id } }">
          <h1>{{ post.acf.nom_du_projet }}</h1>
          <p>{{ post.acf.description_du_projet }}</p>
          <p>Lire plus</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import * as THREE from "three";
export default {
  data() {
    return {
      posts: [],
      error: [],
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      return axios
        .get("https://backend.theo-flores.fr/wp-json/acf/v3/portfolio")
        .then((response) => {
          this.posts = response.data;
          return;
        })
        .catch((error) => {
          return { error: error };
        });
    },

    initThreeJSShape() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x1b1717);
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const canvasElement = document.querySelector("#canvas");
      this.renderer = new THREE.WebGLRenderer({
        canvas: canvasElement,
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      var light = new THREE.DirectionalLight();
      light.position.set(-10, 10, 5);
      this.scene.add(light);

      this.geometry = new THREE.DodecahedronGeometry(5 * 0.5, 1);
      this.fog = new THREE.Fog(0x000000);
      this.material = new THREE.MeshStandardMaterial({
        color: 0xf0f0f0,
        emissive: 0xce1212,
        roughness: 1,
        wireframe: true,
      });
      this.shape = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.shape);

      this.camera.position.set(5, 2, 5);
      this.camera.lookAt(this.shape.position);

      this.canvas = this.renderer.domElement;

      window.addEventListener("resize", this.onWindowResize, false);
    },

    animate(time) {
      time *= 0.001;
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
      this.shape.rotation.x = time * 0.5;
    },

    onMouseMove(event) {
      this.shape.rotation.y += event.movementX * 0.002;
      this.shape.rotation.x += event.movementY * 0.002;
    },

    onWindowResize() {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      //shape.scale.set( 2 , 1 , 1 );
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    },

    textScrollingInfinite() {
      const rows = document.querySelectorAll(".ligne-textes");

      rows.forEach(function (e, i) {
        let row_width = e.getBoundingClientRect().width;
        let row_item_width = e.children[0].getBoundingClientRect().width;
        let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;

        gsap.set(e, {
          xPercent: `${initial_offset}`,
        });

        let duration = 5.5 * (i + 1);

        var tl = gsap.timeline();

        tl.to(e, {
          ease: "none",
          duration: duration,
          xPercent: 0,
          repeat: -1,
        });
      });
    },
  },

  mounted() {
    this.initThreeJSShape();
    this.animate();
    this.onWindowResize();
    this.textScrollingInfinite();
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.hero-section {
  background-color: $couleur-secondaire;
  h1 {
    position: absolute;
    white-space: nowrap;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: $font-titre;
    color: $couleur-principale;
    font-size: 110px;
    font-weight: 700;
    transition: all 0.35s ease-in-out;

    b {
      color: $couleur-tertiaire;
    }

    @media (max-width: 760px) {
      font-size: 13vw;
    }
  }

  span {
    position: absolute;
    white-space: nowrap;
    z-index: 1;
    top: 56%;
    left: 50%;
    transform: translate(-50%, 50%);
    text-align: center;
    font-family: $font-paragraphe;
    color: $couleur-principale;
    font-size: 30px;
    font-weight: 500;

    @media (max-width: 760px) {
      font-size: 4.5vw;
    }
  }
}

#canvas {
  width: 100% !important;
  height: 100vh !important;
}

.about-me-section {
  .content-about {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 30vw;
      height: 50vh;
      object-fit: cover;
      margin: 30px;
      outline: 5px solid $couleur-noir;
      outline-offset: 10px;
    }

    .sub-content {
      flex-direction: column;
      padding: 10%;

      h1 {
        display: inline-block;
        font-family: $font-titre;
        font-weight: 900;
        font-size: 50px;
      }

      p {
        display: inline-block;
        font-family: $font-paragraphe;
        font-size: 20px;
        font-weight: 500;
        margin: 15px 0px;
      }

      a {
        display: inline-block;
        background-color: $couleur-quaternaire;
        padding: 15px 40px;
        text-decoration: none;
        color: $couleur-blanc;
        font-size: 20px;
        font-weight: 600;
        font-family: $font-paragraphe;
        margin: 15px 0px;
      }
    }
  }

  .container {
    display: block;
    position: relative;
  }

  .contenu-container {
    padding: 30px 0;
    background-color: $couleur-secondaire;
    border-top: 5px solid $couleur-tertiaire;
    border-bottom: 5px solid $couleur-tertiaire;
  }

  .contenu-des-textes {
    // margin: -58px 0;
    overflow: hidden;
    cursor: default;
  }

  .ligne-textes {
    display: flex;
    position: relative;
    text-align: center;
    white-space: nowrap;
  }

  .texte-anime {
    position: relative;
    line-height: 100%;
    font-size: 2.5vw;
    flex: 0 0 33%;
    padding: 15px 0;
    text-transform: uppercase;

    span {
      position: relative;
      display: inline-block;
      z-index: 1;
    }

    &.-effect {
      // color: transparent;
      // text-shadow: none;
      // -webkit-text-stroke: 1px rgba(255, 255, 255, 0.9);
      font-family: $font-titre;
      font-weight: 700;
      color: $couleur-blanc;
    }

    &.-default {
      color: $couleur-tertiaire;
      font-weight: 700;
      font-family: $font-paragraphe;
    }
  }
}
</style>
