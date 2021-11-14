import React from 'react'
import { Order } from '../../../types/Order'
import BootstrapTable from 'react-bootstrap-table-next'
import styles from './ListTable.module.sass'
import ListHeaderColumn from '../../atoms/list/ListHeaderColumn'

type DataTableProps<T> = {
  data: {
    loginId: string
    name: string
  }[]
  columns: {
    dataField: string
    text: string
  }[]
  activeSortColumn: {
    sortColumn: T
    order: Order
  }
  onSort: (id: T, order: Order) => void
}

export default function ListTable<T>(props: DataTableProps<T>) {
  return (
    <div className={styles.container}>
      <BootstrapTable
        keyField={'loginId'}
        data={props.data}
        columns={props.columns.map((column) => {
          return {
            ...column,
            headerClasses: styles.header,
            headerFormatter: (column) => {
              return (
                <ListHeaderColumn
                  id={column.dataField as T}
                  label={column.text}
                  order={props.activeSortColumn.order}
                  activeSortColumn={props.activeSortColumn.sortColumn}
                  onClick={props.onSort}
                />
              )
            },
          }
        })}
      />
    </div>
  )
}
