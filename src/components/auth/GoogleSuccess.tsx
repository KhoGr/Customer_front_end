import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard"); // Chuyển sang trang dashboard sau khi login
    } else {
      navigate("/account/login");
    }
  }, [navigate]);

  return <p className="text-center mt-10">Đang đăng nhập bằng Google...</p>;
};

export default GoogleSuccess;
