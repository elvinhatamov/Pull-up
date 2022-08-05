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
          <h3>Rate: $0.25/H</h3>
          <div className="AvailabilityCard">
            <h4>Available Aug 1st- Aug 6th</h4>
            <h4> 8:00-16:00</h4>
          </div>
          <br />
          <br />
          <button className="ReserveBtn">Reserve</button>
        </div>
      </div>
      Other Close Places (Horizontally Scrollable)
      <div className="OtherListings">
        <div className="OtherListingsCard"> Other Listing & Info Here</div>
        <div className="OtherListingsCard"> Other Listing & Info Here</div>
        <div className="OtherListingsCard"> Other Listing & Info Here</div>
        <div className="OtherListingsCard"> Other Listing & Info Here</div>
      </div>
      <div className="Comments">
        Comments
        <div className="CommentsCard">
          Great Driveway! Close to Event! - Kala
        </div>
        <div className="CommentsCard">
          Great Driveway! Close to Event! - Kala
        </div>
        <div className="CommentsCard">
          Great Driveway! Close to Event! - Kala
        </div>
      </div>
    </div>
  );
}

export default ListingDetail;
