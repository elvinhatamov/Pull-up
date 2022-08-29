import React from "react";
import "./ReservationCard.css";
import { Navigate, useNavigate } from "react-router-dom";

function ReservationCard(props) {
  //truncate the time in the dates
  //   const dateStart = Date.parse(props.dateStart);
  //   const dateEnd = Date.parse(props.dateEnd);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/listings/detail/" + props.listingId);
  };

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
        <br />
        <span className="ReservationCard__title">
          Total Cost: ${props.totalCost}
        </span>

        <div className="ReservationCard_button_div">
          <button
            className="ReservationCard_button"
            onClick={() => handleNavigate()}
          >
            See Listing
          </button>
          <button
            className="ReservationCard_button"
            onClick={() => props.deleteItem(props.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
