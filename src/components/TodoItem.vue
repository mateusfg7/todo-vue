<script lang="ts" setup>
import { PhTrash } from '@phosphor-icons/vue'

defineProps<{ todo: TodoData; removeFn: (id: string) => void; toggleFn: (id: string) => void }>()
</script>

<template>
  <div class="flex items-center justify-between gap-5 p-2 text-xl rounded-lg group animate-fade-up"
    :class="!todo.complete && 'bg-neutral-200/30'">
    <div class="flex items-center w-full gap-5 overflow-hidden">
      <input type="checkbox" title="Mark to-do as completed" :checked="todo.complete" @click="toggleFn(todo.id)"
        class="p-3 bg-transparent border rounded cursor-pointer border-neutral-700 text-vue-light focus:outline-none focus:ring-0" />
      <span :class="todo.complete && 'text-neutral-500 line-through'"
        class="overflow-hidden text-ellipsis whitespace-nowrap" :title="todo.name">{{ todo.name }}</span>
    </div>
    <button @click="removeFn(todo.id)" title="Delete to-do"
      class="transition-colors text-neutral-500/20 hover:text-red-700">
      <PhTrash weight="regular" />
    </button>
  </div>
</template>
