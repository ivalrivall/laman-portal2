<template>
  <div>
    <b-row>
      <b-col>
        <article-page />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "Blog",
  components: {
    "article-page": Article,
  },
};
</script>
