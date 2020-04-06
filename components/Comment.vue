<template>
  <el-card class="comment">
    <header class="comment__header">
      <cite>{{ comment.name }}</cite>
      <time>{{ new Date(comment.date).toLocaleString() }}</time>
    </header>
    <p class="comment__text">
      {{ comment.text }}
    </p>
  </el-card>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.comment__header {
  display: flex;
  justify-content: space-between;
}

.comment__text {
  white-space: pre-line;
}
</style>
