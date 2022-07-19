<template>
  <div>
    <b-row>
      <b-col>
        <landing-page />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import LandingPage from "@/components/LandingPage.vue";

export default {
  name: "Home",
  components: {
    LandingPage,
  },
};
</script>
