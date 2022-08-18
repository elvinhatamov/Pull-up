import React, { useEffect, useState, Component } from "react";
import "./ReservationsPage.css";

function ReservationPage(props) {
  const user = props.user;
  //start of page launch, run ajax call

  return (
    <div className="ReservationPage">
      <h1>My Parking Reservations</h1>
    </div>
  );
}

export default ReservationPage;
