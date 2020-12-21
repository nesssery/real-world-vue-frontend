import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
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
    return apiClient.get("/events/" + id + "/")
  }
}
