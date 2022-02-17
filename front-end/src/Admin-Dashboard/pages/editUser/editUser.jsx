import React from "react";
import "./editUser.css";

const EditUser = () => {
  return (
    <div className="container">
      <form encType="multipart/form-data">
        <label className="head">Edit User</label>
        <div className="form-group p-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group p-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group p-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group p-2">
          <label htmlFor="password">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="+9477XXXXXXX"
            required
          />
        </div>
        <div className="form-group p-2">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            className="form-control"
            id="role"
            placeholder="Select Role"
          />
        </div>

        <button type="submit">Edit User</button>
      </form>
    </div>
  );
};

export default EditUser;
