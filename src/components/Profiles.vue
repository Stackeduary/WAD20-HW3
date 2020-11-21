<template>
  <div>
    <div class="profile" v-for="(profile, id) in this.profiles" :key="id">
      <div class="post-author">
        <div class="profile img">
            <img :src=profile.avatar>
        </div>
        <div class="profile h2">
            {{ profile.firstname }} {{ profile.lastname }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "Profiles.vue",
  data() {
    return {
      profiles: []
    }
  },
  mounted() {
    axios.get("https://private-anon-4a70cf6323-wad20postit.apiary-mock.com/profiles")
        .then(res => {
          this.profiles = res.data;
          console.log(this.profiles)
        })
        .catch(error => {
          console.log(error)
          // Manage errors if found any
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