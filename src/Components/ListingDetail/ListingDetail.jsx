import React from "react";
import "./ListingDetail.css";

function ListingDetail(props) {
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
          Listing Info Div
          <h3>1 Blue Jays Way, Toronto, ON</h3>
          <h3>M5V 1J1</h3>
          <br />
          <h3>Rate: $0.25/H</h3>
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
