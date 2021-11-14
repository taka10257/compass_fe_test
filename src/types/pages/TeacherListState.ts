import { Teacher } from '../Teacher'

export type TeacherListState = {
  wait: boolean
  dataList: Teacher[]
  columns: {
    dataField: string
    text: string
  }[]
  initialize: () => void
  setDataList: (dataList: Teacher[]) => void
}
