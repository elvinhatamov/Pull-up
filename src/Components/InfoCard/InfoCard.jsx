import { useNavigate } from "react-router-dom";
import React from "react";
import "./InfoCard.css";

export default function InfoCard(props) {
  const handleSubmit = () => {
    navigate("/listings/detail/" + props.id);
  };
  const navigate = useNavigate();

  return (
    <div className="InfoCard">
      <h2>{props.address}</h2>
      <img src={props.photo} />
      <h2>${props.rate}/day</h2>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Reserve
      </button>
    </div>
  );
}
