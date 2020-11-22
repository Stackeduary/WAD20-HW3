<template>
    <div>
        <div class="post" v-for="post in posts" :key="post.id">
            <div class="post-author">
                <span class="post-author-info">
                    <img :src=post.author.avatar>
                    {{ post.author.firstname }} {{ post.author.lastname }}
                </span>
                <small>{{ post.createTime }}</small>
            </div>
            <div class="post-title">
                <h3>{{ post.text }}</h3>
            </div>

            <div v-if="post.media !== null">
                <div class="post-image" v-if="post.media.type === 'image'">
                    <img :src=post.media.url>
                </div>
                <div class="post-image" v-else-if="post.media.type === 'video'">
                    <video controls>
                        <source :src=post.media.url>
                    </video>
                </div>
            </div>

            <div class="post-actions">
                <button class="like-button"> {{ post.likes }}</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Posts",
    computed: {
        posts() {
            return this.$store.state.posts
        },
    },
    mounted() {
        this.$store.dispatch("getPosts");
    }

}
</script>

<style scoped>
.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.post .post-author {
    padding: 10px;
}

.post .post-author::after {
    content: "";
    display: block;
    clear: both;
}

.post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;
}

.post .post-author .post-author-info small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.post .post-image img, video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
}

.post .post-title h3 {
    display: inline;
}

</style>