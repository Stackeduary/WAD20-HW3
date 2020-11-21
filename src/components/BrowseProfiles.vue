<template>
  <div>
    <Header></Header>
    <section class="main-container">
      <!-- will be moved to the drop-down once it gets added -->
      <router-link to="/BrowseProfiles">temporary link to profiles page</router-link>
      <br>
      <router-link to="/Login">temporary link to the login page</router-link>
      <router-view></router-view>
      <Profiles></Profiles>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Profiles from "@/components/Profiles";
//import axios from "axios";

export default {
    name: "BrowseProfiles.vue",
    components: {
        Header,
        Profiles
    },
  data() {
    return {
      profilesList: []
    };
  },
  mounted() {
    fetch("https://private-anon-4a70cf6323-wad20postit.apiary-mock.com/profiles").then((res) => {
      return res.json();
    }).then((profiles) => {
      this.profilesList.push(...profiles);
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
.profile {
  width: 45%;
  display: inline-block;
  border: 1px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}

.profile img {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.profile h2 {
  font-size: 16px;
}

.follow-button {
  background-color: #82008f;
}

.follow-button.followed {
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
}
</style>