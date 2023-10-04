import axios from "axios";
import RegisterForm from "./RegisterForm";
import { useNavigate, useParams } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = (newUser) => {
    newUser.preventDefault()
    axios
      .post('http://localhost:13000/space/create-space', {
        space: id,
        isOwner: false,
        username: newUser.target[0].value,
        location: newUser.target[1].value
      })
      .then(res => {
        if (res.status === 200) {
          navigate('/' + res.data["space"])
        } else {
          Promise.reject()
        }
      })
      .catch (err => alert("Something went wrong"))
  }

  return (
    <form onSubmit={onSubmit}>
      <RegisterForm/>
    </form>
  )
}

export default AddUser;