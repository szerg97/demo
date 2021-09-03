import React, {useState, useEffect} from "react";
import './CustomersList.css';
import axios from "axios";
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";


const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    axios.get("http://localhost:8080/api/v1/customers").then(response => {
      console.log(response);
      setCustomers(response.data);
    });
  }

  const Card = (props) => {

    const DeleteCustomer = () => {
      axios.delete(`http://localhost:8080/api/v1/customers/delete/${props.id}`);
    }
  
    return <div>
        <Link to={`/customers/${props.id}`}><h1>{props.email}</h1></Link>
        <p>{props.name}</p>
        <p>{props.id}</p>
        <Button onClick={DeleteCustomer}>Delete</Button>
      </div>
  }

  return customers.map((customer) => {
    return (
    <div key={customer.id}>
      <Card id = {customer.id} email = {customer.email} name = {customer.name}/>
    </div>
    )
  });
}



function CustomersList() {

  return (
    <div className="Customer">
      <Link to={"customers/new"}><h3>Add new</h3></Link>
      <Customers />
    </div>
  );
}

export default CustomersList;