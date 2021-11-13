import React from 'react'
import styles from './PageDisplay.module.sass'
import { PaginateState } from '../../../types/pages/PaginateState'

export default function PageDisplay(props: PaginateState) {
  const start = 1 + props.displayCount * (props.page - 1)

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {props.maxCount}件中 {start}〜{endCount(props)}件を表示
      </p>
    </div>
  )
}

function endCount(props: PaginateState): number {
  const result = props.displayCount * props.page
  return props.maxCount <= result ? props.maxCount : result
}
