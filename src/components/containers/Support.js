import React from "react";
import "./Support.css";

export default function Support() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Ways to support:</h1>
        <p className="text-muted">Follow the links for more information</p>
        <div classname="web">
        <p> Maggie's Hibberd project that has helped many: <a href="https://www.welcomepresents.com/"> Welcome Presents </a></p>
        <p>  <a href="https://www.amnesty.org/en/" target="_blank" > Amnesty International </a></p>
        <p>  <a href="https://www.unhcr.org/" target="_blank"> The UN Refugee Agency </a></p>
        <p>  <a href="https://www.hrw.org/"target="_blank"> Human Rights Watch </a></p>
        <p>  <a href="https://www.refugee-action.org.uk/" target="_blank"> Refugee Action </a></p>
        <p>  <a href="https://www.refugeecouncil.org.uk/" target="_blank"> Refugee Council </a></p>
        <p>  <a href="https://www.msf.org/" target="_blank"> Médecins Sans Frontières </a></p>
        <p>  <a href="https://www.hias.org/" target="_blank"> HIAS </a></p>
          </div>
      </div>
    </div>
  );
}
