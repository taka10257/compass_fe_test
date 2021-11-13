import React from 'react'
import styles from './PageControl.module.sass'
import { PaginateState } from '../../../types/pages/PaginateState'
import ReactPaginate from 'react-paginate'
import PageArrow from './PageArrow'

export default function PageControl(props: PaginateState) {
  const maxPage = Math.ceil(props.maxCount / props.displayCount)

  return (
    <div className={styles.container}>
      <ReactPaginate
        pageCount={maxPage}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        forcePage={props.page - 1}
        onPageChange={props.changePage}
        nextLabel={<PageArrow vector={'right'} />}
        nextClassName={[styles.button, styles.next].join(' ')}
        previousLabel={<PageArrow vector={'left'} />}
        previousClassName={[styles.button, styles.prev].join(' ')}
        pageClassName={[styles.button, styles.page].join(' ')}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
      />
    </div>
  )
}
