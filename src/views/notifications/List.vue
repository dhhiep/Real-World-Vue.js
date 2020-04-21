<template>
  <div class="notification-container">
    <NotificationItem
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NotificationItem from '@/views/notifications/Item.vue'

export default {
  components: {
    NotificationItem
  },
  computed: mapState('notification', ['notifications'])
}
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 15px;
  right: 15px;
}
</style>
