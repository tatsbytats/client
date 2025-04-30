// src/components/SignUpForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!formData.agreeTerms) {
      alert('You must agree to the terms and conditions');
      return;
    }

    console.log('Form submitted:', formData);
    // Send data to API or backend here
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 ">
      <div className="row align-items-center g-lg-5 py-2">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Create your account
          </h1>
          <p className="col-lg-10 fs-4">
            Fill in the form below to register a new admin account.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label htmlFor="firstName">First Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lastName">Last Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="agreeTerms">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign Up
            </button>

            <hr className="my-4" />
            <small className="text-body-secondary">
              Already have an account? <Link to="/login">Login</Link>.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
