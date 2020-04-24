<template>
  <div>
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
        Create post 123123
      </h1>
      <el-form-item label="Title" prop="title">
        <el-input
          v-model="controls.title"
        />
      </el-form-item>
      <el-form-item label="Type text (.md / .html)" prop="text">
        <el-input
          v-model="controls.text"
          type="textarea"
          resize="none"
          rows="10"
        />
      </el-form-item>
      <el-dialog
        title="Text preview"
        :visible.sync="previewDialog"
      >
        <vue-markdown :source="controls.text" />
      </el-dialog>

      <el-form-item>
        <p>Add post image: download file from your OS or enter external link</p>
      </el-form-item>

      <el-form-item
        label="Image URL"
        prop="imageURL"
      >
        <el-input
          v-model="controls.imageURL"
        />
      </el-form-item>

      <footer class="form__footer">
        <el-button
          type="success"
          plain
          @click="previewDialog = true"
        >
          Show text preview
        </el-button>
        <el-button
          type="primary"
          native-type="submit"
          :loading="loading"
        >
          Create
        </el-button>
      </footer>
    </el-form>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  layout: 'admin',
  middleware: ['auth'],
  components: {
    VueMarkdown
  },
  async asyncData ({ store, params }) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return { post }
  },
  data () {
    return {
      loading: false,
      controls: {
        title: '',
        text: '',
        imageURL: ''
      },
      previewDialog: false,
      rules: {
        title: [
          { required: true, message: 'Title is required', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Text is required', trigger: 'blur' }
        ],
        imageURL: [
          { required: true, message: 'Image is required', trigger: 'blur' }
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
            const createdPost = {
              title: this.controls.title,
              text: this.controls.text,
              imageURL: this.controls.imageURL
            }

            await this.$store.dispatch('post/create', createdPost)
            this.controls.title = ''
            this.controls.text = ''
            this.controls.imageURL = ''
            this.$message.success('Post created')
          } catch (e) {} finally {
            this.loading = false
          }
        }
      })
    }
  },
  head () {
    return {
      title: `Create post | ${process.env.appName}`
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  max-width: 600px;
}

.form__footer {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>
