export type PaginateState = {
  maxCount: number
  page: number
  displayCount: number
  setMaxCount: (count: number) => void
  changePage: (selectedItem: { selected: number }) => void
  setPage: (page: number) => void
}
