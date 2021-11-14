import { TeacherSortColumn } from '../Teacher'
import { Order } from '../Order'

export type TeacherSearchState = {
  sortColumn: TeacherSortColumn
  order: Order
  word: string
  page: number
  setSort: (sortColumn: TeacherSortColumn, order: Order) => void
  setWord: (word: string) => void
  setPage: (page: number) => void
}
