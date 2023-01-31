import axios from './axios';

export const getUsers = () => {
  return axios.get('/api/users')
}

export const getUsersDetail = (params) => {
  return axios.get(`/api/users/${params}`)
}

export const getUsersList = (params) => {
  return axios.get('/api/usersList', {
    params
  })
}

export const getUsersListPost = (params) => {
  return axios.post('/api/usersList', params)
}
