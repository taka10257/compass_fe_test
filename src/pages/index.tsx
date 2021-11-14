import React, { useEffect } from 'react'
import styles from './index.module.sass'
import axios from 'axios'
import { Teacher } from '../types/Teacher'
import { ApiTeachersRequest } from '../types/pages/api/ApiTeachersRequest'
import SearchInput from '../components/atoms/search/SearchInput'
import PageTitle from '../components/molecules/tittle/PageTitle'
import Pagination from '../components/molecules/pagination/Pagination'
import Loading from '../components/atoms/loading/Loading'
import ListTable from '../components/molecules/list/ListTable'
import { usePaginateState } from '../states/index/usePaginateState'
import { useTeacherSearchState } from '../states/index/useTeacherSearchState'
import { useTeacherListState } from '../states/index/useTeacherListState'

export default function Index() {
  const teacherListState = useTeacherListState()
  const teacherSearchState = useTeacherSearchState()
  const paginateState = usePaginateState(teacherSearchState)

  const updateMaxDataCount = () => {
    const query: ApiTeachersRequest = {
      searchWord: teacherSearchState?.word || '',
      sort: '',
      order: '',
      page: '',
      limit: '',
    }

    void callTeachersApi(query).then((result) => {
      if (!result) return
      paginateState.setMaxCount(result.length)
    })
  }

  const updateShowDataList = () => {
    const query: ApiTeachersRequest = {
      searchWord: teacherSearchState?.word || '',
      sort: teacherSearchState?.sortColumn || '',
      order: teacherSearchState?.order || '',
      page: teacherSearchState?.page.toString() || '',
      limit: paginateState?.displayCount.toString() || '',
    }
    void callTeachersApi(query).then((result) => {
      if (!result) return
      teacherListState.setDataList(result)
      paginateState.setPage(teacherSearchState.page)
    })
  }

  useEffect(() => {
    teacherListState.initialize()
    updateMaxDataCount()
    updateShowDataList()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacherSearchState])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <PageTitle title={'先生'} imageSrc={'/images/icon-teacher.svg'} />
        </div>
        <div className={styles.search_block}>
          <div className={styles.search}>
            <SearchInput
              placeHolder={'名前、ログインIDで検索'}
              searchHandler={teacherSearchState.setWord}
            />
          </div>
        </div>
      </div>
      {teacherListState.wait ? (
        <Loading />
      ) : (
        <>
          {teacherListState.dataList.length === 0 ? (
            <p className={styles.no_data}>該当するデータはありません</p>
          ) : (
            <>
              <div className={styles.contents}>
                <ListTable
                  data={teacherListState.dataList}
                  columns={teacherListState.columns}
                  onSort={teacherSearchState.setSort}
                  activeSortColumn={{
                    sortColumn: teacherSearchState.sortColumn,
                    order: teacherSearchState.order,
                  }}
                />
              </div>
              <div className={styles.footer}>
                <Pagination {...paginateState} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

function callTeachersApi(query: ApiTeachersRequest): Promise<Teacher[] | void> {
  return axios
    .get<Teacher[]>('/api/teachers/', {
      params: query,
    })
    .then((result) => {
      const dataList = result.data
      if (dataList) return dataList

      error()
    })
    .catch(() => {
      error()
    })
}

function error() {
  alert('エラーが発生しました。画面を更新してやり直してください')
}
