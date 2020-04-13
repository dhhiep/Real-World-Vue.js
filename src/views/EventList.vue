<template>
  <div>
    <h1>List Events</h1>

    <ul>
      <li>
        <router-link :to="{ name: 'event-show', params: { id: 1 } }"
          >Show Event #1</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'event-show', params: { id: 2 } }"
          >Show Event #2</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'event-show', params: { id: 3 } }"
          >Show Event #3</router-link
        >
      </li>
    </ul>
  </div>
</template>
