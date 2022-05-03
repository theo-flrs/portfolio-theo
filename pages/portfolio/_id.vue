<template>
  <section class="container">
    <div>
      <h1 class="title">{{ post.acf.nom_du_projet }}</h1>
      <span v-html="post.acf.description_du_projet"></span>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  head() {
    return {
      title: "Portfolio -" + this.post.acf.nom_du_projet,
      meta: [
        {
          hid: "description",
          id: "description",
          name: "description",
          content: this.post.acf.description_du_projet,
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
      post: {},
      error: [],
    };
  },
};
</script>
<style></style>
