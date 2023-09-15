<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { PhPlus } from '@phosphor-icons/vue'
import { useToast } from 'vue-toastification'
import Todo from './components/TodoItem.vue'
import { slugger } from './lib/slugger'

const error = ref(false)
const todoInput = ref('')
const todoInputComponent = ref<HTMLDivElement>()
const todoList: { todos: TodoData[] } = reactive({
  todos: []
})
const completedPercentage = computed(() => {
  const totalOfTodos = todoList.todos.length

  if (totalOfTodos === 0) return 0

  const completedTodos = todoList.todos.filter((todo) => todo.complete).length

  return (completedTodos / totalOfTodos) * 100
})

const isEmpty = computed(() => todoList.todos.length < 1)

const toast = useToast()

function isTodoCreated(name: string) {
  const repeatedList = todoList.todos.filter(todo => slugger(todo.name) === slugger(name))

  if (repeatedList.length > 0) return true
  else return false
}

function addNewTodo(name: string) {
  // Prevent todo names less than 2 characters
  if (name.length < 2) {
    error.value = true
    toast.warning("The to-do name has to be more than 2 characters")
    return
  }

  // Prevent repeated todos
  if (isTodoCreated(name)) {
    error.value = true
    toast.warning("There is already a to-do with that name")
    return
  }


  todoList.todos.push({
    name: name,
    complete: false,
    id: slugger(name) + '_' + Date.now()
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  todoInput.value = ''

}

const randomTodos = [
  'Read "Foundation", Isaac Asimov.',
  'Watch "The Matrix"',
  'Watch "Inglourious Basterds"',
  'Watch "Mr. Robot" serie',
  'Play Skyrim game',
  'Listen "Da Ponte pra Cá", Racionais MC.',
]
const randomTodoTryTime = ref(1)

function addRandomTodo() {
  if (randomTodoTryTime.value > randomTodos.length) return

  const randomIndex = Math.floor(Math.random() * randomTodos.length)
  const randomTodo = randomTodos[randomIndex]


  if (isTodoCreated(randomTodo)) {
    randomTodoTryTime.value += 1
    addRandomTodo()
  }
  else {
    addNewTodo(randomTodo)
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

  addRandomTodo()

  todoInputComponent?.value?.addEventListener("animationend", () => {
    error.value = false
  })


})
</script>

<template>
  <div class="space-y-5">
    <div class="fixed top-0 left-0 right-0 w-full h-2" :class="todoList.todos.length > 0 && 'bg-neutral-100'">
      <div :data-percentage="completedPercentage"
        class='h-full bg-vue-light transition-all rounded-r-full data-[percentage="100"]:rounded-none'
        :style="{ width: completedPercentage + '%' }" />
    </div>
    <div :data-error="error" ref="todoInputComponent"
      class='content-container fixed bottom-20 space-y-1 data-[error="true"]:animate-shake'>
      <div class="flex items-stretch justify-between gap-3">
        <input type="text" v-model="todoInput" @keypress.enter="() => addNewTodo(todoInput)" placeholder="Some task"
          class="h-12 w-full rounded-lg border-none bg-neutral-200/95 p-3 text-xl backdrop-blur-[80px] focus:bg-neutral-100/95 focus:ring-2 focus:ring-vue-light transition-colors" />
        <button @click="() => addNewTodo(todoInput)"
          class="flex aspect-square h-12 items-center justify-center rounded-lg bg-vue-dark/70 text-xl text-white backdrop-blur-[80px] transition-colors hover:bg-vue-dark">
          <PhPlus weight="bold" />
        </button>
      </div>
    </div>

    <div class="space-y-1 content-container">
      <img src="/to-do-list.svg" :data-is-empty="isEmpty"
        class="fixed opacity-50 -translate-x-1/2 data-[is-empty='false']:opacity-10 transition-opacity duration-500 -translate-y-1/3 w-96 -z-10 top-1/3 left-1/2" />
      <Todo v-for="todo in todoList.todos" :key="todo.id" :todo="todo" :remove-fn="removeTodo"
        :toggle-fn="toggleTodoCheck" />
    </div>
  </div>
</template>

<style lang="postcss">
.content-container {
  @apply w-[22rem];
}
</style>

 
