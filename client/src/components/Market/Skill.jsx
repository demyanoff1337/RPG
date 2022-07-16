import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Carousel/Slider.module.css';
import cn from 'classnames'
import { getUser } from '../../redux/actions/userActions';


const Flask = () => {


  const slider = useRef(null)
  const me = useSelector(store => store.user);

  const [skill, setSkill] = useState([]);
  const [inventory, setInventory] = useState({});

  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  const dispatch = useDispatch();
  
  let position = 0;
 


  useEffect(() => {
    async function getSkill() {
      try {
        let response = await fetch('/skill');
        if (response.ok) {
         let skills = await response.json();
          console.log(skill);
          if (skills.failed) {
            alert('Something went wrong')
          } else {
            console.log(skills)
            setSkill(skills);

          }
        }
        response = await fetch(`/inv/${me.inventory_id}`); // inv_id
        if (response.ok) {
          const inv = await response.json();
          if (inv.failed) {
            alert('Something went wrong')
          } else {
            setInventory(inv);
          }
        }
      } catch (e) {
        alert(e)
      }
    }
    getSkill()
    // script()
  }, [])


  const prevHandler = () => {
    if (position === 0){
      setPrev(true)
    } else {
      position += 300
      console.log(slider);
      slider.current.childNodes.forEach((element) => {
        element.style = `transform: translateX(${position}px)`
      })
    }
  }


  const nextHandler = () => {
    if (position <= -(skill.length - 1) * 100) {
      setNext(true)
      setPrev(false)
    } else {
      setNext(false)
      position -= 300
      slider.current.childNodes.forEach((element) => {
        element.style = `transform: translateX(${position}px)`
      })
    }
  }

  async function buyHandler(prc, id) {
    // e.preventDefault()
   if(!inventory.skill_id){
    await fetch(`/skill/${me.inventory_id}/${id}`);
    setInventory({id: inventory.id, weapon_id: inventory.weapon_id, armor_id: inventory.armor_id, 
    skill_id: id, flask1_id: inventory.flask1_id,
    flask2_id: inventory.flask2_id,flask3_id: inventory.flask3_id,flask4_id: inventory.flask4_id,
  }
  
  );
  dispatch(getUser(
    {
      user_id: me.user_id,
      level: me.level,
      exp: me.exp,
      HP: me.HP,
      damage: me.damage,
      armor: me.armor,
      critical: me.critical,
      money: me.money - prc,
      weapon_id: me.weapon_id,
      armor_id: me.armor_id,
      skill_id: me.skill_id,
      inventory_id: me.inventory_id,
    }
  ))
   } else {
     alert('Инвентарь заполнен')
   }
  }

  console.log(inventory, me.money, skill)


  return ( 
    <div className="items-market">
    {skill.map((el, i) => {
      return (
        <div className="item-market"><img class="img-market" src={el.image} alt="" /><button type="button" disabled={inventory.skill_id || me.money < el.price} class={`buy-btn btn${i}`} id={i + 1} onClick={() => buyHandler(el.price, el.id)}>КУПИТЬ</button><span class="price">{el.price}<img class="cm" src="coin.png"/></span></div>

      )

    })}
  </div>
      /* <button className={cn(styles.button, styles.button_prev)} onClick={prevHandler}>{`<`}</button>
      <button className={cn(styles.button, styles.button_next)} onClick={nextHandler}>{`>`}</button> */
    // </div>
  );
}
 
export default Flask;

