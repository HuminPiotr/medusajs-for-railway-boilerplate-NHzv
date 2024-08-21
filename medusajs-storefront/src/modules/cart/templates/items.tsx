import { LineItem, Region } from "@medusajs/medusa"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <div className="itemsTemplate">
      <div className="pb-3 flex items-center">
        <Heading className="text-[2rem] leading-[2.75rem]">Koszyk</Heading>
      </div>
      <Table  className="itemsTable">
        <Table.Header className="border-t-0 itemsTable__row ">
          <Table.Row className="itemsTable__row bh-white p-6 text-ui-fg-subtle txt-medium-plus">
            <Table.HeaderCell className="itemsTable__row !pl-0">Produkt</Table.HeaderCell>
            <Table.HeaderCell className="itemsTable__row"></Table.HeaderCell>
            <Table.HeaderCell className="itemsTable__row">Ilość</Table.HeaderCell>
            <Table.HeaderCell className="itemsTable__row hidden small:table-cell">
              Cena
            </Table.HeaderCell>
            <Table.HeaderCell className="itemsTable__row !pr-3 text-right">
              Łącznie
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="itemsTable__row">
          {items && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1
                })
                .map((item) => {
                  return <Item  key={item.id} item={item} region={region} />
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} /> 
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
