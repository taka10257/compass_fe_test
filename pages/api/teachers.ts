import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiError } from '../../types/pages/ApiError'
import { Teacher } from '../../types/Teacher'
import { teacherApiTeachers } from '../../apis/TeacherApi'
import ApiTeachersRequestParam from '../../models/pages/api/teachers/ApiTeachersRequestParam'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Teacher[] | ApiError>
) {
  const params = new ApiTeachersRequestParam(req)

  await teacherApiTeachers(params.getApiRequestParams())
    .then((value: Teacher[] | undefined) => {
      res.status(200).json(value || [])
    })
    .catch(() => {
      res.status(500).json({ errorMessage: 'エラーが発生しました' })
    })
}
