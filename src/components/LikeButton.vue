<template>
    <button @click="toggleLike" :class="{'like-button' : !liked, 'dislike-button' : liked}">
        <span>{{value}}</span>
    </button>
</template>

<script>
export default {
    name: "LikeButton",
    data() {
        return {
            liked: false,
        }
    },
    methods: {
        toggleLike() {
            this.liked = !this.liked;
        },
    },
    props: {
        value: Number,
    },
}
</script>

<style>

.like-button {
    background-image: url(../assets/images/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}

.dislike-button {
    background-color: #01579b;
    background-image: url(../assets/images/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}
</style>