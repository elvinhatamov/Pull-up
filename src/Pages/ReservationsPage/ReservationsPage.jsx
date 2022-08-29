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
      });
  }, []);

  if (myReservations != null) {
    myReservations.map((reserv) => {
      reserv.dateStart = new Date(reserv.dateStart);
      reserv.dateEnd = new Date(reserv.dateEnd);
      reserv.dateStart = reserv.dateStart.toDateString();
      reserv.dateEnd = reserv.dateEnd.toDateString();
    });
  }

  async function deleteItem(id) {
    console.log("Delete button triggered!");
    console.log("Reservation id is", id);
    try {
      await fetch(`/api/reservations/${id}`, {
        method: "DELETE",
      }).then((response) => {
        //don't need the response but now you update the event
        //filter away the list where id being deleted
        const newRecords = myReservations.filter((el) => el._id !== id);

        console.log("The new updated list after deletion is: ", newRecords);
        setMyReservations(newRecords);
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  return (
    <div className="ReservationPage">
      <h1>My Parking Reservations</h1>

      {myReservations ? (
        <div className="reservations-container">
          {myReservations.map((reservation) => (
            <ReservationCard
              id={reservation._id}
              listingId={reservation.listing}
              address={reservation.address}
              totalCost={reservation.totalCost}
              dateStart={reservation.dateStart}
              dateEnd={reservation.dateEnd}
              deleteItem={deleteItem}
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
