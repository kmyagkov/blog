<template>
  <el-row
    type="flex"
    justify="center"
  >
    <el-col
      :xs="24"
      :sm="18"
      :md="12"
      :lg="10"
    >
      <AppPost
        v-for="post of 3"
        :key="post"
      />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '~/components/Post'

export default {
  components: {
    AppPost
  },
  head () {
    return {
      title: 'Main'
    }
  }
}
</script>
