"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./sort-products"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
}

const RefinementList = ({ sortBy }: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      // const params = new URLSearchParams(searchParams)
      const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="flex small:flex-col gap-12  mb-8 small:px-0  small:min-w-[250px]">
      <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} />
    </div>
  )
}

export default RefinementList
