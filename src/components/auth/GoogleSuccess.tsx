import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getMe } from '../../redux/slices/auth.slice';
import { AppDispatch } from '../../redux/store';

const GoogleSuccess = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const tokenExpires = searchParams.get("tokenExpires");
  
    if (token && tokenExpires) {
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpires", tokenExpires);
  
      setTimeout(() => {
        dispatch(getMe())
          .unwrap()
          .then(() => {
            window.location.href = "/dashboard";
          })
          .catch((err) => {
            console.error("GET ME FAILED", err);
            localStorage.removeItem("token");
            localStorage.removeItem("tokenExpires");
            navigate("/account/login");
          });
      }, 300); // Delay 300ms
    } else {
      console.error("Missing token or tokenExpires from Google login");
      navigate("/account/login");
    }
  }, []);
  

  return <div>Đang xử lý đăng nhập Google...</div>;
};

export default GoogleSuccess;
