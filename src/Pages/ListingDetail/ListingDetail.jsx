import Map from "../../Components/Map/Map";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ListingDetail.css";
import { useLoadScript, Marker } from "@react-google-maps/api";

function ListingDetail(props) {
  //LISTING ID
  const user = props.user;
  const navigate = useNavigate();

  //const id = props.id;
  //const id = "62fd2c03b5533a13e50a01b8";
  let { id } = useParams();
  console.log("Here is the url params id! ", id);

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
        navigate("/reservations/index");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //LOAD THE MAP
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="ListingDetail">
      {listing && (
        <div className="listing-profile-div">
          <div className="listing-visuals-div">
            <div className="google-map-mini">
              <Map
                listings={[listing]}
                searchAddress={listing.searchAddress}
                lat={listing.lat}
                lng={listing.lng}
              />
            </div>
            <div className="listing-photo-div">
              <h3>Photo here</h3>
            </div>
          </div>

          <div className="listing-info-div">
            <h3>Address</h3>
            <h3>{listing.address}</h3>
            <br />
            <h3>Rate: ${listing.rate}/day</h3>
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
    </div>
  );
}

export default ListingDetail;
