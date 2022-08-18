import React, { useEffect, useState, Component } from "react";
import "./ReservationsPage.css";

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
      });
  }, []);

  return (
    <div className="ReservationPage">
      <h1>My Parking Reservations</h1>
      {myReservations && <h1>This works!</h1>}
      <div className="reservation-card">
        <h1>Address</h1>
        <h1>Total Cost($): </h1>
        <h1>Check-In </h1>
        <h1>Check-Out</h1>
      </div>
    </div>
  );
}

export default ReservationPage;
