import React, { useEffect, useState, Component } from "react";
import "./ReservationsPage.css";
import ReservationCard from "../../Components/ReservationCard/ReservationCard";

function ReservationPage(props) {
  const user = props.user;
  //start of page launch, run ajax call

  const [myReservations, setMyReservations] = useState(null);

  //upon loading make fetch for data
  useEffect(() => {
    console.log("Loading My Reservations Page");

    //API call to get all reservation data
    fetch("/api/reservations/index", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // address = data.address;
        // rate = data.rate;
        setMyReservations(data);
        console.log("The data at the end is", data);
      });
  }, []);

  return (
    <div className="ReservationPage">
      <h1>My Parking Reservations</h1>

      {myReservations ? (
        <div className="reservations-container">
          {myReservations.map((reservation) => (
            <ReservationCard
              address={reservation.address}
              totalCost={reservation.totalCost}
              dateStart={reservation.dateStart}
              dateEnd={reservation.dateEnd}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1>You have No Reservations</h1>
        </div>
      )}
    </div>
  );
}

export default ReservationPage;
