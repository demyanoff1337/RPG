import React from 'react';
import Enemy from "../Enemy/Enemy";

const Rade = () => {
  const enemies = [{
    id: 1,
    hp: 100,
    damage: 10,
    armor: 1,
    bleeding: 0,
    critical: 0,
    dodge: 0,
    counterattack: 0,
  }, {
    id: 2,
    hp: 200,
    damage: 20,
    armor: 2,
    bleeding: 0,
    critical: 0,
    dodge: 0,
    counterattack: 0,
  }, {
    id: 3,
    hp: 300,
    damage: 30,
    armor: 3,
    bleeding: 0,
    critical: 0,
    dodge: 0,
    counterattack: 0,
  }, {
    id: 4,
    hp: 400,
    damage: 40,
    armor: 4,
    bleeding: 0,
    critical: 0,
    dodge: 0,
    counterattack: 0,
  }, {
    id: 5,
    hp: 500,
    damage: 50,
    armor: 5,
    bleeding: 0,
    critical: 0,
    dodge: 0,
    counterattack: 0,
  }, {
    id: 6,
    hp: 600,
    damage: 60,
    armor: 6,
    bleeding: 0,
    critical: 5,
    dodge: 1,
    counterattack: 2,
  }, {
    id: 7,
    hp: 700,
    damage: 70,
    armor: 7,
    bleeding: 0,
    critical: 10,
    dodge: 2,
    counterattack: 4,
  }, {
    id: 8,
    hp: 800,
    damage: 80,
    armor: 8,
    bleeding: 0,
    critical: 15,
    dodge: 4,
    counterattack: 6,
  }, {
    id: 9,
    hp: 900,
    damage: 90,
    armor: 9,
    bleeding: 0,
    critical: 20,
    dodge: 6,
    counterattack: 8,
  }, {
    id: 10,
    hp: 1000,
    damage: 100,
    armor: 10,
    bleeding: 0,
    critical: 25,
    dodge: 8,
    counterattack: 10,
  }];

  return (
    <div className="enemy">
      {enemies.map((el) =>
        <Enemy key={el.id} hp={el.hp} damage={el.damage} armor={el.armor} bleeding={el.bleeding} critical={el.critical}
               dodge={el.dodge} counterattack={el.counterattack}/>)}
    </div>
  );
};

export default Rade;
