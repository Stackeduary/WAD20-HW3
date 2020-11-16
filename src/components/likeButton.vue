<template>
  <button :class="{'like' : !selected, 'unlike' : selected}" @click="toggleItem">
    <span v-if="!selected"></span>
    <span v-if="selected"></span>
  </button>
</template>

<script>
export default {
  name: "likeButton.vue",
  computed: {
    selected: function () {
      return this.$store.getters.postLiked(this.index)
    }
  },
  props: {
    index: Number,
  },
  methods: {
    likePost: function() {
      this.$store.commit('likePost', this.index)
    }
  }
}
</script>

<style scoped>

</style>