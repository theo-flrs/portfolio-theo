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
                <span>À PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -effect">
                <span>À PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -default">
                <span>À PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -effect">
                <span>À PROPOS DE MOI</span>
              </div>
              <div class="texte-anime -default">
                <span>À PROPOS DE MOI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="content-about">
        <div class="img-border">
          <span></span>
        </div>
        <!-- <img
          src="https://backend.theo-flores.fr/wp-content/uploads/2022/05/theo-flores-nb.jpg"
          alt=""
        /> -->
        <div class="sub-content">
          <h1>Hey !</h1>
          <p>
            Bienvenue à toi sur mon portfolio. J'ai <b>22 ans</b> et je suis
            étudiant en <b>Webdesign</b>. <br /><br />Actuellement en
            <b>Bachelor 3 Webdesign à MyDigitalSchool Nantes</b>, j'occupe le
            poste de <b>Webdesigner / Intégrateur Web</b> au sein de
            l'entreprise <b>Kiwatch</b> à Orvault. <br /><br />Depuis
            <b>plus de 3 ans</b>, le design et le développement web sont
            devenues mes principales passions. Mon objectif est de
            <b>développer au maximum mes compétences</b> dans ces domaines afin
            de mener au mieux mes différents projets.
          </p>
          <nuxt-link class="link" to="/portfolio-all"
            >Découvrir mes projets</nuxt-link
          >
        </div>
      </div>
    </div>

    <div class="experiences-section">
      <h2>
        Mes <br />
        <span>expériences</span>
      </h2>
      <div
        v-for="experience in experiences"
        :style="`background: linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(206,18,18,0) 100%), url(${experience.acf.image_de_experience.url});`"
        :key="experience.acf.nom_de_entreprise"
        class="mes-experiences"
      >
        <img :src="experience.acf.icone_de_experience.url" loading="lazy" />
        <h3>{{ experience.acf.nom_de_entreprise }}</h3>
        <span class="date">
          {{ experience.acf.date_de_debut_experience }} -
          {{ experience.acf.date_de_fin_experience }}
        </span>
        <span class="poste-occupe">{{
          experience.acf.poste_occupe_dans_entreprise
        }}</span>
        <p>{{ experience.acf.description_de_experience }}</p>
      </div>
    </div>

    <div class="formations-section">
      <h2>
        Mes <br />
        <span>formations</span>
      </h2>
      <div
        v-for="formation in formations"
        :style="`background: linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(206,18,18,0) 100%), url(${formation.acf.image_de_la_formation.url});`"
        :key="formation.acf.titre_de_la_formation"
        class="mes-formations"
      >
        <img :src="formation.acf.logo_de_la_formation.url" loading="lazy" />
        <h3>{{ formation.acf.titre_de_la_formation }}</h3>
        <span class="date">
          {{ formation.acf.date_de_debut_formation }} -
          {{ formation.acf.date_de_fin_formation }}
        </span>
        <p>{{ formation.acf.description_de_la_formation }}</p>
      </div>
    </div>

    <div class="competences-section">
      <div class="competences-title">
        <h1><span>Mes com</span>pétences</h1>
      </div>

      <div class="competences-layout">
        <div class="competences-design">
          <h2>Design</h2>
          <div class="container">
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/Figma.png"
            >
              <h1 slot="header">Figma</h1>
            </CardSkill>
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/AdobePhotoshop.png"
            >
              <h1 slot="header">
                Adobe<br />
                Photoshop
              </h1>
            </CardSkill>
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/AdobeIllustrator.png"
            >
              <h1 slot="header">Adobe<br />Illustrator</h1>
            </CardSkill>
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/AdobeAfterEffect.png"
            >
              <h1 slot="header">
                Adobe<br />
                After Effect
              </h1>
            </CardSkill>
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/AdobePremierePro.png"
            >
              <h1 slot="header">
                Adobe<br />
                Premiere Pro
              </h1>
            </CardSkill>

            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/UXUI.png"
            >
              <h1 slot="header">UX/UI</h1>
            </CardSkill>
          </div>
        </div>

        <div class="competences-developpement">
          <h2>Développement web</h2>
          <div class="container">
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/VUEJS.png"
            >
              <h1 slot="header">Vue.JS</h1>
            </CardSkill>
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/NUXTJS.png"
            >
              <h1 slot="header">Nuxt.JS</h1>
            </CardSkill>
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/THREEJS.png"
            >
              <h1 slot="header">Three.JS</h1>
            </CardSkill>
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/HTML5-CSS3.png"
            >
              <h1 slot="header">HTML5/CSS3</h1>
            </CardSkill>
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/JAVASCRIPT.png"
            >
              <h1 slot="header">Javascript</h1>
            </CardSkill>
            <CardSkill
              data-image="https://backend.theo-flores.fr/wp-content/uploads/2022/05/WORDPRESS.png"
            >
              <h1 slot="header">Wordpress</h1>
            </CardSkill>
          </div>
        </div>
      </div>
    </div>

    <div class="projets-section">
      <div class="projets-section-title">
        <h4>Mes derniers <span>projets</span></h4>
        <nuxt-link to="/portfolio-all">
          <span class="text">Voir tous mes projets</span>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </nuxt-link>
      </div>
      <div class="projets-main" v-if="posts">
        <div v-for="post in posts.slice(0, 6)" :key="post.id">
          <nuxt-link :to="{ name: 'portfolio-id', params: { id: post.id } }">
            <div
              class="card-project"
              :style="`background: linear-gradient(-10deg, rgba(206,18,18,0.2) 0%,rgba(0,0,0,0.95) 100%), url(${post.acf.image_principale_du_projet.url});`"
            >
              <span class="annee-projet">{{ post.acf.annee_du_projet }}</span>
              <br />
              <span class="categorie-projet">{{
                post.acf.categorie_du_projet
              }}</span>
              <h1>{{ post.acf.titre_du_projet }}</h1>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Fin du contenu -->
  </div>
</template>
<script>
import axios from "axios";
import * as THREE from "three";

export default {
  head() {
    return {
      title: "Théo Florès - Portfolio",
      meta: [
        {
          hid: "description",
          id: "description",
          name: "description",
          content:
            "Hello, bienvenue sur mon portfolio ! Je m'appelle Théo Florès. Je suis un jeune étudiant webdesigner en 3ème année, actuellement en alternance... ",
        },
      ],
    };
  },
  components: true,
  data() {
    return {
      posts: [],
      experiences: [],
      formations: [],
      error: [],
      active: 0,
    };
  },
  created() {
    this.fetchDataPosts();
    this.fetchDataExperiences();
    this.fetchDataFormations();
  },
  watch: {
    $route: ["fetchDataPosts", "fetchDataExperiences", "fetchDataFormations"],
  },
  methods: {
    fetchDataPosts() {
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

    fetchDataExperiences() {
      return axios
        .get("https://backend.theo-flores.fr/wp-json/acf/v3/experience")
        .then((response2) => {
          this.experiences = response2.data;
          return;
        })
        .catch((error) => {
          return { error: error };
        });
    },

    fetchDataFormations() {
      return axios
        .get("https://backend.theo-flores.fr/wp-json/acf/v3/formation")
        .then((response3) => {
          this.formations = response3.data;
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
      this.shape.scale.set(1, 1, 1);
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
    margin: 2%;

    @media screen and(max-width:700px) {
      flex-direction: column-reverse;
    }
    .img-border {
      background: url("https://backend.theo-flores.fr/wp-content/uploads/2022/05/theo-flores-nb.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      position: relative;

      span {
        display: block;
        width: 30vw;
        height: 50vh;
        position: relative;
        transition: transform 0.2s ease-in-out;

        @media screen and(max-width:700px) {
          width: 70vw;
        }

        @media screen and (max-width: 500px) {
          height: 30vh;
        }

        &:before,
        &:after {
          position: absolute;
          content: "";
          transition: all 0.25s;
        }

        &:before {
          border-bottom: 4px solid $couleur-tertiaire;
          border-left: 4px solid $couleur-tertiaire;
          width: 10%;
          height: 33%;
          left: -15px;
          bottom: -15px;
        }

        &:after {
          border-top: 4px solid $couleur-noir;
          border-right: 4px solid $couleur-noir;
          width: 10%;
          height: 33%;
          top: -15px;
          right: -15px;
        }

        &:hover:before {
          width: 60%;
          height: 90%;
        }

        &:hover:after {
          width: 80%;
          height: 50%;
        }
      }
    }

    .sub-content {
      flex-direction: column;
      padding: 5% 10%;

      @media screen and (max-width: 500px) {
        padding: 5% 6%;
      }

      h1 {
        display: block;
        font-family: $font-titre;
        font-weight: 900;
        font-size: 50px;
      }

      p {
        display: block;
        font-family: $font-paragraphe;
        font-size: 20px;
        font-weight: 500;
        margin: 15px 0px;

        @media screen and (max-width: 500px) {
          font-size: 16px;
        }
      }

      .link {
        display: inline-block;
        background-color: $couleur-quaternaire;
        padding: 15px 40px;
        text-decoration: none;
        color: $couleur-blanc;
        font-size: 20px;
        font-weight: 600;
        font-family: $font-paragraphe;
        margin: 15px 0px;
        transition: all 0.3s ease-in-out;

        @media screen and (max-width: 500px) {
          font-size: 16px;
        }

        &:hover {
          background-color: $couleur-tertiaire;
          transform: translateX(10px);
        }
      }
    }
  }

  .container {
    display: block;
    position: relative;

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

      @media screen and (max-width: 500px) {
        font-size: 6.5vw;
        // padding: 15px 0;
      }

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
}

.experiences-section {
  display: flex;
  flex-direction: row;
  padding: 0% 3%;

  h2 {
    font-family: $font-titre;
    font-size: 35px;
    font-weight: 800;
    padding: 3% 1%;
    align-self: center;

    span {
      color: $couleur-tertiaire;
    }
  }

  @media screen and(max-width:900px) {
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    margin: 60px 0;
    padding: 0;
  }

  .mes-experiences {
    display: flex;
    flex-direction: column;
    padding: 7% 3%;
    margin: 1.5%;
    justify-content: space-evenly;
    flex: 1;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center center;
    color: $couleur-principale;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 500px) {
      padding: 10vh 20px;
    }

    &:hover {
      transform: translateY(-5px);
    }

    h2,
    .date,
    .poste-occupe,
    p {
      padding: 3px 0px;
    }

    img {
      width: 100%;
      height: 150px;
      object-fit: contain;
    }

    h3 {
      font-family: $font-titre;
      font-size: 35px;
      font-weight: 800;
      border-bottom: 2px solid $couleur-tertiaire;
      margin-bottom: 10px;
    }
    .date {
      font-family: $font-paragraphe;
      font-size: 16px;
      font-weight: 300;
    }

    .poste-occupe {
      font-family: $font-paragraphe;
      font-size: 20px;
      font-weight: 700;
    }

    p {
      font-family: $font-paragraphe;
      font-size: 16px;
      font-weight: 500;
      white-space: pre-wrap;
    }
  }
}

.formations-section {
  display: flex;
  flex-direction: row;
  padding: 0% 3%;

  h2 {
    font-family: $font-titre;
    font-size: 35px;
    font-weight: 800;
    padding: 3% 1%;
    align-self: center;

    span {
      color: $couleur-tertiaire;
    }
  }

  @media screen and (max-width: 500px) {
    margin: 60px 0;
    padding: 0;
  }

  @media screen and(max-width:900px) {
    flex-direction: column;
  }
  .mes-formations {
    display: flex;
    flex-direction: column;
    padding: 7% 3%;
    margin: 1.5%;
    justify-content: space-evenly;
    flex: 1;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center center;
    color: $couleur-principale;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 500px) {
      padding: 10vh 20px;
    }

    &:hover {
      transform: translateY(-5px);
    }

    h2,
    .date,
    .poste-occupe,
    p {
      padding: 3px 0px;
    }

    img {
      width: 100%;
      height: 125px;
      object-fit: contain;
      object-position: left;
      padding: 3% 0%;

      @media screen and(max-width:900px) {
        object-position: center;
      }
    }

    h3 {
      font-family: $font-titre;
      font-size: 35px;
      font-weight: 800;
      border-bottom: 2px solid $couleur-tertiaire;
      margin-bottom: 10px;
    }
    .date {
      font-family: $font-paragraphe;
      font-size: 16px;
      font-weight: 300;
    }

    p {
      font-family: $font-paragraphe;
      font-size: 16px;
      font-weight: 500;
      white-space: pre-wrap;
    }
  }
}

.competences-section {
  padding: 3%;
  background: linear-gradient(
    90deg,
    $couleur-principale 50%,
    $couleur-secondaire 50%
  );
  display: flex;
  align-items: center;
  flex-direction: column;
  // border-top: 5px solid $couleur-tertiaire;

  @media screen and(max-width:700px) {
    background: $couleur-secondaire;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }

  .competences-title {
    
    h1 {
      color: $couleur-principale;
      font-family: $font-paragraphe;
      font-size: 50px;
      margin-bottom: 40px;
      padding: 20px;
      text-align: center;
      background: linear-gradient(
        90deg,
        $couleur-secondaire 50%,
        $couleur-quaternaire 50%
      );

      @media screen and(max-width:700px) {
        background: transparent;
        color: $couleur-tertiaire;
        font-size: 45px;
      }

      span {
        font-family: $font-titre;
        font-weight: 600;

        @media screen and(max-width:700px) {
          color: $couleur-principale;
        }
      }
    }
  }

  .competences-layout {
    display: flex;
    flex-direction: row;

    @media screen and(max-width:700px) {
      flex-direction: column;
    }
  }

  .competences-design,
  .competences-developpement {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .competences-design {
    h2 {
      font-family: $font-titre;
      font-size: 40px;
      font-weight: 800;
      color: $couleur-secondaire;
      text-align: center;

      @media screen and(max-width:700px) {
        color: $couleur-blanc;
      }
    }
    .card {
      border: 2px solid $couleur-secondaire;
    }
  }

  .competences-developpement {
    h2 {
      font-family: $font-paragraphe;
      font-size: 40px;
      font-weight: 700;
      color: #a80d0d;
      text-align: center;
    }
    .card {
      border: 2px solid $couleur-principale;
    }
  }
}

.projets-section {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;

  .projets-section-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 1140px) {
      flex-direction: column;
      align-items: center;
    }

    h4 {
      align-self: left;
      font-family: $font-titre;
      font-weight: 800;
      color: $couleur-secondaire;
      font-size: 60px;
      margin: 60px 0 0 80px;
      padding: 3% 3% 1% 3%;

      @media screen and (max-width: 1140px) {
        margin: 60px 0 0 0;
      }

      @media screen and (max-width: 500px) {
        font-size: 45px;
      }

      &:before {
        content: "";
        width: 30%;
        height: 5px;
        background: linear-gradient(
          90deg,
          $couleur-secondaire 50%,
          $couleur-tertiaire 50%
        );
        position: absolute;
        margin-top: -15px;

        @media screen and (max-width: 500px) {
          width: 70vw;
        }
      }

      span {
        color: $couleur-tertiaire;
      }
    }

    a {
      text-decoration: none;
      align-self: flex-end;
      color: $couleur-secondaire;
      padding: $pad $extra;
      display: inline-block;
      border: $thick solid transparent;
      position: relative;
      font-size: 1.6em;
      font-weight: 700;
      cursor: pointer;
      margin: 0 7% 15px 0px;

      @media screen and (max-width: 1140px) {
        align-self: center;
        margin: 5%;
      }

      .text {
        font-family: $font-paragraphe;
        transform: translate3d(0, $pad, 0);
        display: block;
        transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;

        @media screen and (max-width: 500px) {
          text-align: center;
          font-size: 22px;
        }
      }

      &:after {
        position: absolute;
        content: "";
        bottom: -8px;
        left: $extra;
        right: $extra;
        height: $thick;
        background: $couleur-tertiaire;
        transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s,
          right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s,
          left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
        transform-origin: left;
      }
    }

    a:hover,
    a:active {
      .text {
        transform: translate3d(0, 0, 0);
        transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
      }

      &:after {
        transform: scale3d(0, 1, 1);
        right: -$thick;
        left: -$thick;
        transform-origin: right;
        transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s,
          right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
      }

      .line {
        transform: scale3d(1, 1, 1);

        &.-right {
          transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
          transform-origin: bottom;
        }

        &.-top {
          transition: transform 0.08s linear 0.4s;
          transform-origin: right;
        }

        &.-left {
          transition: transform 0.08s linear 0.48s;
          transform-origin: top;
        }

        &.-bottom {
          transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
          transform-origin: left;
        }
      }
    }

    .line {
      position: absolute;
      background: $couleur-tertiaire;

      &.-right,
      &.-left {
        width: $thick;
        bottom: -8px;
        top: -$thick;
        transform: scale3d(1, 0, 1);
      }

      &.-top,
      &.-bottom {
        height: $thick;
        left: -$thick;
        right: -$thick;
        transform: scale3d(0, 1, 1);
      }

      &.-right {
        right: -$thick;
        transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
        transform-origin: top;
      }

      &.-top {
        top: -$thick;
        transition: transform 0.08s linear 0.43s;
        transform-origin: left;
      }

      &.-left {
        left: -$thick;
        transition: transform 0.08s linear 0.51s;
        transform-origin: bottom;
      }

      &.-bottom {
        bottom: -8px;
        transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
        transform-origin: right;
      }
    }
  }

  .projets-main {
    display: flex;
    padding: 2%;
    flex-wrap: wrap;
    width: 100%;
    align-self: center;
    justify-content: center;

    &:hover .card-project {
      filter: saturate(0);
    }

    a {
      text-decoration: none;
    }

    .card-project {
      background-size: cover !important;
      background-position: center !important;
      border-radius: 15px;
      transform-origin: center;
      transition: filter 0.2s linear, transform 0.2s linear;
      padding: 10%;
      margin: 30px;
      height: 40vh;
      width: 25vw;

      @media screen and (max-width: 1140px) {
        width: 85vw;
      }

      @media screen and (max-width: 500px) {
        margin: 10px 15px;
      }

      .annee-projet {
        font-family: $font-paragraphe;
        font-weight: 300;
        color: $couleur-principale;
        font-size: 16px;
      }

      .categorie-projet {
        font-family: $font-paragraphe;
        font-weight: 500;
        color: $couleur-principale;
        font-size: 18px;
      }

      h1 {
        padding-top: 15px;
        font-family: $font-paragraphe;
        font-weight: 600;
        color: $couleur-principale;
        font-size: 30px;
      }

      &:hover {
        transform: scale(1.05);
        filter: saturate(1);
      }
    }
  }
}
</style>
