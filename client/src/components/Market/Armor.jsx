import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Carousel/Slider.module.css';
import cn from 'classnames'


const Armor = () => {

  const slider = useRef(null);
  const me = useSelector(store => store.user);

  const [armor, setArmor] = useState([]);
  const [inventory, setInventory] = useState({});

  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  let position = 0;
console.log(inventory);

  useEffect(() => {
    async function getArmor() {
      try {
        let response = await fetch('/armor');
        if (response.ok) {
          let armors = await response.json();
          console.log(armors);
          if (armors.failed) {
            alert('Something went wrong')
          } else {
            console.log(armors)
            setArmor(armors);

          }
        }
      } catch (e) {
        alert(e)
      }
    }
    getArmor()
    // script()
  }, [])


  const prevHandler = () => {
    if (position === 0) {
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
    if (position <= -(armor.length - 1) * 100) {
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


  async function buyHandler(e) {
    e.preventDefault()
    if (!inventory.armor_id) {
      await fetch(`/armor/${me.inventory_id}/${e.target.id}`);
      setInventory({
        id: inventory.id, weapon_id: inventory.weapon_id, armor_id: +e.target.id,
        skill_id: inventory.skill_id, flask1_id: inventory.flask1_id,
        flask2_id: inventory.flask2_id, flask3_id: inventory.flask3_id, flask4_id: inventory.flask4_id,
      });
    } else {
      alert('Инвентарь заполнен')
    }
  }

  return (
    <div className={styles.Slider}>
      <div className={styles.track} ref={slider}>
        {armor.map((el, i) => {
          return (
            <div className={styles.item}>{el.price}<img style={{ width: '10vw' }} src={el.image} alt="" /><button id={i + 1} onClick={buyHandler}>Купить</button></div>

          )
        })}
      </div>
      <button className={cn(styles.button, styles.button_prev)} onClick={prevHandler}>{`<`}</button>
      <button className={cn(styles.button, styles.button_next)} onClick={nextHandler}>{`>`}</button>
    </div>
  );
}

export default Armor;
