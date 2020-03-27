<template>
  <el-card class="comment">
    <header class="comment__header">
      <cite>Person name</cite>
      <time>{{ new Date().toLocaleString() }}</time>
    </header>
    <p class="comment__text">
      Comment text
    </p>
  </el-card>
</template>

<script>
export default {

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
