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
      <div class="outter hero-video">
        <div class="video-container">
          <video
            autoplay
            loop
            muted
            poster="https://backend.theo-flores.fr/wp-content/uploads/2022/05/abstract_background.png"
          >
            <source
              src="https://backend.theo-flores.fr/wp-content/uploads/2022/05/abtract_background_theo_flores.mp4"
              type="video/mp4"
            />
          </video>
          <div class="callout">
            <img
              src="https://backend.theo-flores.fr/wp-content/uploads/2022/05/1645892818575.jpg"
              alt=""
            />
            <h1>À propos de moi</h1>
            <div class="desc">Je dessine</div>
            <a class="button" href="/collections/all">Découvrir mes projets</a>
          </div>
        </div>
      </div>
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
  },

  mounted() {
    this.initThreeJSShape();
    this.animate();
    this.onWindowResize();
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.hero-section {
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
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  padding: 60px;
  background-color: $couleur-secondaire;

  .outter.hero-video {
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: 2px solid $couleur-principale;
    outline-offset: 15px;

    @media (max-width: 767px) {
      height: 700px;
    }
  }

  .hero-video {
    .video-container {
      width: 100%;
      height: 550px;
      position: relative;
      overflow: hidden;
      @media (max-width: 767px) {
        height: 700px;
      }
    }

    video {
      object-fit: cover; // Set the magic
      position: absolute;
      width: 100%;
      height: 550px;
      top: 0;
      left: 0;
      @media (max-width: 767px) {
        height: 700px;
      }
    }

    .video-container:after {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(black, 0.2);
      z-index: 1;
    }

    .callout {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      text-align: center;
      position: relative;
      z-index: 10;
      width: 50%;
      margin: auto;
      img {
        clip-path: polygon(
          30% 0%,
          70% 0%,
          100% 30%,
          100% 70%,
          70% 100%,
          30% 100%,
          0% 70%,
          0% 30%
        );
        width: auto;
        height: 40%;
        filter: grayscale(1);
        margin: 30px;
      }
      @media (max-width: 767px) {
        width: 90%;
      }
    }

    h1 {
      font-family: $font-titre;
      font-weight: 800;
      text-transform: uppercase;
      margin: 0 0 1rem;
      padding: 0;
      line-height: 1;
      color: $couleur-principale;
      @media (max-width: 767px) {
        font-size: 32px;
      }
      @media (min-width: 768px) {
        font-size: 52px;
      }
    }

    .desc {
      color: $couleur-principale;
      font-weight: 400;
      font-size: 18px;
      font-family: $font-paragraphe;
    }

    .button {
      font-family: $font-paragraphe;
      text-transform: uppercase;
      background-color: transparent;
      border-radius: 0px;
      margin-top: 20px;
      background-color: $couleur-principale;
      padding: 15px 30px;
      border-radius: 0px;
      color: $couleur-quaternaire;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease-in-out;
      @media (max-width: 767px) {
        padding: 10px 20px;
      }
    }
    .button:hover {
      cursor: pointer;
      background-color: $couleur-quaternaire;
      color: $couleur-principale;
      transform: translateY(-5px);
    }
  }
}
</style>
