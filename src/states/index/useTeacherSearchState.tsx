import { useState } from 'react'
import { TeacherSearchState } from '../../types/pages/TeacherSearchState'

export const useTeacherSearchState = (): TeacherSearchState => {
  const [teacherSearchState, setTeacherSearchState] =
    useState<TeacherSearchState>({
      sortColumn: 'loginId',
      order: 'asc',
      word: '',
      page: 1,
      setSort: (sortColumn, order) => {
        setTeacherSearchState((prevState) => {
          return {
            ...prevState,
            sortColumn: sortColumn,
            order: order,
            page: 1,
          }
        })
      },
      setWord: (word) => {
        setTeacherSearchState((prevState) => {
          return {
            ...prevState,
            word: word,
            page: 1,
          }
        })
      },
      setPage: (page) => {
        setTeacherSearchState((prevState) => {
          return {
            ...prevState,
            page: page,
          }
        })
      },
    })

  return teacherSearchState
}
