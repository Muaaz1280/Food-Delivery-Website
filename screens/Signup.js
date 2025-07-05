import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    location: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      if (json.error) {
        alert(json.error);
      } else if (json.errors) {
        alert(json.errors.map(e => e.msg).join("\n"));
      } else {
        alert("Signup failed");
      }
    } else {
      alert("User created successfully!");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={credentials.name}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={credentials.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={credentials.password}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter your location"
            value={credentials.location}
            onChange={onChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Sign Up</button>
        <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
      </form>
    </div>
  );
}
