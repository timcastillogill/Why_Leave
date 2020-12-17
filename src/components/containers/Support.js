import React from "react";
import "./Support.css";

export default function Support() {
  return (
    <div className="box-of-boxes">
      <div className="circ">
        <div className="support-text container">
          <h1>Ways to support</h1>
          <br></br>
          <h5 className="text">Follow the links for more information</h5>
          <div classname="web">
            <h5>  <a href="https://www.welcomepresents.com/" rel="noreferrer"> Welcome Presents </a></h5>
            <h5>  <a href="https://www.amnesty.org/en/" target="_blank" rel="noreferrer"> Amnesty International </a></h5>
            <h5>  <a href="https://www.unhcr.org/" target="_blank" rel="noreferrer"> The UN Refugee Agency </a></h5>
            <h5>  <a href="https://www.hrw.org/"target="_blank" rel="noreferrer"> Human Rights Watch </a></h5>
            <h5>  <a href="https://www.refugee-action.org.uk/" target="_blank" rel="noreferrer"> Refugee Action </a></h5>
            <h5>  <a href="https://www.refugeecouncil.org.uk/" target="_blank" rel="noreferrer"> Refugee Council </a></h5>
            <h5>  <a href="https://www.msf.org/" target="_blank" rel="noreferrer"> Médecins Sans Frontières </a></h5>
            <h5>  <a href="https://www.hias.org/" target="_blank" rel="noreferrer"> HIAS </a></h5>
          </div>
        </div>
      </div>
    </div>
  );
}
