import { useState } from "react";
import Armor from "./Armor";
import Flask from "./Flask";
import Skill from "./Skill";
import Weapon from "./Weapon";

const Market = () => {

  const [bee, setBee] = useState([true, false, false, false])



  return (<div>
    <button onClick={() => setBee([true, false, false, false])}>Пчела оружие</button>
    <button onClick={() => setBee([false, true, false, false])}>Пчела броня</button>
    <button onClick={() => setBee([false, false, true, false])}>Пчела Умения</button>
    <button onClick={() => setBee([false, false, false, true])}>Пчела Мед</button>
    {bee[0] ? <Armor /> : <></>}
    {bee[1] ? <Weapon /> : <></>}
    {bee[2] ? <Skill /> : <></>}
    {bee[3] ? <Flask /> : <></>}


  </div>);
}

export default Market;
