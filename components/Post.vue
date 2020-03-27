<template>
  <el-card
    class="post"
    shadow="hover"
    :body-style="{padding: 0}"
  >
    <header
      slot="header"
      class="post__header"
    >
      <h3>Post title</h3>
      <time>{{ new Date().toLocaleString() }}</time>
    </header>
    <div class="post__body">
      <div class="post__image">
        <img
          src="https://img.huffingtonpost.com/asset/5e32082624000073080b6660.jpeg?cache=VRURFJSXt4&ops=scalefit_720_noupscale&format=webp"
          alt="Miami photo"
        >
      </div>
    </div>
    <footer class="post__footer">
      <el-button
        round
        @click="openPost"
      >
        Open post
      </el-button>
      <span>
        <i class="el-icon-chat-round" />
        10
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost () {
      this.$router.push(`/post/${this.$route.params.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
}

.post__image {
  img {
    width: 100%;
    height: auto;
  }
}

.post__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
</style>
