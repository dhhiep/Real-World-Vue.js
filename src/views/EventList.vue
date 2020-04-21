<template>
  <div>
    <h1>Events for {{ user.name }}</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <template v-if="page > 1">
      <router-link :to="{ name: 'event', query: { page: page - 1 } }"
        >Prev</router-link
      >
      |
    </template>

    <router-link
      v-if="hasNextPage"
      :to="{ name: 'event', query: { page: page + 1 } }"
      >Next</router-link
    >
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    perPage() {
      return 5
    },
    hasNextPage() {
      return this.eventsTotal > this.perPage * this.page
    },
    ...mapState('user', ['user']),
    ...mapState('event', ['events', 'eventsTotal'])
  },
  // methods: mapActions('event', ['fetchEvents']),
  created() {
    this.$store.dispatch('event/fetchEvents', {
      page: this.page,
      perPage: this.perPage
    })
  }
}
</script>
