<template>
  <div class="main">
    <div class="portfolio-filter-section">
      <h1 class="portfolio-page-title">Mes <span>réalisations</span></h1>
      <div class="filters">
        <span
          class="filter"
          v-bind:class="{ active: currentFilter === 'Tous' }"
          v-on:click="setFilter('Tous')"
          >Tous</span
        >
        <span
          class="filter"
          v-bind:class="{ active: currentFilter === 'Communication digitale' }"
          v-on:click="setFilter('Communication digitale')"
          >Communication digitale</span
        >
        <span
          class="filter"
          v-bind:class="{ active: currentFilter === 'Développement Web' }"
          v-on:click="setFilter('Développement Web')"
          >Développement Web</span
        >
        <span
          class="filter"
          v-bind:class="{ active: currentFilter === 'Maquettage' }"
          v-on:click="setFilter('Maquettage')"
          >Maquettage</span
        >
        <span
          class="filter"
          v-bind:class="{ active: currentFilter === 'Motion Design' }"
          v-on:click="setFilter('Motion Design')"
          >Motion Design</span
        >
        <span
          class="filter"
          v-bind:class="{ active: currentFilter === 'Vidéo' }"
          v-on:click="setFilter('Vidéo')"
          >Vidéo</span
        >
        <span
          class="filter"
          v-bind:class="{ active: currentFilter === 'Visuels & Print' }"
          v-on:click="setFilter('Visuels & Print')"
          >Visuels & Print</span
        >
      </div>

      <div class="projets-section">
        <div
          class="projet"
          v-show="
            currentFilter === post.acf.categorie_du_projet ||
            currentFilter === 'Tous'
          "
          :key="post.id"
          v-for="post in posts"
        >
          <nuxt-link :to="{ name: 'portfolio-id', params: { id: post.id } }">
            <div
              class="projet-card"
              :style="`background: linear-gradient(180deg, rgba(206,18,18,0.1) 0%,rgba(0,0,0,0.95) 90%), url(${post.acf.image_principale_du_projet.url});`"
            >
              <div class="projet-content">
                <span class="annee-projet">{{ post.acf.annee_du_projet }}</span>
                <span class="categorie-projet">{{
                  post.acf.categorie_du_projet
                }}</span>
                <h1>{{ post.acf.titre_du_projet }}</h1>
                <!-- <p>{{ post.acf.contexte_du_projet }}</p> -->
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  head() {
    return {
      title: "Théo Florès - Tous mes projets",
      meta: [
        {
          hid: "description",
          id: "description",
          name: "description",
          content:
            "Retrouvez les différents projets personnels & professionnels de mon portfolio facilement. ",
        },
      ],
    };
  },
  components: true,
  data() {
    return {
      currentFilter: "Tous",
      posts: [],
      error: [],
    };
  },
  created() {
    this.fetchDataPosts();
  },
  watch: {
    $route: "fetchDataPosts",
  },

  methods: {
    fetchDataPosts() {
      return axios
        .get(
          "https://backend.theo-flores.fr/wp-json/acf/v3/portfolio/?per_page=30"
        )
        .then((response) => {
          this.posts = response.data;
          return;
        })
        .catch((error) => {
          return { error: error };
        });
    },
    setFilter: function (filter) {
      this.currentFilter = filter;
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";
.portfolio-filter-section {
  display: flex;
  flex-direction: column;
  margin-top: 15vh;

  .portfolio-page-title {
    font-family: $font-titre;
    font-size: 50px;
    font-weight: 600;
    color: $couleur-secondaire;
    align-self: center;
    text-align: center;

    span {
      color: $couleur-tertiaire;
    }
  }

  .filters {
    display: flex;
    justify-content: center;
    margin: 2% 0;

    @media screen and (max-width: 1070px) {
      flex-wrap: wrap;
      margin: 5% 0;
    }
    .filter {
      display: flex;
      flex-direction: row;
      padding: 2%;
      margin: 0.5%;
      border-radius: 15px;
      cursor: pointer;
      background-color: $couleur-principale;

      font-family: $font-paragraphe;
      font-size: 18px;
      font-weight: 600;

      transition: all 0.2s ease-in-out;

      @media screen and (max-width: 1070px) {
        padding: 4%;
        margin: 1%;
      }

      &.active {
        background-color: $couleur-tertiaire;
        font-weight: 700;
        color: $couleur-principale;
      }

      &:hover {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        transform: translateY(-0.25em);
      }
    }
  }

  .projets-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    // width: 90%;
    max-width: 100vw;

    a {
      text-decoration: none;

      &:hover .projet-card {
        transform: scale(0.97);
      }
    }

    .projet {
      display: flex;
      justify-content: center;

      .projet-card {
        display: flex;
        align-items: flex-end;
        margin: 15px;
        width: 25vw;
        height: 45vh;
        background-size: cover !important;
        background-position: center center !important;
        border-radius: 15px;
        transition: all 0.3s ease-in-out;

        // @media screen and (max-width: 1650px) {
        //   width: 27vw;
        // }

        @media screen and (max-width: 1150px) {
          width: 85vw;
        }

        .projet-content {
          display: flex;
          flex-direction: column;
          padding: 10%;

          .annee-projet {
            font-family: $font-paragraphe;
            font-size: 16px;
            font-weight: 300;
            color: $couleur-principale;
          }

          .categorie-projet {
            font-family: $font-paragraphe;
            font-size: 20px;
            font-weight: 500;
            color: $couleur-principale;
          }

          h1 {
            font-family: $font-paragraphe;
            font-size: 35px;
            font-weight: 500;
            color: $couleur-principale;
            margin: 10px 0;

            @media screen and (max-width: 500px) {
              font-size: 25px;
            }
          }

          // p {
          //   font-family: $font-paragraphe;
          //   font-size: 16px;
          //   font-weight: 300;
          //   color: $couleur-principale;
          //   margin: 10px 0;
          // }
        }
      }
    }
  }
}
</style>
