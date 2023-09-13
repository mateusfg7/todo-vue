<script lang="ts" setup>
import { PhTrash } from '@phosphor-icons/vue'

defineProps<{ todo: TodoData; removeFn: (id: string) => void; toggleFn: (id: string) => void }>()
</script>

<template>
  <div class="group flex items-center justify-between gap-5 rounded-lg p-2 text-xl animate-fade-up"
    :class="!todo.complete && 'bg-neutral-200/30'">
    <div class="flex w-full items-center gap-5 overflow-hidden">
      <input type="checkbox" title="Mark to-do as completed" :checked="todo.complete" @click="toggleFn(todo.id)"
        class="cursor-pointer rounded border border-neutral-700 bg-transparent p-3 text-vue-light focus:outline-none focus:ring-0" />
      <span :class="todo.complete && 'text-neutral-500 line-through'"
        class="overflow-hidden text-ellipsis whitespace-nowrap" :title="todo.name">{{ todo.name }}</span>
    </div>
    <button @click="removeFn(todo.id)" title="Delete to-do"
      class="text-neutral-500/20 transition-colors hover:text-red-700">
      <PhTrash weight="regular" />
    </button>
  </div>
</template>
