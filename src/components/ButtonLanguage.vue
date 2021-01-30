<template>
  <div class="fixed bottom-6 right-6 z-10 bg-green-700 h-14 w-14 rounded-full">
    <div
      :text="$i18n.locale.toUpperCase()"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div
        @click.prevent="changeLanguage(lang.code)"
        v-for="(lang, key) in availableLocales"
        :key="key"
        class="text-white text-xl font-medium cursor-pointer"
      >
        {{ lang.code.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useButton } from '@/services/useTranslation'

export default defineComponent({
  name: 'ButtonLanguageVue',
  setup() {
    const { availableLocales, changeLanguage } = useButton()
    return {
      availableLocales,
      changeLanguage,
    }
  },
})
</script>

<style scoped></style>
