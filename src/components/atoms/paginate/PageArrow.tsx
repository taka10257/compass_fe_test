import React from 'react'
import Image from 'next/image'
import styles from './PageArrow.module.sass'

type PageArrowProps = {
  vector: 'left' | 'right'
}

export default function PageArrow(props: PageArrowProps) {
  const style = props.vector === 'left' ? styles.reverse : ''

  return (
    <>
      <Image
        src={'/images/icon-pagination-arrow.svg'}
        alt={''}
        width={16}
        height={16}
        className={style}
      />
    </>
  )
}
