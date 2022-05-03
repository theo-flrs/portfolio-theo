<template>
  <div class="main">
    <div class="hero-section">
      <canvas id="canvas"></canvas>
      <h1>Hello, i'm Théo </h1>
      <span>Webdesigner & Webdevelopper</span>
    </div>

    <div>
      <h1>À propos</h1>
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
    scene.background = new THREE.Color(0xffffff);
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
    const geometry = new THREE.DodecahedronGeometry(3, 1);
    const fog = new THREE.Fog(0x000000);
    const material = new THREE.MeshStandardMaterial({
      color: 0x001d6e,
      emissive: 0x0f0f0f,
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
    font-family: $font-paragraphe;
    color: $couleur-tertiaire;
    font-size: 80px;
    font-weight: 700;


  }
}

#canvas {
  width: 100% !important;
}
</style>
