import axios from 'axios'

export const axiosCommon = axios.create({
  baseURL: 'http://localhost:8080',
//   baseURL: import.meta.env.VITE_API_URL,
  
}) 
const useAxiosCommon = () => {
  return axiosCommon
}

export default useAxiosCommon
 /* ----------------------Mastered------------------------ */
/* ----------------------Date :03/04/2025 ------------------------ */