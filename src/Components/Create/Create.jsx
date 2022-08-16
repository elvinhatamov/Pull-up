import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Create(props) {
  const user = props.user;

  const [form, setForm] = useState({
    address: "",
    postalCode: "",
    rate: Number,
  });

  // const navigate = useNavigate()

  function updateForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newList = { ...form, user };
    console.log(newList);

    //even though this is hosting form, it really creates a listing
    //path will be listings/create instead of hostings/create
    try {
      let response = await fetch("/api/listings/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newList),
      });
    } catch (error) {
      console.log("Create error:", error);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Address</label>
        <input
          type="text"
          value={form.address}
          onChange={updateForm}
          name="address"
        />
        <label>PostalCode:</label>
        <input
          type="text"
          value={form.postalCode}
          onChange={updateForm}
          name="postalCode"
        />
        <label>Rate:</label>
        <input
          type="text"
          value={form.rate}
          onChange={updateForm}
          name="rate"
        />

        <button onClick={updateForm}>Submit</button>
      </form>
    </div>
  );
}
