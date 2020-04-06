<template>
  <section>
    <h1>
      Analytics
    </h1>
    <AppBarChart
      title="Views"
      :labels="analytics.views.labels"
      :data="analytics.views.data"
    />
    <AppBarChart
      title="Comments"
      :labels="analytics.comments.labels"
      :data="analytics.comments.data"
    />
  </section>
</template>

<script>
import AppBarChart from '~/components/admin/AnalyticsChart'

export default {
  components: {
    AppBarChart
  },
  layout: 'admin',
  middleware: ['auth'],

  async asyncData ({ store }) {
    const analytics = await store.dispatch('post/getAnalytics')
    return { analytics }
  }
}
</script>
