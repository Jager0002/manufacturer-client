import { useQuery } from "react-query"
import { axiosBaseUrlPublic } from "../Api/axiosBaseUrl"

const useParts = () => {
  const { data: parts, isLoading } = useQuery("", () =>
    axiosBaseUrlPublic("/parts").then((res) => res.data)
  )

  return { parts, isLoading }
}

export default useParts
