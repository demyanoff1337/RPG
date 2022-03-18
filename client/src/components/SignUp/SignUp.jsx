import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupThunk } from "../../redux/thunk/authorizationThunk";

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    if (e.target.files) {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        file: e.target.files[0],
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };


  const formSubmitter = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', inputs.file);
    formData.append('name', inputs.name);
    formData.append('mail', inputs.mail);
    formData.append('nickname', inputs.nickname);
    formData.append('role', inputs.role);
    formData.append('password', inputs.password);
    dispatch(signupThunk(formData, navigate));
  };


  return (
    <div>
      <form onSubmit={formSubmitter}>
        <label>NAME</label>
        <input value={inputs.name} onChange={inputHandler} name="name" type="text"/>
        <label>MAIL</label>
        <input value={inputs.mail} onChange={inputHandler} name="mail" type="text"/>
        <label>NICKNAME</label>
        <input value={inputs.nickname} onChange={inputHandler} name="nickname" type="text"/>
        <label>PASSWORD</label>
        <input value={inputs.password} onChange={inputHandler} name="password" type="password"/>
        <input onChange={inputHandler} name="avatar" type="file"/>

        <input className="form-check-input" onChange={inputHandler} type="radio" name="role" value="1"
               id="flexRadioDefault1"/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          HEDGEHOG
        </label>
        <input className="form-check-input" onChange={inputHandler} type="radio" name="role" value="2"
               id="flexRadioDefault2"/>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          BEAVER
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default SignUp;
