<template>
  <div class="main">
    <div class="hero-section">
      <canvas id="canvas"></canvas>
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
            <h1>À propos de moi</h1>
            <div class="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi itaque nesciunt sapiente, nihil illum eaque aliquid ut
              vero hic eius optio iure, cumque molestias totam deleniti error
              quisquam repudiandae libero?
            </div>
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
  },

  mounted() {
    // CODE THREE JS ----------------------------
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1b1717);
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvasElement = document.querySelector("#canvas");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasElement,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    var light = new THREE.DirectionalLight();
    light.position.set(-10, 10, 5);
    scene.add(light);

    // const geometry = new THREE.BoxGeometry(3, 3, 3);
    // const geometry = new THREE.SphereGeometry(1.5, 30, 20,0,Math.PI * 2,0, Math.PI);
    // const geometry = new THREE.IcosahedronGeometry(3, 0);
    const geometry = new THREE.DodecahedronGeometry(5 * 0.5, 1);
    const fog = new THREE.Fog(0x000000);
    const material = new THREE.MeshStandardMaterial({
      color: 0xf0f0f0,
      emissive: 0xce1212,
      roughness: 1,
      wireframe: true,
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.set(5, 2, 5);
    camera.lookAt(cube.position);

    var canvas = renderer.domElement;

    canvas.addEventListener("mousemove", onMouseMove);
    function animate(time) {
      time *= 0.001;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      cube.rotation.x = time * 0.5;
    }
    animate();
    function onMouseMove(event) {
      cube.rotation.y += event.movementX * 0.002;
      cube.rotation.x += event.movementY * 0.002;
    }

    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      //cube.scale.set( 2 , 1 , 1 );

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    // FIN CODE THREE JS ----------------------------
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.hero-section {
  h1 {
    position: absolute;
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
  }

  span {
    position: absolute;
    z-index: 1;
    top: 56%;
    left: 50%;
    transform: translate(-50%, 50%);
    text-align: center;
    font-family: $font-paragraphe;
    color: $couleur-principale;
    font-size: 30px;
    font-weight: 500;
  }
}

#canvas {
  width: 100% !important;
  height: 100vh !important;
}

.about-me-section {
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
    @media (max-width: 767px) {
      height: 325px;
    }

    outline: 2px solid $couleur-principale;
    outline-offset: 15px;
  }

  .hero-video {
    .video-container {
      width: 100%;
      height: 550px;
      position: relative;
      overflow: hidden;
      @media (max-width: 767px) {
        height: 325px;
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
        height: 325px;
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
      @media (max-width: 767px) {
        padding: 10px 20px;
      }
    }
    .button:hover {
      cursor: pointer;
      background-color:$couleur-quaternaire;
      color: $couleur-principale;
    }
  }
}
</style>
