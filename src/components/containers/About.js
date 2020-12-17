import React from "react";

const developers = [
  {
    img: 'https://avatars3.githubusercontent.com/u/65120248?s=400&u=669d78c0517eacad4d2f314d59cb7628efb76727&v=4',
    name: 'Krzysztof',
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

export default function Developer() {
  return (
    <section className="img-container">
      {developers.map((image) => {
        return <Image image={image}></Image>;
      })}
    </section>
  );
}

const Image = (props) => {
  const { img, name, gitHub } = props.image;
  return (
    <article className="image">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h6>{gitHub}</h6>
    </article>
  );
};

