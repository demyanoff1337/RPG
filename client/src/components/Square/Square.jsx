import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import styles from './Square.css'

const Main = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();

  const goFight = (e) => {
    const goGoGo = document.querySelectorAll('.go-go-go');
    const loading = document.querySelector('.on-load');
    loading.classList.remove('hide-animations-in');
    goGoGo[0].classList.add('logo-left-s');
    goGoGo[1].classList.add('logo-right-s');
    goGoGo[2].classList.add('loading-left-s');
    goGoGo[3].classList.add('loading-right-s');
    setTimeout(() => {
      navigate('/fight');
    }, 700);
  }

  return (
    <>
    <div class="on-load hide-animations-in">
    <img class="go-go-go" src="1.png"/>
    <img class="go-go-go" src="2.png"/>
    <div class="go-go-go"></div>
    <div class="go-go-go"></div>
    </div>
    <div className={styles}>
      <div>nickname: {user.nickname}, name: {user.name}</div>
      <button>
        <Link to='/home'>Дом</Link>
      </button>
      <button>
        <div onClick={goFight}>Драка</div>
      </button>
      <button>
        <Link to='/' >Арена</Link>
      </button>
      <button>
        <Link to='/'>Торговцы</Link>
      </button>
    </div>
    </>
  );
}

export default Main;
