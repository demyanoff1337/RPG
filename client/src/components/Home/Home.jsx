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

  const [cardList, setCardList] = useState([
    { id: 1, order: 3, type: 'inventory', text: 'Меч', img: 'https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg' },
    { id: 2, order: 2, type: 'inventory', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ]);


  const [cardFlasc, setCardFlasc] = useState([
    { id: 1, order: 3, type: 'flasc', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  ])


  console.log(cardList);
  console.log(cardFlasc);


  const [currentCard, setCurrentCard] = useState(null) // состояние что бы запоминать новую карточку
  // const [currentFlasc, setCurrentFlasc] = useState(null)
  // const [dragOver, setDragOver] = useState(null)

  console.log('currentCard', currentCard);
  // console.log('currentFlasc', currentFlasc);

  function dragStartHandler(e, card) {
    console.log('drag', card);
    setCurrentCard(card)
    // setCurrentFlasc(card)

  }
  function dragEndHandler(e, card) {
    e.target.style.background = 'white'

  }
  function dragOverHandler(e, card) {
    e.preventDefault()
    e.target.style.background = 'lightgray'
  }
  function dropHandler(e, card) {
    e.preventDefault()
    console.log('drop', card);
    setCardList([cardList[1], cardList[0]]);
  }
  // function dropHandlerFlasc(e, card) {


  //   e.preventDefault()
  //   console.log('drop', card);
  //   setCardFlasc(cardFlasc.map(c => {
  //     if (c.id === card.id) {
  //       return { ...c, order: currentFlasc.order }
  //     }
  //     if (c.id === currentFlasc.id) {
  //       return { ...c, order: card.order }
  //     }
  //     return c
  //   }))
  //   e.target.style.background = 'white'
  // }

  // const sortCards = (a, b) => {
  //   if (a.order > b.order) {
  //     return 1
  //   } else {
  //     return -1
  //   }
  // }

  // function boardsHandler(e, card) {
  //   console.log(e.target);
  //   e.preventDefault()

  //   if (card.type === 'flasc') {

  //     console.log('dragOver', card); //flasc remove
  //     setCardFlasc(prev => {
  //       let newFlasc = [...prev].filter(el => el.id !== card.id)
  //       newFlasc.push({...currentCard, type: 'flasc'})
  //       return newFlasc
  //     })
  //     setCardList(prev => {
  //       let newList = [...prev].filter(el => el.id !== currentCard.id)
  //       newList.push({...card,type:'inventory'})
  //       return newList
  //     })
  //   }
  // }

  // return (
  //   <>
  //     <div>
  //       <div className='app'>
  //         {cardList.map(card =>
  //           <div
  //             onDragStart={(e) => dragStartHandler(e, card)} //срабатывает в тот момент когда мы взяли карточку
  //             onDragLeave={(e) => dragEndHandler(e)} // срабатывает если мы вышли за пределы другой карттчки
  //             onDragEnd={(e) => dragEndHandler(e)} // если мы отпустили перемещение
  //             onDragOver={(e) => dragOverHandler(e)} //если мы находимся над другим объектом
  //             onDrop={(e) => boardsHandler(e, card)} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
  //             draggable={true}
  //             className={'card'}>
  //             <img src={card.img} />
  //           </div>
  //         )
  //         }
  //       </div>
  //     </div>

  //     <div id="items">
  //       <div id="weapon" className="item-card mr-2">
  //         <img id="item-img" className="item-img-card" src="https://wiki.melvoridle.com/images/d/db/Mithril_2H_Sword_%28item%29.svg" alt="ima" />
  //       </div>
  //       <div id="shield" className="item-card mr-2">
  //         <img id="item-img" className="item-img-card" src="https://cdn4.iconfinder.com/data/icons/ancient-melee-weapons-and-helmets/128/Shield_Crossed_Swords-512.png" alt="ima" />
  //       </div>
  //       <div id="magic" className="item-card mr">
  //         <img id="item-img" className="item-img-card" src="https://images.vexels.com/media/users/3/146887/isolated/preview/41faeb4b7129b75f4883d75c72627835-fire-flame-clipart.png" alt="img" />
  //       </div>

  //       {/* <div id="flask-items" className="item-card"> */}
  //       {cardList.map((card, i) => (
  //         <div
  //           onDragStart={(e) => dragStartHandler(e, card)} //срабатывает в тот момент когда мы взяли карточку
  //           onDragLeave={(e) => dragEndHandler(e)} // срабатывает если мы вышли за пределы другой карттчки
  //           onDragEnd={(e) => dragEndHandler(e)} // если мы отпустили перемещение
  //           onDragOver={(e) => dragOverHandler(e)} //если мы находимся над другим объектом
  //           onDrop={(e) => boardsHandler(e, card)} //если мы отпустили карточку и рассчитываем что должно произойти событие связанное с этим действие
  //           draggable={true}
  //           className={'card item-card'}
  //           id="item-s">
  //           <img id="item-img" className="item-img-card" src={card.img} alt="img" />
  //         </div>))}
  //       {/* </div> */}
  //     </div></>
  // )

  return ( <div id="home">
    <div id="left">
      <div id="charachter">
        <div id="exp-bar"></div>
        <div id="exp">Опыт: 700 / 1000</div>
        <div id="lvl-label">уровень</div>
        <div id="lvl">4</div>
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
          <span id="marge-alittle">NICKname</span>
        </div>

        <div id="down-card">
          <div id="money">1337 <span><img id="card-money-icon" src="coin.png" alt=""></img></span></div>
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
          <div id="shield"  className="item-card mr-2">
            <img id="item-img" className="item-img-card" src="https://cdn4.iconfinder.com/data/icons/ancient-melee-weapons-and-helmets/128/Shield_Crossed_Swords-512.png" alt="ima"/>
          </div>
            <div id="magic" className="item-card mr">
          <img id="item-img" className="item-img-card" src="https://images.vexels.com/media/users/3/146887/isolated/preview/41faeb4b7129b75f4883d75c72627835-fire-flame-clipart.png" alt="img"/>
          </div>

          {/* <div id="flask-items"> */}
          {new Array(4).fill().map((el, i) => (
            <div id={`item-s`} className="item-card">
              <img id="item-img" className="item-img-card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Conical_flask_teal.svg/768px-Conical_flask_teal.svg.png" alt="img"/>
            </div>))}
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
            <img id="item-img" className="item-img-card" src={cardList[1].img} alt="ima"/>
          </div>
          <div id="shield"  className="item-card mr-2">
            <img id="item-img" className="item-img-card" src="https://www.vhv.rs/dpng/d/132-1322463_armour-suit-png-picture-medieval-leather-armor-black.png" alt="ima"/>
          </div>
            <div id="magic" className="item-card mr">
          <img id="item-img" className="item-img-card" src="https://w7.pngwing.com/pngs/206/654/png-transparent-burning-fire-combustion-raging-fire-flames.png" alt="img"/>
          </div>


          {new Array(4).fill().map(el => (
            <div id="item-s" className="item-card">
              <img id="item-img" className="item-img-card" src="https://w7.pngwing.com/pngs/948/377/png-transparent-organic-food-melomakarono-honey-jar-ingredient-honey-glass-food-pie.png" alt="img"/>
            </div>))}

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
