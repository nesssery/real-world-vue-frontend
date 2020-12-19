<template>
  <router-link
    class="router-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >
    <div class="event-card">
      <span>Le {{ event.date }} à {{ event.time }}</span>
      <h4>{{ event.title }}</h4>
      <span>{{ event.category }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      default: require
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.router-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
