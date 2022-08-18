import React, { useState, useEffect } from "react";
import "./ListingDetail.css";

function ListingDetail(props) {
  //LISTING ID
  const user = props.user;

  //const id = props.id;
  const id = "62fd2c03b5533a13e50a01b8";

  //user will be passed too

  const [listing, setListing] = useState(null);

  //Reservations setup
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //LOAD DETAILS ON TO THE PAGE UPON COMPONENT LOADING
  useEffect(() => {
    fetch("/api/listings/show", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // address = data.address;
        // rate = data.rate;
        setListing(data);
      });
  }, []);

  //ATTEMPTS TO BOOK A RESERVATION
  const handleReserve = async (evt) => {
    evt.preventDefault();

    try {
      const fetchResponse = await fetch("/api/reservations/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          address: listing.address,
          rate: listing.rate,
          dateTo: dateTo,
          dateFrom: dateFrom,
          user: user,
        }),
      });

      //check if not okay, then save as message
      if (!fetchResponse.ok)
        throw new Error("Reservation Fetch Failed - Something wrong");
      const message = await fetchResponse.json();

      console.log(message);

      //check for user errors
      if (message.userError) {
        setErrorMsg(message.msg);
      } else {
        setErrorMsg("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ListingDetail">
      ListingDetail Container
      {listing && (
        <div className="listing-profile-div">
          <div className="listing-visuals-div">
            Listing Visuals Div
            <div className="google-map">Google Map Here</div>
            <div className="listing-photos">
              <div className="photo-thumbnail">Photo Thumbnails Here</div>
              <div className="photo-thumbnail">Photo Thumbnails Here</div>
              <div className="photo-thumbnail">Photo Thumbnails Here</div>
            </div>
          </div>
          <div className="listing-info-div">
            <h3>Address</h3>
            <h3>{listing.address}</h3>
            <br />
            <h3>Rate: ${listing.rate}/H</h3>
            <div className="availability-card-div">
              <div className="date-input-bar">
                <form onSubmit={handleReserve}>
                  <h3>Date</h3>
                  Check-In:
                  <input
                    type="date"
                    name="dateFrom"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                  />{" "}
                  <br />
                  Check-Out:
                  <input
                    type="date"
                    name="dateTo"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                  />
                  <br />
                  <br />
                  <button className="reserve-btn" type="submit">
                    Reserve
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <h4>{errorMsg}</h4>
      <div className="other-listings-div">
        <div className="other-listings-card"> Other Listing & Info Here</div>
        <div className="other-listings-card"> Other Listing & Info Here</div>
        <div className="other-listings-card"> Other Listing & Info Here</div>
        <div className="other-listings-card"> Other Listing & Info Here</div>
      </div>
      <div className="comments-div">
        Comments
        <div className="comments-card">
          Great Driveway! Close to Event! - Kala
        </div>
        <div className="comments-card">
          Great Driveway! Close to Event! - Kala
        </div>
        <div className="comments-card">
          Great Driveway! Close to Event! - Kala
        </div>
      </div>
    </div>
  );
}

export default ListingDetail;
