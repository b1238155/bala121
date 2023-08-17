import React from "react";
import "./Styles.css";
import { AiOutlineLeft, AiOutlineCheck } from "react-icons/ai";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from 'react-bootstrap/InputGroup';
import Sidenavbar from "../components/Sidenavbar";
import {useNavigate} from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';
import NavbartitleAddco from "../components/NavbartitleAddco";


export default function AddNewCustomer() {

  const { Formik } = formik;

  const schema = yup.object().shape({
    CompanyName: yup.string().required(),
    ContactPersonName: yup.string().required(),
    licno: yup.string().required(),
    phonenumber: yup.string().required(),
    emailid: yup.string().required(),
    address: yup.string().required(),
    City: yup.string().required(),
    state: yup.string().required(),
    pincode: yup.string().required(),

  });
  

  const navigate = useNavigate();

  return (
    <div className="app">
      
      <NavbartitleAddco/>

    <div className="d-flex">

      <Sidenavbar />

      <div className="main">
        <div className="mainitem">
         

          <div className="backbutton" onClick={()=>navigate('/Progress')}>
            <AiOutlineLeft /> <text>back</text>
          </div>

          <div className="titlesm">
            <text>Add New Customer</text>
          </div>

          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Customer Details</text>
              </div>
              <div className="cardcolumnpadding">
                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Formik
      validationSchema={schema}
      onSubmit={()=>navigate('/CustomerDetailes')}
      initialValues={{
        CompanyName: '',
        ContactPersonName: '',
        licno: '',
        phonenumber: '',
        emailid: '',
        address: '',
        City: '',
        state: '',
        pincode: '',
       
      }}
      >
         {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3 rowtabview ">
                  <Form.Group as={Col} controlId="validationFormik01">
                    <Form.Label className="cardcolhed">
                      Company Name<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput"
                     type="text"
                     name="CompanyName"
                     value={values.CompanyName}
                     onChange={handleChange}
                     isInvalid={!!errors.CompanyName}
                    />
                    <Form.Control.Feedback type="invalid">
                  {errors.CompanyName}
                </Form.Control.Feedback>
            
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik02">
                    <Form.Label className="cardcolhed">
                      Contact Person Name
                      <text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput"
                    type="text"
                    name="ContactPersonName"
                    value={values.ContactPersonName}
                    onChange={handleChange}
                    isInvalid={!!errors.ContactPersonName}
                    />
                     <Form.Control.Feedback type="invalid">
                  {errors.ContactPersonName}
                </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormikUsername">
                    <Form.Label className="cardcolhed">
                      Manufacturing Lic No
                      <text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <InputGroup hasValidation>
                    {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                    <Form.Control className="cardcolhedinput" 
                     type="text"
                    //  placeholder="Username"
                     aria-describedby="inputGroupPrepend"
                     name="licno"
                     value={values.licno}
                     onChange={handleChange}
                     isInvalid={!!errors.licno}
                    />
                    <Form.Control.Feedback type="invalid">
                  {errors.licno}
                </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Row className="mb-3 rowtabview ">
                  <Form.Group as={Col} controlId="validationFormik03">
                    <Form.Label className="cardcolhed">
                      Phone Number<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" 
                     type="text"
                    //  placeholder="City"
                     name="phonenumber"
                     value={values.phonenumber}
                     onChange={handleChange}
                     isInvalid={!!errors.phonenumber}
                    />
                     <Form.Control.Feedback type="invalid">
                {errors.phonenumber}
              </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} >
                    <Form.Label className="cardcolhed">
                      Additional Phone Number{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik04">
                    <Form.Label className="cardcolhed">
                      Email Id<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" 
                     type="text"
                    //  placeholder="State"
                     name="emailid"
                     value={values.emailid}
                     onChange={handleChange}
                     isInvalid={!!errors.emailid}
                    />
                     <Form.Control.Feedback type="invalid">
                {errors.emailid}
              </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Row className="mb-3 rowtabview">
                  <Form.Group as={Col} controlId="validationFormik05">
                    <Form.Label className="cardcolhed">
                      Address Line1<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput"
                     type="text"
                    //  placeholder="Zip"
                     name="address"
                     value={values.address}
                     onChange={handleChange}
                     isInvalid={!!errors.address}
                    />
                     <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label className="cardcolhed">
                      Address Line2{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik06">
                    <Form.Label className="cardcolhed">
                      City<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" 
                    type="text"
                    // placeholder="Zip"
                    name="City"
                    value={values.City}
                    onChange={handleChange}
                    isInvalid={!!errors.City}
                    />
                     <Form.Control.Feedback type="invalid">
                {errors.City}
              </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Row className="mb-3 rowtabview ">
                  <Form.Group as={Col} controlId="validationFormik07">
                    <Form.Label className="cardcolhed">
                      State<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" 
                     type="text"
                    //  placeholder="State"
                     name="state"
                     value={values.state}
                     onChange={handleChange}
                     isInvalid={!!errors.state}
                    />
                     <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik08">
                    <Form.Label className="cardcolhed">
                      Pincode<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput"
                     type="text"
                    //  placeholder="Zip"
                     name="pincode"
                     value={values.pincode}
                     onChange={handleChange}
                     isInvalid={!!errors.pincode}
                    />
                    
              <Form.Control.Feedback type="invalid">
                {errors.pincode}
              </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} className="cardbuttonwid">
                    <Form.Label></Form.Label>
                    <button className="cardbutton" type="submit"
                    //  onClick={() => navigate("customerdetailes")}
                      >
                      <AiOutlineCheck size={19}  /> Save
                    </button>
                  </Form.Group>
                </Row>
                </Form>
          )}
                </Formik>

                {/* ---------------------------------   card column end  -------------------------------------------- */}
              </div>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

