import { ProductCollection} from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import { Suspense } from "react"
import { getCollectionsList } from "@lib/data"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1;
  const { collections } = await getCollectionsList(0, 20);

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
            <div className="shopMenu flex flex-col mt-16 flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
        {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-ui-fg-base mb-2 font-lato text-[18px]">
                  Kategorie
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-secondary-color"
                        href={`/collections/${c.handle}`}

                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
      <RefinementList sortBy={sortBy || "created_at"} />
      </div>
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1>{collection.title}</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            collectionId={collection.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
