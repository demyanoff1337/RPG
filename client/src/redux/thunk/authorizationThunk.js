import { login, logOut } from "../actions/authorizationAction";
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
  };
};

export const signupThunk = (formData, navigate) => {
  return async (dispatch) => {
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
