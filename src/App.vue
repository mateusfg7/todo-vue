<script setup lang="ts">
import { reactive, ref } from 'vue'
import { PhPlus } from '@phosphor-icons/vue'
import Todo from './to-do.vue'

const slugger = (text: string) =>
  text.toLowerCase().trim().replace(' ', '-') + '-' + (Math.random() * 100).toFixed()

const todoInput = ref('')
const todoList: { todos: { name: string; id: string }[] } = reactive({ todos: [] })

function addNewTodo() {
  todoList.todos.push({ name: todoInput.value, id: slugger(todoInput.value) })
  todoInput.value = ''
}

function removeTodo(todoId: string) {
  todoList.todos = todoList.todos.filter((todo) => todo.id !== todoId)
}
</script>

<template>
  <div class="space-y-10">
    <div class="flex items-stretch justify-between gap-3">
      <input
        type="text"
        v-model="todoInput"
        @keypress.enter="addNewTodo"
        placeholder="Some task"
        class="border border-neutral-700 p-3 rounded-lg w-full focus:border-[#42b883] focus:ring-[#42b883]"
      />
      <button
        @click="addNewTodo"
        class="border border-[#35495e] text-[#35495e] p-4 rounded-lg transition-colors hover:bg-[#35495e] hover:text-white"
      >
        <PhPlus weight="bold" />
      </button>
    </div>
    <div class="space-y-1">
      <Todo
        v-for="todo in todoList.todos"
        :key="todo.id"
        :id="todo.id"
        :name="todo.name"
        :remove-fn="removeTodo"
      />
    </div>
  </div>
</template>

<style lang="postcss"></style>
