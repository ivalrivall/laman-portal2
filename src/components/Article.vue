<template>
  <div>
    <div
      style="
        padding-top: 53px;
        padding-bottom: 10px;
        background: linear-gradient(0deg, #fff8f8, #fff8f8), #fff8f8;
      "
    >
      <b-container class="container-resi px-0">
        <b-row class="container-resi_wrapper">
          <b-col :sm="12" :md="12" :lg="6" class="container-resi_input-resi">
            <div class="d-flex align-items-center">
              <div class="d-block">
                <p class="container-resi_text-title pb-0">Back to Nature</p>
                <p class="container-resi_text-small pb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis earum delectus distinctio quidem possimus! Quidem,
                  nulla alias! Itaque laudantium corporis dolorum. Aut
                  voluptates voluptatum amet rerum, vero consequatur, accusamus
                  perspiciatis voluptatibus eum.
                </p>
              </div>
            </div>
          </b-col>
          <b-col :sm="12" :md="12" :lg="6">
            <div class="container-resi_illustration">
              <img
                src="@/assets/images/nature_1.svg"
                alt="nature_1"
                class="hero-illustration"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container style="margin-top: 100px; margin-bottom: 200px">
        <b-row>
          <p style="font-size: 40px; color: #fff; font-weight: bold">
            How its work
          </p>
        </b-row>
        <b-row>
          <b-col
            :sm="12"
            :md="6"
            :xl="6"
            v-for="(item, index) in articles"
            :key="index"
          >
            <p style="font-size: 36px; color: #000">{{ item.title }}</p>
            <p style="font-size: 14px; color: #000">{{ item.description }}</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div style="background: #0c206c">
      <b-container style="padding-top: 20px; padding-bottom: 20px">
        <b-row>
          <b-col>
            <img
              src="@/assets/images/fb.svg"
              alt="fb"
              style="height: 40px; width: auto; margin-right: 10px"
            />
            <img
              src="@/assets/images/tiktok.svg"
              alt="tiktok"
              style="height: 40px; width: auto; margin-right: 10px"
            />
            <img
              src="@/assets/images/youtube.svg"
              alt="youtube"
              style="height: 40px; width: auto; margin-right: 10px"
            />
            <img
              src="@/assets/images/instagram.svg"
              alt="instagram"
              style="height: 40px; width: auto; margin-right: 10px"
            />
            <img
              src="@/assets/images/twitter.svg"
              alt="twitter"
              style="height: 40px; width: auto"
            />
          </b-col>
          <b-col :sm="12" :md="6"></b-col>
          <b-col class="">
            <span class="text-white" style="font-weight: 700">
              Copyright 2022 @
            </span>
            <img src="@/assets/images/nova_footer.svg" alt="nova_footer" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Article",
  computed: {
    ...mapGetters({
      articles: "general/articles",
    }),
  },
  methods: {
    async getArticle() {
      try {
        const { data: response } = await this.$axios.post(
          `customer/app-content/article/paginate`,
          {
            perPage: 100,
            sort: "",
            page: "",
            title: "",
            url: "",
            description: "",
          }
        );
        this.$store.dispatch("general/setArticle", response.data.data);
      } catch (error) {
        const err = error ? error.message : error;
        this.$notify({
          title: "Perhatian",
          text: err,
          type: "warn",
          position: "top center",
        });
        console.log("error", error);
      }
    },
  },
  created() {
    this.getArticle();
  },
};
</script>
<style lang="scss" scoped>
.logo-image {
  background: linear-gradient(
      90.14deg,
      #121e86 0.88%,
      rgba(70, 89, 255, 0.65) 99.98%
    ),
    #fff8f8;
}
.container-resi {
  border-radius: 20px;
  color: #000000;
  &_wrapper {
    background-color: #ffffff;
    box-shadow: 0px 6px 15px 1px rgba(0, 0, 0, 0.25);
    padding-left: 0px;
    padding-right: 0px;
  }
  &_input-resi {
    margin-top: 150px;
  }
  &_text-title {
    font-size: 40px;
    font-weight: 700;
    line-height: 42.19px;
  }
  &_text-small {
    font-size: 15px;
    line-height: 20px;
  }
  &_illustration {
    // .road {
    //   position: relative;
    //   z-index: 1;
    //   top: -210px;
    //   float: right;
    // }
    .hero-illustration {
      padding-left: 100px;
      padding-right: 100px;
      margin-top: 100px;
      margin-bottom: 300px;
    }
  }
  &_input {
    &:focus {
      outline-width: 0px !important;
      outline: none !important;
    }
  }
  &_wrapper {
    min-height: 430px;
  }
}

@media (max-width: 567px) {
  .container-resi {
    &_illustration {
      display: none;
      .road {
        position: absolute;
        z-index: 1;
        top: 0px;
        // right: 12px;
      }
      .hero-illustration {
        position: absolute;
        z-index: 2;

        right: 40px;
      }
      .tree {
        visibility: hidden;
        position: relative;
        z-index: 2;
      }
    }
    &_input-resi {
      padding-left: 10px;
      padding-right: 10px;
    }
    &_wrapper {
      min-height: 355px;
      margin-right: 20px;
      margin-left: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
@media (min-width: 567px) {
  .container-resi {
    &_illustration {
      display: none;
      .road {
        position: absolute;
        z-index: 1;
        top: 0px;
        // right: 12px;
      }
      .hero-illustration {
        position: absolute;
        z-index: 2;

        right: 40px;
      }
      .tree {
        visibility: hidden;
        position: relative;
        z-index: 2;
      }
    }
    &_input-resi {
      padding-left: 20px;
      padding-right: 20px;
    }
    &_wrapper {
      margin-right: 20px;
      margin-left: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
@media (min-width: 768px) {
  .container-resi {
    &_illustration {
      display: none;
      .road {
        position: absolute;
        z-index: 1;
        top: 0px;
        // right: 12px;
      }
      .hero-illustration {
        position: absolute;
        z-index: 2;

        right: 40px;
      }
      .tree {
        visibility: hidden;
        position: relative;
        z-index: 2;
      }
    }
    &_input-resi {
      padding-left: 40px;
    }
  }
}
@media (min-width: 992px) {
  .container-resi {
    &_illustration {
      display: block;
      .road {
        position: absolute;
        z-index: 1;
        top: 0px;
        // right: 12px;
      }
      .hero-illustration {
        position: absolute;
        z-index: 2;

        right: 40px;
      }
      .tree {
        visibility: hidden;
        position: relative;
        z-index: 2;
      }
    }
  }
}
@media (min-width: 1200px) {
  .container-resi {
    &_illustration {
      display: block;
      .road {
        position: absolute;
        z-index: 1;
        top: 0px;
        // right: 12px;
      }
      .hero-illustration {
        position: absolute;
        z-index: 2;
        right: 40px;
      }
      .tree {
        visibility: visible;
        position: relative;
        z-index: 2;
      }
    }
  }
}
</style>
