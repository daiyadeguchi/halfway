import { useMemo } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="maps">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <GoogleMap center={center} />
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;