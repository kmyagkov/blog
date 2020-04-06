<template>
  <div class="empty">
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    error (e) {
      this.$message.error(e.response.data.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;
}
</style>
