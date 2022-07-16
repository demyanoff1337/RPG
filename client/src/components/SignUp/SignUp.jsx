
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupThunk } from "../../redux/thunk/authorizationThunk";

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputHandler = (e) => {

  };


  const formSubmitter = async (e) => {
    e.preventDefault();
  );
};

export default SignUp;
