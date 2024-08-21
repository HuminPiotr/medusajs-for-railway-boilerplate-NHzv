"use client"

import { Heading, Text, clx } from "@medusajs/ui"

import PaymentButton from "../payment-button"
import { useSearchParams } from "next/navigation"
import { Cart } from "@medusajs/medusa"

const Review = ({
  cart,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}) => {
  const searchParams = useSearchParams()

  const isOpen = searchParams?.get("step") === "review"

  const previousStepsCompleted =
    cart.shipping_address &&
    cart.shipping_methods.length > 0 &&
    cart.payment_session

  return (
    <div className="">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none": !isOpen,
            }
          )}
        >
          Przeglad
        </Heading>
      </div>
      {isOpen && previousStepsCompleted && (
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <Text className="txt-medium-plus  mb-1">
              Klikając przycisk Złóż zamówienie, potwierdzasz, że
              przeczytałeś, rozumiesz i akceptujesz nasze Warunki korzystania, Warunki sprzedaży i
              Politykę zwrotów i potwierdzasz, że przeczytałeś Politykę prywatności sklepu
              EcoHollandstyle.
              </Text>
            </div>
          </div>
          <PaymentButton cart={cart} />
        </>
      )}
    </div>
  )
}

export default Review
