<template>
  <el-container>
    <el-header>
      <AppNavigation />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import AppNavigation from '~/components/layout/Navigation'

export default {
  components: {
    AppNavigation
  }
}
</script>
