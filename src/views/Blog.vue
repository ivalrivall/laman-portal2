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
import Article from "@/components/Article";

export default {
  name: "blog",
  components: {
    "article-page": Article
  }
};
</script>
