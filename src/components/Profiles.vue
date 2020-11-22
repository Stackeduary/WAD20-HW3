<template>
    <div>
        <div class="profile" v-for="user in users" :key="user.id">
            <div class="post-author">
                <img :src=user.avatar>
                <div class="text">
                    <p>{{ user.firstname | capitalize }} {{ user.lastname | capitalize }}</p>
                </div>
                <button class="follow-button">Follow</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Profiles.vue",
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch("getUsers");
    },
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
}
</script>

<style scoped>
.follow-button {
    background-color: #82008f;
}

.unfollow-button {
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}


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
</style>