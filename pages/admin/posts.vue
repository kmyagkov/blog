<template>
  <el-table
    :data="posts"
    style="width: 100%"
  >
    <el-table-column
      label="Post title"
      prop="title"
    />
    <el-table-column
      label="Date"
      width="180"
    >
      <template slot-scope="{ row: { date } }">
        <i class="el-icon-time" />
        <span style="margin-left: 10px">{{ new Date(date).toLocaleDateString() }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Views"
      prop="views"
    >
      <template slot-scope="{ row: { views } }">
        <i class="el-icon-view" />
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Comments"
      prop="comments"
    >
      <template slot-scope="{ row: { comments } }">
        <i class="el-icon-chat-round" />
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Actions">
      <template slot-scope="{ row }">
        <el-button
          size="mini"
          @click="open(row._id)"
        >
          Edit
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="remove(row._id)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth'],
  async asyncData ({ store }) {
    const posts = await store.dispatch('post/fetchAdmin')
    return { posts }
  },
  methods: {
    open (id) {
      this.$router.push(`/admin/post/${id}`)
    },

    async remove (id) {
      try {
        await this.$confirm('Are you sure?', 'Attention', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        })
        await this.$store.dispatch('post/remove', id)
        this.posts = this.posts.filter(post => post._id !== id)

        this.$message.success('Post deleted')
      } catch (e) {}
    }
  }
}
</script>

<style scoped>

</style>
