import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from './Square.css'

const Main = () => {
  const user = useSelector(store => store.user);

  return (
    <div className={styles}>
      <div>nickname: {user.nickname}, name: {user.name}</div>
      <button>
        <Link to='/home'>Дом</Link>
      </button>
      <button>
        <Link to='/raid'>Рейд</Link>
      </button>
      <button>
        <Link to='/' >Арена</Link>
      </button>
      <button>
        <Link to='/'>Торговцы</Link>
      </button>
    </div>
  );
}

export default Main;
