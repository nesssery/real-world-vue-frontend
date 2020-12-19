<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>Le {{ event.date }} à {{ event.time }} @{{ event.location }}</p>
    <span>{{ event.category }}</span>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js"

export default {
  props: ["id"],
  data() {
    return {
      event: null
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        console.log(response.data)
        this.event = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped></style>
