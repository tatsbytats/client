import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/custom-colors.css';

const AdminLoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add real authentication logic here
    // On success:
    navigate('/dashboard');
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Admin Login
          </h1>
          <p className="col-lg-10 fs-4">
            Only authorized users can access this section. Please log in with your admin credentials.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="adminEmail"
                placeholder="admin@example.com"
              />
              <label htmlFor="adminEmail">Admin Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="adminPassword"
                placeholder="Password"
              />
              <label htmlFor="adminPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-sunrise-coral" type="submit">
              Admin Login
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary">
              Go back to <Link to="/login">User Login</Link>.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
