import { NextApiRequest, NextApiResponse } from 'next'
import httpMocks from 'node-mocks-http'
import { expect } from '@jest/globals'
import handler from '../teachers'
import { Teacher } from '../../../types/Teacher'
import * as TeacherApi from '../../../apis/TeacherApi'

describe('pages/api/teachers', () => {
  describe('正常系', () => {
    it('正常にデータが返ってくる', async () => {
      const teachers: Teacher[] = [
        {
          id: 1,
          name: '先生_1',
          loginId: 'facilitator_01',
        },
        {
          id: 10,
          name: '先生_10',
          loginId: 'facilitator_10',
        },
      ]
      setupMockForSuccess(teachers)

      const mockReq = httpMocks.createRequest<NextApiRequest>()
      const mockRes = httpMocks.createResponse<NextApiResponse>()

      await handler(mockReq, mockRes)
      expect(mockRes.statusCode).toEqual(200)
      expect(mockRes._getJSONData()).toEqual(teachers)
    })
  })

  describe('異常系', () => {
    it('何か問題が発生しデータが返ってこない', async () => {
      setupMockForError()

      const mockReq = httpMocks.createRequest<NextApiRequest>()
      const mockRes = httpMocks.createResponse<NextApiResponse>()

      await handler(mockReq, mockRes)
      expect(mockRes.statusCode).toEqual(500)
      expect(mockRes._getJSONData()).toEqual({
        errorMessage: 'エラーが発生しました',
      })
    })
  })
})

function setupMockForSuccess(teachers: Teacher[]): void {
  jest
    .spyOn(TeacherApi, 'teacherApiTeachers')
    .mockReturnValue(new Promise<Teacher[]>((resolve) => resolve(teachers)))
}

function setupMockForError(): void {
  jest
    .spyOn(TeacherApi, 'teacherApiTeachers')
    .mockReturnValue(
      new Promise<Teacher[]>((resolve, reject) =>
        reject('エラーが発生しました')
      )
    )
}
