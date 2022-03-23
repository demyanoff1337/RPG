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

  // const [cardList, setCardList] = useState([
  //   { id: 1, order: 3, type: 'inventory', text: 'Меч', img: 'https://yandex-images.clstorage.net/n4Qxb9201/2b9cc3Dut/lOGFAZCO6WXfgSR5rgRunmZCXJTKbRcrM5WM-EjXnFZSapRzkahbobc6CDLsUeB2bwsdXq6EsiF4WJcMP_xL1N3g5DCg4pBZ94UkdZogArp6bnyo6n1HNzr00JRFo9h6V1bcSswUrzBW07CHRZAZj5dnDDa2gN58cAhusAqhwqnw8RXV9CZgjQuFwVWaYJoCxvssoEpkP1brGaFIof8BjgPmXVdI-AuYWr_cCz3sXWd_LyBumoCLwGy0ttU6NZIBlPG5nVRmsFmjUckpVpRO3irj7LTWqBvaB2WpOP0_OUYnrkmzoPDnKBrn1N8Z8FmzE1dM2hIs2_wcSK4VJhGmAUAFGfUc_ozZU9EJqV7Qzt6mQ3BoVmSLbu_llSCJWwWuY_atq0DU84DiP-D3WVxBh3MzYFri_C905DQe2SYFgt1YdbXZ9A6YFctZeSmeGG42mhfQoBYg6yLv5cWACVMBViPyeRu05FsAArPYh0Uo2T_zv7gyhsgPXCRM2tWy9ZIV0JUx7ZD28Jm3zW1lngiOgk5LfCAS5E9qd3F1NFkfQXZv_snnjOTXmOafgFsFFFWn99fMqhY4_2RYOCKRarlOIQgB3c0o5nAV25VJ8SrI_j6uq7CQdgRrAvcttcAlt1GGWwL9F6Twk_CyV4SjLWhRT5O7rOqSWNfwENTage5NTqnAjUFxwFLkNXOhPcn-LPoaFn9YbIKEtwrjfRmAVTv9rkemFQMQwH8cGoNEY824RTdzpxSmCnTz_Gg0ykVe4ZJxlCWZNfzuRDXPuU3p6ggGtlIfoKSG_LvWS339UJHDebpTirEzYKCHgI6zKIs1PEkDF7uoXvK836RsUNLlbmnCuYDRVREk4qCNPx3d4R6owpJC8wDsjmybkos1CaTRs12q94KFN9i4S-yyC8i_FYQ172MjOOq2uHcAqFCu7VJNgsVMgVGdSIbk-T-drUlGNAay0nNEGGJYr1qXBTGY6Yuo' },
  //   { id: 2, order: 1, type: 'inventory', text: 'Топор', img: 'https://avatars.mds.yandex.net/i?id=60920bc4f274a070410795ea47b007cb-4888294-images-thumbs&n=13&exp=1' },
  //   { id: 3, order: 2, type: 'inventory', text: 'Палка', img: 'https://avatars.mds.yandex.net/i?id=630069b2d56d449fdaa93ae85d41c728-5656335-images-thumbs&n=13&exp=1' },
  //   { id: 4, order: 4, type: 'inventory', text: 'Копье', img: 'https://yandex-images.clstorage.net/n4Qxb9201/2b9cc3Dut/lOGFAZCO6WXfgSR5rgRunmZCXJTKbRcrM5WM-EjXnFZSapRzkahbobc6CDLsUeB2bwsdXq6EsiF4WJcMP_xL1N3g5DCg4pBZ94UkdZogArp6bnyo6n1HNzr00JRFo9h6V1bcSswUrzBW07CHRZAZj5dnDDa2gN58cAhusAqhwqnw8RXV9CZgjQuFwVWaYJoCxvssoEpkP1brGaFIof8BjgPmXVdI-AuYWr_cCz3sXWd_LyBumoCLwGy0ttU6NZIBlPG5nVRmsFmjUckpVpRO3irj7LTWqBvaB2WpOP0_OUYnrkmzoPDnKBrn1N8Z8FmzE1dM2hIs2_wcSK4VJhGmAUAFGfUc_ozZU9EJqV7Qzt6mQ3BoVmSLbu_llSCJWwWuY_atq0DU84DiP-D3WVxBh3MzYFri_C905DQe2SYFgt1YdbXZ9A6YFctZeSmeGG42mhfQoBYg6yLv5cWACVMBViPyeRu05FsAArPYh0Uo2T_zv7gyhsgPXCRM2tWy9ZIV0JUx7ZD28Jm3zW1lngiOgk5LfCAS5E9qd3F1NFkfQXZv_snnjOTXmOafgFsFFFWn99fMqhY4_2RYOCKRarlOIQgB3c0o5nAV25VJ8SrI_j6uq7CQdgRrAvcttcAlt1GGWwL9F6Twk_CyV4SjLWhRT5O7rOqSWNfwENTage5NTqnAjUFxwFLkNXOhPcn-LPoaFn9YbIKEtwrjfRmAVTv9rkemFQMQwH8cGoNEY824RTdzpxSmCnTz_Gg0ykVe4ZJxlCWZNfzuRDXPuU3p6ggGtlIfoKSG_LvWS339UJHDebpTirEzYKCHgI6zKIs1PEkDF7uoXvK836RsUNLlbmnCuYDRVREk4qCNPx3d4R6owpJC8wDsjmybkos1CaTRs12q94KFN9i4S-yyC8i_FYQ172MjOOq2uHcAqFCu7VJNgsVMgVGdSIbk-T-drUlGNAay0nNEGGJYr1qXBTGY6Yuo' },

  // ])


  // const [cardFlasc, setCardFlasc] = useState([
  //   { id: 1, order: 3, type: 'flasc', img: 'https://avatars.mds.yandex.net/i?id=938b438f1fad9f8efaaa104a4ab48c4e-4414771-images-thumbs&n=13&exp=1' },
  //   { id: 2, order: 1, type: 'flasc', img: 'https://avatars.mds.yandex.net/i?id=34dc7173d49b6ca76a0699b0bf89bf09-5716853-images-thumbs&n=13&exp=1' },
  //   { id: 3, order: 2, type: 'flasc', img: 'https://avatars.mds.yandex.net/i?id=2693482affbc33e079a40c05ed3ee36b-5584797-images-thumbs&n=13&exp=1' },
  //   { id: 4, order: 4, type: 'flasc', img: 'https://yandex-images.clstorage.net/n4Qxb9201/2b9cc3Dut/lOGFAZCO6WXfgSR5rgRunmZCXJTKbRcrM5WM-ETzkE8DP9By3OEK5NpWFV-JMdRqYmcEFr6R4hQsTcMIP_xn8MX00Aig4pBZ94UkdZogArp6bnyo6n1HNzr00JRFo9h6V1bcSswUrzBW07CHRZAZj5dnDDa2gN58cAhusAqhwqnw8RXV9CZgjQuFwVWaYJoCxvssoEpkP1brGaFIof8BjgPmXVdI-AuYWr_cCz3sXWd_LyBumoCLwGy0ttU6NZIBlPG5nVRmsFmjUckpVpRO3irj7LTWqBvaB2WpOP0_OUYnrkmzoPDnKBrn1N8Z8FmzE1dM2hIs2_wcSK4VJhGmAUAFGfUc_ozZU9EJqV7Qzt6mQ3BoVmSLbu_llSCJWwWuY_atq0DU84DiP-D3WVxBh3MzYFri_C905DQe2SYFgt1YdbXZ9A6YFctZeSmeGG42mhfQoBYg6yLv5cWACVMBViPyeRu05FsAArPYh0Uo2T_zv7gyhsgPXCRM2tWy9ZIV0JUx7ZD28Jm3zW1lngiOgk5LfCAS5E9qd3F1NFkfQXZv_snnjOTXmOafgFsFFFWn99fMqhY4_2RYOCKRarlOIQgB3c0o5nAV25VJ8SrI_j6uq7CQdgRrAvcttcAlt1GGWwL9F6Twk_CyV4SjLWhRT5O7rOqSWNfwENTage5NTqnAjUFxwFLkNXOhPcn-LPoaFn9YbIKEtwrjfRmAVTv9rkemFQMQwH8cGoNEY824RTdzpxSmCnTz_Gg0ykVe4ZJxlCWZNfzuRDXPuU3p6ggGtlIfoKSG_LvWS339UJHDebpTirEzYKCHgI6zKIs1PEkDF7uoXvK836RsUNLlbmnCuYDRVREk4qCNPx3d4R6owpJC8wDsjmybkos1CaTRs12q94KFN9i4S-yyC8i_FYQ172MjOOq2uHcAqFCu7VJNgsVMgVGdSIbk-T-drUlGNAay0nNEGGJYr1qXBTGY6Yuo' },


  // ])


  // console.log(cardList);
  // console.log(cardFlasc);


  // const [currentCard, setCurrentCard] = useState(null) // состояние что бы запоминать новую карточку
  // const [currentFlasc, setCurrentFlasc] = useState(null)
  // const [dragOver, setDragOver] = useState(null)

  // console.log('currentCard', currentCard);
  // console.log('currentFlasc', currentFlasc);

  // function dragStartHandler(e, card) {
  //   console.log('drag', card);
  //   setCurrentCard(card)
  //   // setCurrentFlasc(card)

  // }
  // function dragEndHandler(e, card) {
  //   e.target.style.background = 'white'

  // }
  // function dragOverHandler(e, card) {
  //   e.preventDefault()
  //   e.target.style.background = 'lightgray'
  // }
  // function dropHandler(e, card) {
  //   e.preventDefault()
  //   console.log('drop', card);
  //   setCardList(cardList.map(c => {
  //     if (c.id === card.id) {
  //       return { ...c, order: currentCard.order }
  //     }
  //     if (c.id === currentCard.id) {
  //       return { ...c, order: card.order }
  //     }
  //     return c
  //   }))
  //   e.target.style.background = 'white'
  // }
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
  //       {cardFlasc.map((card, i) => (
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
