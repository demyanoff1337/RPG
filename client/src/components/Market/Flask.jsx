import { useEffect, useRef, useState } from 'react';



const Flask = () => {
  const slider = useRef(null)

  const [flasc, setFlasc] = useState([]);
  // const [s, setS] = useState('1');

  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)
  let flascs;

  let position = 0;

  console.log(flasc);


  useEffect(async () => {
    async function getWeapon() {
      try {
        const response = await fetch('/flasc');
        if (response.ok) {
          flascs = await response.json();
          console.log(flascs);
          if (flascs.failed) {
            alert('Something went wrong')
          } else {
            console.log(flascs)
            setFlasc(flascs);

          }
        }
      } catch (e) {
        alert(e)
      }
    }
    await getWeapon()
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
    if (position <= -(flasc.length - 1) * 100) {
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
    <div className="items-market">
    {flasc.map((el, i) => {
      return (
        <div className="item-market"><img class="img-market" src={el.image} alt="" /><button disabled={true} class={`buy-btn btn${i}`} id={i + 1}>КУПИТЬ</button></div>

      )

    })}
  </div>)
}
 
export default Flask;

