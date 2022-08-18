import React from "react";
import "./ReservationCard.css";

function ReservationCard(props) {
  //truncate the time in the dates
  //   const dateStart = Date.parse(props.dateStart);
  //   const dateEnd = Date.parse(props.dateEnd);

  return (
    <div className="ReservationCard">
      <h1>{props.address}</h1>
      <h1>{props.totalCost}</h1>
      <h1>Check-In: {props.dateStart}</h1>
      <h1>Check-Out: {props.dateEnd}</h1>
    </div>
  );
}

export default ReservationCard;
