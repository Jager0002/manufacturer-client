import axios from "axios"

const axiosBaseUrl = axios.create({
  baseURL: "https://blooming-plateau-18932.herokuapp.com",
})

const axiosBaseUrlPublic = axios.create({
  baseURL: "https://blooming-plateau-18932.herokuapp.com",
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
