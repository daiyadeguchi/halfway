import { useState } from "react";
import { Button } from "react-bootstrap";
import { usePlacesWidget } from "react-google-autocomplete";

const RegisterForm = () => {
  const [isInvalidInput , setIsInvalidInput] = useState(true)
  const [buttonLabel, setButtonLabel] = useState("Enter Valid Info")
  const options = {
    fields: ["address_components", "geometry", "name"],
    types: ["train_station"],
    strictBounds: false,
  }

  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_MAPS_API_KEY,
    options: options,
    onPlaceSelected: () => {
      setIsInvalidInput(false)
      setButtonLabel("Register")
    }
  })
  
  return (
    <div className="registar row d-flex align-items-center justify-content-center bg-dark">
      <div className="h-25 row d-flex align-items-center justify-content-center">
        <input type="text" name="username" className="form-control-lg col-sm-8 col-md-8 rounded" placeholder="Enter username" required/>
        <input type="text" name="location" className="form-control-lg col-sm-8 col-md-8 rounded" ref={ref} required/>
        <Button variant="danger" size="lg" block="block" type="submit" className="col-md-6" disabled={isInvalidInput}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;