// import axios from 'axios';

// // const API_URL = process.env.BASE_URL || 'http://localhost:4000/api';

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:4000/api',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });
// axiosClient.interceptors.request.use(
//     (config)=>{
//         const token =localStorage.getItem('token');
//         if(token){
//             config.headers.Authorization=`Bearer ${token}`
//         }
//         return config;
//     },(error)=>{
//         return Promise.reject(error);
//     }
// )

// axiosClient.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         console.error("API Error", error);
//         return Promise.reject(error);
//     },
// );

// export default axiosClient;
/////////////////////
import axios from "axios";


const axiosClient = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Interceptor thêm token vào request
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Interceptor xử lý lỗi response
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error", error);

    // Nếu lỗi là 401 Unauthorized → Xóa token & chuyển hướng đến login
    if (error.response?.status === 401) {
      localStorage.removeItem("token"); // Xóa token
      window.location.href = "/account/login"; // Chuyển hướng về login
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
