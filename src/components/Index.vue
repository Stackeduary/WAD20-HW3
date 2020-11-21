<template>
    <div class="post">
        <div v-for="(post, index) in posts" :key="index">
            <img :src="post.mediaURL">
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Index',
        computed: {
            posts: function () {
                return this.$store.state.posts
            }
        }
    }
</script>