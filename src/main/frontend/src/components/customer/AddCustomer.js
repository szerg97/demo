import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import "./AddCustomer.css";
import axios from "axios";
import { Button, Form, FormLabel, FormControl, FormGroup } from "react-bootstrap";

const baseUrl = "http://localhost:8080/api/v1/customers/new"

function AddCustomer(){
    const date = new Date();
    const history = useHistory();

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[dob, setDob] = useState(date);

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handleDobChange(event){
        setDob(event.target.value);
    }

    const addCustomer = () => {
        axios.post(baseUrl, {name: name, email: email, dob: dob});
        history.push("/customers");
    }

    const isDisabled = () => {
        return (!(name.length > 0 && email.length > 0 && dob.getFullYear !== date.getFullYear));
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <Form>
                        <h1>Add new customer</h1>
                        <FormGroup>
                            <FormLabel className="lbForm">Name</FormLabel>
                            <FormControl onChange={handleNameChange} type="text" placeholder="Your Name" value={name} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel className="lbForm">Email</FormLabel>
                            <FormControl onChange={handleEmailChange} type="email" placeholder="Example@email.com" value={email} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel className="lbForm">Date of birth</FormLabel>
                            <FormControl onChange={handleDobChange} type="date"  value={dob} />
                        </FormGroup>
                        <FormGroup>
                            <Button className="btn btn-light" onClick={addCustomer} id="btnForm" disabled={isDisabled()}>Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
            
        </div>
    );
}

export default AddCustomer;