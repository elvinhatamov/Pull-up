import React, { Component, useState, useEffect } from "react";



import PersonalList from "../../Components/PersonalList/PersonalList";
import "./PersonalListPage.css";

function PersonalListPage(props) {

  const myHost = props.reservation
  

  const [ lists, setLists] = useState([])

  useEffect(()=>{
    console.log("My Hosting Page");
  

  fetch("/api/hostings/list", {
    method: "GET"
    // headers: {
    //   "Content-Type":"application.json"
    // },
    // body: JSON.stringify({})
  })
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    setLists(data);
    console.log("The data at the end is ", data)
  })
}, [])
  

  return (
    <div class="HostingsList">
      <h1>Luds Houses</h1>
      {lists.map((hosting) => (
        <PersonalList
          address={hosting.address}
           img={hosting.img}
          
          // user={hosting.user}
          
        />
      ))}
    </div>
  );
}

export default PersonalListPage;
