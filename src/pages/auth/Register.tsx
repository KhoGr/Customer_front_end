import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { registerUser } from '../../redux/slices/auth.slice';
import { RegisterLocalRequest } from '../../types/User';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import RegisterForm from '../../components/auth/RegisterForm';

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, error, loading } = useSelector((state: RootState) => state.auth);

  const handleLoginClick = () => {
    navigate('/account/login');
  };

  const handleRegister = (data: RegisterLocalRequest) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (user) {
      alert('Đăng ký thành công! Vui lòng vào Gmail để xác nhận.');
      navigate('/account/login');
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <RegisterForm
          onSubmit={handleRegister}
          loading={loading}
          error={error}
          onLoginClick={handleLoginClick}
        />
      </div>
    </div>
  );
};

export default Register;
