import React, {useState, useEffect} from "react";
import axios from "axios";

function CustomerDetails({match}){

    const [customer, setCustomer] = useState({});

    useEffect(() => {
        fetchCustomer();
    }, []);

    const fetchCustomer = () => {
    axios.get(`http://localhost:8080/api/v1/customers/${match.params.id}`).then(response => {
      console.log(response);
      setCustomer(response.data);
    });
    }

    return (
        <div>
            <h1>{customer.email}</h1>
            <p>{customer.id}</p>
            <p>{customer.name}</p>
        </div>
    )
}

export default CustomerDetails;