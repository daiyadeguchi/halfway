import { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const libraries = useMemo(() => ['places'], []);
  const center = useMemo(() => ({
    lat: 35.652832,
    lng: 139.839478
  }), []);

  const mapOptions = useMemo (() => ({
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: true,
  }), [])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libraries,
  });

  return isLoaded ? (
    <GoogleMap
      center={center}
      zoom={14}
      options={mapOptions}
      mapContainerStyle={{ width: '100%', height: 'calc(100vh - 86px)' }}
    ></GoogleMap>
  ) : <></>;
};

export default GoogleMapComponent;