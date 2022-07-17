<template>
  <b-container id="app" fluid>
    <notifications />
    <b-row style="background-color: #0c206c" class="px-5 py-3">
      <b-col :sm="8" :md="4" :lg="4" class="align-header">
        <img svg-inline src="@/assets/images/nova.svg" alt="logo" />
      </b-col>
      <b-col :sm="4" :md="4" :lg="4"></b-col>
      <b-col>
        <b-row>
          <b-col :sm="12" :md="3" :lg="3" class="align-header text-center">
            <router-link to="/">
              <span class="header-text"> Home</span>
            </router-link>
          </b-col>
          <b-col :sm="12" :md="3" :lg="3" class="align-header text-center">
            <router-link to="/blog">
              <span class="header-text"> Article</span>
            </router-link>
          </b-col>
          <b-col :sm="12" :md="3" :lg="3" class="align-header text-center">
            <span class="header-sign-up"> Sign Up</span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col align-self="stretch" class="px-0">
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
#app {
  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fbfaf8;
  margin-bottom: 0px;
  height: 100%;
}
</style>
<style lang="scss" scoped>
@media (max-width: 567px) {
  .align-header {
    text-align: center;
  }
}
@media (min-width: 567px) {
  .align-header {
    text-align: center;
  }
}
@media (min-width: 768px) {
  .align-header {
    text-align: center;
  }
}
@media (min-width: 992px) {
  .align-header {
    text-align: left;
  }
}
@media (min-width: 1200px) {
  .align-header {
    text-align: left;
  }
}
.header-text {
  font-size: 14px;
  font-weight: bold;
  color: white;
}
.header-sign-up {
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #e22929;
  border-radius: 30px;
  padding: 10px;
}
</style>
