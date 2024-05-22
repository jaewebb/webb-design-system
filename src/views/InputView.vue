<template>
  <div>
    <h1>Input</h1>
    <h2>Size</h2>
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 bg-slate-200 rounded-md mb-5">
      <div class="p-5">
        <h3>Large</h3>
        <WebbInput label="Large" size="large" />
      </div>
      <div class="p-5">
        <h3>Medium</h3>
        <WebbInput label="Medium" size="medium" />
      </div>
      <div class="p-5">
        <h3>Small</h3>
        <WebbInput label="Small" size="small" />
      </div>
    </div>

    <h2>Width</h2>
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 bg-slate-200 rounded-md mb-5">
      <div class="p-5">
        <h3>Large</h3>
        <WebbInput label="Large" width="large" />
      </div>
      <div class="p-5">
        <h3>Medium</h3>
        <WebbInput label="Medium" width="medium" />
      </div>
      <div class="p-5">
        <h3>Small</h3>
        <WebbInput label="Small" width="small" />
      </div>
    </div>

    <h2>Label Position</h2>
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 bg-slate-200 rounded-md mb-5">
      <div class="p-5 flex flex-col justify-between">
        <h3>Left</h3>
        <WebbInput label="Name" />
      </div>
      <div class="p-5">
        <h3>Top</h3>
        <WebbInput label="Name" labelPosition="top" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WebbInput from '@/components/input/WebbInput.vue'
</script>

<style scoped></style>
