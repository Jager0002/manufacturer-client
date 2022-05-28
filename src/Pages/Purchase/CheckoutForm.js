import React, { useEffect, useState } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { axiosBaseUrl } from "../../Api/axiosBaseUrl"
import { toast } from "react-toastify"

const CheckoutForm = ({ data }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [transactionId, setTransactionId] = useState("")

  const [clientSecret, setClientSecret] = useState("")

  const { partname, productid, totalPrice, _id, name, email } = data

  useEffect(() => {
    axiosBaseUrl.post(`/create-payment-intent`, data).then((res) => {
      if (res.data?.clientSecret) {
        setClientSecret(res.data?.clientSecret)
      }
    })
  }, [data])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    })
    if (error) {
      toast.error(error.message)
    }
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      })
    if (intentError) {
      toast.error("got error")
    } else {
      setTransactionId(paymentIntent.id)
      toast.success("payment done")
      const payment = {
        productid: productid,
        transactionId: paymentIntent.id,
        paid: true,
      }
      axiosBaseUrl.patch(`/order/${_id}`, payment).then((res) => {})
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          proceed
        </button>
      </form>
    </div>
  )
}

export default CheckoutForm
