import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Create.css";

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
    <div className="LoginForm" id="login">
      <form name="form-login" onSubmit={onSubmit}>
        <span class="fontawesome-user"></span>
        <input
          type="text"
          value={form.address}
          onChange={updateForm}
          name="address"
          placeholder="Address"
        />
        <span class="fontawesome-user"></span>
        <input
          type="text"
          value={form.postalCode}
          onChange={updateForm}
          name="postalCode"
          placeholder="PostalCode"
        />
        <span class="fontawesome-user"></span>
        <input
          type="text"
          value={form.rate}
          onChange={updateForm}
          name="rate"
          placeholder="Rate"
        />
        <input type="submit" value="Submit" onClick={updateForm} />
      </form>
    </div>
  );
}
