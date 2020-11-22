<template>
    <div>
        <Header></Header>
        <section class="main-container">
            <Posts></Posts>
        </section>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Posts from "@/components/Posts";

export default {
    name: 'BrowsePosts',
    components: {
        Header,
        Posts
    },

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