<template>
  <article class="post">
    <header class="post__header">
      <nuxt-link to="/">
        <i class="el-icon-back" />
      </nuxt-link>
      <h1 class="post__title">
        {{ post.title }}
      </h1>
      <div class="post__meta">
        <time>{{ post.date | date }}</time>
        <small>
          <i class="el-icon-view" />
          {{ post.views }}
        </small>
      </div>
    </header>
    <div class="post__image">
      <img
        :src="post.imageURL"
        :alt="post.title"
      >
    </div>
    <div class="post__content">
      <vue-markdown :source="post.text" />
    </div>
    <AppCommentForm
      v-if="isCommentsFormShown"
      class="post__comments-form"
      :post-id="post._id"
      @commentAdded="addComment"
    />
    <footer class="post__footer">
      <div v-if="post.comments.length" class="post__comments">
        <AppComment
          v-for="comment of post.comments"
          :key="comment._id"
          :comment="comment"
          class="post__comment"
        />
      </div>
      <p v-else class="post__tip">
        No comments yet...
      </p>
    </footer>
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import AppComment from '~/components/Comment'
import AppCommentForm from '~/components/CommentForm'

export default {
  components: {
    AppComment,
    AppCommentForm,
    VueMarkdown
  },
  async asyncData ({ store, params }) {
    const post = await store.dispatch('post/fetchById', params.id)
    await store.dispatch('post/addView', post)
    return { post }
  },
  data () {
    return {
      isCommentsFormShown: true
    }
  },
  methods: {
    addComment (comment) {
      this.post.comments.unshift(comment)
      this.isCommentsFormShown = false
    }
  },
  head () {
    return {
      title: this.post.title
    }
  },
  validate ({ params }) {
    return !!params.id
  }
}
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 10px;
}

.post__header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: baseline;
  padding: 1rem;
}

.post__title {
  flex-grow: 1;
  margin: 0 1rem;
}

.post__image {
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.post__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.post__content {
  padding: 1rem;
}

.post__comments-form {
  border-top: 1px solid var(--border-color);
}

.post__footer {
  border-top: 1px solid var(--border-color);
}

.post__comment {
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
}

.post__comments {
  padding: 1rem;
}

.post__tip {
  padding: 1rem;
  text-align: center;
}
</style>
