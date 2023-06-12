<script lang="ts" setup>
import { PhTrash } from '@phosphor-icons/vue'

defineProps<{ todo: TodoData; removeFn: (id: string) => void; toggleFn: (id: string) => void }>()
</script>

<template>
  <div
    class="group flex items-center justify-between gap-5 rounded-lg p-2 text-2xl"
    :class="!todo.complete && 'bg-neutral-200/30'"
  >
    <div class="flex w-full items-center gap-5 overflow-hidden">
      <input
        type="checkbox"
        :checked="todo.complete"
        @click="toggleFn(todo.id)"
        class="cursor-pointer rounded border border-neutral-700 bg-transparent p-3 text-vue-light focus:outline-none focus:ring-0"
      />
      <span
        :class="todo.complete && 'text-neutral-500 line-through'"
        class="overflow-hidden text-ellipsis"
        >{{ todo.name }}</span
      >
    </div>
    <button
      @click="removeFn(todo.id)"
      class="text-neutral-500/20 transition-colors hover:text-red-700"
    >
      <PhTrash weight="regular" />
    </button>
  </div>
</template>
