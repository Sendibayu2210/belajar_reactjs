// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
// import { Col, Row, Card, Button } from "react-bootstrap";
import { NavbarComponent } from "./components/Index";
import { LandingPageTop } from "./components/LandingPageTop";
import { LandingClient } from "./pages/LandingClient";
// import { API_URL } from "./utils/Constans";
// import axios from "axios";

export default class App extends Component {
  // componentDidMount() {
  //   axios
  //     .get(API_URL + "products")
  //     .then((response) => {
  //       const menus = response.data;
  //       this.setState({ menus });
  //     })
  //     .catch((error) => {
  //       console.log("Error yaa ", error);
  //     });
  // }

  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <LandingPageTop />
        <LandingClient />
      </div>
    );
  }
}
