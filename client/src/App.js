import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Square from './components/Square/Square';
import Home from './components/Home/Home';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.authorization);

  useEffect(() => {
    dispatch(firstConnection(user));
  }, []);

  return (
    <div className="App-background">
    </div>
  );
}

export default App;
