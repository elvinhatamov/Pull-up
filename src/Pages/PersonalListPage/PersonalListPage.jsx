import React, { Component, useState, useEffect } from "react";



import PersonalList from "../../Components/PersonalList/PersonalList";

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

async function deleteItem(id){
  console.log(id)
  await fetch(`/api/hostings/${id}`,{
    method:"DELETE"
  })

}
  

  return (
    <div style={{ paddingTop: "25px" }}>
      <h1>Luds Houses</h1>
      {lists.map((hosting) => (
        <PersonalList
          address={hosting.address}
          // user={hosting.user}
        
           deleteItem ={()=>deleteItem(hosting.id)}
           key={hosting.id}
          
        />
      ))}
    </div>
  );
}

export default PersonalListPage;
