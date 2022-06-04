<template>
  <div class="main">
    <div class="article-section">
      <nuxt-link class="return-to" to="/portfolio-all"
        >↩ Retourner aux projets</nuxt-link
      >
      <div
        class="article-image-hero"
        :style="`background: linear-gradient(180deg, rgba(206,18,18,0.2) 0%,rgba(0,0,0,0.90) 90%), url(${post.acf.image_principale_du_projet.url});`"
      >
        <div class="content-top-image">
          <span class="always-projet">PROJET</span>
          <span class="annee-projet-single">{{
            post.acf.annee_du_projet
          }}</span>
        </div>

        <div class="content-bottom-image">
          <span class="categorie-projet-single">{{
            post.acf.categorie_du_projet
          }}</span>
          <h1>{{ post.acf.titre_du_projet }}</h1>
          <p>{{ post.acf.contexte_du_projet }}</p>
        </div>
      </div>

      <div class="article-banner-data">
        <div class="item-banner-data">
          <span>Outils utilisé(s)</span>
          <p
            v-for="outil in post.acf.outils_utilises_pour_le_projet"
            :key="outil.id"
          >
            - {{ outil }}
          </p>
        </div>

        <div class="item-banner-data">
          <span>Type de projet</span>
          <p>{{ post.acf.type_de_projet }}</p>
        </div>

        <div class="item-banner-data">
          <span>Client / Entreprise</span>
          <p>{{ post.acf.nom_du_client }}</p>
        </div>
      </div>

      <div class="article-content-objectifs">
        <h2>Objectif(s) du projet</h2>
        <p>{{ post.acf.objectifs_du_projet }}</p>
      </div>

      <div class="article-content-description">
        <h2>Description du projet</h2>
        <div
          class="description-html-content"
          v-html="this.post.acf.description_relative_au_projet"
        ></div>
      </div>

      <div class="article-gallery">
        <h2>Galerie d'images du projet</h2>
        <div class="gallery-layout">
          <a
            class="img-sup-projet"
            href="#img-1"
            v-if="post.acf.image_supplementaire_du_projet_1.url"
          >
            <img :src="post.acf.image_supplementaire_du_projet_1.url" />
          </a>
          <a href="#_" class="lightbox" id="img-1">
            <span
              :style="`background : url(${post.acf.image_supplementaire_du_projet_1.url});`"
            >
            </span>
          </a>

          <a
            class="img-sup-projet"
            href="#img-2"
            v-if="post.acf.image_supplementaire_du_projet_2.url"
          >
            <img :src="post.acf.image_supplementaire_du_projet_2.url" />
          </a>
          <a href="#_" class="lightbox" id="img-2">
            <span
              :style="`background : url(${post.acf.image_supplementaire_du_projet_2.url});`"
            >
            </span>
          </a>

          <a
            class="img-sup-projet"
            href="#img-3"
            v-if="post.acf.image_supplementaire_du_projet_3.url"
          >
            <img :src="post.acf.image_supplementaire_du_projet_3.url" />
          </a>
          <a href="#_" class="lightbox" id="img-3">
            <span
              :style="`background : url(${post.acf.image_supplementaire_du_projet_3.url});`"
            >
            </span>
          </a>

          <a
            class="img-sup-projet"
            href="#img-4"
            v-if="post.acf.image_supplementaire_du_projet_4.url"
          >
            <img :src="post.acf.image_supplementaire_du_projet_4.url" />
          </a>
          <a href="#_" class="lightbox" id="img-4">
            <span
              :style="`background : url(${post.acf.image_supplementaire_du_projet_4.url});`"
            >
            </span>
          </a>

          <a
            class="img-sup-projet"
            href="#img-5"
            v-if="post.acf.image_supplementaire_du_projet_5.url"
          >
            <img :src="post.acf.image_supplementaire_du_projet_5.url" />
          </a>
          <a href="#_" class="lightbox" id="img-5">
            <span
              :style="`background : url(${post.acf.image_supplementaire_du_projet_5.url});`"
            >
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: true,
  head() {
    return {
      title: "Théo Florès | Projet  - " + this.post.acf.titre_du_projet,
      meta: [
        {
          hid: "description",
          id: "description",
          name: "description",
          content: this.post.acf.contexte_du_projet,
        },
      ],
    };
  },
  asyncData({ params }) {
    return axios
      .get(
        `https://backend.theo-flores.fr/wp-json/acf/v3/portfolio/${params.id}`
      )
      .then((response) => {
        return { post: response.data };
      })
      .catch((error) => {
        return { error: error };
      });
  },

  data() {
    return {
      post: [],
      error: [],
    };
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.article-section {
  display: flex;
  margin-top: 15vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .return-to {
    font-family: $font-titre;
    font-size: 25px;
    font-weight: 400;
    color: $couleur-principale;
    background-color: $couleur-secondaire;
    text-decoration: none;
    padding: 15px;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translateX(-10px);
      background-color: $couleur-tertiaire;
    }
  }

  .article-image-hero {
    width: $largeurPostDesktop;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50vh;
    padding: 5% 5% 4% 5%;
    background-size: cover !important;
    background-position: center center !important;
    font-family: $font-paragraphe;
    border-radius: 15px;

    @media screen and (max-width: 1030px) {
      width: $largeurPostMobile;
      height: auto;
      padding: 10vh 5vw;
    }

    .content-top-image {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .always-projet {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0.5em;
        color: $couleur-principale;
      }
      .annee-projet-single {
        font-size: 20px;
        font-weight: 400;
        color: $couleur-principale;
      }
    }

    .content-bottom-image {
      display: flex;
      flex-direction: column;
      .categorie-projet-single {
        font-size: 20px;
        font-weight: 500;
        color: $couleur-principale;
        padding: 10px 0px;
      }

      h1 {
        font-family: $font-titre;
        font-size: 50px;
        font-weight: 500;
        color: $couleur-principale;

        @media screen and (max-width: 500px) {
          font-size: 35px;
          padding-bottom: 20px;
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        color: $couleur-principale;
        padding-right: 10vw;
      }
    }
  }

  .article-banner-data {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: $largeurPostDesktop;
    background-color: $couleur-secondaire;
    padding: 1%;
    margin: 5vh 0;
    border-radius: 15px;

    @media screen and (max-width: 1030px) {
      width: $largeurPostMobile;
      flex-direction: column;
      padding: 5% 3%;
    }

    .item-banner-data {
      flex-direction: column;
      padding: 1%;

      span {
        font-family: $font-titre;
        font-size: 25px;
        color: $couleur-principale;
        font-weight: 700;
      }

      p {
        font-family: $font-paragraphe;
        font-size: 18px;
        color: $couleur-principale;
        font-weight: 300;
        margin-top: 10px;
      }
    }
  }

  .article-content-objectifs {
    display: flex;
    flex-direction: column;
    width: $largeurPostDesktop;
    padding: 0 0 3% 0;

    @media screen and (max-width: 1030px) {
      width: $largeurPostMobile;
    }

    h2 {
      font-family: $font-titre;
      font-size: 35px;
      font-weight: 800;
      color: $couleur-secondaire;

      &:after {
        width: 20vw;
        height: 2px;
        background: $couleur-tertiaire;
        position: relative;
        content: "";
        display: block;
        margin: 10px 0;
      }
    }

    p {
      font-family: $font-paragraphe;
      font-size: 16px;
      font-weight: 500;
      color: $couleur-secondaire;
      padding: 15px 0;
    }
  }

  .article-content-description {
    display: flex;
    flex-direction: column;
    width: $largeurPostDesktop;
    padding: 0 0 3% 0;

    @media screen and (max-width: 1030px) {
      width: $largeurPostMobile;
    }

    h2 {
      font-family: $font-titre;
      font-size: 35px;
      font-weight: 800;
      color: $couleur-secondaire;

      &:after {
        width: 15vw;
        height: 2px;
        background: $couleur-tertiaire;
        position: relative;
        content: "";
        display: block;
        margin: 10px 0;
      }
    }

    .description-html-content {
      p {
        font-family: $font-paragraphe;
        font-size: 16px;
        font-weight: 500;
        color: $couleur-secondaire;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        padding: 15px 0;
      }

      li {
        font-family: $font-paragraphe;
        font-size: 16px;
        font-weight: 300;
        color: $couleur-secondaire;
      }

      img {
        // width: $largeurPostDesktop;
        // height: 500px;
        object-fit: contain;
        object-position: center;
        // height: 50vh;
        // box-shadow: 12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
        //   100px 100px 80px rgba(0, 0, 0, 0.07);
        // border-radius: 15px;
        margin: 20px;
        max-width: 65vw;
        max-height: 60vh;

        @media screen and (max-width: 1030px) {
          width: $largeurPostMobile;
          max-width: 80vw;
          max-height: 50vh;
        }

        @media screen and (max-width: 1110px) {
          margin: 20px 0;
        }
      }
    }
  }

  .article-gallery {
    display: flex;
    flex-direction: column;
    width: $largeurPostDesktop;
    padding: 0 0 3% 0;

    @media screen and (max-width: 1030px) {
      width: $largeurPostMobile;
    }

    h2 {
      font-family: $font-titre;
      font-size: 35px;
      font-weight: 800;
      color: $couleur-secondaire;

      &:after {
        width: 10vw;
        height: 2px;
        background: $couleur-tertiaire;
        position: relative;
        content: "";
        display: block;
        margin: 10px 0;
      }
    }

    .gallery-layout {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      .img-sup-projet {
        padding: 1%;
        img {
          width: 30vw;
          height: 30vh;
          // border-radius: 15px;
          object-fit: contain;
          transition: all 0.2s ease-in-out;

          &:hover {
            opacity: 0.8;
          }

          @media screen and (max-width: 1030px) {
            width: 43vw;
            object-fit: cover;
          }
        }
      }

      .lightbox {
        // display: none;
        visibility: hidden;
        opacity: 0;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 3%;
        background: rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease-in-out;

        &:target {
          // display: block;
          visibility: visible;
          opacity: 100;
        }

        span {
          display: block;
          width: 100%;
          height: 100%;
          background-position: center center !important;
          background-repeat: no-repeat !important;
          background-size: contain !important;
        }
      }
    }
  }
}
</style>
