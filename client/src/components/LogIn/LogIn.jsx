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
  return (
    <div>
      <form onSubmit={loginHandler}>
        <label>EMAIL</label>
        <input onChange={(e) => setMail(e.target.value)} value={mail} type="text"/>
        <label>PASSWORD</label>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"/>
        <button type="submit">Вход</button>
      </form>
    </div>
  );
};

export default LogIn;
