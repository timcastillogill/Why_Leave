import React from "react";
import "./AboutWhyLeave.css";

export default function AboutWhyLeave() {
  return (
    <div className="box-of-boxes">
      <div className="circ">
        <div className="info-box">
          <div className="lander container">
            <h1>About Why Leave</h1>
            <br></br>
            <p className="text-box">
              <p>
                We created this project to help curb misinformation, and to provide a
                safe platform to educate the public on global issues, as there is a
                severe lack of information about certain nations and countries in the
                media.
              </p> 
              
              <div className="amnesty-quote">
              “There are many reasons why people around the globe seek to
              rebuild their lives in a different country. Some people leave home to
              get a job or an education. Others are forced to flee persecution or
              human rights violations such as torture” - Amnesty International
              </div>
              <br></br>  
              <p>
                The focus of this project is to inform people about conflicts, traumas and
                sociopolitical issues occurring in unrepresented, marginalised nations
                and countries on our planet. These issues cause inhabitants of these
                countries to seek refuge in order to survive or build better lives for
                themselves and their families (if they did not make the journey
                alone). 
              </p>
              <p>
                Reasons why people leave or flee their home countries is not
                common knowledge, and the topic is filled with a lot of ignorance -
                phrases like ‘they’re just here to take our jobs’ are untrue, damaging
                and completely misleading.
              </p>
              <p>
                Our project idea stemmed from Maggie's
                personal experience working with refugees and asylum seekers,
                understanding that there is a ‘knowledge gap’ that can be filled with
                the tech we’ve learnt so far at Makers.
              </p>
              <div className="welcome-presents">
                <p>
                  You can see some of the amazing work she is doing to help refugees
                  and asylum seekers      
                  <a
                    href="https://www.instagram.com/welcomepresents/?hl=en"
                    target="_blank" rel="noreferrer"
                  >
                    {" "}
                    here.
                  </a>
                </p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
