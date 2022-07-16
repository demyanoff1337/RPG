import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Armor from "./Armor";
import Flask from "./Flask";
import Skill from "./Skill";
import Weapon from "./Weapon";


const Market = () => {

  const [bee, setBee] = useState([true, false, false, false]);
  const navigate = useNavigate();

  const goBack = (e) => {
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
  }

    useEffect(() => {
      const onLoad = document.querySelector('#on-load');
      setTimeout(() => {
        onLoad.classList.add('hide-animations-in');
      }, 870);
    }, []);



  return (<div>
    <div onClick={goBack} class="back-from-market">x</div>
    <div class="on-load hide-animations-in">
    <img class="go-go-go" src="1.png"/>
    <img class="go-go-go" src="2.png"/>
    <div class="go-go-go"></div>
    <div class="go-go-go"></div>
    </div>

<div class="bees1">
    <img class="bee-s" src="bee1.png"/>
    <img class="bee-s2" src="bee1.png"/>
    <img class="bee-s3" src="bee1.png"/>
    </div>


<div class="bees2">
    <img class="bee-s" src="bee1.png"/>
    <img class="bee-s2" src="bee1.png"/>
    <img class="bee-s3" src="bee1.png"/>
    </div>

    <div class="bees3">
    <img class="bee-s" src="bee1.png"/>
    <img class="bee-s2" src="bee1.png"/>
    <img class="bee-s3" src="bee1.png"/>
    </div>

    <div class="bees4">
    <img class="bee-s" src="bee1.png"/>
    <img class="bee-s2" src="bee1.png"/>
    <img class="bee-s3" src="bee1.png"/>
    </div>

    <div class="bees5">
    <img class="bee-s" src="bee1.png"/>
    <img class="bee-s2" src="bee1.png"/>
    <img class="bee-s3" src="bee1.png"/>
    </div>

    <div class="bees6">
    <img class="bee-s" src="bee1.png"/>
    <img class="bee-s2" src="bee1.png"/>
    <img class="bee-s3" src="bee1.png"/>
    </div>

    <div class="bees7">
    <img class="bee-s" src="bee1.png"/>
    <img class="bee-s2" src="bee1.png"/>
    <img class="bee-s3" src="bee1.png"/>
    </div>

    <div class="bees8">
    <img class="bee-s" src="bee1.png"/>
    <img class="bee-s2" src="bee1.png"/>
    <img class="bee-s3" src="bee1.png"/>
    </div>

    <div class="bees9">
    <img class="bee-s" src="bee1.png"/>
    <img class="bee-s2" src="bee1.png"/>
    <img class="bee-s3" src="bee1.png"/>
    </div>


    <div id="on-load" class="on-load">
    <img class="logo-left-f delay02" src="1.png"/>
    <img class="logo-right-f delay02" src="2.png"/>
    <div class="loading-left delay02"></div>
    <div class="loading-right delay02"></div>
    </div>

    <img class="back-m" src="back-m.png"/>

    <img class="stall st1" src="stall.png"/>
    <img class="stall st2" src="stall.png"/>
    <img class="stall st3" src="stall.png"/>
    <img class="stall st4" src="stall.png"/>

    <div onClick={() => setBee([true, false, false, false])} class="www sho">ОРУЖИЕ</div>
    <div onClick={() => setBee([false, true, false, false])} class="arr sho">БРОНЯ</div>
    <div onClick={() => setBee([false, false, true, false])} class="ski sho">УМЕНИЯ</div>
    <div onClick={() => setBee([false, false, false, true])} class="fla sho">МЁД</div>

    <div class="b1"></div>
    <div class="b2"></div>
    <div class="b3"></div>
    <div class="b4"></div>

    <button ></button>
    <button>Пчела оружие</button>
    <button>Пчела Умения</button>
    <button>Пчела Мед</button>
    {bee[0] ? <Weapon /> : <></>}
    {bee[1] ? <Armor /> : <></>}
    {bee[2] ? <Skill /> : <></>}
    {bee[3] ? <Flask /> : <></>}



  </div>);
}

export default Market;
