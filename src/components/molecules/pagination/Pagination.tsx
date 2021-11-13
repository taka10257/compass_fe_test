import React from 'react'
import styles from './Pagination.module.sass'
import PageDisplay from '../../atoms/paginate/PageDisplay'
import { PaginateState } from '../../../types/pages/PaginateState'
import PageControl from '../../atoms/paginate/PageControl'

export default function Pagination(props: PaginateState) {
  return (
    <div className={styles.container}>
      <div className={styles.page_display}>
        <PageDisplay {...props} />
      </div>
      <div className={styles.page_control}>
        <PageControl {...props} />
      </div>
    </div>
  )
}
