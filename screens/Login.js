import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
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
        alert("Invalid login");
      }
    } else {
      // ✅ Save both authToken and user email in localStorage
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userEmail", credentials.email);

      alert("Login successful!");
      navigate("/");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="btn btn-success">Login</button>
        <Link to="/createuser" className="m-3 btn btn-primary">New user ➡️ Sign up</Link>
      </form>
    </div>
  );
}

