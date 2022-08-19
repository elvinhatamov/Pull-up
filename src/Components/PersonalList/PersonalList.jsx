import React from "react";
import "./PersonalList.css";

function PersonalList(props) {

  console.log("This is the props id passed: ", props.id)

  return (
    <div class="card">
      <img src={props.img} className="card__image" alt="drive way" />
      <div className="card__content">
        <span className="card__title">{props.address}</span>
        <br />
        <span className="card__title">{props.user}</span>
        <button className="card_button" onClick={()=>{props.deleteItem(props.id)}
          }>Delete</button>
      </div>
    </div>
  );
}

export default PersonalList;
