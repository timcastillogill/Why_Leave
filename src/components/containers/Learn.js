import React from "react";
import "./Learn.css";

export default function Learn() {
  return (
    <div className="box-of-boxes">
      <div className="circ">
        <div className="learn container">
          <div className="masterBox">
            <div className="box1">
              <div className="title">
                <h1>Why Do People Leave Their Countries?</h1>
                <br></br>
              </div>
              <p>
                There are many reasons why it might be too difficult or
                dangerous for people to stay in their own countries. For
                example, children, woman and men flee from violence, war,
                hunger, extreme poverty, because of their sexual or gender
                orientation, or from the consequences of climate change or other
                natural disasters. Often people will ace a combination of these
                difficult circumstances. People who leave their countries are
                not always fleeing danger. They might believe they have a better
                chance of finding work in another country because they have the
                education or capital to seek opportunities elsewhere. Others
                might want to join relatives or friends who are already living
                abroad. Or they might seek to start or finish their education in
                another country. There are lots of different reasons for people
                to start a journey to build a life in a new country.
              </p>
            </div>

            <div className="left">
              <div className="box2">
                <h2>
                  What exactly is a refugee, an asylum-seeker and a migrant?
                </h2>
                <p>
                  The terms “refugee”, “asylum-seeker” and “migrant” are used to
                  describe people who are on the move, who have left their
                  countries and have crossed borders. The terms “migrant” and
                  “refugee” are often used interchangeably but it is important
                  to distinguish between them as there is a legal difference.
                </p>

                <h2>Who is a refugee?</h2>
                <p>
                  A refugee is a person who has fled their own country because
                  they are at risk of serious human rights violations and
                  persecution there. The risks to their safety and life were so
                  great that they felt they had no choice but to leave and seek
                  safety outside their country because their own government
                  cannot or will not protect them from those dangers. Refugees
                  have a right to international protection.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="box4">
                <h2>Who is an asylum-seeker?</h2>
                <p>
                  An asylum-seeker is a person who has left their country and is
                  seeking protection from persecution and serious human rights
                  violations in another country, but who hasn’t yet been legally
                  recognized as a refugee and is waiting to receive a decision
                  on their asylum claim. Seeking asylum is a human right. This
                  means everyone should be allowed to enter another country to
                  seek asylum.
                </p>

                <h2>Who is a migrant?</h2>
                <p>
                  There is no internationally accepted legal definition of a
                  migrant. Like most agencies and organizations, we at Amnesty
                  International understand migrants to be people staying outside
                  their country of origin, who are not asylum-seekers or
                  refugees.
                </p>
                <p>
                  Some migrants leave their country because they want to work,
                  study or join family, for example. Others feel they must leave
                  because of poverty, political unrest, gang violence, natural
                  disasters or other erious circumstances that exist there.
                </p>
                <p>
                  Lots of people don’t fit the legal definition of a refugee but
                  could nevertheless be in danger if they went home.
                </p>
              </div>
            </div>
            <footer className="website">
              <p>
                The information above was taken from Amnesty International, to
                read the full article click
                <a
                  href="https://www.amnesty.org/en/what-we-do/refugees-asylum-seekers-and-migrants/"
                  target="_blank" rel="noreferrer"
                >
                  {" "}
                  here
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
