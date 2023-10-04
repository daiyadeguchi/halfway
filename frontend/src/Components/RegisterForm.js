import { useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import { usePlacesWidget } from "react-google-autocomplete";

const RegisterForm = (props) => {
  const inputRef = useRef();
  const options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
  }

  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_MAPS_API_KEY,
  })
  
  return (
    <div className="registar d-flex align-items-center justify-content-center bg-dark">
      <input type="text" name="username" className="form-control"/>
      <input type="text" name="location" className="form-control" ref={ref} />
      <Button variant="danger" size="lg" block="block" type="submit" className="mt-3">
        REGISTER 
      </Button>
    </div>
  );
};

export default RegisterForm;