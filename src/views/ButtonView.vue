<template>
  <div>
    <h1>{{ t('buttons') }}</h1>
    <h2>{{ t('intent') }}</h2>
    <div
      class="grid lg:grid-cols-5 sm:grid-cols-2 xs:grid-cols-1 bg-slate-200 rounded-md mb-5 text-center"
    >
      <div class="p-5">
        <h3>{{ t('primary') }}</h3>
        <WebbButton>
          {{ t('submit') }}
        </WebbButton>
      </div>
      <div class="p-5">
        <h3>{{ t('secondary') }}</h3>
        <WebbButton intent="secondary">
          {{ t('learnMore') }}
        </WebbButton>
      </div>
      <div class="p-5">
        <h3>{{ t('danger') }}</h3>
        <WebbButton intent="danger">
          {{ t('delete') }}
        </WebbButton>
      </div>
      <div class="p-5">
        <h3>{{ t('success') }}</h3>
        <WebbButton intent="success">
          {{ t('register') }}
        </WebbButton>
      </div>
      <div class="p-5">
        <h3>{{ t('warning') }}</h3>
        <WebbButton intent="warning">
          {{ t('cancel') }}
        </WebbButton>
      </div>
    </div>

    <h2>{{ t('size') }}</h2>
    <div
      class="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 bg-slate-200 rounded-md mb-5 text-center"
    >
      <div class="p-5">
        <h3>{{ t('large') }}</h3>
        <WebbButton size="large">
          {{ t('getStarted') }}
        </WebbButton>
      </div>
      <div class="p-5">
        <h3>{{ t('medium') }}</h3>
        <WebbButton>
          {{ t('submit') }}
        </WebbButton>
      </div>
      <div class="p-5">
        <h3>{{ t('small') }}</h3>
        <WebbButton size="small">
          {{ t('tryMe') }}
        </WebbButton>
      </div>
    </div>

    <h2>{{ t('Icons') }}</h2>
    <div
      class="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 bg-slate-200 rounded-md mb-5 text-center"
    >
      <div class="p-5">
        <WebbButton icon="cat">
          {{ t('icon') }}
        </WebbButton>
      </div>
      <div class="p-5">
        <WebbButton icon="cat" iconPosition="right">
          {{ t('iconPositionRight') }}
        </WebbButton>
      </div>
      <div class="p-5">
        <WebbButton icon="heart" :ariaLabel="t('addToFavorites')" />
      </div>
    </div>

    <h2>{{ t('outlined') }}</h2>
    <div
      class="grid lg:grid-cols-5 sm:grid-cols-2 xs:grid-cols-1 border-2 border-slate-200 rounded-md mb-5 p-5 text-center"
    >
      <WebbButton class="p-5" outlined>
        {{ t('cancel') }}
      </WebbButton>
      <WebbButton class="p-5" intent="secondary" outlined>
        {{ t('secondary') }}
      </WebbButton>
      <WebbButton class="p-5" intent="danger" outlined>
        {{ t('danger') }}
      </WebbButton>
      <WebbButton class="p-5" intent="success" outlined>
        {{ t('success') }}
      </WebbButton>
      <WebbButton class="p-5" intent="warning" outlined>
        {{ t('warning') }}
      </WebbButton>
    </div>
    <h2>{{ t('transparent') }}</h2>
    <div class="grid grid-cols-1 border-2 border-slate-200 rounded-md p-5 text-center">
      <div class="p-5">
        <WebbButton icon="pencil" transparent>
          {{ t('edit') }}
        </WebbButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import WebbButton from '@/components/button/WebbButton.vue'

const { t } = useI18n()
</script>

<style scoped></style>
