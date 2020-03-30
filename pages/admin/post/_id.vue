<template>
  <div>
    <el-breadcrumb
      separator="/"
      class="mb"
    >
      <el-breadcrumb-item to="/admin/posts">
        Posts
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      label-width="120px"
      label-position="top"
      @submit.native.prevent="submit"
      class="form"
    >
      <h1>
        Edit post
      </h1>
      <el-form-item label="Type text (.md / .html)" prop="text">
        <el-input
          v-model.trim="controls.text"
          type="textarea"
          resize="none"
          rows="10"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          :loading="loading"
        >
          Save
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth'],
  async asyncData ({ store, params }) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return { post }
  },
  data () {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Text is required', trigger: 'blur' }
        ]
      }
    }
  },
  validate ({ params }) {
    return !!params.id
  },
  methods: {
    submit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          try {
            const updatedPost = {
              text: this.controls.text,
              id: this.post._id
            }

            await this.$store.dispatch('post/update', updatedPost)
            this.$message.success('Post updated')
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
  margin-top: 1rem;
}
</style>
