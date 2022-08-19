import React from "react";
import "./PersonalList.css";

function PersonalList(props) {

  return (
    <div class="card">
      <img src={props.img} className="card__image" alt="drive way" />
      <div className="card__content">
        <span className="card__title">{props.address}</span>
        <br />
        <span className="card__title">Cost: ${props.rate} /Day</span>
        <button className="card_button" onClick={()=>{props.deleteItem(props.id)}
          }>Delete</button>

      </div>
    </div>
  );
}

export default PersonalList;
