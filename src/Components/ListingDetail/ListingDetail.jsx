import React from "react";

function ListingDetail(props) {
  return (
    <div className="ListingDetail">
      ListingDetail Container
      <div className="ListingProfile">
        <div className="ListingVisuals">
          Listing Visuals Div
          <div className="GoogleMap">Google Map Here</div>
          <div className="ListingPhotos">
            <div className="PhotoThumbnail">Photo Thumbnails Here</div>
            <div className="PhotoThumbnail">Photo Thumbnails Here</div>
            <div className="PhotoThumbnail">Photo Thumbnails Here</div>
          </div>
        </div>
        <div className="ListingInfo">
          Listing Info Div
          <h3>1 Blue Jays Way, Toronto, ON</h3>
          <h3>M5V 1J1</h3>
          <br />
          <h3>$0.25/H</h3>
          <div className="AvailabilityCard">
            <h4>Available Aug 1st- Aug 6th</h4>
            <h4> 8:00-16:00</h4>
          </div>
          <button className="ReserveBtn">Reserve</button>
        </div>
      </div>
    </div>
  );
}

export default ListingDetail;
