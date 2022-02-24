<template>
  <div class="todos_container todos_container_style">
    <h1>Todo List</h1>
    <div class="todo_items_container">
      <div v-if="loading" class="loading_container">
        <v-progress-circular
          :size="50"
          color="#8dc8ff"
          indeterminate
        />
      </div>
      <div v-for="(todo, idx) in list" :key="idx" class="todo_item_container">
        <div v-if="todo && !loading" class="checkbox_container">
          <input :id="todo.text" class="regular-checkbox" :checked="todo.done" type="checkbox" @change="toggle(todo)">
        </div>
        <label v-if="todo && !loading" :class="{ done: todo.done }" class="todo_item_label" :for="todo.text">{{ todo.text }}</label>
        <img v-if="todo && !loading" src="/trash.svg" alt="trash" class="todo_item_trash" @click="removeTodo({ todo })">
      </div>
    </div>
    <div class="input_container">
      <input v-model="text" placeholder="Please Enter Todo" class="todo_input" type="text" @keyup.enter="addTodo">
      <div class="plus_container" @click.prevent="addTodo">
        <img src="/plus.svg" alt="">
      </div>
      <!-- <button @click="remove">
        删除
      </button> -->
    </div>
  </div>
</template>

<script>
// https://vuex.vuejs.org/zh/
import { mapState, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'Todos',
  components: {
    // HelloWorld
  },
  props: {},
  data () {
    return {
      loading: false
    }
  },
  computed: {
    // 映射store.state
    ...mapState(['list']),
    ...mapFields(['text'])
  },
  async created () {
    const vm = this
    vm.loading = true
    await vm.getTodos()
    vm.loading = false
  },
  methods: {
    ...mapActions(['getTodos', 'setTodos', 'remove']),
    async addTodo () {
      const vm = this
      vm.loading = true
      await vm.setTodos()
      vm.loading = false
    },
    async removeTodo ({ todo }) {
      const vm = this
      vm.loading = true
      await vm.remove({ todo })
      vm.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/checkbox.scss';
  .loading_container{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 40px;
  }
  // 一整個框的設定
  .todos_container {
    max-width: 800px;
    margin: 70px auto;
    box-sizing: border-box;
    padding: 30px;
    row-gap: 30px;
  }
  .todos_container_style {
    background: white;
    @include border-setting;
  }
  .todo_items_container{
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
  // 單一個 todo item 的設定
  .todo_item_container {
    display: flex;
    align-items: center;
    padding: 0 22px;
    .checkbox_container {
      display: flex;
      align-items: center;
      flex-grow: 1;
      flex-basis: 24px;
      flex-shrink: 1;
    }
    .todo_item_label {
      font-size: 18px;
      line-height: 18px;
      flex-grow: 18;
      flex-shrink: 18;
      &.done {
        color: $primary;
      }
    }
    .todo_item_trash {
      cursor: pointer;
      flex-basis: 24px;
    }
  }
  // 輸入todo input
  .input_container {
    display: flex;
    align-items: center;
    column-gap: 30px;
    margin-top: 30px;
    .todo_input {
      @include border-setting;
      height: 34px;
      flex-grow: 9;
      padding: 0 0 0 14px;
    }
    .plus_container {
      padding: 7px;
      box-sizing: border-box;
      background-color: $primary;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: $border-radius;
    }
  }
</style>
