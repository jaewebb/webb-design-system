<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

import WebbButton from '@/components/button/WebbButton.vue'

const { locale, t } = useI18n()
function changeLocale() {
  locale.value === 'fr' ? (locale.value = 'en') : (locale.value = 'fr')
  console.log(locale.value)
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-slate-950 text-lime-500 px-5 py-7 flex justify-between">
      <div class="flex">
        <img src="./assets/logo.png" class="mr-2" style="height: 25px; width: 25px" />
        Webb Design System
      </div>
      <!-- <div>
        <WebbButton transparent mode="dark" @click="changeLocale">
          {{ locale === 'fr' ? 'English' : 'French' }}
        </WebbButton>
      </div> -->
    </header>
    <div class="grid md:grid-cols-6 xs:grid-cols-1 bg-slate-950 text-slate-50 grow">
      <nav class="flex flex-col p-5 lg:col-span-1 md:col-span-2">
        <RouterLink class="py-3" to="/">Getting Started</RouterLink>
        <RouterLink class="py-3" to="/button">{{ t('button') }}</RouterLink>
        <RouterLink class="py-3" to="/input">Input</RouterLink>
      </nav>
      <RouterView
        class="lg:col-span-5 md:col-span-4 mx-5 p-7 bg-slate-50 text-slate-950 grow rounded-lg"
      />
    </div>
    <footer class="bg-slate-950 text-lime-500 p-3">
      Built with <i class="fa-solid fa-zap" /> by Jae Webb
    </footer>
  </div>
</template>

<style>
@import '@/assets/webbdesignsystem.css';
</style>
