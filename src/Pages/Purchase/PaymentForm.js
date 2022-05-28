import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import Spinner from "../../Components/Spinner/Spinner"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51L4NKwHavpuebZsyKutRtgK51gWt97os4fHb253KjtSzP0GHPMKa2oHJsOG8VunilJkFXvcwYB2sXtXzPSLafVMm00C4aLf3g3"
)
const PaymentForm = () => {
  const { id: orderId } = useParams()

  const { data, isLoading, refetch } = useQuery(["ordered", orderId], () =>
    axiosBaseUrl(`/order/${orderId}`).then((res) => res.data)
  )

  if (isLoading) return <Spinner />
  return (
    <div>
      <h2>please pay your payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} />
      </Elements>
    </div>
  )
}

export default PaymentForm
