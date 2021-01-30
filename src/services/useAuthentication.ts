import { reactive, useContext } from '@nuxtjs/composition-api'
import { success, error } from '@/services/useToast'

export function useLogin() {
  const { $auth } = useContext()
  const state = reactive({
    email: '',
    password: '',
    remember_me: false,
  })

  async function handleSubmit() {
    try {
      const { data } = (await $auth.loginWith('local', { data: state })) as any
      success(`Welcome ${data.username} ! 👋`)
    } catch (error: any) {
      error.response.data.errors.forEach((error: any) => error(error.message))
    }
  }

  return {
    state,
    handleSubmit,
  }
}

export function logout() {
  const { $auth } = useContext()
  try {
    $auth.logout()
    success('You are now logged out')
  } catch (error: any) {
    error.response.data.errors.forEach((error: any) => error(error.message))
  }
}
