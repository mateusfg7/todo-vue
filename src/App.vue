<script setup lang="ts">
import { reactive, ref } from 'vue'
import { PhPlus } from '@phosphor-icons/vue'
import Todo from './to-do.vue'

const slugger = (text: string) =>
  text.toLowerCase().trim().replace(' ', '-') + '-' + (Math.random() * 100).toFixed()

const todoInput = ref('')
const todoList = reactive({ todos: [{ name: 'task 1', id: slugger('task 1') }] })

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
        class="border border-neutral-700 p-2 rounded-lg w-full"
      />
      <button
        @click="addNewTodo"
        class="border border-neutral-700 text-neutral-700 p-3 rounded-lg transition-colors hover:bg-neutral-700 hover:text-neutral-100"
      >
        <PhPlus />
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
