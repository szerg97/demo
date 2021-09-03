import React, {useState, useEffect} from "react";
import './Customer.css';
import axios from "axios";
import {Link} from "react-router-dom";

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

  return customers.map((customer) => {
    return (
    <div key={customer.id}>
      <Card id = {customer.id} email = {customer.email} name = {customer.name}/>
    </div>
    )
  });
}

function Card(props){
  return <div>
      <Link to={`/customers/${props.id}`}><h1>{props.email}</h1></Link>
      <p>{props.name}</p>
      <p>{props.id}</p>
    </div>
}

function Customer() {

  return (
    <div className="Customer">
      <Link to={"customers/new"}><h3>Add new</h3></Link>
      <Customers />
    </div>
  );
}

export default Customer;