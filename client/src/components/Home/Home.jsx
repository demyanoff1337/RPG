import { devToolsEnhancerDevelopmentOnly } from "@redux-devtools/extension";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const exit = (e) => {
    navigate('/square');
  }

  const [person, setPerson] = useState({});
  const [invent, setInvent] = useState({});
  const [cardList, setCardList] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [armorList, setArmorList] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [fireList, setFireList] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [flask1List, setFlask1List] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [flask2List, setFlask2List] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [flask3List, setFlask3List] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [flask4List, setFlask4List] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);

  const [cardList2, setCardList2] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [armorList2, setArmorList2] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [fireList2, setFireList2] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [flask1List2, setFlask1List2] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [flask2List2, setFlask2List2] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [flask3List2, setFlask3List2] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const [flask4List2, setFlask4List2] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);
  const user = useSelector(store => store.user);

  useEffect(() => {
    async function getPerson() {
      try {
        let invent2;
        let pers;
        let response = await fetch(`/person/1`); // user_id
        if (response.ok) {
          const persona = await response.json();
          if (persona.failed) {
            alert('Something went wrong')
          } else {
            pers = persona;
          }
        }

        response = await fetch(`/inv/${pers.inventory_id}`); // inv_id
        if (response.ok) {
          const inv = await response.json();
          if (inv.failed) {
            alert('Something went wrong')
          } else {
            setInvent(inv);
            invent2 = inv;
          }
        }

        response = await fetch(`/weap/${pers.weapon_id}`);
        if (response.ok) {
          const weap = await response.json();
          weap.img = weap.image || 'empty.png';
          pers.damage += weap.damage;
          if (weap.failed) {
            alert('Something went wrong')
          } else {
            setCardList([weap, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/arm/${pers.armor_id}`);
        if (response.ok) {
          const arm = await response.json();
          arm.img = arm.image || 'empty.png';
          pers.armor += arm.armor;
          if (arm.failed) {
            alert('Something went wrong')
          } else {
            setArmorList([arm, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/fire/${pers.skill_id}`);
        if (response.ok) {
          const fire = await response.json();
          fire.img = fire.image || 'empty.png';
          pers.damage += fire.damage;
          setPerson(pers);
          if (fire.failed) {
            alert('Something went wrong')
          } else {
            setFireList([fire, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${pers.flask1_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask1List([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${pers.flask2_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask2List([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${pers.flask3_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask3List([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${pers.flask4_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask4List([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        // -----------------------------------

        response = await fetch(`/weap/${invent2.weapon_id}`);
        if (response.ok) {
          const weap = await response.json();
          weap.img = weap.image || 'empty.png';
          if (weap.failed) {
            alert('Something went wrong')
          } else {
            setCardList2([weap, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/arm/${invent2.armor_id}`);
        if (response.ok) {
          const arm = await response.json();
          arm.img = arm.image || 'empty.png';
          if (arm.failed) {
            alert('Something went wrong')
          } else {
            setArmorList2([arm, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/fire/${invent2.skill_id}`);
        if (response.ok) {
          const fire = await response.json();
          fire.img = fire.image || 'empty.png';
          if (fire.failed) {
            alert('Something went wrong')
          } else {
            setFireList2([fire, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${invent2.flask1_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask1List2([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${invent2.flask2_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask2List2([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${invent2.flask3_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask3List2([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${invent2.flask4_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask4List2([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

      } catch (e) {
        alert(e);
      }
    }
    getPerson();
  }, []);

  const [cardFlasc, setCardFlasc] = useState([
    { id: 1, order: 3, type: 'flasc', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);


  const [currentCard, setCurrentCard] = useState(null) // состояние что бы запоминать новую карточку
  // const [currentFlasc, setCurrentFlasc] = useState(null)
  // const [dragOver, setDragOver] = useState(null)

  // console.log('currentFlasc', currentFlasc);
  const w = document.getElementById('weapon');
  const a = document.getElementById('shield');
  function dragStartHandler(e, card) {
    setCurrentCard(card)
    a.classList.add('z-index');
    console.log(a);
    // setCurrentFlasc(card)
  }
  function dragEndHandler(e, card) {

  }
  function dragOverHandler(e, card) {
    e.preventDefault()
  }
  function dropHandler(e, card) {
    e.preventDefault()
      setCardList([cardList[1], cardList[0]]);
  }


  function dragStartHandler2(e, card) {
    setCurrentCard(card)
    // setCurrentFlasc(card)

  }
  function dragEndHandler2(e, card) {

  }
  function dragOverHandler2(e, card) {
    e.preventDefault()
  }
  function dropHandler2(e, card) { 
    e.preventDefault() 
      setArmorList([armorList[1], armorList[0]]);    
  }

  function dragStartHandler3(e, card) {
    setCurrentCard(card)
    // setCurrentFlasc(card)

  }
  function dragEndHandler3(e, card) {

  }
  function dragOverHandler3(e, card) {
    e.preventDefault()
  }
  function dropHandler3(e, card) { 
    e.preventDefault() 
      setFireList([armorList[1], armorList[0]]);    
  }

  return ( <div id="home">
    <div id="left">
      <div id="charachter">
        <div id="exp-bar"></div>
        <div id="exp">Опыт: {person.exp}</div>
        <div id="lvl-label">уровень</div>
        <div id="lvl">{person.level}</div>
        <div id="person">
          <img id="person-img" src="hedgehog1.svg" alt="hedghehog"/>
        </div>
        {/* <div id="items">
          <div id="weapon">
          <img id="item-img" src="https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg" alt="ima"/>
          </div>
          <div id="shield">
          <img id="item-img" src="https://cdn4.iconfinder.com/data/icons/ancient-melee-weapons-and-helmets/128/Shield_Crossed_Swords-512.png" alt="ima"/>
          </div>
          <div id="magic">
          <img id="item-img" src="https://images.vexels.com/media/users/3/146887/isolated/preview/41faeb4b7129b75f4883d75c72627835-fire-flame-clipart.png" alt="img"/>
          </div>
        </div> */}
        <div id="flasks">

        </div>
        {/* <div id="stats">
          <div id="hp-flex">
            <div id="hp-bar"></div>
            <div id="hp">3000</div>
          </div>
          <div id="damage-flex">
            <div id="damage-bar"></div>
            <div id="damage">322</div>
          </div>
          <div id="armor-flex">
            <div id="armor-bar"></div>
            <div id="armor">137</div>
          </div>
        </div> */}

        <div id="username-incard">
          <span id="marge-alittle">EZHII!</span>
        </div>

        <div id="down-card">
          <div id="money">{person.money} <span><img id="card-money-icon" src="coin.png" alt=""></img></span></div>
          <div id="to-shop">ТОРГОВЦЫ</div>
        </div>

        <img id="chain1" className="chain" src="chain.png" alt="img"/>
        <img id="chain2" className="chain" src="chain.png" alt="img"/>

      </div>
    </div>
        
    <div id="right">


      <div class="exit-home" onClick={exit}>x</div>

      <div id="stats" className="pokazateli">ХАРАКТЕРИСТИКИ</div>
      <div id="line-1" className="line"></div>

      <div id="armory" className="pokazateli">СНАРЯЖЕНИЕ</div>
      <div id="line-2" className="line"></div>

      <div id="invent" className="pokazateli">ИНВЕНТАРЬ</div>
      <div id="line-3" className="line"></div>

      {/* <div id="health"> */}
        
        <div id="health-bar" className="right-bar">
          <div id="health-label" className="right-bar-label">{person.HP}<span>
            <img id="icon-for-stats" src="heart.png" alt="img"/>
            </span></div>
        </div>

        <div id="damage-bar" className="right-bar">
          <div id="damage-label" className="right-bar-label">{person.damage}<span>
            <img id="icon-for-stats" src="attack.png" alt="img"/>
            </span></div>
        </div>

        <div id="armor-bar" className="right-bar">
          <div id="armor-label" className="right-bar-label">{person.armor}%<span>
            <img id="icon-for-stats" src="shield.png" alt="img"/>
            </span></div>
        </div>
      {/* </div> */}

      {/* <div id="damage">322</div>
      <div id="crit">3%</div>
      <div id="bleed">2%</div>
     
      <div id="armor">25</div>
      <div id="dodge">13%</div>
      <div id="contr">12%</div>  */}

      <div id="items">
          <div 
           onDragStart={(e) => dragStartHandler(e, cardList[0])} //срабатывает в тот момент когда мы взяли карточку
                       onDragLeave={(e) => dragEndHandler(e)} // срабатывает если мы вышли за пределы другой карттчки
                       onDragEnd={(e) => dragEndHandler(e)} // если мы отпустили перемещение
                       onDragOver={(e) => dragOverHandler(e)} //если мы находимся над другим объектом
                       onDrop={(e) => dropHandler(e, cardList[0])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
                       draggable={true}
          id="weapon" className="item-card mr-2">
            <img id="item-img" className="item-img-card" src={cardList[0].img} alt="ima"/>
          </div>
          <div
          onDragStart={(e) => dragStartHandler2(e, armorList[0])} //срабатывает в тот момент когда мы взяли карточку
          onDragLeave={(e) => dragEndHandler2(e)} // срабатывает если мы вышли за пределы другой карттчки
          onDragEnd={(e) => dragEndHandler2(e)} // если мы отпустили перемещение
          onDragOver={(e) => dragOverHandler2(e)} //если мы находимся над другим объектом
          onDrop={(e) => dropHandler2(e, armorList[0])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
          draggable={true} 
          id="shield"  className="item-card mr-2">
            <img id="item-img" className="item-img-card" src={armorList[0].img} alt="ima"/>
          </div>
            <div 
            onDragStart={(e) => dragStartHandler3(e, fireList[0])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler3(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler3(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler3(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler3(e, fireList[0])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true} 
            id="magic" className="item-card mr">
          <img id="item-img" className="item-img-card" src={fireList[0].img} alt="img"/>
          </div>

          {/* <div id="flask-items"> */}
          {/* {new Array(4).fill().map((el, i) => ( */}
            <div id={`item-s`} className="item-card">
              <img id="item-img" className="item-img-card" src={flask1List[0].img} alt="img"/>
            </div>

            <div id={`item-s`} className="item-card">
            <img id="item-img" className="item-img-card" src={flask2List[0].img} alt="img"/>
            </div>

            <div id={`item-s`} className="item-card">
              <img id="item-img" className="item-img-card" src={flask3List[0].img} alt="img"/>
            </div>

            <div id={`item-s`} className="item-card">
              <img id="item-img" className="item-img-card" src={flask4List[0].img} alt="img"/>
            </div>
            {/* ))} */}
          {/* </div> */}
      </div>

      <div id="hint-1" className="hint-2">ОРУЖИЕ</div>      
      <div id="ramka-1" className="ramka"></div>

      <div id="hint-2" className="hint-2">БРОНЯ</div>      
      <div id="ramka-2" className="ramka"></div>

      <div id="hint-3" className="hint-2">УМЕНИЕ</div>      
      <div id="ramka-3" className="ramka"></div>

      <div id="hint-4" className="hint-2">ЗЕЛЬЯ</div>      
      <div id="ramka-4" className="ramka-big"></div>

      <div id="inventory">

      
      <div
      onDragStart={(e) => dragStartHandler(e, cardList[1])} //срабатывает в тот момент когда мы взяли карточку
      onDragLeave={(e) => dragEndHandler(e)} // срабатывает если мы вышли за пределы другой карттчки
      onDragEnd={(e) => dragEndHandler(e)} // если мы отпустили перемещение
      onDragOver={(e) => dragOverHandler(e)} //если мы находимся над другим объектом
      onDrop={(e) => dropHandler(e, cardList[1])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
      draggable={true} 
      id="weapon" className="item-card mr-2">
            <img id="item-img" className="item-img-card" src={cardList2[0].img} alt="ima"/>
          </div>
          <div 
          onDragStart={(e) => dragStartHandler2(e, armorList[1])} //срабатывает в тот момент когда мы взяли карточку
          onDragLeave={(e) => dragEndHandler2(e)} // срабатывает если мы вышли за пределы другой карттчки
          onDragEnd={(e) => dragEndHandler2(e)} // если мы отпустили перемещение
          onDragOver={(e) => dragOverHandler2(e)} //если мы находимся над другим объектом
          onDrop={(e) => dropHandler2(e, armorList[1])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
          draggable={true} 
          id="shield"  className="item-card mr-2">
            <img id="item-img" className="item-img-card" src={armorList2[0].img} alt="ima"/>
          </div>
            <div 
            onDragStart={(e) => dragStartHandler3(e, fireList[1])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler3(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler3(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler3(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler3(e, fireList[1])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true} 
            id="magic" className="item-card mr">
          <img id="item-img" className="item-img-card" src={fireList2[0].img} alt="img"/>
          </div>


          {/* {new Array(4).fill().map(el => ( */}
            <div id="item-s" className="item-card">
              <img id="item-img" className="item-img-card" src={flask1List2[0].img} alt="img"/>
            </div>

            <div id="item-s" className="item-card">
              <img id="item-img" className="item-img-card" src={flask2List2[0].img} alt="img"/>
            </div>

            <div id="item-s" className="item-card">
              <img id="item-img" className="item-img-card" src={flask3List2[0].img} alt="img"/>
            </div>

            <div id="item-s" className="item-card">
              <img id="item-img" className="item-img-card" src={flask4List2[0].img} alt="img"/>
            </div>
            {/* ))} */}

      </div>  

      <div id="hint-11" className="hint">ОРУЖИЕ</div>      
      <div id="ramka-11" className="ramka-1"></div>

      <div id="hint-12" className="hint">БРОНЯ</div>      
      <div id="ramka-12" className="ramka-1"></div>

      <div id="hint-13" className="hint">УМЕНИЕ</div>      
      <div id="ramka-13" className="ramka-1"></div>

      <div id="hint-14" className="hint">ЗЕЛЬЯ</div>      
      <div id="ramka-14" className="ramka-big-1"></div>

      <img id="chain3" className="chain" src="chain.png" alt="img"/>
      <img id="chain4" className="chain" src="chain.png" alt="img"/>
    </div>
  </div> );
}
 
export default Home;
