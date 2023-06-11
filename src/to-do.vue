<script lang="ts" setup>
import { ref } from 'vue'
import { PhTrash } from '@phosphor-icons/vue'

defineProps<{ name: string; id: string; removeFn: (id: string) => void }>()

const isComplete = ref(false)
</script>

<template>
  <div class="flex items-center justify-between gap-5 text-2xl group">
    <div class="flex items-center gap-5">
      <input
        type="checkbox"
        v-model="isComplete"
        class="border border-neutral-700 p-3 rounded focus:outline-none focus:ring-0"
      />
      <span :class="isComplete && 'line-through text-neutral-500'">{{ name }}</span>
    </div>
    <button @click="removeFn(id)" class="transition-opacity opacity-0 group-hover:opacity-100">
      <PhTrash weight="duotone" class="text-red-700" />
    </button>
  </div>
</template>
