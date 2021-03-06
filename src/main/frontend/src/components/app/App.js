import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "../heading/Header";
import Nav from "../nav/Nav";
import About from "../about/About";
import Contact from "../contact/Contact";
import CustomersList from "../customer/CustomersList";
import AddCustomer from "../customer/AddCustomer";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import './App.css';
import CustomerDetails from "../customer/CustomerDetails";



function App() {
  return(
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/customers" exact component={CustomersList}/>
          <Route path="/customers/new" exact component={AddCustomer}/>
          <Route path="/customers/:id" component={CustomerDetails}/>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
