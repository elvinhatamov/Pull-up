import React from "react";
import "./ReservationCard.css";

function ReservationCard(props) {
  //truncate the time in the dates
  //   const dateStart = Date.parse(props.dateStart);
  //   const dateEnd = Date.parse(props.dateEnd);

  async function deleteItem(id) {
    console.log("Delete button triggered!");
    // try {
    //   await fetch(`/api/hostings/${id}`, {
    //     method:"DELETE"
    //   })
    // }
  }

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
        <button
          className="ReservationCard_button"
          onClick={() => deleteItem(1)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ReservationCard;
