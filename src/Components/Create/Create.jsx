import React, { useState } from "react";

export default function Create(){
 const [form, setForm] = useState({
   address: '',
   postalCode: '',
   rate: Number,
   
   
 })

  const [rate, setRate] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault();
    console.log("Current search address after click ", searchAddress);

    //handle if fields are empty
    if (!searchAddress) {
      setErrorMsg("Please input an address!");
      return;
    } else if (!rate) {
      setErrorMsg("Please input a rate!");
      return;

    }

    //fetch the latitude and longitude of address
    const promiseobj = geocodeByAddress(searchAddress.label)
      .then((results) => getLatLng(results[0]))
      .then((coordinates) => {
        console.log(
          `Successfully got latitude and longitude of ${searchAddress.label} at`,
          coordinates.lat,
          coordinates.lng
        );
        return coordinates;
      });

    //set lat and lng states from the promise object
    //fulfill rest of the work in this async function
    async function getCoordinates() {
      try {
        const coordinates = await promiseobj;


const newList = { ...form, user }

let response = await fetch("/api/hostings/", {
     method: "POST",
     headers: {
      'Accept':'application/json',
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newList),
   })
   return await response.json()
   .catch(error => {
     console.log(error);
   });
 
//    setForm({ address: '', postalCode: '', rate: ''})
//    navigate("/");
  }

return (
  <div>
    <form onSubmit={onSubmit}>
      
      <label>Address</label>
      <input
        type='text'
        value={form.address}
        onChange={updateForm}
        name='address'
      />
      <label>PostalCode:</label>
      <input
        type='text'
        value={form.postalCode}
        onChange={updateForm}
        name='postalCode'
      />
      <label>Rate:</label>
      <input type='text' value={form.rate} onChange={updateForm} name='rate' />

      <button onClick={updateForm}>Submit</button>
    </form>
  </div>
)
}