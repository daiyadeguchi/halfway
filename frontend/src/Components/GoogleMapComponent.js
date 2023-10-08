import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const { id } = useParams();
  let allUsers = new Array();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:13000/space/" + id)
      .then(({ data }) => {
        allUsers.push(data);
        setUsers(allUsers[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
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

  let center = {
    lat: users.length > 0 ? parseFloat(users[0].lat) : 35.652832,
    lng: users.length > 0 ? parseFloat(users[0].lng) : 139.839478,
  };

  if(users.length > 0) {
    const centerMarkers = users.map((user) => 
      <Marker position={{lat: parseFloat(user.lat), lng: parseFloat(user.lng)}}/>
    )

    return isLoaded ? (
      <GoogleMap
        center={center}
        zoom={14}
        options={mapOptions}
        mapContainerStyle={{ width: '100%', height: 'calc(100vh - 86px)' }}
      >
        {centerMarkers}
      </GoogleMap> 
    ): <></>;
  }


  
  // return isLoaded ? (
  //   <GoogleMap
  //     center={center}
  //     zoom={14}
  //     options={mapOptions}
  //     mapContainerStyle={{ width: '100%', height: 'calc(100vh - 86px)' }}
  //   >
  //     <Marker position={center} />
  //   </GoogleMap>
  // ) : <></>;

};

export default GoogleMapComponent;