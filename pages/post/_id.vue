<template>
  <article class="post">
    <header class="post__header">
      <nuxt-link to="/">
        <i class="el-icon-back" />
      </nuxt-link>
      <h1 class="post__title">
        Post title
      </h1>
      <div class="post__meta">
        <time>{{ new Date().toLocaleString() }}</time>
        <small>
          <i class="el-icon-view" />
          100
        </small>
      </div>
    </header>
    <div class="post__image">
      <img
        src="https://img.huffingtonpost.com/asset/5e32082624000073080b6660.jpeg?cache=VRURFJSXt4&ops=scalefit_720_noupscale&format=webp"
        alt="Miami photo"
      >
    </div>
    <div class="post__content">
      <p>Lorem lorem</p>
    </div>
    <AppCommentForm
      v-if="isCommentsFormShown"
      class="post__comments-form"
      @commentAdded="addComment"
    />
    <footer class="post__footer">
      <div v-if="true" class="post__comments">
        <AppComment
          v-for="comment of 5"
          :key="comment"
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
import AppComment from '~/components/Comment'
import AppCommentForm from '~/components/CommentForm'

export default {
  components: {
    AppComment,
    AppCommentForm
  },
  data () {
    return {
      isCommentsFormShown: true
    }
  },
  methods: {
    addComment (comment) {
      this.isCommentsFormShown = false
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
  padding: 1rem;
  border-top: 1px solid var(--border-color);
}

.post__comment {
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
}

.post__tip {
  text-align: center;
}
</style>
