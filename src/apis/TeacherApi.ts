import axios, { AxiosRequestConfig } from 'axios'
import { Teacher } from '../types/Teacher'
import { TeacherApiQueryParams } from '../types/apis/teacher/TeacherApiQueryParams'

export async function teacherApiTeachers(
  param: TeacherApiQueryParams
): Promise<Teacher[] | undefined> {
  return await axios
    .get<Teacher[]>(teachersUrl(), config(param))
    .then((value) => {
      return value.data
    })
    .catch((err) => {
      console.error(err)
      return []
    })
}

function teachersUrl(): string {
  return `${endpoint()}/mock/facilitators`
}

function config(param: TeacherApiQueryParams): AxiosRequestConfig {
  return {
    params: param,
  }
}

function endpoint(): string {
  const endpoint: string | undefined = process.env.API_ENDPOINT

  if (!endpoint) throw new Error('API_ENDPOINTが設定されていません')

  return endpoint
}
