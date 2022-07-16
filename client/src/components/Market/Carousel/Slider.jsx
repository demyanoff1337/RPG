import { useEffect, useRef, useState } from 'react';
import styles from './Slider.module.css';
import cn from 'classnames'


const Slider = () => {


  const slider = useRef(null)

  const [weapon, setWeapon] = useState([]);
  // const [s, setS] = useState('1');

  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)
  let weapons;

  let position = 0;

  console.log(weapon);

  useEffect(() => {
    async function getWeapon() {
      try {
        const response = await fetch('/weapon');
        if (response.ok) {
          weapons = await response.json();
          console.log(weapons);
          if (weapons.failed) {
            alert('Something went wrong')
          } else {
            console.log(weapons)
            setWeapon(weapons);

          }
        }
      } catch (e) {
        alert(e)
      }
    }
   getWeapon()
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
    if (position <= -(weapon.length - 1) * 100) {
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


  return (
    <div className={styles.Slider}>
      <div className={styles.track} ref={slider}>
        {weapon.map((el) => {
          return (
            <div className={styles.item}>{el.price},{el.damage},<img src={el.image} alt="" /></div>
            
          )
        })}
      </div>
      <button className={cn(styles.button, styles.button_prev)} onClick={prevHandler}>{`<`}</button>
      <button className={cn(styles.button, styles.button_next)} onClick={nextHandler}>{`>`}</button>
    </div>
  );
}

export default Slider;
