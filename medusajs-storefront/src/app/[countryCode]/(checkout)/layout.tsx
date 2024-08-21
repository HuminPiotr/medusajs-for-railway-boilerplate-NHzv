import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"

import Logo from "@modules/layout/components/Logo"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-primaryColor relative small:min-h-screen">
      <div className="h-16 bg-primaryColor border-b ">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/koszyk"
            className="text-small-semi text-ui-fg-base flex items-center gap-x-2 uppercase flex-1 basis-0"
          >
            <ChevronDown className="rotate-90 text-black" size={16} />
            <span className="mt-px hidden small:block text-black-color transform hover:-translate-x-1.5 duration-300">
              Powrót do koszyka
            </span>
            <span className="mt-px block small:hidden txt-compact-plus text-ui-fg-subtle ">
              Powrót
            </span>
          </LocalizedClientLink>
          <Logo />
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative">{children}</div>
      <div className="py-4 w-full flex items-center justify-center">
        <MedusaCTA />
      </div>
    </div>
  )
}
