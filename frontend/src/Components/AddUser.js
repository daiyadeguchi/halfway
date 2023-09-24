import { useState } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";
import { useNavigate, useParams } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    space: id,
    isOwner: false,
    username: "",
    location: ""
  })

  const onSubmit = (newUser) => {
    axios
      .post('http://localhost:13000/space/create-space', newUser)
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
    <RegisterForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize>
        Add User
      </RegisterForm>
  )
}

export default AddUser;