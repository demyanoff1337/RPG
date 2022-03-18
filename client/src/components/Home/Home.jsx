import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [person, setPerson] = useState({});
  const user = useSelector(store => store.user);

  // useEffect(() => {
  //   async function getPerson() {
  //     try {
  //       const response = await fetch(`http://localhost:3001/person/${user.id}`);
  //       if (response.ok) {
  //         const persona = await response.json();
  //         if (persona.failed) {
  //           alert('Something went wrong')
  //         } else {
  //           setPerson(persona);
  //         }
  //       }
  //     } catch (e) {
  //       alert(e);
  //     }
  //   }
  //   getPerson();
  // }, []);

  return ( <div id="home">
    <div id="left">
      <div id="charachter">
        <div id="exp-bar"></div>
        <div id="exp">Опыт: 700 / 1000</div>
        <div id="lvl-label">уровень</div>
        <div id="lvl">4</div>
        <div id="person">
          <img id="person-img" src="https://cdn-icons-png.flaticon.com/512/427/427506.png" alt="ima"/>
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
          <span id="marge-alittle">NICKname</span>
        </div>

        <div id="down-card">
          <div id="money">1337 <span><img id="card-money-icon" src="https://pngimg.com/uploads/coin/coin_PNG36943.png" alt=""></img></span></div>
          <div id="to-shop">ТОРГОВЦЫ</div>
        </div>

        <img id="chain1" className="chain" src="chain.png" alt="img"/>
        <img id="chain2" className="chain" src="chain.png" alt="img"/>

      </div>
    </div>
        
    <div id="right">

      <div id="stats" className="pokazateli">ХАРАКТЕРИСТИКИ</div>
      <div id="line-1" className="line"></div>

      <div id="armory" className="pokazateli">СНАРЯЖЕНИЕ</div>
      <div id="line-2" className="line"></div>

      <div id="invent" className="pokazateli">ИНВЕНТАРЬ</div>
      <div id="line-3" className="line"></div>

      {/* <div id="health"> */}
        
        <div id="health-bar" className="right-bar">
          <div id="health-label" className="right-bar-label">2345<span>
            <img id="icon-for-stats" src="heart.png" alt="img"/>
            </span></div>
        </div>

        <div id="damage-bar" className="right-bar">
          <div id="damage-label" className="right-bar-label">322<span>
            <img id="icon-for-stats" src="attack.png" alt="img"/>
            </span></div>
        </div>

        <div id="armor-bar" className="right-bar">
          <div id="armor-label" className="right-bar-label">45<span>
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
          <div id="weapon" className="item-card mr-2">
            <img id="item-img" className="item-img-card" src="https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg" alt="ima"/>
          </div>
          <div id="shield"  className="item-card mr-2">
            <img id="item-img" className="item-img-card" src="https://cdn4.iconfinder.com/data/icons/ancient-melee-weapons-and-helmets/128/Shield_Crossed_Swords-512.png" alt="ima"/>
          </div>
            <div id="magic" className="item-card mr">
          <img id="item-img" className="item-img-card" src="https://images.vexels.com/media/users/3/146887/isolated/preview/41faeb4b7129b75f4883d75c72627835-fire-flame-clipart.png" alt="img"/>
          </div>

          {/* <div id="flask-items" className="item-card"> */}
          {new Array(4).fill().map(el => (
            <div id="item-s" className="item-card">
              <img id="item-img" className="item-img-card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Conical_flask_teal.svg/768px-Conical_flask_teal.svg.png" alt="img"/>
            </div>))}
          {/* </div> */}
      </div>

      <div id="hint-1" className="hint">ОРУЖИЕ</div>      
      <div id="ramka-1" className="ramka"></div>

      <div id="hint-2" className="hint">БРОНЯ</div>      
      <div id="ramka-2" className="ramka"></div>

      <div id="hint-3" className="hint">УМЕНИЕ</div>      
      <div id="ramka-3" className="ramka"></div>

      <div id="hint-4" className="hint">ЗЕЛЬЯ</div>      
      <div id="ramka-4" className="ramka-big"></div>

      <div id="inventory">

        <div id="top-inv">

        <div id="weapons">
        {new Array(2).fill().map(el => (
        <div id="item-w" className="mr-2">
          <image id="item-inv-image" src="https://wiki.melvoridle.com/images/3/3e/Bronze_Sword_%28item%29.svg" alt="img"/>
        </div>))}
        </div>

        <div id="armors">
        {new Array(2).fill().map(el => (
        <div id="item-a">
          <image id="item-inv-image" src="https://cdn4.iconfinder.com/data/icons/ancient-melee-weapons-and-helmets/128/Shield-512.png" alt="img"/>
        </div>))}
        </div>

        <div id="spells">
        {new Array(2).fill().map(el => (
        <div id="item-s">
          <image id="item-inv-image" src="https://toppng.com/uploads/preview/fire-logo-png-svg-free-download-fire-logo-11563553513c3wo0p7dt1.png" alt="img"/>
        </div>))}
        </div>
        
        </div>

        <div id="down-inv">
        <div id="flasks">
        {new Array(6).fill().map(el => (
        <div id="item-f">
          <image id="item-inv-image" src="https://wiki.melvoridle.com/images/3/3e/Bronze_Sword_%28item%29.svg" alt="img"/>
        </div>))}
        </div>
        </div>

      </div>  

      <img id="chain3" className="chain" src="chain.png" alt="img"/>
      <img id="chain4" className="chain" src="chain.png" alt="img"/>
    </div>
  </div> );
}
 
export default Home;
