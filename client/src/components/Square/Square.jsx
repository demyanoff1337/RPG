import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

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

  const goHome = (e) => {
      navigate('/home');
  }

  const goMarket = (e) => {
      navigate('/market');
  }

  function script() {
    const home = document.querySelector('.home-img');
    const homeBox = document.querySelector('.home-box');
    homeBox.addEventListener('mouseover', (e) => {
      home.classList.add('go-bright');
    });
    homeBox.addEventListener('mouseleave', (e) => {
      home.classList.remove('go-bright');
    });

    const market = document.querySelector('.market-img');
    const marketBox = document.querySelector('.market-box');
    marketBox.addEventListener('mouseover', (e) => {
      market.classList.add('go-bright');
    });
    marketBox.addEventListener('mouseleave', (e) => {
      market.classList.remove('go-bright');
    });

    const enemy = document.querySelector('.enemy-img');
    const enemyBox = document.querySelector('.enemy-box');
    enemyBox.addEventListener('mouseover', (e) => {
      enemy.classList.add('go-bright-2');
    });
    enemyBox.addEventListener('mouseleave', (e) => {
      enemy.classList.remove('go-bright-2');
    });
  }

  useEffect(() => {
    script();
  }, []);

  return (
    <>
    <Navbar/>
    <div class="on-load hide-animations-in">
    <img class="go-go-go" src="1.png"/>
    <img class="go-go-go" src="2.png"/>
    <div class="go-go-go"></div>
    <div class="go-go-go"></div>
    </div>
    
    <div onClick={goHome} class="home-box"></div>
    <img class="market-img" src="market.png"/>
    
    <div onClick={goMarket} class="market-box"></div>
    <img class="home-img" src="home.png"/>

    <img class="enemy-back-asset" src="back-for-enemy.png"/>
    <img class="square-back" src="square.png"/>

    <div onClick={goFight} class="enemy-box"></div>
    <img class="enemy-img" src="beaver1.svg"/>

    {/* <div class="go-front absolute"> */}
      {/* <div>nickname: {user.nickname}, name: {user.name}</div> */}
      {/* <button class="go-home-btn">
        Home */}
        {/* <Link to='/home'>Дом</Link> */}
      {/* </button>
      <button>
        <div onClick={goFight}>Драка</div>
      </button>
      <button>
        <Link to='/' >Арена</Link>
      </button>
      <button>
        <Link to='/'>Торговцы</Link>
      </button>
    </div> */}
    {/* <img class="" */}
    </>
  );
}

export default Main;
