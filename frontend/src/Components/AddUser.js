import axios from "axios";
import RegisterForm from "./RegisterForm";
import { useNavigate, useParams } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = (newUser) => {
    newUser.preventDefault()
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({"address": newUser.target[1].value}, function(results, status) {
      if(status === google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        axios
          .post('http://localhost:13000/space/create-space', {
            space: id,
            isOwner: false,
            username: newUser.target[0].value,
            location: newUser.target[1].value,
            lat: lat,
            lng: lng,
            dateModified: Date.now()
          })
          .then(res => {
            if (res.status === 200) {
              navigate('/' + res.data["space"])
            } else {
              Promise.reject()
            }
          })
          .catch (err => alert("Something went wrong: " + err))
      }
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <RegisterForm/>
    </form>
  )
}

export default AddUser;