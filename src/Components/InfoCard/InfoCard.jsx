import { useNavigate } from "react-router-dom";
import React from "react";

export default function InfoCard() {
  const handleSubmit = () => {
    navigate("/listings/detail/62fe749d8f2bb3e53bd15b0f");
  };
  const navigate = useNavigate();
  return (
    <div>
      <h2>Address</h2>
      <img></img>
      <h3>$10/hour</h3>
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
