import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupThunk } from "../../redux/thunk/authorizationThunk";

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputHandler = (e) => {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
  };


  const formSubmitter = async (e) => {
    e.preventDefault();
    if (inputs.password !== inputs.passwordRep) {
      return alert('Пароли не совпадают');
    }
    const form = document.forms.form;
    console.log(form)
    const formData = Object.fromEntries(new FormData(form));
    // formData.append('file', inputs.file);
    // formData.append('name', inputs.name);
    // formData.append('mail', inputs.mail);
    // formData.append('nickname', inputs.nickname);
    // formData.append('role', inputs.role);
    // formData.append('password', inputs.password);
    console.log(formData);
    const goGoGo = document.querySelectorAll('.go-go-go');
    const loading = document.querySelector('.on-load');
    loading.classList.remove('hide-animations-in');
    goGoGo[0].classList.add('logo-left-s');
    goGoGo[1].classList.add('logo-right-s');
    goGoGo[2].classList.add('loading-left-s');
    goGoGo[3].classList.add('loading-right-s');
    setTimeout(() => {
      dispatch(signupThunk(formData, navigate));
    }, 700);
   
  };

  console.log(inputs);

  return (
    <>
    <div class="on-load hide-animations-in">
    <img class="go-go-go" src="1.png"/>
    <img class="go-go-go" src="2.png"/>
    <div class="go-go-go"></div>
    <div class="go-go-go"></div>
    </div>
    <img class="login-back" src="back2.png"/>
    <img class="logo-ll logo-ll-in" src="1.png"/>
    <img class="logo-rr logo-rr-in" src="2.png"/>
    <div class="grey form-in"></div>
    <div>
      <form name="form" class="login-f form-in" onSubmit={formSubmitter}>
      <input required class="nick xdd" value={inputs.nickname} placeholder="Имя персонажа" onChange={inputHandler} name="nickname" type="text"/>
        <input required class="email xdd" value={inputs.mail} placeholder="E-mail" onChange={inputHandler} name="mail" type="text"/>
        <input required class="passw xdd" value={inputs.password} placeholder="Пароль" onChange={inputHandler} name="password" type="password"/>
        <input required class="passw2 xdd" value={inputs.passwordRep} placeholder="Повторите пароль" onChange={inputHandler} name="passwordRep" type="password"/>
        {/* <input class="avatar" onChange={inputHandler} name="avatar" type="file"/> */}

        <input className="form-check-input-1" onChange={inputHandler} type="radio" name="role" value="1"
               id="flexRadioDefault1"/>
        <label className="unscew ezh" htmlFor="flexRadioDefault1">
          ЕЖ
        </label>
        <input className="form-check-input-2" onChange={inputHandler} type="radio" name="role" value="2"
               id="flexRadioDefault2"/>
        <label className="unscew bobr" htmlFor="flexRadioDefault2">
          БОБР
        </label>
        <button class="btn-ff" type="submit">Зарегистрироваться</button>
      </form>
    </div>
    </>
  );
};

export default SignUp;
