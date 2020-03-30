<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    label-width="120px"
    label-position="top"
    class="comment-form"
    @submit.native.prevent="submit"
  >
    <h4 class="comment-form__title">
      Add comment
    </h4>
    <el-form-item label="Name" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>
    <el-form-item label="Comment text" prop="text">
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="2"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        :loading="loading"
      >
        Add comment
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: 'Name is required', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Comment text is required', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true

          const comment = {
            name: this.controls.name,
            text: this.controls.text,
            id: ''
          }
          try {
            this.$emit('commentAdded', comment)
            this.$message.success('Comment added')
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
.comment-form {
  padding: 1rem;
}

.comment-form__title {
  margin-bottom: 2rem;
}
</style>
