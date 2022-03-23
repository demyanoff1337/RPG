import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { MdOutlinePhotoCamera } from 'react-icons/md';

const Profile = () => {
  const [user, setUser] = useState({});
  const { name, nickname, mail, avatar } = user;
  const [inputs, setInputs] = useState({ name, nickname, mail, file: avatar });
  const [display, setDisplay] = useState({ name: 'none', nickname: 'none', mail: 'none', avatar: 'none' });


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

  useEffect(() => {
    fetch('/user/profile').then((responce) => responce.json())
      .then((data) => {
        setUser(data);
        setInputs({ name: data.name, nickname: data.nickname, mail: data.mail, });
      });
  }, []);


  const changeHandler = (title) => {
    setDisplay(prev => ({ ...prev, [title]: 'block' }));
  };

  const closeHandler = () => {
    setDisplay(prev => ({ ...prev, avatar: 'none' }));
  };

  // console.log(inputs);
  const getChangeHandler = async (title) => {
    if (inputs.file) {
      console.log('asdsa', title);
      const formData = new FormData();
      formData.append('file', inputs.file);
      const responce = await fetch('/user', {
        method: 'PUT',
        body: formData,
      });
      if (responce.status === 200) {
        setDisplay(prev => ({ ...prev, [title]: 'none' }));
        setUser(prevState => ({ ...prevState, [title]: inputs[title] }));
      }
    } else {
      const responce = await fetch('/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [title]: inputs[title] }),
      });
      if (responce.status === 200) {
        setDisplay(prev => ({ ...prev, [title]: 'none' }));
        setUser(prevState => ({ ...prevState, [title]: inputs[title] }));
      }
    }

  };


  return (
    <div className="profile">
      <div className="avatar-in-style">
        <img className="avatar-in-profile" src={`http://localhost:3001/${user.avatar}`}/>
        <div>
          <h3>
            <MdOutlinePhotoCamera onClick={() => changeHandler('avatar')}/>
          </h3>
          <input style={{ display: display.avatar }} type="file" name="avatar"/>
          <button onClick={closeHandler}
                  style={{ display: display.avatar }}>Change avatar
          </button>
        </div>
      </div>
      <div className="info">
        <p className="profile-info">Ваш никнейм: {user.nickname} <FaPencilAlt
          onClick={() => changeHandler('nickname')}/>
        </p>
        <input style={{ display: display.nickname }} value={inputs.nickname} name="nickname" onChange={inputHandler}/>
        <button onClick={() => getChangeHandler('nickname')} style={{ display: display.nickname }}>Change</button>

        <p className="profile-info">Ваше имя: {user.name} <FaPencilAlt onClick={() => changeHandler("name")}/></p>
        <input style={{ display: display.name }} value={inputs.name} name="name" onChange={inputHandler}/>
        <button onClick={() => getChangeHandler('name')} style={{ display: display.name }}>Change</button>

        <p className="profile-info">Ваш email: {user.mail} <FaPencilAlt onClick={() => changeHandler("mail")}/></p>
        <input style={{ display: display.mail }} value={inputs.mail} name="mail" onChange={inputHandler}/>
        <button onClick={() => getChangeHandler('mail')} style={{ display: display.mail }}>Change</button>

      </div>
    </div>
  );
};

export default Profile;
