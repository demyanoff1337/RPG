import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/thunk/authorizationThunk";

const LogIn = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(loginThunk(mail, password, navigate));
  };
  const signup = (e) => {
    const _1 = document.querySelector('.login-f');
    const _2 = document.querySelector('.logo-ll');
    const _3 = document.querySelector('.logo-rr');
    const _4 = document.querySelector('.grey');
    _1.classList.remove('form-in');
    _1.classList.add('form-out');
    _4.classList.remove('form-in');
    _4.classList.add('form-out');
    _2.classList.remove('logo-ll-in');
    _2.classList.add('logo-ll-out');
    _3.classList.remove('logo-rr-in');
    _3.classList.add('logo-rr-out');
    setTimeout(() => {
      navigate('/signup');
    }, 600);
  }
  return (
    <>
    <img class="login-back" src="back2.png"/>
    <img class="logo-ll logo-ll-in" src="1.png"/>
    <img class="logo-rr logo-rr-in" src="2.png"/>
    <div class="grey form-in"></div>
    <div>
      <form class="login-f form-in"onSubmit={loginHandler}>
      <div class="noxd xd">Нет аккаунта?</div>
    <div onClick={signup} class="noxd2 xd">Зарегистрироваться</div>
        <input required className='mail-f ff' placeholder='E-mail' onChange={(e) => setMail(e.target.value)} value={mail} type="text"/>
        <input required className='pass-f ff' placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} value={password} type="password"/>
        <button className='btn-f' type="submit">Вход</button>
      </form>
    </div>
    </>
  );
};

export default LogIn;
