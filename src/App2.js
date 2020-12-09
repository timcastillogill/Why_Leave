import React from "react";
const business = {
  country: "Syria",
  population: 72,
  leavers: 3.3,
};
class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <h2>{business.country}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p> Population {business.population}</p>
            <p>{business.leavers} Currently fleeing</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.leavers}</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Business;
