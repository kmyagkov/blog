<template>
  <el-card
    class="login"
    shadow="always"
  >
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      label-width="120px"
      label-position="top"
      @submit.native.prevent="submit"
    >
      <h1>
        Login
      </h1>
      <el-form-item label="Name" prop="name">
        <el-input v-model.trim="controls.name" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model.trim="controls.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          :loading="loading"
        >
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',
  data () {
    return {
      loading: false,
      controls: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: 'Name is required', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Password is required', trigger: 'blur' },
          { min: 6, message: 'Password must be at least 6 symbols', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    const { message } = this.$route.query
    let messageText = ''
    let messageType = 'info'

    switch (message) {
      case 'login':
        messageText = 'Please log in'
        break
      case 'logout':
        messageText = 'You\'re logged out'
        messageType = 'success'
        break
      case 'session':
        messageText = 'Session expired. Please log in'
        messageType = 'warning'
    }

    if (message) {
      this.$message[messageType](messageText)
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          try {
            const login = {
              name: this.controls.name,
              password: this.controls.password
            }

            await this.$store.dispatch('auth/login', login)
            this.$router.push('/admin')
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 600px;
}
</style>
