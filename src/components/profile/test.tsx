// import { Button, Input, Upload, message } from 'antd';
// import { EditOutlined, CameraOutlined } from '@ant-design/icons';
// import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import React, { useRef, useState } from 'react';
// import { setMessage } from 'redux/slices/message.slice';
// import { cloudinaryImgOptimize } from 'helper';
// import { DEFAULTS, MAX } from 'constant';

// function UserAccount({ onUpload, onUpdateProfile, email, createdDate }) {
//   const userInfo = useSelector((state) => state.userInfo);
//   const { username, name, avt, coin } = userInfo;
//   const avtSrc = avt ? cloudinaryImgOptimize(avt, 150, 150) : DEFAULTS.IMAGE_SRC;
//   const [editMode, setEditMode] = useState(false);
//   const inputRef = useRef({ name, username });
//   const [errors, setErrors] = useState({ name: false, username: false });
//   const dispatch = useDispatch();

//   const handleInputChange = (value, type) => {
//     if (type === 1) {
//       errors.name && value !== '' && setErrors({ ...errors, name: false });
//       inputRef.current.name = value;
//     } else {
//       errors.username && value !== '' && setErrors({ ...errors, username: false });
//       inputRef.current.username = value;
//     }
//   };

//   const handleUpdate = () => {
//     const { name: currentName, username: currentUsername } = inputRef.current;
//     if (currentName.trim() === '' || currentUsername.trim() === '') {
//       message.error('Vui lòng nhập đầy đủ thông tin!');
//       return;
//     }
//     if (currentUsername.includes(' ')) {
//       message.error('Username không được chứa khoảng trống!');
//       return;
//     }
//     if (currentUsername.length > MAX.USERNAME_LEN) {
//       message.error(`Username tối đa ${MAX.USERNAME_LEN} ký tự`);
//       return;
//     }
//     if (currentName.length > MAX.NAME_LEN) {
//       message.error(`Tên tối đa ${MAX.NAME_LEN} ký tự`);
//       return;
//     }
//     onUpdateProfile(currentName.trim(), currentUsername.trim());
//     setEditMode(false);
//   };

//   return (
//     <div className="container flex-center" style={{ textAlign: 'center', padding: '20px' }}>
//       <div>
//         <div style={{ position: 'relative', display: 'inline-block' }}>
//           <img
//             src={avtSrc}
//             alt="Avatar"
//             style={{ width: 100, height: 100, borderRadius: '50%' }}
//           />
//           <Upload showUploadList={false} customRequest={onUpload}>
//             <CameraOutlined
//               style={{
//                 position: 'absolute',
//                 bottom: 5,
//                 right: 5,
//                 fontSize: 24,
//                 background: 'white',
//                 borderRadius: '50%',
//                 padding: 4,
//                 cursor: 'pointer',
//               }}
//             />
//           </Upload>
//         </div>

//         {!editMode ? (
//           <div>
//             <h2>{name}</h2>
//             <h4>@{username}</h4>
//           </div>
//         ) : (
//           <div style={{ marginTop: 10 }}>
//             <Input
//               defaultValue={name}
//               onChange={(e) => handleInputChange(e.target.value, 1)}
//               placeholder="Nhập tên"
//               status={errors.name ? 'error' : ''}
//               style={{ marginBottom: 10 }}
//             />
//             <Input
//               defaultValue={username}
//               onChange={(e) => handleInputChange(e.target.value, 0)}
//               placeholder="Nhập username"
//               status={errors.username ? 'error' : ''}
//             />
//           </div>
//         )}

//         <div style={{ marginTop: 10 }}>
//           {email && <p>Email: {email}</p>}
//           {createdDate && <p>Đã tham gia vào: {createdDate}</p>}
//           <p>Số coin hiện tại: <b>{coin}</b></p>
//         </div>

//         {!editMode ? (
//           <Button
//             type="primary"
//             icon={<EditOutlined />}
//             onClick={() => setEditMode(true)}
//             style={{ marginTop: 10 }}
//           >
//             Chỉnh sửa
//           </Button>
//         ) : (
//           <div style={{ marginTop: 10, display: 'flex', gap: '10px' }}>
//             <Button onClick={() => setEditMode(false)}>Huỷ bỏ</Button>
//             <Button type="primary" onClick={handleUpdate}>Cập nhật</Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// UserAccount.propTypes = {
//   createdDate: PropTypes.any,
//   email: PropTypes.string,
//   onUpload: PropTypes.func,
//   onUpdateProfile: PropTypes.func,
// };

// export default UserAccount;
/////////////////////
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface MessageState {
//   open: boolean;
//   duration: number;
//   message: string;
//   variant: 'filled' | 'outlined' | 'text';
//   type: 'success' | 'error' | 'info' | 'warning';
// }

// const initialState: MessageState = {
//   open: false,
//   duration: 2000,
//   message: 'This is a message',
//   variant: 'filled',
//   type: 'success',
// };

// const messageSlice = createSlice({
//   name: 'message',
//   initialState,
//   reducers: {
//     setMessage(state, action: PayloadAction<string | Partial<MessageState>>) {
//       const { payload } = action;

//       if (typeof payload === 'string') {
//         return { ...state, open: true, message: payload };
//       }

//       return { ...state, open: true, ...payload };
//     },
//     closeMessage(state) {
//       state.open = false;
//     },
//   },
// });

// const { reducer, actions } = messageSlice;
// export const { setMessage, closeMessage } = actions;
// export default reducer;
//////////////////////////////
//header.tsx

// import { useState, useEffect } from "react";
// import {   Navbar } from "flowbite-react";
// import { Icon } from "@iconify/react";
// import Profile from "./Profile";
// import Notification from "./notification";
// import { Drawer } from "flowbite-react";
// import MobileSidebar from "../sidebar/MobileSidebar";


// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // mobile-sidebar
//   const [isOpen, setIsOpen] = useState(false);
//   const handleClose = () => setIsOpen(false);
//   return (
//     <>
//       <header
//         className={`sticky top-0 z-[5] ${isSticky
//             ? "bg-white dark:bg-dark fixed w-full"
//             : "bg-white"
//           }`}
//       >
//         <Navbar
//           fluid
//           className={`rounded-none bg-transparent dark:bg-transparent py-4 sm:px-30 px-4`}
//         >
//           {/* Mobile Toggle Icon */}

//           <div className="flex gap-3 items-center justify-between w-full ">
//             <div className="flex gap-2 items-center">
//               <span
//                 onClick={() => setIsOpen(true)}
//                 className="h-10 w-10 flex text-black dark:text-white text-opacity-65 xl:hidden hover:text-primary hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer"
//               >
//                 <Icon icon="solar:hamburger-menu-line-duotone" height={21} />
//               </span>
//               <Notification />
//             </div>

//             <div className="flex gap-4 items-center">

//               <Profile />
//             </div>
//           </div>
//         </Navbar>
//       </header>

//       {/* Mobile Sidebar */}
//       <Drawer open={isOpen} onClose={handleClose} className="w-130">
//         <Drawer.Items>
//           <MobileSidebar />
//         </Drawer.Items>
//       </Drawer>
//     </>
//   );
// };
// export default Header;
