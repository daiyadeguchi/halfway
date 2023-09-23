import { useState } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";

const Registar = () => {
  const [formValues, setFormValues] = useState({
    space: (new Date().getTime()).toString(36),
    isOwner: true,
    username: "",
    location: ""
  })

  const navigate = useNavigate();

  const onSubmit = (space) => {
    axios
      .post('http://localhost:13000/space/create-space', space)
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
    <RegisterForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize></RegisterForm>
  )
}

export default Registar;
