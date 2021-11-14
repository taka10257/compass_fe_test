import React from 'react'
import Image from 'next/image'
import styles from './ListHeaderArrow.module.sass'
import { Order } from '../../../types/Order'

type ListHeaderArrowProps = {
  sort: Order
}

export default function ListHeaderArrow(props: ListHeaderArrowProps) {
  const style = props.sort === 'asc' ? styles.down : styles.up

  return (
    <>
      <Image
        src={'/images/icon-sort-arrow.svg'}
        alt={''}
        width={16}
        height={16}
        className={style}
      />
    </>
  )
}
