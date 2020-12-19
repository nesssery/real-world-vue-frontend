import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://real-world-vue-gacq.onrender.com/api",
  withCredentials: false,
  header: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getEvents() {
    return apiClient.get("/events/")
  },
  getEvent(id) {
    return apiClient.get("/events/" + id)
  }
}
