import React from "react";

export default function InfoCardSearch(props) {
  const search = props.searchAddress.label;
  console.log("This is search: ", search);
  return (
    <div>
      <h3>Your Search: </h3>
      <h2 style={{ color: "red" }}>{search}</h2>
    </div>
  );
}
