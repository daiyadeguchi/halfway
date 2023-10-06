import { Button } from "react-bootstrap";
import { usePlacesWidget } from "react-google-autocomplete";

const RegisterForm = () => {
  const options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
  }

  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_MAPS_API_KEY,
    options: options
  })
  
  return (
    <div className="registar row d-flex align-items-center justify-content-center bg-dark">
      <div className="h-25 row d-flex align-items-center justify-content-center">
        <input type="text" name="username" className="form-control-lg col-sm-8 col-md-8 rounded" placeholder="Enter username"/>
        <input type="text" name="location" className="form-control-lg col-sm-8 col-md-8 rounded" ref={ref} />
        <Button variant="danger" size="lg" block="block" type="submit" className="col-md-6">
          REGISTER 
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;