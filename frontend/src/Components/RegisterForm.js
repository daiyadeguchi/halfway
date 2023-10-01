import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const RegisterForm = (props) => {
  return (
    <div className="registar d-flex flex-fill align-items-center justify-content-center bg-dark">
      <Formik {...props}>
        <Form>
          <FormGroup>
            <a className="d-flex align-items-left text-white text-decoration-none">Username:</a>
            <Field name="username" type="text" className="form-control" />
            <ErrorMessage name="username" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <FormGroup>
            <a className="d-flex align-items-left text-white text-decoration-none">Location:</a>
            <Field name="location" type="text" className="form-control" />
            <ErrorMessage name="username" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit" className="mt-3">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;