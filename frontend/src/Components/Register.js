import axios from "axios";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";

const Registar = () => {

  const navigate = useNavigate();

  const onSubmit = (space) => {
    space.preventDefault()
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({"address": space.target[1].value}, function(results, status) {
      if(status === google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
       
        axios
          .post('http://localhost:13000/space/create-space', {
            space: (new Date().getTime()).toString(36),
            isOwner: true,
            username: space.target[0].value,
            location: space.target[1].value,
            lat: lat,
            lng: lng,
            dateModified: Date.now()
          })
          .then(res => {
            if (res.status === 200) {
              console.log('Space successfully created');
              navigate('/' + res.data["space"])
            } else {
              Promise.reject();
            }
          })
          .catch (err => alert("Something went wrong: " + err));
        }
      }
    )
  };

  return (
    <form onSubmit={onSubmit} >
      <RegisterForm/>
    </form>
  )
}

export default Registar;
