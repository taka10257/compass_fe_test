import httpMocks from 'node-mocks-http'
import { NextApiRequest } from 'next'
import ApiTeachersRequestParam from '../ApiTeachersRequestParam'
import { TeacherApiQueryParams } from '../../../../../types/apis/teacher/TeacherApiQueryParams'

describe('ApiTeachersRequestParam', () => {
  describe('like検索のパラメータの生成', () => {
    it('名前検索パラメータで生成される', () => {
      const resultParams = getResult('ほげ')

      expect(resultParams.name_like).toEqual('ほげ')
      expect(resultParams.loginId_like).toBeUndefined()
    })

    it('ログインID検索パラメータで生成される', () => {
      const resultParams = getResult('aaa_01')

      expect(resultParams.loginId_like).toEqual('aaa_01')
      expect(resultParams.name_like).toBeUndefined()
    })
  })
})

function getResult(searchWord: string): TeacherApiQueryParams {
  const mockReq = httpMocks.createRequest<NextApiRequest>({
    query: {
      searchWord: searchWord,
    },
  })
  return new ApiTeachersRequestParam(mockReq).getApiRequestParams()
}
