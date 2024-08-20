"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-sm flex flex-col items-center">
      <h1 className="uppercase text-center mb-5">
        Zostań członkiem EcoHollandstyle
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Stwórz swoje konto i odblokuj nowe możliwości!
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input label="Phone" name="phone" type="tel" autoComplete="tel" />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="text-center  text-small-regular mt-6">
          Tworzac konto, zgadzasz się z regulaminem{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Polityka prywatności
          </LocalizedClientLink>{" "}
          i{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Warunki użytkowania
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6" variant="secondary">Dołacz</SubmitButton>
      </form>
      <span className="text-center  text-small-regular mt-6">
        Jesteś już członkiem?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Zaloguj się
        </button>
        .
      </span>
    </div>
  )
}

export default Register
