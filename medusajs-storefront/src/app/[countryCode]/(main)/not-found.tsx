import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi ">Strona nie znaleziona</h1>
      <p className="text-small-regular ">
      Strona, do której próbujesz uzyskać dostęp, nie istnieje.
      </p>
      <InteractiveLink href="/">Wróć na stronę główna</InteractiveLink>
    </div>
  )
}
