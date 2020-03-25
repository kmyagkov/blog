<template>
  <div class="error">
    <h1 class="error__title">Something went wrong :(</h1>
    <nuxt-link
      to="/"
      tag="el-link"
    >
      Back to home page
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.error__title {
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
