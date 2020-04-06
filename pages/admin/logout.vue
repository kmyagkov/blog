<template>
  <p>Logout ...</p>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth'],

  beforeCreate () {
    this.$store.dispatch('auth/logout')
    this.$router.push('/admin/login?message=logout')
  },

  head () {
    return {
      title: `Logout | ${process.env.appName}`
    }
  }
}
</script>

<style scoped>

</style>
