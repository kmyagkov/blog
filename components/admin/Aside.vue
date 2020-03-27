<template>
  <el-menu
    :default-active="$route.path"
    class="admin-nav"
    router
  >
    <el-menu-item
      v-for="item of nav.links"
      :key="item.route"
      :index="item.route"
    >
      <i :class="`el-icon-${item.icon}`" />
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      nav: {
        links: [
          {
            name: 'Analytics',
            route: '/admin',
            icon: 'data-analysis'
          },
          {
            name: 'Create post',
            route: '/admin/create',
            icon: 'document-add'
          },
          {
            name: 'Posts',
            route: '/admin/posts',
            icon: 'menu'
          },
          {
            name: 'Create user',
            route: '/admin/user',
            icon: 'user-solid'
          },
          {
            name: 'Logout',
            route: '/admin/logout',
            icon: 'back'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-nav {
  height: 100%;
}
</style>
