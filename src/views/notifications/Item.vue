<template>
  <div :class="classStyle">{{ notification.message }}</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    }
  },
  computed: {
    classStyle() {
      return 'notification notification-' + this.notification.type
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 3000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: mapActions('notification', ['remove'])
}
</script>

<style scoped>
.notification {
  margin-bottom: 10px;
  border: 1px dashed;
  padding: 5px 10px;
}

.notification-success {
  color: green;
}

.notification-error {
  color: red;
}
</style>
