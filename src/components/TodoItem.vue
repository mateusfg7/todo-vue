<script lang="ts" setup>
import { ref } from 'vue'
import { PhTrash } from '@phosphor-icons/vue'

defineProps<{ name: string; id: string; removeFn: (id: string) => void }>()

const isComplete = ref(false)
</script>

<template>
  <div
    class="group flex items-center justify-between gap-5 rounded-lg border p-2 text-2xl"
    :class="isComplete ? 'border-neutral-500/50' : 'border-neutral-700'"
  >
    <div class="flex items-center gap-5">
      <input
        type="checkbox"
        v-model="isComplete"
        class="cursor-pointer rounded border border-neutral-700 p-3 text-[#42b883] focus:outline-none focus:ring-0"
      />
      <span :class="isComplete && 'text-neutral-500 line-through'">{{ name }}</span>
    </div>
    <button @click="removeFn(id)" class="text-neutral-500/20 transition-colors hover:text-red-700">
      <PhTrash weight="regular" />
    </button>
  </div>
</template>
