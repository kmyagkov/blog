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
        <small>{{ new Date().toLocaleString() }}</small>
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
  </article>
</template>

<script>
export default {
  validate ({ params }) {
    return !!params.id
  }
}
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #909399;
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
</style>
