import React, { useState, useEffect } from "react";
import "./ListingDetail.css";

function ListingDetail(props) {
  const id = props.id;

  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [rate, setRate] = useState("");

  useEffect(async () => {
    console.log("Time for ajax call with id: ", id);

    try {
      const fetchResponse = await fetch("/api/listings/show", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      });
      console.log(fetchResponse);

      const listing = await fetchResponse.json();
      setAddress(listing.address);
      setPostalCode(listing.postalCode);
      setRate(listing.rate);

      console.log(listing);
      console.log("Username is ", listing.user.username);
      // in case fetch response is wrong
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="ListingDetail">
      ListingDetail Container
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
          <h3>{address}</h3>
          <h3>{postalCode}</h3>
          <br />
          <h3>Rate: ${rate}/H</h3>
          <div className="availability-card-div">
            <h4>Available Aug 1st- Aug 6th</h4>
            <h4> 8:00-16:00</h4>
          </div>
          <br />
          <br />
          <button className="reserve-btn">Reserve</button>
        </div>
      </div>
      Other Close Places (Horizontally Scrollable)
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
