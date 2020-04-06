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
      <h3>{{ post.title }}</h3>
      <time>{{ new Date(post.date).toLocaleString() }}</time>
    </header>
    <div class="post__body">
      <div class="post__image">
        <img
          :src="post.imageURL"
          :alt="post.title"
        >
      </div>
      <div class="post__text">
        <vue-markdown :source="post.text" />
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
        {{ post.comments.length }}
      </span>
    </footer>
  </el-card>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    VueMarkdown
  },
  methods: {
    openPost () {
      const id = this.post._id
      this.$router.push(`/post/${id}`)
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

.post__text {
  padding: 1rem;
}

.post__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid var(--border-color);
}
</style>
