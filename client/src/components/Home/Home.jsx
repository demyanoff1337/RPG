import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/actions/userActions";

const Home = () => {
  const userr = useSelector(store => store.authorization)
  const me = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const exit = (e) => {
    const l = document.getElementById('left');
      const r = document.getElementById('right');
      l.classList.add('left-anim-out');
      l.classList.remove('all-ok');
      l.classList.add('all-no');
      r.classList.add('right-anim-out');
      r.classList.remove('all-ok');
      r.classList.add('all-no');

    setTimeout(() => {
      const goGoGo = document.querySelectorAll('.go-go-go');
    const loading = document.querySelector('.on-load');
    loading.classList.remove('hide-animations-in');
    goGoGo[0].classList.add('logo-left-s');
    goGoGo[1].classList.add('logo-right-s');
    goGoGo[2].classList.add('loading-left-s');
    goGoGo[3].classList.add('loading-right-s');
    setTimeout(() => {
      navigate('/square');
    }, 700);
    }, 350);
    
  }

  const [person, setPerson] = useState({});
  const [invent, setInvent] = useState({});
  const [cardList, setCardList] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'black.png' },
    { id: 2, order: 2, type: 'inventory', img: 'black.png' },
  ]);
  const [armorList, setArmorList] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'black.png' },
    { id: 2, order: 2, type: 'inventory', img: 'black.png' },
  ]);
  const [fireList, setFireList] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'black.png' },
    { id: 2, order: 2, type: 'inventory', img: 'black.png' },
  ]);
  const [flask1List, setFlask1List] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'black.png' },
    { id: 2, order: 2, type: 'inventory', img: 'black.png' },
  ]);
  const [flask2List, setFlask2List] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'black.png' },
    { id: 2, order: 2, type: 'inventory', img: 'black.png' },
  ]);
  const [flask3List, setFlask3List] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'black.png' },
    { id: 2, order: 2, type: 'inventory', img: 'black.png' },
  ]);
  const [flask4List, setFlask4List] = useState([
    { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'black.png' },
    { id: 2, order: 2, type: 'inventory', img: 'black.png' },
  ]);

  // const [cardList2, setCardList2] = useState([
  //   { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
  //   { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  // ]);
  // const [armorList2, setArmorList2] = useState([
  //   { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
  //   { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  // ]);
  // const [fireList2, setFireList2] = useState([
  //   { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
  //   { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  // ]);
  // const [flask1List2, setFlask1List2] = useState([
  //   { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
  //   { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  // ]);
  // const [flask2List2, setFlask2List2] = useState([
  //   { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
  //   { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  // ]);
  // const [flask3List2, setFlask3List2] = useState([
  //   { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
  //   { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  // ]);
  // const [flask4List2, setFlask4List2] = useState([
  //   { id: 1, order: 1, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
  //   { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  // ]);
  const user = useSelector(store => store.authorization);

  function script() {
    let pers1i = 7;
    let pers1svg = userr.role === 'Hedgehog' ? ['hedgehog1.svg',
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
    ] : ['beaver1.svg',
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
  ];

    const pers1 = document.querySelector('#person-img');

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
  }

  useEffect(() => {
    script();
    const onLoad = document.querySelector('#on-load');
    setTimeout(() => {
      const l = document.getElementById('left');
      const r = document.getElementById('right');
      l.classList.add('left-anim');
      l.classList.remove('all-no');
      l.classList.add('all-ok');

      r.classList.add('right-anim');
      r.classList.remove('all-no');
      r.classList.add('all-ok');
    }, 400);
    setTimeout(() => {
      onLoad.classList.add('hide-animations-in');
    }, 870);
    async function getPerson() {
      try {
        let invent2;
        let pers;
        let wep1, wep2, arm1, arm2, fire1, fire2, med1, med2, med3, med4, med5, med6, med7, med8;

        let response = await fetch(`/person/${user.id}`); // user_id
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
          wep1 = weap;
          pers.damage += weap.damage || 0;
          if (weap.failed) {
            alert('Something went wrong')
          } else {
            // setCardList([weap, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/arm/${pers.armor_id}`);
        if (response.ok) {
          const arm = await response.json();
          arm.img = arm.image || 'empty.png';
          pers.armor += arm.armor || 0;
          arm1 = arm;
          if (arm.failed) {
            alert('Something went wrong')
          } else {
            // setArmorList([arm, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/fire/${pers.skill_id}`);
        if (response.ok) {
          const fire = await response.json();
          fire.img = fire.image || 'empty.png';
          pers.damage += fire.damage || 0;
          fire1 = fire;
          setPerson(pers);
          if (fire.failed) {
            alert('Something went wrong')
          } else {
            // setFireList([fire, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${pers.flask1_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          med1 = flask;
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            // setFlask1List([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${pers.flask2_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          med3 = flask;
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            // setFlask2List([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${pers.flask3_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          med5 = flask;
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            // setFlask3List([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        response = await fetch(`/flask1/${pers.flask4_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          med7 = flask;
          if (flask.failed) {
            alert('Something went wrong');
          } else {
            // setFlask4List([flask, { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' }]);
          }
        }

        // -----------------------------------

        response = await fetch(`/weap/${invent2.weapon_id}`);
        if (response.ok) {
          const weap = await response.json();
          weap.img = weap.image || 'empty.png';
          if (weap.failed) {
            alert('Something went wrong');
          } else {
            setCardList([wep1, weap]);
          }
        }

        response = await fetch(`/arm/${invent2.armor_id}`);
        if (response.ok) {
          const arm = await response.json();
          arm.img = arm.image || 'empty.png';
          if (arm.failed) {
            alert('Something went wrong');
          } else {
            setArmorList([arm1, arm]);
          }
        }

        response = await fetch(`/fire/${invent2.skill_id}`);
        if (response.ok) {
          const fire = await response.json();
          fire.img = fire.image || 'empty.png';
          if (fire.failed) {
            alert('Something went wrong');
          } else {
            setFireList([fire1, fire]);
          }
        }

        response = await fetch(`/flask1/${invent2.flask1_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong');
          } else {
            setFlask1List([med1, flask]);
          }
        }

        response = await fetch(`/flask1/${invent2.flask2_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask2List([med3, flask]);
          }
        }

        response = await fetch(`/flask1/${invent2.flask3_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask3List([med5, flask]);
          }
        }

        response = await fetch(`/flask1/${invent2.flask4_id}`); // inv_id
        if (response.ok) {
          const flask = await response.json();
          flask.img = flask.image || 'empty.png';
          if (flask.failed) {
            alert('Something went wrong')
          } else {
            setFlask4List([med7, flask]);
          }
        }

      } catch (e) {
        alert(e);
      }
    }
    getPerson();
  }, []);



  const [currentCard, setCurrentCard] = useState(null) // состояние что бы запоминать новую карточку
  // const [currentFlasc, setCurrentFlasc] = useState(null)
  // const [dragOver, setDragOver] = useState(null)

  // console.log('currentFlasc', currentFlasc);
  // const w = document.getElementById('weapon');
  // const a = document.getElementById('shield');
  function dragStartHandler(e, card) {
    setCurrentCard(card)
    // a.classList.add('z-index');
    // console.log(a);
    // setCurrentFlasc(card)
  }
  function dragEndHandler(e, card) {

  }
  function dragOverHandler(e, card) {
    e.preventDefault()
  }
  async function dropHandler(e, card) {
    e.preventDefault()
    const item = cardList[1]; 
    const item2 = cardList[0]; 
      await fetch(`/weapon-set/${item.id || 'empty'}/${item2.id || 'empty'}/${person.id}`); 
      if (item.damage && item2.damage) {
        const user = { id: person.id, user_id: person.user_id, level: person.level, exp: person.exp, HP: person.HP, damage: person.damage - item2.damage + item.damage, armor: person.armor, money: me.money, 
      weapon_id: person.weapon_id, armor_id: person.armor_id, inventory_id: person.inventory_id, flask1_id: person.flask1_id, flask2_id: person.flask2_id, 
    flask3_id: person.flask3_id, flask4_id: person.flask4_id };
    setPerson(user);
    dispatch(getUser(user));
        }
      if (item.damage && !item2.damage) {
        const user = { id: person.id, user_id: person.user_id, level: person.level, exp: person.exp, HP: person.HP, damage: person.damage + item.damage, armor: person.armor, money: me.money, 
      weapon_id: person.weapon_id, armor_id: person.armor_id, inventory_id: person.inventory_id, flask1_id: person.flask1_id, flask2_id: person.flask2_id, 
    flask3_id: person.flask3_id, flask4_id: person.flask4_id }
    setPerson(user);
    dispatch(getUser(user));
        }
      if (!item.damage && item2.damage) {
        const user = { id: person.id, user_id: person.user_id, level: person.level, exp: person.exp, HP: person.HP, damage: person.damage - item2.damage, armor: person.armor, money: me.money, 
      weapon_id: person.weapon_id, armor_id: person.armor_id, inventory_id: person.inventory_id, flask1_id: person.flask1_id, flask2_id: person.flask2_id, 
    flask3_id: person.flask3_id, flask4_id: person.flask4_id }
    setPerson(user);
    dispatch(getUser(user));
      }
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
  async function dropHandler2(e, card) { 
    e.preventDefault() 
    const item = armorList[1]; 
    const item2 = armorList[0]; 
      await fetch(`/armor-set/${item.id || 'empty'}/${item2.id || 'empty'}/${person.id}`); 
      if (item.armor && item2.armor) {
        const user = { id: person.id, user_id: person.user_id, level: person.level, exp: person.exp, HP: person.HP, damage: person.damage, armor: person.armor - item2.armor + item.armor, money: me.money, 
      weapon_id: person.weapon_id, armor_id: person.armor_id, inventory_id: person.inventory_id, flask1_id: person.flask1_id, flask2_id: person.flask2_id, 
    flask3_id: person.flask3_id, flask4_id: person.flask4_id }
    setPerson(user);
    dispatch(getUser(user));
        }
      if (item.armor && !item2.armor) {
        const user = { id: person.id, user_id: person.user_id, level: person.level, exp: person.exp, HP: person.HP, damage: person.damage, armor: person.armor + item.armor, money: me.money, 
      weapon_id: person.weapon_id, armor_id: person.armor_id, inventory_id: person.inventory_id, flask1_id: person.flask1_id, flask2_id: person.flask2_id, 
    flask3_id: person.flask3_id, flask4_id: person.flask4_id }
    setPerson(user);
    dispatch(getUser(user));
        }
      if (!item.armor && item2.armor) {
        const user = { id: person.id, user_id: person.user_id, level: person.level, exp: person.exp, HP: person.HP, damage: person.damage, armor: person.armor - item2.armor, money: me.money, 
      weapon_id: person.weapon_id, armor_id: person.armor_id, inventory_id: person.inventory_id, flask1_id: person.flask1_id, flask2_id: person.flask2_id, 
    flask3_id: person.flask3_id, flask4_id: person.flask4_id }
    setPerson(user);
    dispatch(getUser(user));
      }
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

  async function dropHandler3(e, card) { 
    e.preventDefault() 
    const item = fireList[1]; 
    const item2 = fireList[0]; 
      await fetch(`/fire-set/${item.id || 'empty'}/${item2.id || 'empty'}/${person.id}`); 
      if (item.damage && item2.damage) {
        const user = { id: person.id, user_id: person.user_id, level: person.level, exp: person.exp, HP: person.HP, damage: person.damage - item2.damage + item.damage, armor: person.armor, money: me.money, 
      weapon_id: person.weapon_id, armor_id: person.armor_id, inventory_id: person.inventory_id, flask1_id: person.flask1_id, flask2_id: person.flask2_id, 
    flask3_id: person.flask3_id, flask4_id: person.flask4_id }
    setPerson(user);
    dispatch(getUser(user));
        }
      if (item.damage && !item2.damage) {
        const user = { id: person.id, user_id: person.user_id, level: person.level, exp: person.exp, HP: person.HP, damage: person.damage + item.damage, armor: person.armor, money: me.money, 
      weapon_id: person.weapon_id, armor_id: person.armor_id, inventory_id: person.inventory_id, flask1_id: person.flask1_id, flask2_id: person.flask2_id, 
    flask3_id: person.flask3_id, flask4_id: person.flask4_id }
    setPerson(user);
    dispatch(getUser(user));
        }
      if (!item.damage && item2.damage) {
        const user = { id: person.id, user_id: person.user_id, level: person.level, exp: person.exp, HP: person.HP, damage: person.damage - item2.damage, armor: person.armor, money: me.money, 
      weapon_id: person.weapon_id, armor_id: person.armor_id, inventory_id: person.inventory_id, flask1_id: person.flask1_id, flask2_id: person.flask2_id, 
    flask3_id: person.flask3_id, flask4_id: person.flask4_id }
    setPerson(user);
    dispatch(getUser(user));
      }
      setFireList([fireList[1], fireList[0]]);   
  }

  function dragStartHandler4(e, card) {
    setCurrentCard(card)
    // setCurrentFlasc(card)

  }
  function dragEndHandler4(e, card) {

  }
  function dragOverHandler4(e, card) {
    e.preventDefault()
  }
  async function dropHandler4(e, card) { 
    e.preventDefault() 
    const item = flask1List[1]; 
    const item2 = flask1List[0]; 
      await fetch(`/flask1-set/${item.id || 'empty'}/${item2.id || 'empty'}/${person.id}`); 
      setFlask1List([flask1List[1], flask1List[0]]);    
  }

  function dragStartHandler5(e, card) {
    setCurrentCard(card)
    // setCurrentFlasc(card)

  }
  function dragEndHandler5(e, card) {

  }
  function dragOverHandler5(e, card) {
    e.preventDefault()
  }
  async function dropHandler5(e, card) { 
    e.preventDefault() 
    const item = flask2List[1]; 
    const item2 = flask2List[0]; 
      await fetch(`/flask2-set/${item.id || 'empty'}/${item2.id || 'empty'}/${person.id}`); 
      setFlask2List([flask2List[1], flask2List[0]]);    
  }

  function dragStartHandler6(e, card) {
    setCurrentCard(card)
    // setCurrentFlasc(card)

  }
  function dragEndHandler6(e, card) {

  }
  function dragOverHandler6(e, card) {
    e.preventDefault()
  }
  async function dropHandler6(e, card) { 
    e.preventDefault() 
    const item = flask3List[1]; 
    const item2 = flask3List[0]; 
      await fetch(`/flask3-set/${item.id || 'empty'}/${item2.id || 'empty'}/${person.id}`); 
      setFlask3List([flask3List[1], flask3List[0]]);    
  }

  function dragStartHandler7(e, card) {
    setCurrentCard(card)
    // setCurrentFlasc(card)

  }
  function dragEndHandler7(e, card) {

  }
  function dragOverHandler7(e, card) {
    e.preventDefault()
  }
  async function dropHandler7(e, card) { 
    e.preventDefault() 
    const item = flask4List[1]; 
    const item2 = flask4List[0]; 
      await fetch(`/flask4-set/${item.id || 'empty'}/${item2.id || 'empty'}/${person.id}`); 
      setFlask4List([flask4List[1], flask4List[0]]);    
  }

  

  return ( 
  <>
  <img class="home-b" src="home-b.png"/>
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

  <div id="home">
    <div id="left" class="all-no">
      <div id="charachter">
        <div id="exp-bar">{person.exp} / 500<span class="exp-h"><img class="el" src="exp.png"/><img class="er" src="exp.png"/></span></div>
        <div id="exp"></div>
        <div id="lvl">{person.level} уровень</div>
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
          <span id="marge-alittle">{userr.nickname}</span>
          <span id="marge-alittle2"></span>
        </div>

        <div id="down-card">
          <div id="money">{me.money} <span><img id="card-money-icon" src="coin.png"/><img id="card-money-icon-r" src="coin.png"/></span></div>
        </div>

        <img id="chain1" className="chain" src="chain.png" alt="img"/>
        <img id="chain2" className="chain" src="chain.png" alt="img"/>

      </div>
    </div>
        
    <div id="right" class="all-no">


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
        <div class="help"></div>
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
            <div
            onDragStart={(e) => dragStartHandler4(e, flask1List[0])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler4(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler4(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler4(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler4(e, flask1List[0])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true}  
            id={`item-s`} className="item-card">
              <img id="item-img" className="item-img-card" src={flask1List[0].img} alt="img"/>
            </div>

            <div 
            onDragStart={(e) => dragStartHandler5(e, flask2List[0])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler5(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler5(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler5(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler5(e, flask2List[0])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true} 
            id={`item-s`} className="item-card">
            <img id="item-img" className="item-img-card" src={flask2List[0].img} alt="img"/>
            </div>

            <div 
            onDragStart={(e) => dragStartHandler6(e, flask3List[0])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler6(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler6(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler6(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler6(e, flask3List[0])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true} 
            id={`item-s`} className="item-card">
              <img id="item-img" className="item-img-card" src={flask3List[0].img} alt="img"/>
            </div>

            <div
            onDragStart={(e) => dragStartHandler7(e, flask4List[0])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler7(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler7(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler7(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler7(e, flask4List[0])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true} 
            id={`item-s`} className="item-card">
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

      <div id="hint-4" className="hint-2">МЁД</div>      
      <div id="ramka-4" className="ramka-big"></div>

      <div id="inventory">
      <div class="help"></div>
      
      <div
      onDragStart={(e) => dragStartHandler(e, cardList[1])} //срабатывает в тот момент когда мы взяли карточку
      onDragLeave={(e) => dragEndHandler(e)} // срабатывает если мы вышли за пределы другой карттчки
      onDragEnd={(e) => dragEndHandler(e)} // если мы отпустили перемещение
      onDragOver={(e) => dragOverHandler(e)} //если мы находимся над другим объектом
      onDrop={(e) => dropHandler(e, cardList[1])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
      draggable={true} 
      id="weapon" className="item-card mr-2">
            <img id="item-img" className="item-img-card" src={cardList[1].img} alt="ima"/>
          </div>
          <div 
          onDragStart={(e) => dragStartHandler2(e, armorList[1])} //срабатывает в тот момент когда мы взяли карточку
          onDragLeave={(e) => dragEndHandler2(e)} // срабатывает если мы вышли за пределы другой карттчки
          onDragEnd={(e) => dragEndHandler2(e)} // если мы отпустили перемещение
          onDragOver={(e) => dragOverHandler2(e)} //если мы находимся над другим объектом
          onDrop={(e) => dropHandler2(e, armorList[1])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
          draggable={true} 
          id="shield"  className="item-card mr-2">
            <img id="item-img" className="item-img-card" src={armorList[1].img} alt="ima"/>
          </div>
            <div 
            onDragStart={(e) => dragStartHandler3(e, fireList[1])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler3(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler3(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler3(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler3(e, fireList[1])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true} 
            id="magic" className="item-card mr">
          <img id="item-img" className="item-img-card" src={fireList[1].img} alt="img"/>
          </div>


          {/* {new Array(4).fill().map(el => ( */}
            <div 
            onDragStart={(e) => dragStartHandler4(e, flask1List[1])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler4(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler4(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler4(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler4(e, flask1List[1])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true} 
            id="item-s" className="item-card">
              <img id="item-img" className="item-img-card" src={flask1List[1].img} alt="img"/>
            </div>

            <div 
            onDragStart={(e) => dragStartHandler5(e, flask2List[1])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler5(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler5(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler5(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler5(e, flask2List[1])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true} 
            id="item-s" className="item-card">
              <img id="item-img" className="item-img-card" src={flask2List[1].img} alt="img"/>
            </div>

            <div 
            onDragStart={(e) => dragStartHandler6(e, flask3List[1])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler6(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler6(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler6(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler6(e, flask3List[1])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true} 
            id="item-s" className="item-card">
              <img id="item-img" className="item-img-card" src={flask3List[1].img} alt="img"/>
            </div>

            <div 
            onDragStart={(e) => dragStartHandler7(e, flask4List[1])} //срабатывает в тот момент когда мы взяли карточку
            onDragLeave={(e) => dragEndHandler7(e)} // срабатывает если мы вышли за пределы другой карттчки
            onDragEnd={(e) => dragEndHandler7(e)} // если мы отпустили перемещение
            onDragOver={(e) => dragOverHandler7(e)} //если мы находимся над другим объектом
            onDrop={(e) => dropHandler7(e, flask4List[1])} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
            draggable={true} 
            id="item-s" className="item-card">
              <img id="item-img" className="item-img-card" src={flask4List[1].img} alt="img"/>
            </div>
            {/* ))} */}

      </div>  

      <div id="hint-11" className="hint">ОРУЖИЕ</div>      
      <div id="ramka-11" className="ramka-1"></div>

      <div id="hint-12" className="hint">БРОНЯ</div>      
      <div id="ramka-12" className="ramka-1"></div>

      <div id="hint-13" className="hint">УМЕНИЕ</div>      
      <div id="ramka-13" className="ramka-1"></div>

      <div id="hint-14" className="hint">МЁД</div>      
      <div id="ramka-14" className="ramka-big-1"></div>

      <img id="chain3" className="chain" src="chain.png" alt="img"/>
      <img id="chain4" className="chain" src="chain.png" alt="img"/>
    </div>
  </div></> );
}
 
export default Home;
