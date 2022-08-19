import React from "react";
import "./ReservationCard.css";

function ReservationCard(props) {
  //truncate the time in the dates
  //   const dateStart = Date.parse(props.dateStart);
  //   const dateEnd = Date.parse(props.dateEnd);

  return (
    <div className="ReservationCard">
      <div className="ReservationCard__content">
        <span className="ReservationCard__title">{props.address}</span>
        <br />
        <span className="ReservationCard__title">
          Check-In: {props.dateStart}
        </span>
        <br />
        <span className="ReservationCard__title">
          Check-out: {props.dateEnd}
        </span>
        <button className="ReservationCard_button">Delete</button>
      </div>
    </div>
  );
}

export default ReservationCard;
