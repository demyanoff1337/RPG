import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Square from './components/Square/Square';
import Home from './components/Home/Home';
import Fight from './components/Fight/Fight';
import Market from './components/Market/Market';
import Rade from './components/Rade/Rade';
import { useEffect } from 'react';
import { firstConnection } from './redux/thunk/authorizationThunk';
import { useDispatch, useSelector } from 'react-redux';
import Chat from './components/WebSocket/Chat';
import Login from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile'
import Audio from './components/Audio'

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.authorization);

  useEffect(() => {
    dispatch(firstConnection(user));
  }, []);

  return (
    <div className="App-background">
    <div className="RPG">
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='/square' element={<Square/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/fight' element={<Fight/>} />
        <Route path='/market' element={<Market/>}/>
        <Route path='/rade' element={<Rade/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/audio' element={<Audio/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
