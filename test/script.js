const hp1 = 100,
  hp2 = 100,
  damage1 = 10,
  damage2 = 10;
let gameOver = false;
let move = true;

const buttons1 = document.querySelector('.attacks');

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

const pers2 = document.querySelector('.pers2');

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

function offQuestionMark1() {
  question1.classList.remove('q-show');
  question1.classList.add('q-hide');
}

function onQuestionMark1() {
  question1.classList.remove('q-hide');
  question1.classList.add('q-show');
}

function hideButtons1() {
  buttons1.classList.remove('show-btns');
  buttons1.classList.add('hide-btns');
  topAttack.classList.remove('top-1');
  midAttack.classList.remove('mid-1');
  bottomAttack.classList.remove('bottom-1');
  offQuestionMark1();
  move = false;
}

function pers2Hitted() {
  idle[1] = false;
  pers2.classList.remove(pers2.classList[2]);
  pers2.classList.add('p2-hitted');
  setTimeout(() => {
    idle[1] = true;
    pers2i = 0;
    pers2.classList.remove('p2-hitted');
    pers2.classList.add('p2-1');
  }, 100);
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

topAttack.addEventListener('click', (e) => {
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
      showButtons1();
      topAttack1.classList.remove('on-charge');
      topAttack1.classList.add('on-start');
      pers1i = 0;
      pers1.classList.remove('p1-attack-prev');
      pers1.classList.add('p1-1');

      pers2Hitted();

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
});

midAttack.addEventListener('click', (e) => {
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

        pers2Hitted();

        showButtons1();
      }, 600);
    }, 240);
    setTimeout(() => {
      pers1i = 0;
      pers1.classList.remove('p1-mid-1');
      pers1.classList.add('p1-1');
    }, 360);
  }
});

bottomAttack.addEventListener('click', (e) => {
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

        pers2Hitted();

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
        showButtons1();
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
});

const t1 = setInterval(() => {
  if (idle[0]) {
    switchPers1();
    pers1i = pers1i + 1 == pers1svg.length ? 0 : pers1i + 1;
  }
}, 200);

const t2 = setInterval(() => {
  if (idle[1]) {
    switchPers2();
    pers2i = pers2i + 1 == pers2svg.length ? 0 : pers2i + 1;
  }
}, 200);
