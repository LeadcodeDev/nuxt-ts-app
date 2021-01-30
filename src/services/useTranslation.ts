import { computed, useContext } from '@nuxtjs/composition-api'

export function useButton() {
  const { store } = useContext() as any
  const availableLocales = computed(() => {
    return store.$i18n.locales.filter((i: any) => i.code != store.$i18n.locale)
  })

  function changeLanguage(lang: string) {
    store.$i18n.setLocale(lang)
  }

  return {
    availableLocales,
    changeLanguage,
  }
}
