import { login, logOut } from "../actions/authorizationAction";
import { getUser } from '../actions/userActions';

export const loginThunk = (mail, password, navigate) => {
  return async (dispatch) => {
    let user;
    let responce = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mail, password }),
    });
    if (responce.status === 234) {
      alert('Неверный пароль');
    } else if (responce.status === 233) {
      alert('Неверный почтовый адрес');
    } else if (responce.status === 200) {
      const { role, id, nickname } = await responce.json();
      user = {};
      user.nickname = nickname;
      user.id = id;
      user.role = role.role_name;
      dispatch(login(user));
      // window.localStorage.setItem('user', JSON.stringify(user));
      navigate('/square');
    }
    responce = await fetch(`/person/${user.id}`);
    const pers = await responce.json();
    dispatch(getUser(pers));
    // window.localStorage.setItem('pers', JSON.stringify(pers));
  };
};

export const checkLogin = () => {
  return async (dispatch) => {
    let user;
    let responce = await fetch('/user/login');
    user = await responce.json();
    if (responce.status !== 404) {
      dispatch(login(user));
      responce = await fetch(`/person/${user.id}`);
      const pers = await responce.json();
      dispatch(getUser(pers));
      // window.localStorage.setItem('pers', JSON.stringify(pers));
    }
  };
}

export const signupThunk = (formData, navigate) => {
  return async (dispatch) => {
    let user;
    let responce = await fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    if (responce.status === 200) {
      const { role, id, nickname } = await responce.json();
      user = {};
      user.id = id;
      user.nickname = nickname;
      user.role = role.role_name;
      dispatch(login(user));
      navigate('/square');
    } else if (responce.status === 234) {
      alert('Пользователь с такой электронной почтой уже существует');
    }
    responce = await fetch(`/person/${user.id}`);
    const pers = await responce.json();
    dispatch(getUser(pers));
  };
};

export const logoutThunk = () => {
  return async (dispatch) => {
    const responce = await fetch('/user/logout');
    if (responce.ok) {
      dispatch(logOut());
    }
  };
};

export const firstConnection = (user) => {
  return (dispatch) => {
    if (!user) {
      fetch('/user/auth').then((response) => response.json())
        .then((data) => dispatch(login(data)));
    }
  };
};
