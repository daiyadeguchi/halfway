import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import calculateHalfway from "../location/HalfwayCalculator";

const GoogleMapComponent = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let allUsers = [];
    axios
      .get("http://localhost:13000/space/" + id)
      .then(({ data }) => {
        allUsers.push(data);
        setUsers(allUsers[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  
  const libraries = useMemo(() => ['places'], []);

  const mapOptions = useMemo (() => ({
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: true,
  }), [])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libraries,
  })

  const latlng = calculateHalfway(users);
  let center = {
    lat: latlng[0],
    lng: latlng[1]
  }

  if(users.length > 0) {
    const markers = users.map((user) => 
      <Marker position={{lat: parseFloat(user.lat), lng: parseFloat(user.lng)}}/>
    )

    return isLoaded ? (
      <GoogleMap
        center={center}
        zoom={14}
        options={mapOptions}
        mapContainerStyle={{ width: '100%', height: 'calc(100vh - 86px)' }}
      >
        {markers}
        <Marker 
          position={center} 
          icon={'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png'}
        />
      </GoogleMap> 
    ): <></>;
  }

};

export default GoogleMapComponent;