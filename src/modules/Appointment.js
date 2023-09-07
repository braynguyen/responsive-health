import React, { useState } from "react";
import './appointment.css';

export default function Appointment() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const {name, value} = target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form>
      <h1>First Name</h1>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <h1>Last Name</h1>
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <h1>Date of Appointment</h1>
      <input
        value={profile.date || ''}
        type="date"
        name="date"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    
  );
}