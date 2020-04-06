export default function ({ $axios, redirect, store }) {
  if (store.getters['auth/isAuthenticated']) {
    const token = store.getters['auth/token']

    $axios.interceptors.request.use((request) => {
      request.headers.common.Authorization = `Bearer ${token}`
      return request
    })
  }

  $axios.onError((error) => {
    const response = error.response

    if (response) {
      switch (response) {
        case 401:
          redirect('/admin/login?message=session')
          store.dispatch('auth/logout')
          break
        case 500:
          console.error('Server 500 error')
      }
    }
  })
}
