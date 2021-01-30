import { useContext } from '@nuxtjs/composition-api'

export function success(message: string) {
  const { $toast } = useContext()
  $toast.success(message)
}

export function error(message: string) {
  const { $toast } = useContext()
  $toast.error(message)
}

export function info(message: string) {
  const { $toast } = useContext()
  $toast.info(message)
}
