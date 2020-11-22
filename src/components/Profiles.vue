<template>
    <div>
        <div class="profile" v-for="user in users" :key="user.id">
            <div class="post-author">
                <img :src=user.avatar>
                <div class="text">
                    <p>{{ user.firstname }} {{ user.lastname }}</p>
                </div>
                <FollowButton></FollowButton>
            </div>
        </div>
    </div>
</template>

<script>

import FollowButton from "@/components/FollowButton";

export default {
    name: "Profiles",
    components: {
        FollowButton
    },
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch("getUsers");
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