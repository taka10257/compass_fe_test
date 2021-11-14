import { useState } from 'react'
import { TeacherSearchState } from '../../types/pages/TeacherSearchState'
import { PaginateState } from '../../types/pages/PaginateState'

export const usePaginateState = (
  teacherSearchState: TeacherSearchState
): PaginateState => {
  const [pageState, setPageState] = useState<PaginateState>({
    maxCount: 0,
    page: teacherSearchState.page,
    displayCount: 20,
    setMaxCount: (count) => {
      setPageState((prevState) => {
        return {
          ...prevState,
          maxCount: count,
        }
      })
    },
    changePage: (selectedItem) => {
      const updatePage = selectedItem.selected + 1
      setPageState((prevState) => {
        return {
          ...prevState,
          page: selectedItem.selected + 1,
        }
      })
      teacherSearchState.setPage(updatePage)
    },
    setPage: (page) => {
      setPageState((prevState) => {
        return {
          ...prevState,
          page: page,
        }
      })
    },
  })

  return pageState
}
