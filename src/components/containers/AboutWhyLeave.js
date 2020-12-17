import React from "react";
import "./AboutWhyLeave.css";
import About from "./About";
import "./About.css";


const developers = [
  {
    img: 'https://avatars3.githubusercontent.com/u/65120248?s=400&u=669d78c0517eacad4d2f314d59cb7628efb76727&v=4',
    name: 'Krzysztof Jankowski',
    gitHub: 'https://github.com/jotkafomat',
  },
  {
    img: 'https://avatars3.githubusercontent.com/u/69048404?s=400&u=41096a0b6fb978c9ef61ea6defd3758146765152&v=4',
    name: 'Beca Galliano',
    gitHub: 'https://github.com/beca-g',
  },
  {
    img: 'https://avatars3.githubusercontent.com/u/59736461?s=400&u=8ad42aef8b0e0ad3488cc9a8b94391bf5b48b201&v=4',
    name: 'Maiara Rodrigues',
    gitHub: 'https://github.com/MaiaraRodrigues',
  },
  {
    img: 'https://avatars0.githubusercontent.com/u/61849640?s=400&u=8fc9ba029dc26b05ae5a8e7a0f4b36076eb7acfd&v=4',
    name: 'Tim Castillo-Gill',
    gitHub: 'https://github.com/timcastillogill',
  },
  {
    img: 'https://avatars1.githubusercontent.com/u/62068083?s=400&u=01526f8987e556aae8a2b9efc20c5a6ced2ff675&v=4',
    name: 'Otis Vickers-Graver',
    gitHub: 'https://github.com/otisvg',
  },
  {
    img: 'https://avatars1.githubusercontent.com/u/69995960?s=400&u=2ec8ec3eeb2a96bcd8c792f9464555f67bcb4f0b&v=4',
    name: 'Joshua Macleod',
    gitHub: 'https://github.com/joshuamac2',
  },
  {
    img: 'https://avatars0.githubusercontent.com/u/49394088?s=400&u=786badbaab49f9765d6962e8ed329d543cc4a668&v=4',
    name: 'Maggie Hibberd',
    gitHub: 'https://github.com/MaggieHibberd',
  }
]

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
      <br></br>
      <br></br>
      <h2>Developer Team</h2>
      <br></br>
      <br></br>
      <div className="dev-box container">
        <About />
      </div>
    </div>
  );
}
