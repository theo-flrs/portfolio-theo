<template>
  <div class="main">
    <div class="hero-section">
      <canvas id="canvas"></canvas>
      <h1>Théo Florès</h1>
      <span>Webdesigner / Webdevelopper</span>
    </div>

    <div class="about-me-section">
      <img
        src="https://images.unsplash.com/photo-1651436897044-4429e40d2715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
        alt=""
      />
      <div class="content-about-me">
        <h1>À propos de moi</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          veniam ratione, ex ab laboriosam placeat ut odio sequi voluptatum,
          nostrum rerum doloremque illo ducimus tenetur officia. Eveniet nulla
          modi alias?
        </p>
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
    scene.background = new THREE.Color(0xfaf3e0);
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
      emissive: 0x1e212d,
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
    color: $couleur-secondaire;
    font-size: 110px;
    font-weight: 700;
    transition: all 0.35s ease-in-out;

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
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      inset: 0 0 0 0;
      background: $couleur-tertiaire;
      z-index: -1;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: $couleur-blanc;
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
    color: $couleur-secondaire;
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
  flex-direction: row;
  padding: 2rem;
  // flex-wrap: wrap;

  img {
    width: 40vw;
    height: 500px;
    object-fit: cover;
    flex-shrink: 0;
    object-position: bottom center;
  }

  .content-about-me {
    display: flex;
    flex-direction: column;
    padding: 5rem;
    align-self: center;

    h1 {
      font-family: $font-titre;
      font-size: 50px;
      color: $couleur-secondaire;
    }

    p {
      font-family: $font-paragraphe;
      font-size: 20px;
      color: $couleur-quaternaire;
      padding: 20px 0px;
    }
  }
}
</style>
