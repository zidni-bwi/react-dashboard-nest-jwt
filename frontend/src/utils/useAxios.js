import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const baseURL = 'http://127.0.0.1:8000'

const useAxios = () => {
  const {authTokens, setUser, setAuthTokens} = useContext(AuthContext)
  const axiosInstance = axios.create({
    baseURL,
    headers:{Authorization: `Bearer ${authTokens?.access}`}
  });
  axiosInstance.interceptors.request.use(async req => {
    const user = jwt_decode(authTokens.access)
    console.log(user.username)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1; // Jika lebih dari 1 maka True
    console.log('Kadaluarsa:',isExpired) // Kadaluarsa tiap 4 detik sesuai setelan di backend
    // console.log(dayjs.unix(user.exp))
    console.log("dayjs :", dayjs.unix(user.exp).diff(dayjs()))
    if(!isExpired) return req
    const response = await axios.post(`${baseURL}/api/refreshtoken/`, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'username': user.username, 'refresh': authTokens.refresh })
    });
    console.log('refresh token :',response)
    localStorage.setItem('jwt', JSON.stringify(response.data))
    setAuthTokens(response.data)
    setUser(jwt_decode(response.data.access))
    req.headers.Authorization = `Bearer ${response.data.access}`
    return req
  })
  return axiosInstance
}

export default useAxios;
