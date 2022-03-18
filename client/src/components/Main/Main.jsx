import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/actions/userActions";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: event.target.mail.value, password: event.target.password.value }),
      });

      if (response.ok) {
        const data = await response.json();
        if (!data.exists) {
          alert('User with this email doesnt exists');
        } else {
          if (!data.correct) {
            alert('Incorrect password');
          } else {
            dispatch(getUser(data.user))
            navigate('/square');
          }
        }
      }
      
    } catch (e) {
      alert('Failed to fetch /login');
    }
  }

  return ( <div id="main">
    <form onSubmit={submitHandler}>
      <input name="mail" type="text" placeholder="LOGIN"/>
      <input name="password" type="password" placeholder="PASSWORD"/>
      <button>Enter</button>
    </form>
  </div> );
}
 
export default Main;
