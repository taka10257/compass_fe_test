import React from 'react'
import styles from './ListHeaderColumn.module.sass'
import { Order } from '../../../types/Order'
import ListHeaderArrow from './ListHeaderArrow'

type ListHeaderColumnProps<T> = {
  id: T
  label: string
  order: Order
  activeSortColumn: T
  onClick: (sortColumn: T, order: Order) => void
}

export default function ListHeaderColumn<T>(props: ListHeaderColumnProps<T>) {
  const isSortActive: boolean = props.id === props.activeSortColumn

  const onClick = () => {
    if (isSortActive) {
      const changeOrder = props.order === 'asc' ? 'desc' : 'asc'
      props.onClick(props.id, changeOrder)
      return
    }
    props.onClick(props.id, 'asc')
  }
  return (
    <div className={styles.container} onClick={onClick}>
      <p className={styles.label}>{props.label}</p>
      <div className={styles.sort}>
        {isSortActive ? <ListHeaderArrow sort={props.order} /> : <></>}
      </div>
    </div>
  )
}
