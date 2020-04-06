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
        Create post
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

      <el-upload
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        drag
        :on-change="imageChange"
        :auto-upload="false"
      >
        <i class="el-icon-upload" />
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <div class="el-upload__tip">
          jpg/png
        </div>
      </el-upload>

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
        text: ''
      },
      image: null,
      previewDialog: false,
      rules: {
        title: [
          { required: true, message: 'Title is required', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Text is required', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    imageChange (file, fileList) {
      this.image = file.raw
    },
    submit () {
      this.$refs.form.validate(async (valid) => {
        if (valid && this.image) {
          this.loading = true

          try {
            const createdPost = {
              title: this.controls.title,
              text: this.controls.text,
              image: this.image
            }

            await this.$store.dispatch('post/create', createdPost)
            this.controls.title = ''
            this.controls.text = ''
            this.image = null
            this.$refs.upload.clearFiles()
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
