import React from "react";
import "./PersonalList.css";

function PersonalList(props){
  
console.log(props, 'this is the props in personal list component')

    return (
      <div class="card">
        <img
          src={props.img}
          className="card__image"
          alt="drive way"
        />
        <div className="card__content">
          <span className="card__title">{props.address}</span>
          <br />
          <span className="card__title">{props.user}</span>
          <button className="card_button">Delete</button>
        </div>
      </div>
    );
  }

export default PersonalList;
