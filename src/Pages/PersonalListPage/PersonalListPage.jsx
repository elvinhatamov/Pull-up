import React, { Component, useState, useEffect } from "react";


import PersonalList from "../../Components/PersonalList/PersonalList";
import "./PersonalListPage.css";

function PersonalListPage(props) {
  const myHost = props.reservation;
  const user = props.user;

  const [lists, setLists] = useState([]);

  useEffect(() => {
    console.log("My Hosting Page");

    
    fetch("/api/hostings/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLists(data);
        console.log("The data at the end is ", data);
      });
  }, []);



  async function deleteItem(id){

    try {
    console.log("This is the id passed in deleteItem Fucntion", id)
    const fetchResponse = await fetch(`/api/hostings/${id}`,{
      method:"DELETE"
    })

    const newRecords = lists.filter((el) => el._id !== id);
    setLists(newRecords);

    //otherwise refresh the page


  } catch (error){console.log(error) }
  }



  return (
    <div class="HostingsList">
      <h1>My Hostings</h1>
      {lists.map((hosting) => (
        <PersonalList
          address={hosting.address}
          img={hosting.photo}

          // user={hosting.user}
        id = {hosting._id}
           deleteItem ={()=>deleteItem(hosting._id)}
          
          
        />
      ))}
    </div>
  );
      }

export default PersonalListPage;
