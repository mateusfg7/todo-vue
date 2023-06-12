<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { PhPlus } from '@phosphor-icons/vue'
import Todo from './components/TodoItem.vue'
import { slugger } from './lib/slugger'

const todoInput = ref('')
const todoList: { todos: TodoData[] } = reactive({
  todos: []
})
const completedPercentage = computed(() => {
  const totalOfTodos = todoList.todos.length

  if (totalOfTodos === 0) return 0

  const completedTodos = todoList.todos.filter((todo) => todo.complete).length

  return (completedTodos / totalOfTodos) * 100
})

function addNewTodo() {
  if (todoInput.value.length > 0) {
    todoList.todos.push({
      name: todoInput.value,
      complete: false,
      id: slugger(todoInput.value) + '_' + Date.now()
    })
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    todoInput.value = ''
  }
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
  <div class="space-y-5">
    <div
      class="fixed left-0 right-0 top-0 h-2 w-full"
      :class="todoList.todos.length > 0 && 'bg-neutral-100'"
    >
      <div
        class="h-full bg-vue-light transition-all"
        :style="{ width: completedPercentage + '%' }"
      />
    </div>
    <div class="content-container fixed bottom-20 space-y-1">
      <div class="flex items-stretch justify-between gap-3">
        <input
          type="text"
          v-model="todoInput"
          @keypress.enter="addNewTodo"
          placeholder="Some task"
          class="h-12 w-full rounded-lg border-none bg-neutral-200/80 p-3 text-xl backdrop-blur-[80px] focus:bg-neutral-200/10 focus:ring-2 focus:ring-vue-light"
        />
        <button
          @click="addNewTodo"
          class="flex aspect-square h-12 items-center justify-center rounded-lg bg-vue-dark/70 text-xl text-white backdrop-blur-[80px] transition-colors hover:bg-vue-dark"
        >
          <PhPlus weight="bold" />
        </button>
      </div>
    </div>

    <div class="content-container space-y-1">
      <Todo
        v-for="todo in todoList.todos"
        :key="todo.id"
        :todo="todo"
        :remove-fn="removeTodo"
        :toggle-fn="toggleTodoCheck"
      />
    </div>
  </div>
</template>

<style lang="postcss">
.content-container {
  @apply w-[22rem];
}
</style>
