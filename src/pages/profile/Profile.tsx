import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../../redux/slices/auth.slice';
import { RootState, AppDispatch } from '../../redux/store';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Lỗi: {error}</p>;
  console.log(user?.username);
  console.log(user?.email);

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Tên: {user?.name}</p>
      <p>Username: {user?.username}</p>
      <p>Số điện thoại: {user?.phone}</p>
      <p>Email: {user?.email}</p>
      <p>Địa chỉ : {user?.address}</p>
      <p>Role: {user?.role}</p>
      <p>Avatar :{user?.avatar}</p>
    </div>
  );
};

export default UserProfile;
