<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { PhPlus } from '@phosphor-icons/vue'
import Todo from './components/TodoItem.vue'
import { slugger } from './lib/slugger'

const todoInput = ref('')
const todoList: { todos: TodoData[] } = reactive({
  todos: []
})
const reverseTodoList = computed(() => todoList.todos.slice().reverse())
const completedPercentage = computed(() => {
  const totalOfTodos = todoList.todos.length

  if (totalOfTodos === 0) return 0

  const completedTodos = todoList.todos.filter((todo) => todo.complete).length

  return (completedTodos / totalOfTodos) * 100
})

function addNewTodo() {
  todoList.todos.push({ name: todoInput.value, complete: false, id: slugger(todoInput.value) })
  todoInput.value = ''
}

function removeTodo(todoId: string) {
  todoList.todos = todoList.todos.filter((todo) => todo.id !== todoId)
}

function toggleTodoCheck(todoId: string) {
  const targetTodoIndex = todoList.todos.findIndex((todo) => todo.id === todoId)
  const currValue = todoList.todos[targetTodoIndex].complete

  todoList.todos[targetTodoIndex].complete = !currValue
}

watch(todoList, () => {
  localStorage.setItem('todos', JSON.stringify(todoList.todos))
})

onMounted(() => {
  const savedTodoList = localStorage.getItem('todos')

  if (savedTodoList) {
    const parsedTodoList: TodoData[] = JSON.parse(savedTodoList)
    todoList.todos.push(...parsedTodoList)
  }
})
</script>

<template>
  <div class="space-y-10">
    <div class="space-y-3">
      <div class="flex items-stretch justify-between gap-3">
        <input
          type="text"
          v-model="todoInput"
          @keypress.enter="addNewTodo"
          placeholder="Some task"
          class="w-full rounded-lg border border-neutral-700 p-3 focus:border-[#42b883] focus:ring-[#42b883]"
        />
        <button
          @click="addNewTodo"
          class="rounded-lg border border-[#35495e] p-4 text-[#35495e] transition-colors hover:bg-[#35495e] hover:text-white"
        >
          <PhPlus weight="bold" />
        </button>
      </div>
      <div
        class="h-2 w-full overflow-hidden rounded-lg"
        :class="todoList.todos.length > 0 && 'bg-neutral-500/5'"
      >
        <div
          class="h-full rounded-lg bg-[#42b883] transition-all"
          :style="{ width: completedPercentage + '%' }"
        />
      </div>
    </div>
    <div class="space-y-1">
      <Todo
        v-for="todo in reverseTodoList"
        :key="todo.id"
        :todo="todo"
        :remove-fn="removeTodo"
        :toggle-fn="toggleTodoCheck"
      />
    </div>
  </div>
</template>

<style lang="postcss"></style>
