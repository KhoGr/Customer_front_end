import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { postLoginRequest } from '../../types/User';
import { loginUser } from '../../redux/slices/auth.slice';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';
import { Alert, Button } from 'antd';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { token, error, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleLogin = (data: postLoginRequest) => {
    dispatch(loginUser(data));
  };

  const handleForgotPassword = () => {
    navigate('/account/forgot-password');
  };
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:4000/api/account/auth/google';
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Đăng nhập</h2>

        {error && <Alert message={error} type="error" className="mb-4" showIcon />}

        <LoginForm
          onSubmit={handleLogin}
          loading={loading}
          error={error}
          onForgotPasswordClick={handleForgotPassword}
        />
              <div className="mt-6 text-center">
        <p className="text-gray-500 mb-2">hoặc</p>
        <Button onClick={handleGoogleLogin} block type="default" className="mt-4">
          Đăng nhập bằng Google
        </Button>
      </div>
      </div>

    </div>
  );
};

export default Login;
