import axios from "axios";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";

const Registar = () => {

  const navigate = useNavigate();

  const onSubmit = (space) => {
    space.preventDefault()
    axios
      .post('http://localhost:13000/space/create-space', {
        space: (new Date().getTime()).toString(36),
        isOwner: true,
        username: space.target[0].value,
        location: space.target[1].value
      })
      .then(res => {
        if (res.status === 200) {
          console.log('Space successfully created');
          navigate('/' + res.data["space"])
        } else {
          Promise.reject();
        }
      })
      .catch (err => alert("Something went wrong"));
  };

  return (
    <form onSubmit={onSubmit} >
      <RegisterForm/>
    </form>
  )
}

export default Registar;
