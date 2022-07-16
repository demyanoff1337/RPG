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
  );
};

export default LogIn;
