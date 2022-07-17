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
import LandingPage from "@/components/LandingPage";

export default {
  name: "home",
  components: {
    LandingPage
  }
};
</script>
