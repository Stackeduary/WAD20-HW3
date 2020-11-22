<template>
    <button @click="toggleFollow" :class="{'follow-button' : !followed, 'unfollow-button' : followed}">
        <span v-if="!followed">Follow</span>
        <span v-if="followed">Followed</span>
    </button>
</template>

<script>
export default {
    name: "FollowButton",
    data() {
        return {
            followed: false,
        }
    },
    methods: {
        toggleFollow() {
            this.followed = !this.followed;
        },
    }
}
</script>