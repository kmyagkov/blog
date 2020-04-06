<template>
  <el-form
    ref="form"
    class="form"
    :model="controls"
    :rules="rules"
    label-width="120px"
    label-position="top"
    @submit.native.prevent="submit"
  >
    <h1>
      Create new user
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
        Add
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth'],
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
  methods: {
    submit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          try {
            const user = {
              name: this.controls.name,
              password: this.controls.password
            }

            await this.$store.dispatch('auth/createUser', user)
            this.$message.success('User was created successfully')

            this.controls.name = ''
            this.controls.password = ''
            this.loading = false
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
.form {
  max-width: 600px;
}
</style>
