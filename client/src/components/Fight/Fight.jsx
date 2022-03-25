import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/actions/userActions";
import React from 'react';
import critica from '../../audio/criticalAtack.mp3';
import lose from '../../audio/hahaLose.mp3';
import win from '../../audio/woohooWin.mp3';
import mortaKombat from '../../audio/ortal_combat_toasty.mp3';
import handHit from '../../audio/handHit.mp3';
import weaponHit from '../../audio/weaponHit.mp3';
import magicHit from '../../audio/magicHit.mp3';
import miss from '../../audio/hahaMiss.mp3';
import useSound from "use-sound";


const Fight = () => {
  const user = useSelector(store => store.authorization);
  const me = useSelector(store => store.user);
  me.nickname = user.nickname;
  // const [playCrit] = useSound(critica);
  // const [playLose] = useSound(lose);
  // const [playWin] = useSound(win);
  // const [playHit] = useSound(handHit);
  // const [playMk] = useSound(mortaKombat);
  // const [playWH] = useSound(weaponHit);
  // const [playMH] = useSound(magicHit);
  // const [playMiss] = useSound(miss);
  const audioHandhit = new Audio(handHit);
  const audiocrit = new Audio(critica)
  const audioLose = new Audio(lose)
  const audioWin = new Audio(win);
  const audioWeaponHit = new Audio(weaponHit);
  const audioMagic = new Audio(magicHit);
  const audioMiss = new Audio(miss);
  //  function playcrit() {
  //   playCrit()
  //  }


  const navigate = useNavigate();
  const dispatch = useDispatch();

  function generateEnemy() {
    return {
      nickname: user.role === 'Hedgehog' ? 'Бобр' : 'Еж',
      level: me.level + Math.floor(Math.random() * 3 - 1),
      HP: me.HP + Math.floor(Math.random() * (Math.floor(me.HP * 0.25) * 2) - Math.floor(me.HP * 0.25)),
      damage: 50 + Math.floor(Math.random() * (Math.floor(50 * 0.2) * 2) - Math.floor(50 * 0.2)),
      armor: 5 + Math.floor(Math.random() * (Math.floor(5 * 0.15) * 2) - Math.floor(5 * 0.15)),
      critical: me.critical + Math.floor(Math.random() * (Math.floor(me.critical * 0.15) * 2) - Math.floor(me.critical * 0.15)),
      money: Math.floor(Math.random() * 26 + 25),
      exp: Math.floor(Math.random() * 21 + 10),
    }
  }

  let enemy = generateEnemy();

  const [winner, setWinner] = useState('noone');
  const [gameOn, setGameOn] = useState(true);
  let myHealth = me.HP;
  let enemyHealth = enemy.HP;

  function script() {

    const onLoad = document.querySelector('#on-load');
    const owl = document.querySelector('.owl-fight');
    const welcomeOwl = document.querySelector('.welcome-owl');
    setTimeout(() => {
      owl.classList.add('owl-fight-in');
      owl.classList.add('display-it');
      owl.classList.remove('hide-it');
      welcomeOwl.classList.add('owl-fight-in');
      welcomeOwl.classList.add('display-it');
      welcomeOwl.classList.remove('hide-it');
      onLoad.classList.add('hide-animations-in');
    }, 1650);

    const loadingPers1 = document.querySelector('.load-persons-1');
    const loadingPers2 = document.querySelector('.load-persons-2');

    const person1Frames = ['p3-1', 'p1-2', 'p1-3', 'p1-4', 'p1-5', 'p1-attack-prev', 'p1-mid-1', 'p1-mid-2', 'p1-bot-1', 'p1-bot-2', 'p1-hitted', 'p1-lost'];
    const person2Frames = ['p2-1', 'p2-2', 'p2-3', 'p2-4', 'p2-5', 'p2-attack-prev', 'p2-mid-1', 'p2-mid-2', 'p2-bot-1', 'p2-bot-2', 'p2-hitted', 'p2-lost'];

    let antiShimeringIndex = 0;
    const antiShimering = setInterval(() => {
      loadingPers1.classList.remove(loadingPers1.classList[0]);
      loadingPers1.classList.add(person1Frames[antiShimeringIndex]);
      loadingPers2.classList.remove(loadingPers2.classList[0]);
      loadingPers2.classList.add(person2Frames[antiShimeringIndex]);

      antiShimeringIndex++;
      if (antiShimeringIndex === person1Frames.length) {
        loadingPers1.remove();
        loadingPers2.remove();
        clearInterval(antiShimering);
      }
    }, 100)

    let botMove;
    let whoStart;
    let pillClicked = false;

    setTimeout(() => {
      const firstMove = [true, false][Math.floor(Math.random() * 2)];
    const pill1txt = document.querySelector('.pill-blue-text');
    const pill2txt = document.querySelector('.pill-red-text');
    pill1txt.innerText = firstMove ? 'ЕЖЖ' : 'БОБР';
    pill2txt.innerText = !firstMove ? 'ЕЖЖ' : 'БОБР';
    const pill1 = document.querySelector('.pill-blue');
    const pill2 = document.querySelector('.pill-red');
    
    pill1.classList.add('display-it');
    pill2.classList.add('display-it');

    pill1.classList.remove('hide-it');
    pill2.classList.remove('hide-it');

    pill1txt.classList.add('display-it');
    pill2txt.classList.add('display-it');

    pill1txt.classList.remove('hide-it');
    pill2txt.classList.remove('hide-it');

    pill1.addEventListener('click', (e) => {
      if (!pillClicked) {
        pillClicked = true;
        if (firstMove) {
          whoStart = true;
        } else {
          whoStart = false;
        }
        pill1.classList.add('pill-out');
        pill1txt.classList.remove('pill-blue-a');
        pill2txt.classList.add('pill-hide');
        setTimeout(() => {
          pill1.classList.remove('display-it');
          pill1.classList.add('pill-hide');
          welcomeOwl.innerText = `НАЧИНАЕТ ${whoStart ? 'ЕЖ' : 'БОБР'}`
          const owlHide = document.querySelector('.owl-things');
          setTimeout(() => {
            owlHide.classList.add('owl-fight-out');
          }, 1000);     
          setTimeout(() => {
            owlHide.classList.add('hide-it');
            whoStart ? showButtons1() : showButtons2();
          }, 1980);
        }, 980);
      }
    });

    pill2.addEventListener('click', (e) => {
      if (!pillClicked) {
        pillClicked = true;
        if (!firstMove) {
          whoStart = true;
        } else {
          whoStart = false;
        }
        pill2.classList.add('pill-out');
        pill2txt.classList.remove('pill-red-a');
        pill1txt.classList.add('pill-hide');
        setTimeout(() => {
          pill2.classList.remove('display-it');
          pill2.classList.add('pill-hide');
          welcomeOwl.innerText = `НАЧИНАЕТ ${whoStart ? 'ЕЖ' : 'БОБР'}`;
          const owlHide = document.querySelector('.owl-things');
          setTimeout(() => {
            owlHide.classList.add('owl-fight-out');
          }, 1000);     
          setTimeout(() => {
            owlHide.classList.add('hide-it');
            whoStart ? showButtons1() : showButtons2();
          }, 1980);
        }, 980);
      }
    });
    }, 2650);

    let myMove;
    let gameIsOn = true;

    const buttons1 = document.querySelector('.attacks');
    const buttons2 = document.querySelector('.defend');
  
    const pers1 = document.querySelector('.pers1');
    const question1 = document.querySelector('.question-mark-1');
    const pers1svg = ['hedgehog1.svg',
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
    ];
  
    const topAttack1 = document.getElementById('pers1-attack');
    const topAttack1s1 = document.querySelector('.s1-1');
    const topAttack1s2 = document.querySelector('.s1-2');
    const topAttack1s3 = document.querySelector('.s1-3');
  
    const midAttack1 = document.querySelector('.pers1-throw');
  
    const bottomAttack1 = document.getElementById('pers1-fireball');
    const bottomAttack1sf1 = document.querySelector('.sf-1');
    const bottomAttack1sf2 = document.querySelector('.sf-2');
  
    const bangEnemy = document.getElementById('bang-enemy');
  
    const dodge1 = document.querySelector('.pers1-dodged-1');
    const dodge2 = document.querySelector('.pers1-dodged-2');
  
    // -----------------------------------------
  
    const pers2 = document.querySelector('.pers2');
    const question2 = document.querySelector('.question-mark-2');
  
    const topDefend1 = document.getElementById('pers2-attack');
    const topDefend1s1 = document.querySelector('.sd1-1');
    const topDefend1s2 = document.querySelector('.sd1-2');
    const topDefend1s3 = document.querySelector('.sd1-3');
  
    const midDefend1 = document.querySelector('.pers2-throw');
  
    const bottomDefend1 = document.getElementById('pers2-fireball');
    const bottomDefend1sf1 = document.querySelector('.sfd-1');
    const bottomDefend1sf2 = document.querySelector('.sfd-2');
  
    const bangMe = document.getElementById('bang-me');
  
    const dodgeE1 = document.querySelector('.pers2-dodged-1');
    const dodgeE2 = document.querySelector('.pers2-dodged-2');
  
    const pers2svg = ['beaver1.svg',
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

    const rgbs = [
      [200, 100],
      [200, 102],
      [200, 104],
      [200, 106],
      [200, 108],
      [200, 110],
      [200, 112],
      [200, 114],
      [200, 116],
      [200, 118],
      [200, 120],
      [200, 122],
      [200, 124],
      [200, 126],
      [200, 128],
      [200, 130],
      [200, 132],
      [200, 134],
      [200, 136],
      [200, 138],
      [200, 140],
      [200, 142],
      [200, 144],
      [200, 146],
      [200, 148],
      [200, 150],
      [200, 152],
      [200, 154],
      [200, 156],
      [200, 158],
      [200, 160],
      [200, 162],
      [200, 164],
      [200, 166],
      [200, 168],
      [200, 170],
      [200, 172],
      [200, 174],
      [200, 176],
      [200, 178],
      [200, 180],
      [200, 182],
      [200, 184],
      [200, 186],
      [200, 188],
      [200, 190],
      [200, 192],
      [200, 194],
      [200, 196],
      [200, 198],

      [200, 200],
      [198, 200],
      [196, 200],
      [194, 200],
      [192, 200],
      [190, 200],
      [188, 200],
      [186, 200],
      [184, 200],
      [182, 200],
      [180, 200],
      [178, 200],
      [176, 200],
      [174, 200],
      [172, 200],
      [170, 200],
      [168, 200],
      [166, 200],
      [164, 200],
      [162, 200],
      [160, 200],
      [158, 200],
      [156, 200],
      [154, 200],
      [152, 200],
      [150, 200],
      [148, 200],
      [146, 200],
      [144, 200],
      [142, 200],
      [140, 200],
      [138, 200],
      [136, 200],
      [134, 200],
      [132, 200],
      [130, 200],
      [128, 200],
      [126, 200],
      [124, 200],
      [122, 200],
      [120, 200],
      [118, 200],
      [116, 200],
      [114, 200],
      [112, 200],
      [110, 200],
      [108, 200],
      [106, 200],
      [104, 200],
      [102, 200],
      [100, 200],

    ]
    
    let pers1i = 0;
    let pers2i = 2;
    let idle = [true, true];
    const topAttack = document.getElementById('top');
    const midAttack = document.getElementById('mid');
    const bottomAttack = document.getElementById('bottom');
  
    const topDefend = document.getElementById('top-def');
    const midDefend = document.getElementById('mid-def');
    const bottomDefend = document.getElementById('bottom-def');

    const myHealthBar = document.querySelector('.my-health-bar');
    myHealthBar.style.background = `linear-gradient(to right, rgb(100, 200, 52) 100%, rgb(122, 122, 115) 100%)`;

    const enemyHealthBar = document.querySelector('.enemy-health-bar');
    enemyHealthBar.style.background = `linear-gradient(to left, rgb(100, 200, 52) 100%, rgb(122, 122, 115) 100%)`

    const myHitted = document.querySelector('.my-hitted');
    const enemyHitted = document.querySelector('.enemy-hitted');

    const myDodged = document.querySelector('.my-dodged');
    const enemyDodged = document.querySelector('.enemy-dodged');

    const myCritted = document.querySelector('.my-critted');
    const enemyCritted = document.querySelector('.enemy-critted');

    const endFight = document.querySelector('.fight-end');
    const endOpac = document.querySelector('.opacity');
    const endResult = document.querySelector('.fight-end');

    endFight.addEventListener('click', (e) => {
      if (e.target.id === 'btnchick') {
        const goGoGo = document.querySelectorAll('.go-go-go');
    const loading = document.querySelector('#on-load2');
    loading.classList.remove('hide-animations-in');
    goGoGo[0].classList.add('logo-left-s');
    goGoGo[1].classList.add('logo-right-s');
    goGoGo[2].classList.add('loading-left-s');
    goGoGo[3].classList.add('loading-right-s');
    setTimeout(() => {
      navigate('/square');
    }, 700);
      }
    });

    function switchPers1() {
      switch (pers1i) {
        case 0:
        case 8:
        case 12:
        case 16:
          pers1.classList.remove('p1-1');
          pers1.classList.add('p1-2');
          break;
        case 1:
        case 9:
        case 13:
        case 17:
          pers1.classList.remove('p1-2');
          pers1.classList.add('p1-3');
          break;
        case 2:
          pers1.classList.remove('p1-3');
          pers1.classList.add('p1-4');
          break;
        case 3:
          pers1.classList.remove('p1-4');
          pers1.classList.add('p1-5');
          break;
        case 4:
          pers1.classList.remove('p1-5');
          pers1.classList.add('p1-4');
          break;
        case 5:
          pers1.classList.remove('p1-4');
          pers1.classList.add('p1-3');
          break;
        case 6:
        case 10:
        case 14:
        case 18:
          pers1.classList.remove('p1-3');
          pers1.classList.add('p1-2');
          break;
        case 7:
        case 11:
        case 15:
        case 19:
          pers1.classList.remove('p1-2');
          pers1.classList.add('p1-1');
          break;
      }
    }
  
    function switchPers2() {
      switch (pers2i) {
        case 0:
        case 8:
        case 12:
        case 16:
          pers2.classList.remove('p2-1');
          pers2.classList.add('p2-2');
          break;
        case 1:
        case 9:
        case 13:
        case 17:
          pers2.classList.remove('p2-2');
          pers2.classList.add('p2-3');
          break;
        case 2:
          pers2.classList.remove('p2-3');
          pers2.classList.add('p2-4');
          break;
        case 3:
          pers2.classList.remove('p2-4');
          pers2.classList.add('p2-5');
          break;
        case 4:
          pers2.classList.remove('p2-5');
          pers2.classList.add('p2-4');
          break;
        case 5:
          pers2.classList.remove('p2-4');
          pers2.classList.add('p2-3');
          break;
        case 6:
        case 10:
        case 14:
        case 18:
          pers2.classList.remove('p2-3');
          pers2.classList.add('p2-2');
          break;
        case 7:
        case 11:
        case 15:
        case 19:
          pers2.classList.remove('p2-2');
          pers2.classList.add('p2-1');
          break;
      }
    }
  
    function switchDefend() {
      switch (botMove) {
        case 0:
          defendTop();
          break;
        case 1:
          defendMid();
        case 2:
          defendBottom();
      }
    }
  
    function attackTop() {
      if (idle[0]) {
        idle[0] = false;
        hideButtons1();
        pers1.classList.remove(pers1.classList[2]);
        pers1.classList.add('p1-attack-prev');
        topAttack1.classList.remove('on-start');
        topAttack1.classList.add('on-charge');
        setTimeout(() => {
          topAttack1s1.classList.remove('on-start');
          topAttack1s1.classList.add('on-charge');
        }, 35);
        setTimeout(() => {
          topAttack1s2.classList.remove('on-start');
          topAttack1s2.classList.add('on-charge');
        }, 70);
        setTimeout(() => {
          topAttack1s3.classList.remove('on-start');
          topAttack1s3.classList.add('on-charge');
        }, 105);
        setTimeout(() => {
          idle[0] = true;
  
          topAttack1.classList.remove('on-charge');
          topAttack1.classList.add('on-start');
          pers1i = 0;
          pers1.classList.remove('p1-attack-prev');
          pers1.classList.add('p1-1');
  
          myMove === botMove ? pers2Dodged() : pers2Hitted('bang-enemy-1');
  
        }, 500);
        setTimeout(() => {
          topAttack1s1.classList.remove('on-charge');
          topAttack1s1.classList.add('on-start');
        }, 535);
        setTimeout(() => {
          topAttack1s2.classList.remove('on-charge');
          topAttack1s2.classList.add('on-start');
        }, 570);
        setTimeout(() => {
          topAttack1s3.classList.remove('on-charge');
          topAttack1s3.classList.add('on-start');
        }, 605);
      }
    }
  
    function attackMid() {
      if (idle[0]) {
        idle[0] = false;
        hideButtons1();
        pers1.classList.remove(pers1.classList[2]);
        pers1.classList.add('p1-mid-1');
        setTimeout(() => {
          pers1.classList.remove('p1-mid-1');
          pers1.classList.add('p1-mid-2');
        }, 120);
        setTimeout(() => {
          midAttack1.classList.remove('on-start-throw');
          midAttack1.classList.add('on-charge-throw');
          pers1.classList.remove('p1-mid-2');
          pers1.classList.add('p1-mid-1');
  
          setTimeout(() => {
            idle[0] = true;
            midAttack1.classList.remove('on-charge-throw');
            midAttack1.classList.add('on-start-throw');
  
            myMove === botMove ? pers2Dodged() : pers2Hitted('bang-enemy-2');
  
          }, 600);
        }, 240);
        setTimeout(() => {
          pers1i = 0;
          pers1.classList.remove('p1-mid-1');
          pers1.classList.add('p1-1');
        }, 360);
      }
    }
  
    function attackBottom() {
      if (idle[0]) {
        idle[0] = false;
        hideButtons1();
        setTimeout(() => {
          pers1.classList.remove(pers1.classList[2]);
          pers1.classList.add('p1-bot-1');
        }, 120);
        setTimeout(() => {
          pers1.classList.remove('p1-bot-1');
          pers1.classList.add('p1-bot-2');
          bottomAttack1.classList.remove('on-start-fire');
          bottomAttack1.classList.add('on-charge-fire');
          setTimeout(() => {
            bottomAttack1sf1.classList.remove('on-start-fire');
            bottomAttack1sf1.classList.add('on-charge-fire');
          }, 30);
          setTimeout(() => {
            bottomAttack1sf2.classList.remove('on-start-fire');
            bottomAttack1sf2.classList.add('on-charge-fire');
          }, 55);
          setTimeout(() => {
            bottomAttack1.classList.remove('on-charge-fire');
            bottomAttack1.classList.add('on-start-fire');
  
            myMove === botMove ? pers2Dodged() : pers2Hitted('bang-enemy-3');
  
          }, 550);
          setTimeout(() => {
            bottomAttack1sf1.classList.remove('on-charge-fire');
            bottomAttack1sf1.classList.add('on-start-fire');
          }, 580);
          setTimeout(() => {
            bottomAttack1sf2.classList.remove('on-charge-fire');
            bottomAttack1sf2.classList.add('on-start-fire');
            pers1i = 0;
            idle[0] = true;
  
          }, 605);
        }, 240);
        setTimeout(() => {
          pers1.classList.remove('p1-bot-2');
          pers1.classList.add('p1-bot-1');
        }, 460);
        setTimeout(() => {
          pers1.classList.remove('p1-bot-1');
          pers1.classList.add('p1-1');
        }, 580);
      }
    }
  
    function defendTop() {
      if (idle[1]) {
        idle[1] = false;
        hideButtons2();
        pers2.classList.remove(pers2.classList[2]);
        pers2.classList.add('p2-attack-prev');
        topDefend1.classList.remove('on-start-2');
        topDefend1.classList.add('on-charge-2');
        setTimeout(() => {
          topDefend1s1.classList.remove('on-start-2');
          topDefend1s1.classList.add('on-charge-2');
        }, 35);
        setTimeout(() => {
          topDefend1s2.classList.remove('on-start-2');
          topDefend1s2.classList.add('on-charge-2');
        }, 70);
        setTimeout(() => {
          topDefend1s3.classList.remove('on-start-2');
          topDefend1s3.classList.add('on-charge-2');
        }, 105);
        setTimeout(() => {
          idle[1] = true;
  
          topDefend1.classList.remove('on-charge-2');
          topDefend1.classList.add('on-start-2');
          pers2i = 0;
          pers2.classList.remove('p2-attack-prev');
          pers2.classList.add('p2-1');
  
          myMove === botMove ? pers1Dodged() : pers1Hitted('bang-me-1');
  
        }, 500);
        setTimeout(() => {
          topDefend1s1.classList.remove('on-charge-2');
          topDefend1s1.classList.add('on-start-2');
        }, 535);
        setTimeout(() => {
          topDefend1s2.classList.remove('on-charge-2');
          topDefend1s2.classList.add('on-start-2');
        }, 570);
        setTimeout(() => {
          topDefend1s3.classList.remove('on-charge-2');
          topDefend1s3.classList.add('on-start-2');
        }, 605);
      }
    }
  
    function defendMid() {
      if (idle[1]) {
        idle[1] = false;
        hideButtons2();
        pers2.classList.remove(pers2.classList[2]);
        pers2.classList.add('p2-mid-1');
        setTimeout(() => {
          pers2.classList.remove('p2-mid-1');
          pers2.classList.add('p2-mid-2');
        }, 120);
        setTimeout(() => {
          midDefend1.classList.remove('on-start-throw-2');
          midDefend1.classList.add('on-charge-throw-2');
          pers2.classList.remove('p2-mid-2');
          pers2.classList.add('p2-mid-1');
  
          setTimeout(() => {
            idle[1] = true;
            midDefend1.classList.remove('on-charge-throw-2');
            midDefend1.classList.add('on-start-throw-2');
  
            myMove === botMove ? pers1Dodged() : pers1Hitted('bang-me-2');
  
          }, 600);
        }, 240);
        setTimeout(() => {
          pers2i = 0;
          pers2.classList.remove('p2-mid-1');
          pers2.classList.add('p2-1');
        }, 360);
      }
    }
  
    function defendBottom() {
      if (idle[1]) {
        idle[1] = false;
        hideButtons2();
        setTimeout(() => {
          pers2.classList.remove(pers2.classList[2]);
          pers2.classList.add('p2-bot-1');
        }, 120);
        setTimeout(() => {
          pers2.classList.remove('p2-bot-1');
          pers2.classList.add('p2-bot-2');
          bottomDefend1.classList.remove('on-start-fire-2');
          bottomDefend1.classList.add('on-charge-fire-2');
          setTimeout(() => {
            bottomDefend1sf1.classList.remove('on-start-fire-2');
            bottomDefend1sf1.classList.add('on-charge-fire-2');
          }, 30);
          setTimeout(() => {
            bottomDefend1sf2.classList.remove('on-start-fire-2');
            bottomDefend1sf2.classList.add('on-charge-fire-2');
          }, 55);
          setTimeout(() => {
            bottomDefend1.classList.remove('on-charge-fire-2');
            bottomDefend1.classList.add('on-start-fire-2');
  
            myMove === botMove ? pers1Dodged() : pers1Hitted('bang-me-3');
  
          }, 550);
          setTimeout(() => {
            bottomDefend1sf1.classList.remove('on-charge-fire-2');
            bottomDefend1sf1.classList.add('on-start-fire-2');
          }, 580);
          setTimeout(() => {
            bottomDefend1sf2.classList.remove('on-charge-fire-2');
            bottomDefend1sf2.classList.add('on-start-fire-2');
            pers2i = 0;
            idle[1] = true;
  
          }, 605);
        }, 240);
        setTimeout(() => {
          pers2.classList.remove('p2-bot-2');
          pers2.classList.add('p2-bot-1');
        }, 460);
        setTimeout(() => {
          pers2.classList.remove('p2-bot-1');
          pers2.classList.add('p2-1');
        }, 580);
      }
    }
  
    function offQuestionMark1() {
      question1.classList.remove('q-show');
      question1.classList.add('q-hide');
    }
  
    function onQuestionMark1() {
      question1.classList.remove('q-hide');
      question1.classList.add('q-show');
    }
  
    function offQuestionMark2() {
      question2.classList.remove('q-show');
      question2.classList.add('q-hide');
    }
  
    function onQuestionMark2() {
      question2.classList.remove('q-hide');
      question2.classList.add('q-show');
    }
  
    function hideButtons1() {
      buttons1.classList.remove('show-btns');
      buttons1.classList.add('hide-btns');
      topAttack.classList.remove('top-1');
      midAttack.classList.remove('mid-1');
      bottomAttack.classList.remove('bottom-1');
      offQuestionMark1();
    }
  
    function showButtons1() {
      botMove = Math.floor(Math.random() * 3);
      buttons1.classList.remove('hide-btns');
      buttons1.classList.add('show-btns');
      topAttack.classList.add('top-1');
      midAttack.classList.add('mid-1');
      bottomAttack.classList.add('bottom-1');
      onQuestionMark1();
    }
  
    function hideButtons2() {
      buttons2.classList.remove('show-btns');
      buttons2.classList.add('hide-btns');
      topDefend.classList.remove('top-1');
      midDefend.classList.remove('mid-1');
      bottomDefend.classList.remove('bottom-1');
      offQuestionMark2();
    }
  
    function showButtons2() {
      botMove = Math.floor(Math.random() * 3);
      buttons2.classList.remove('hide-btns');
      buttons2.classList.add('show-btns');
      topDefend.classList.add('top-1');
      midDefend.classList.add('mid-1');
      bottomDefend.classList.add('bottom-1');
      onQuestionMark2();
    }
  
    function pers1Hitted(bang) {
      let damage = enemy.damage + Math.floor(Math.random() * (Math.floor(enemy.damage * 0.05) * 2) - Math.floor(enemy.damage * 0.05));
      damage = Math.floor(damage * ((100 - enemy.armor) / 100));
      const crit = Math.floor(Math.random() * 100) < enemy.critical;

      if (!crit) {
        myHitted.innerText = `-${damage}`;
        myHitted.classList.remove('my-hitted-start');
        myHitted.classList.add('my-hitted-charge');
        setTimeout(() => {
          myHitted.classList.remove('my-hitted-charge');
          myHitted.classList.add('my-hitted-start');
        }, 600);
      } else {
        damage = Math.floor(damage * 2.5);
        myCritted.innerText = `-${damage} ϟ`;
        myCritted.classList.remove('my-critted-start');
        myCritted.classList.add('my-critted-charge');
        setTimeout(() => {
          myCritted.classList.remove('my-critted-charge');
          myCritted.classList.add('my-critted-start');
        }, 600);
      }

      if (damage > myHealth) {
        myHealth = 0;
        gameIsOn = false;
        
        setTimeout(() => {
          endResult.classList.add('fight-end-lose');
        endResult.innerHTML = `ПОРАЖЕНИЕ<div class="fight-money fight-end-lose">+0<span class="fm"><img src="coin.png"/></span></div>
        <div class="fight-exp">&nbsp;+0<span class="fe"><img src="exp.png"/></span></div>
        <div id="btnchick" class="fight-end-btn">ВЫЙТИ ИЗ БОЯ</div>
        </div>`;
        endFight.classList.remove('end-none');
        endFight.classList.add('end-end');
        endOpac.classList.remove('end-none');
        endOpac.classList.add('end-end2');
        }, 600);
        
      } else {
        myHealth -= damage;
      }
      const hitDamage = Math.floor((myHealth / me.HP) * 100);
      myHealthBar.style.removeProperty('background');
      myHealthBar.style.background = `linear-gradient(to right, rgb(${rgbs[hitDamage][0]}, ${rgbs[hitDamage][1]}, 52) ${hitDamage}%, rgb(122, 122, 115) ${hitDamage}%)`;

      idle[0] = false;
      pers1.classList.remove(pers1.classList[2]);
      pers1.classList.add('p1-hitted');
  
      bangMe.classList.remove('bang-me');
      bangMe.classList.add(bang);
  
      setTimeout(() => {
          if (gameIsOn) {
          idle[0] = true;
          pers1i = 0;
          pers1.classList.remove('p1-hitted');
          pers1.classList.add('p1-1');
  
          bangMe.classList.remove(bang);
          bangMe.classList.add('bang-me');
          showButtons1();
        } else {
          bangMe.classList.remove(bang);
          bangMe.classList.add('bang-me');
          
          pers1.classList.remove(pers1.classList[2]);
          pers1.classList.add('p1-lost');
        }
      }, 270);
    }
  
    function pers2Hitted(bang) {
      
      let damage = me.damage + Math.floor(Math.random() * (Math.floor(me.damage * 0.05) * 2) - Math.floor(me.damage * 0.05));
      damage = Math.floor(damage * ((100 - me.armor) / 100));
      const crit = Math.floor(Math.random() * 100) < me.critical;
      if (!crit) {
        enemyHitted.innerText = `-${damage}`;
        enemyHitted.classList.remove('enemy-hitted-start');
        enemyHitted.classList.add('enemy-hitted-charge');
        setTimeout(() => {
          enemyHitted.classList.remove('enemy-hitted-charge');
          enemyHitted.classList.add('enemy-hitted-start');
        }, 600);
        // playHit()
      } else {
        
        damage = Math.floor(damage * 2.5);
        enemyCritted.innerText = `-${damage} ϟ`;
        enemyCritted.classList.remove('enemy-critted-start');
        enemyCritted.classList.add('enemy-critted-charge');
        setTimeout(() => {
          enemyCritted.classList.remove('enemy-critted-charge');
          enemyCritted.classList.add('enemy-critted-start');
        }, 600);
      }

      if (damage > enemyHealth) {
        gameIsOn = false;
        enemyHealth = 0;
        async function func() {
          const response = await fetch(`/money-exp/${me.id}/${me.money + enemy.money}/${me.exp + enemy.exp}`);
          // const data = await response.json();
          // dispatch(getUser(data));
          dispatch(getUser(
            {
              user_id: me.user_id,
              level: me.level,
              exp: me.exp,
              HP: me.HP,
              damage: me.damage,
              armor: me.armor,
              critical: me.critical,
              money: me.money + enemy.money,
              weapon_id: me.weapon_id,
              armor_id: me.armor_id,
              skill_id: me.skill_id,
              inventory_id: me.inventory_id,
            }
          ))
        }
        func();
        setTimeout(() => {
          endResult.classList.add('fight-end-win');
        endResult.innerHTML = `ПОБЕДА<div class="fight-money fight-end-lose">+${enemy.money}<span class="fm"><img src="coin.png"/></span></div>
        <div class="fight-exp">+${enemy.exp}<span class="fe"><img src="exp.png"/></span></div>
        <div id="btnchick" class="fight-end-btn">ВЫЙТИ ИЗ БОЯ</div>
        </div>`;
        endFight.classList.remove('end-none');
        endFight.classList.add('end-end');
        endOpac.classList.remove('end-none');
        endOpac.classList.add('end-end2');
        }, 600)
        
      } else {
        enemyHealth -= damage;
      }
      const hitDamage = Math.floor((enemyHealth / enemy.HP) * 100);

      enemyHealthBar.style.removeProperty('background');
      enemyHealthBar.style.background = `linear-gradient(to left, rgb(${rgbs[hitDamage][0]}, ${rgbs[hitDamage][1]}, 52) ${hitDamage}%, rgb(122, 122, 115) ${hitDamage}%)`;

      idle[1] = false;
      pers2.classList.remove(pers2.classList[2]);
      pers2.classList.add('p2-hitted');
  
      bangEnemy.classList.remove('bang-enemy');
      bangEnemy.classList.add(bang);
  
      setTimeout(() => {
          if (gameIsOn) {
          idle[1] = true;
          pers2i = 0;
          pers2.classList.remove('p2-hitted');
          pers2.classList.add('p2-1');
  
          bangEnemy.classList.remove(bang);
          bangEnemy.classList.add('bang-enemy');
          showButtons2();
        } else {
          bangEnemy.classList.remove(bang);
          bangEnemy.classList.add('bang-enemy');

          pers2.classList.remove(pers2.classList[2]);
          pers2.classList.add('p2-lost');
        }
      }, 270);
    }
  
    function pers1Dodged() {
      myDodged.classList.remove('my-dodged-start');
      myDodged.classList.add('my-dodged-charge');
      setTimeout(() => {
        myDodged.classList.remove('my-dodged-charge');
        myDodged.classList.add('my-dodged-start');
      }, 600);

      pers1.classList.add('pers1-dodged');
      pers1.classList.add('index-up');
      dodge1.classList.remove('on-start-dodge');
      dodge1.classList.add('on-charge-dodge-1');
      dodge2.classList.remove('on-start-dodge');
      dodge2.classList.add('on-charge-dodge-2');
  
      setTimeout(() => {
        pers1.classList.remove('pers1-dodged');
        pers1.classList.remove('index-up');
        dodge1.classList.remove('on-charge-dodge-1');
        dodge1.classList.add('on-start-dodge');
        dodge2.classList.remove('on-charge-dodge-2');
        dodge2.classList.add('on-start-dodge');
        showButtons1();
      }, 540);
    }
  
    function pers2Dodged() {
      enemyDodged.classList.remove('enemy-dodged-start');
      enemyDodged.classList.add('enemy-dodged-charge');
      setTimeout(() => {
        enemyDodged.classList.remove('enemy-dodged-charge');
        enemyDodged.classList.add('enemy-dodged-start');
      }, 600);

      pers2.classList.add('pers1-dodged');
      pers2.classList.add('index-up');
      dodgeE1.classList.remove('on-start-dodge-1');
      dodgeE1.classList.add('on-charge-dodge-e1');
      dodgeE2.classList.remove('on-start-dodge');
      dodgeE2.classList.add('on-charge-dodge-e2');
  
      setTimeout(() => {
        pers2.classList.remove('pers1-dodged');
        pers2.classList.remove('index-up');
        dodgeE1.classList.remove('on-charge-dodge-e1');
        dodgeE1.classList.add('on-start-dodge-1');
        dodgeE2.classList.remove('on-charge-dodge-e2');
        dodgeE2.classList.add('on-start-dodge-1');
        showButtons2();
      }, 540);
    }
  
    topAttack.addEventListener('click', (e) => {
      // playCrit()
      myMove = 0;
      attackTop();
    });
  
    topDefend.addEventListener('click', (e) => {
      myMove = 0;
      switchDefend();
    });
  
    midAttack.addEventListener('click', (e) => {
      myMove = 1;
      attackMid();
    });
  
    midDefend.addEventListener('click', (e) => {
      myMove = 1;
      switchDefend();
    });
  
    bottomAttack.addEventListener('click', (e) => {
      myMove = 2;
      attackBottom();
    });
  
    bottomDefend.addEventListener('click', (e) => {
      myMove = 2;
      switchDefend();
    });
  
    const pers1idle = setInterval(() => {
      if (idle[0]) {
        switchPers1();
        pers1i = pers1i + 1 == pers1svg.length ? 0 : pers1i + 1;
      }
    }, 185);
  
    const pers2idle = setInterval(() => {
      if (idle[1]) {
        switchPers2();
        pers2i = pers2i + 1 == pers2svg.length ? 0 : pers2i + 1;
      }
    }, 185);
  }

  useEffect(() => {
    script();
  }, []);

  const gameOnComponent = (<>

<div id="on-load2" class="on-load hide-animations-in">
    <img class="go-go-go" src="1.png"/>
    <img class="go-go-go" src="2.png"/>
    <div class="go-go-go"></div>
    <div class="go-go-go"></div>
    </div>

  <div class="owl-things">
  <img class="owl-fight hide-it" src="owl.png"/>

  <div class="pill-text pill-blue-text pill-blue-a hide-it"></div>
  <div class="pill-text pill-red-text pill-red-a hide-it"></div>
  <img class="pill pill-blue hide-it" src="pill-blue.png"/>
  <img class="pill pill-red hide-it" src="pill-red.png"/>
  <div class="welcome-owl hide-it">КАКУЮ ТАБЛЕТКУ ВЫБЕРЕШЬ?</div>
  </div>

  <div id="on-load" class="on-load">
    <img class="logo-left-f" src="1.png"/>
    <img class="logo-right-f" src="2.png"/>
    <div class="loading-left"></div>
    <div class="loading-right"></div>
    <div class="load-persons-1"></div>
    <div class="load-persons-2"></div>
    </div>
    
    <div class="fight-end end-none">
    {/* <div class="fight-money"><span class="fm"><img src="coin.png"/></span></div>
    <div class="fight-exp"><span class="fe"><img src="exp.png"/></span></div>
    <div class="fight-end-btn">ВЫЙТИ ИЗ БОЯ</div> */}
    </div>
    <div class="opacity end-none"></div>

    <div id="fight"></div>

      <div class="my-health-bar"></div>
      <div class="my-nickname">{me.nickname}</div>

      <div class="enemy-health-bar" ></div>
      <div class="enemy-nickname">{enemy.nickname}</div>

      <div class="my-hitted my-hitted-start"></div>
      <div class="my-critted my-critted-start"></div>
      <div class="my-dodged my-dodged-start">УВЕРНУЛСЯ!</div>

      <div class="enemy-hitted enemy-hitted-start"></div>
      <div class="enemy-critted enemy-critted-start"></div>
      <div class="enemy-dodged enemy-dodged-start">УВЕРНУЛСЯ!</div>

      <div class="attacks hide-btns">
  
  <button type="button" id="top" class="btns"></button>
  <button type="button" id="mid" class="btns"></button>
  <button type="button" id="bottom" class="btns"></button>
  
  </div>
  
  <div class="defend hide-btns">
  
  <button type="button" id="top-def" class="btns-def"></button>
  <button type="button" id="mid-def" class="btns-def"></button>
  <button type="button" id="bottom-def" class="btns-def"></button>
  
  </div>
  
  <div class="pers pers1"></div>
  
  <img id="bang-enemy" class="bang-enemy" src="bang.png"/>
  
  <div class="question-mark-1 q-hide">?</div>
  
  <div class="pers1-dodged-1 on-start-dodge">
  <img src="hedgehog1.svg"/>
  </div>
  
  <div class="pers1-dodged-2 on-start-dodge">
  <img src="hedgehog1.svg"/>
  </div>
  
  
  <div id="pers1-attack" class="pers1-attack on-start">
  <img src="hedgehog-attack.svg"/>
  </div>
  
  <div class="pers1-attack s1-1 on-start">
  <img src="hedgehog-attack.svg"/>
  </div>
  
  <div class="pers1-attack s1-2 on-start">
  <img src="hedgehog-attack.svg"/>
  </div>
  
  <div class="pers1-attack s1-3 on-start">
  <img src="hedgehog-attack.svg"/>
  </div>
  
  <div class="pers1-throw on-start-throw">
  <img src="apple.png"/>
  </div>
  
  <div id="pers1-fireball" class="pers1-fireball on-start-fire">
  <img src="fireball.png"/>
  </div>
  
  <div class="pers1-fireball sf-1 on-start-fire">
  <img src="fireball.png"/>
  </div>
  
  <div class="pers1-fireball sf-2 on-start-fire">
  <img src="fireball.png"/>
  </div>
  
  {/* <!-- ------------------------------------- --> */}
  
  <div class="pers pers2"> </div>
  
  <img id="bang-me" class="bang-me" src="bang.png"/>
  
  <div class="question-mark-2 q-hide">?</div>
  
  <div class="pers2-dodged-1 on-start-dodge-1">
  <img src="beaver1.svg"/>
  </div>
  
  <div class="pers2-dodged-2 on-start-dodge-1">
  <img src="beaver1.svg"/>
  </div>
  
  <div id="pers2-attack" class="pers2-attack on-start">
  <img src="beaver-attack.svg"/>
  </div>
  
  <div class="pers2-attack sd1-1 on-start">
  <img src="beaver-attack.svg"/>
  </div>
  
  <div class="pers2-attack sd1-2 on-start">
  <img src="beaver-attack.svg"/>
  </div>
  
  <div class="pers2-attack sd1-3 on-start">
  <img src="beaver-attack.svg"/>
  </div>
  
  <div class="pers2-throw on-start-throw">
  <img src="apple.png"/>
  </div>
  
  <div id="pers2-fireball" class="pers2-fireball on-start-fire">
  <img src="fireball.png"/>
  </div>
  
  <div class="pers2-fireball sfd-1 on-start-fire">
  <img src="fireball.png"/>
  </div>
  
  <div class="pers2-fireball sfd-2 on-start-fire">
  <img src="fireball.png"/>
  </div>
  
  <img class="back" src="back.jpg"/>
    </>);
  
  const gameOverComponent = (<>
  <div>END</div></>)

  return ( gameOn ? gameOnComponent : gameOverComponent);
}
 
export default Fight;
