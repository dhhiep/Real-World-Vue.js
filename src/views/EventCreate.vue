<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <div>This event was created by {{ user.name }} (ID #{{ user.id }})</div>
    <hr />

    <div>List categories ({{ doneTodos.length }}/{{ catLength }})</div>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <hr />
    <p>
      {{ getTodoById(2) }}
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['catLength', 'doneTodos', 'getTodoById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style lang="scss" scoped></style>
