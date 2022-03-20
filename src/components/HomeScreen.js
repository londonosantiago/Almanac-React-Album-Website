import React from "react";
import HeroSection from "./HeroSection";
import "./HomeScreen.css";
import Promo from "../assets/Promo.png";
import { Button } from './Button';

class HomeScreen extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
      if(!localStorage.getItem("token")){
        this.tokenCall(0);
      }
  }

  tokenCall = async () => {
    let resp = await fetch("https://oauth2.elenasport.io/oauth2/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic N3RxZXBnMDM0Z2dtdWVwcTdoYWJsN2M3M2k6Zmd1ajlhNzJkMTEyNmZxdXIwajQyMGZkOXZhcHRiMXFmdjFlYnBnNWtvNGJqNDhyNGNw",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });

    let respJson = await resp.json();

    localStorage.setItem("token", respJson.access_token);
  };

  render() {
    return (
      <div>
        <HeroSection />
        <div className="promo">
          <h3>Catálogo de Jugadores</h3>
          <a href="/players">
          <img src={Promo}></img>
          </a>
          <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Ver más Jugadores
        </Button>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
