<template>
  <div></div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ButtonLanguageVue',
  setup(props, context) {
    const { store, $i18n } = useContext() as any
    const availableLocales = computed(() =>
      store.$i18n.locales.filter((i: any) => i.code != store.$i18n.locale)
    )
    function changeLanguage(lang: string) {
      store.$i18n.setLocale(lang)
    }
    return {
      availableLocales,
      changeLanguage,
    }
    return {}
  },
})
</script>

<style scoped></style>
