import axios from 'axios'
import { teacherApiTeachers } from '../TeacherApi'

jest.mock('axios')

describe('api/TeacherApi/teacherApiTeachers', () => {
  describe('正常系', () => {
    it('レスポンスが正常に返ってくる(axios get then)', async () => {
      ;(axios.get as jest.Mock).mockResolvedValue({
        data: [
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
        ],
      })

      setEnv('hoge.com')
      const result = await teacherApiTeachers({})

      if (!result) fail()

      expect(result.length).toEqual(2)
    })
  })

  describe('異常系', () => {
    it('API_ENDPOINTがない', async () => {
      setEnv('')

      await expect(teacherApiTeachers({})).rejects.toThrowError(Error)
    })

    it('APIをコールしてエラーが発生する(axios get catch)', async () => {
      ;(axios.get as jest.Mock).mockRejectedValue(new Error('error'))

      setEnv('hoge.com')
      const result = await teacherApiTeachers({})

      if (!result) fail()

      expect(result.length).toEqual(0)
    })
  })
})

function setEnv(endpoint: string) {
  process.env.API_ENDPOINT = endpoint
}
