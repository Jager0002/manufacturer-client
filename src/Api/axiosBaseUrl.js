import axios from "axios"

const axiosBaseUrl = axios.create({
  baseURL: "http://localhost:5000",
})

const axiosBaseUrlPublic = axios.create({
  baseURL: "http://localhost:5000",
})

axiosBaseUrl.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export { axiosBaseUrl, axiosBaseUrlPublic }
