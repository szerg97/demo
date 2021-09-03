import React, {useState, useEffect} from "react";
import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1/customers/new"

function AddCustomer(){

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[dob, setDob] = useState(new Date());

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handleDobChange(event){
        setDob(event.target.value);
    }

    const createPost = () => {
        axios.post(baseUrl, {name: name, email: email, dob: dob});
    }

    return(
        <div className="container">
            <form>
                <h1>Add new customer: {name}</h1>
                <div>
                    <input onChange={handleNameChange} type="text" placeholder="Name" value={name}/>
                </div>
                <div>
                    <input onChange={handleEmailChange} type="text" placeholder="Email" value={email}/>
                </div>
                <div>
                    <input onChange={handleDobChange} type="date" value={dob}/>
                </div>
                <div>
                    <button onClick={createPost}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddCustomer;