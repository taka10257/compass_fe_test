import { useState } from 'react'
import { TeacherListState } from '../../types/pages/TeacherListState'

export const useTeacherListState = (): TeacherListState => {
  const [teacherListState, setTeacherListState] = useState<TeacherListState>({
    wait: true,
    dataList: [],
    columns: [
      {
        dataField: 'name',
        text: '名前',
      },
      {
        dataField: 'loginId',
        text: 'ログインID',
      },
    ],
    initialize: () => {
      setTeacherListState((prevState) => {
        return {
          ...prevState,
          maxDataCount: 0,
          dataList: [],
          wait: true,
        }
      })
    },
    setDataList: (dataList) => {
      setTeacherListState((prevState) => {
        return {
          ...prevState,
          dataList: dataList,
          wait: false,
        }
      })
    },
  })

  return teacherListState
}
