const hp1 = 100,
  hp2 = 100,
  damage1 = 10,
  damage2 = 10;
let gameOver = false;
let botMove = Math.floor(Math.random() * 3);
let myMove;

alert('dsa');

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
let pers1i = 0;
let pers2i = 2;
let idle = [true, true];
const topAttack = document.getElementById('top');
const midAttack = document.getElementById('mid');
const bottomAttack = document.getElementById('bottom');

const topDefend = document.getElementById('top-def');
const midDefend = document.getElementById('mid-def');
const bottomDefend = document.getElementById('bottom-def');

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
  buttons1.classList.remove('hide-btns');
  buttons1.classList.add('show-btns');
  topAttack.classList.add('top-1');
  midAttack.classList.add('mid-1');
  bottomAttack.classList.add('bottom-1');
  setTimeout(() => {
    onQuestionMark1();
  }, 300);
}

function hideButtons2() {
  buttons2.classList.remove('show-btns');
  buttons2.classList.add('hide-btns');
  topDefend.classList.remove('top-1');
  midDefend.classList.remove('mid-1');
  bottomDefend.classList.remove('bottom-1');
  offQuestionMark2();
}

hideButtons2();

function showButtons2() {
  botMove = Math.floor(Math.random() * 3);
  buttons2.classList.remove('hide-btns');
  buttons2.classList.add('show-btns');
  topDefend.classList.add('top-1');
  midDefend.classList.add('mid-1');
  bottomDefend.classList.add('bottom-1');
  setTimeout(() => {
    onQuestionMark2();
  }, 300);
}

function pers1Hitted(bang) {
  idle[0] = false;
  pers1.classList.remove(pers1.classList[2]);
  pers1.classList.add('p1-hitted');

  bangMe.classList.remove('bang-me');
  bangMe.classList.add(bang);

  setTimeout(() => {
    idle[0] = true;
    pers1i = 0;
    pers1.classList.remove('p1-hitted');
    pers1.classList.add('p1-1');

    bangMe.classList.remove(bang);
    bangMe.classList.add('bang-me');
    showButtons1();
  }, 270);
}

function pers2Hitted(bang) {
  idle[1] = false;
  pers2.classList.remove(pers2.classList[2]);
  pers2.classList.add('p2-hitted');

  bangEnemy.classList.remove('bang-enemy');
  bangEnemy.classList.add(bang);

  setTimeout(() => {
    idle[1] = true;
    pers2i = 0;
    pers2.classList.remove('p2-hitted');
    pers2.classList.add('p2-1');

    bangEnemy.classList.remove(bang);
    bangEnemy.classList.add('bang-enemy');
    showButtons2();
  }, 270);
}

function pers1Dodged() {
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
