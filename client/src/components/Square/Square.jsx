import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logoutThunk } from '../../redux/thunk/authorizationThunk';

const Main = () => {
  const user = useSelector(store => store.user);
  const userr = useSelector(store => store.authorization);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async (e) => {
    e.preventDefault();
    dispatch(logoutThunk());
    navigate('/login');
  };

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
    const goGoGo = document.querySelectorAll('.go-go-go');
    const loading = document.querySelector('.on-load');
    loading.classList.remove('hide-animations-in');
    goGoGo[0].classList.add('logo-left-s');
    goGoGo[1].classList.add('logo-right-s');
    goGoGo[2].classList.add('loading-left-s');
    goGoGo[3].classList.add('loading-right-s');
    setTimeout(() => {
      navigate('/home');
    }, 700);
  }

  const goMarket = (e) => {
    const goGoGo = document.querySelectorAll('.go-go-go');
    const loading = document.querySelector('.on-load');
    loading.classList.remove('hide-animations-in');
    goGoGo[0].classList.add('logo-left-s');
    goGoGo[1].classList.add('logo-right-s');
    goGoGo[2].classList.add('loading-left-s');
    goGoGo[3].classList.add('loading-right-s');
    setTimeout(() => {
      navigate('/market');
    }, 700);
  }

  const goChat = (e) => {
    const goGoGo = document.querySelectorAll('.go-go-go');
    const loading = document.querySelector('.on-load');
    loading.classList.remove('hide-animations-in');
    goGoGo[0].classList.add('logo-left-s');
    goGoGo[1].classList.add('logo-right-s');
    goGoGo[2].classList.add('loading-left-s');
    goGoGo[3].classList.add('loading-right-s');
    setTimeout(() => {
      navigate('/chat');
    }, 700);
  }

  function script() {
    let pers1i = 7;
    const pers1svg = userr.role ==='Hedgehog' ? ['hedgehog1.svg',
      'hedgehog2.svg',
      'hedgehog3.svg',
      'hedgehog4.svg',
      'hedgehog5.svg',
      'hedgehog4.svg',
      'hedgehog3.svg',
      'hedgehog2.svg',
      'hedgehog1.svg',
      'hedgehog2.svg',
      'hedgehog3.svg',
      'hedgehog2.svg',
      'hedgehog1.svg',
      'hedgehog2.svg',
      'hedgehog3.svg',
      'hedgehog2.svg',
      'hedgehog1.svg',
      'hedgehog2.svg',
      'hedgehog3.svg',
      'hedgehog2.svg',
    ] : 
    ['beaver1.svg',
      'beaver2.svg',
      'beaver3.svg',
      'beaver4.svg',
      'beaver5.svg',
      'beaver4.svg',
      'beaver3.svg',
      'beaver2.svg',
      'beaver1.svg',
      'beaver2.svg',
      'beaver3.svg',
      'beaver2.svg',
      'beaver1.svg',
      'beaver2.svg',
      'beaver3.svg',
      'beaver2.svg',
      'beaver1.svg',
      'beaver2.svg',
      'beaver3.svg',
      'beaver2.svg',
    ] ;

    const pers1 = document.querySelector('.my-img');

    const pers1idle = setInterval(() => {
      switch (pers1i) {
        case 0:
        case 8:
        case 12:
        case 16:
          pers1.src = pers1svg[1];
          break;
        case 1:
        case 9:
        case 13:
        case 17:
          pers1.src = pers1svg[2];
          break;
        case 2:
          pers1.src = pers1svg[3];
          break;
        case 3:
          pers1.src = pers1svg[4];
          break;
        case 4:
          pers1.src = pers1svg[5];
          break;
        case 5:
          pers1.src = pers1svg[6];
          break;
        case 6:
        case 10:
        case 14:
        case 18:
          pers1.src = pers1svg[7];
          break;
        case 7:
        case 11:
        case 15:
        case 19:
          pers1.src = pers1svg[8];
          break;
      }
      pers1i = pers1i + 1 === pers1svg.length ? 0 : pers1i + 1;
    }, 185);


    let pers2i = 0;
    const pers2svg = userr.role ==='Hedgehog' ? ['beaver1.svg',
      'beaver2.svg',
      'beaver3.svg',
      'beaver4.svg',
      'beaver5.svg',
      'beaver4.svg',
      'beaver3.svg',
      'beaver2.svg',
      'beaver1.svg',
      'beaver2.svg',
      'beaver3.svg',
      'beaver2.svg',
      'beaver1.svg',
      'beaver2.svg',
      'beaver3.svg',
      'beaver2.svg',
      'beaver1.svg',
      'beaver2.svg',
      'beaver3.svg',
      'beaver2.svg',
    ] : ['hedgehog1.svg',
    'hedgehog2.svg',
    'hedgehog3.svg',
    'hedgehog4.svg',
    'hedgehog5.svg',
    'hedgehog4.svg',
    'hedgehog3.svg',
    'hedgehog2.svg',
    'hedgehog1.svg',
    'hedgehog2.svg',
    'hedgehog3.svg',
    'hedgehog2.svg',
    'hedgehog1.svg',
    'hedgehog2.svg',
    'hedgehog3.svg',
    'hedgehog2.svg',
    'hedgehog1.svg',
    'hedgehog2.svg',
    'hedgehog3.svg',
    'hedgehog2.svg',
  ];;

    const pers2 = document.querySelector('.enemy-img');

    const pers2idle = setInterval(() => {
      switch (pers2i) {
        case 0:
        case 8:
        case 12:
        case 16:
          pers2.src = pers2svg[1];
          break;
        case 1:
        case 9:
        case 13:
        case 17:
          pers2.src = pers2svg[2];
          break;
        case 2:
          pers2.src = pers2svg[3];
          break;
        case 3:
          pers2.src = pers2svg[4];
          break;
        case 4:
          pers2.src = pers2svg[5];
          break;
        case 5:
          pers2.src = pers2svg[6];
          break;
        case 6:
        case 10:
        case 14:
        case 18:
          pers2.src = pers2svg[7];
          break;
        case 7:
        case 11:
        case 15:
        case 19:
          pers2.src = pers2svg[8];
          break;
      }
      pers2i = pers2i + 1 === pers2svg.length ? 0 : pers2i + 1;
    }, 185);

    const home = document.querySelector('.home-img');
    const homeBox = document.querySelector('.home-box');
    homeBox.addEventListener('mouseover', (e) => {
      home.classList.add('go-bright');
      pers1.classList.add('go-bright');
    });
    homeBox.addEventListener('mouseleave', (e) => {
      home.classList.remove('go-bright');
      pers1.classList.remove('go-bright');
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
    const onLoad = document.querySelector('#on-load');
    setTimeout(() => {
      onLoad.classList.add('hide-animations-in');
    }, 870);
    script();
  }, []);

  return (
    <>
    {/* <Navbar/> */}
    <div onClick={logoutHandler} class="exit-user">ВЫХОД</div>

    <img class="a-h aa" src="arrow-home.png"/>
    <img class="a-f aa" src="arrow-fight.png"/>
    <img class="a-m aa" src="arrow-market.png"/>

    <img class="a-h1 aaa" src="hata.png"/>
    <img class="a-f1 aaa" src="boi.png"/>
    <img class="a-m1 aaa" src="rynok.png"/>

    <img class="bee-s" src="bee1.png"/>
    <img class="bee-s2" src="bee1.png"/>
    <img class="bee-s3" src="bee1.png"/>

    <div class="on-load hide-animations-in">
    <img class="go-go-go" src="1.png"/>
    <img class="go-go-go" src="2.png"/>
    <div class="go-go-go"></div>
    <div class="go-go-go"></div>
    </div>

    <div id="on-load" class="on-load">
    <img class="logo-left-f delay02" src="1.png"/>
    <img class="logo-right-f delay02" src="2.png"/>
    <div class="loading-left delay02"></div>
    <div class="loading-right delay02"></div>
    </div>

    <img class="firekit" src="fffire.gif"/>
    <div class="fire-shadow"></div>
    
    <div onClick={goHome} class="home-box"></div>
    <img class="market-img" src="market.png"/>
    
    <div onClick={goMarket} class="market-box"></div>
    <img class="home-img" src="home.png"/>

    <img class="enemy-back-asset" src="back-for-enemy.png"/>
    <img class="square-back" src="square.png"/>

    <div onClick={goFight} class="enemy-box"></div>
    <img class="enemy-img" src="beaver1.svg"/>

    <img class="my-img" src="hedgehog3.svg"/>

    <img onClick={goChat} class="chat-s" src="chat.png"/>

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
