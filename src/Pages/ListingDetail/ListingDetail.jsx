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
        <div className="listing-content">
          <section className="profile_container">
            <div className="profile_img_section">
              <Map
                listings={[listing]}
                searchAddress={listing.searchAddress}
                lat={listing.lat}
                lng={listing.lng}
                mapWidth={"400px"}
                mapHeight={"400px"}
                zoom={15}
              />
            </div>
            <div className="profile_img_section">
              <img
                className="profile_img-LG"
                src="https://i.imgur.com/x4oQww9.jpg"
              />
            </div>
          </section>
          <section class="profile_container_info">
            <div class="profile_desc_section">
              <h2>HomeOwner</h2>
              <h3>Verified</h3>

              <p class="description">
                <div class="info">
                  <ul>
                    <li>
                      <div class="link_img_wrapper">
                        <img
                          class="link_img"
                          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/round-pushpin_1f4cd.png"
                          alt=""
                        />
                      </div>
                      <p>{listing.address}</p>
                    </li>
                    <li>
                      <div class="link_img_wrapper">
                        <img
                          class="link_img"
                          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/265/globe-with-meridians_1f310.png"
                          alt=""
                        />
                      </div>
                      <p>Rate: ${listing.rate}/day</p>
                    </li>
                  </ul>
                </div>
              </p>
              <div class="interests">
                <span class="interests_item">Self check-in</span>
                <span class="interests_item">Superhost</span>
                <span class="interests_item">Free cancellation</span>
              </div>
            </div>
          </section>

          <div className="profile_banner-text-item">
            <form className="profile_form" onSubmit={handleReserve}>
              From:
              <input
                type="date"
                name="dateFrom"
                value={dateFrom}
                className="profile_date"
                onChange={(e) => setDateFrom(e.target.value)}
              />
              To:
              <input
                type="date"
                name="dateTo"
                value={dateTo}
                className="profile_date"
                onChange={(e) => setDateTo(e.target.value)}
              />
              <button type="submit" className="profile_book">
                Reserve
              </button>
            </form>
          </div>

          <h4 className="error-msg">{errorMsg}</h4>
        </div>
      )}
    </div>
  );
}

export default ListingDetail;
