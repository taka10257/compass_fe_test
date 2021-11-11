import type { NextApiRequest } from 'next'
import { TeacherApiQueryParams } from '../../../../types/apis/teacher/TeacherApiQueryParams'

export default class ApiTeachersRequestParam {
  page: string
  limit: string
  sort: string
  order: string
  searchWord: string

  constructor(req: NextApiRequest) {
    this.page = req.query.page ? req.query.page.toString() : ''
    this.limit = req.query.limit ? req.query.limit.toString() : ''
    this.sort = req.query.sort ? req.query.sort.toString() : ''
    this.order = req.query.sort ? req.query.order.toString() : ''
    this.searchWord = req.query.searchWord
      ? req.query.searchWord.toString()
      : ''
  }

  getApiRequestParams(): TeacherApiQueryParams {
    return {
      _page: this.page,
      _limit: this.limit,
      _sort: this.sort,
      _order: this.order,
      ...this.createLikeWordParam(),
    }
  }

  createLikeWordParam(): TeacherApiQueryParams {
    if (this.searchWord.length === 0) return {}

    if (this.searchWord.match(/^[a-zA-Z]+_[0-9]+$/)) {
      return { loginId_like: this.searchWord }
    }

    return { name_like: this.searchWord }
  }
}
