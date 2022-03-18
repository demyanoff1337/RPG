import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [person, setPerson] = useState({});
  const user = useSelector(store => store.user);

  useEffect(() => {
    async function getPerson() {
      try {
        const response = await fetch(`http://localhost:3001/person/${user.id}`);
        if (response.ok) {
          const persona = await response.json();
          if (persona.failed) {
            alert('Something went wrong')
          } else {
            setPerson(persona);
          }
        }
      } catch (e) {
        alert(e);
      }
    }
    getPerson();
  }, []);

  return ( <div>
    money: {person.money}
  </div> );
}
 
export default Home;
