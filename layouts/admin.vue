<template>
  <div class="admin">
    <el-container class="admin__container">
      <el-aside class="admin__aside" width="250px">
        <AppAside />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppAside from '~/components/admin/Aside'

export default {
  components: {
    AppAside
  }
}
</script>

<style lang="scss" scoped>
.admin {
  width: 100%;
  height: 100vh;
}

.admin__container {
  height: 100%;
}

.admin__aside {
  color: white;
  background: #409EFF;
}
</style>
