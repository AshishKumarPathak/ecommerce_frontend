// Profile.js

import React from 'react';
import './Myprofile.css'; // Import CSS for styling

const Myprofile = () => {
  return (
    <div className="profile">
      <h1>My Profile</h1>
      <div className="profile-info">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Email: john.doe@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 1234 Elm Street, City, Country</p>
        </div>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
};

export default Myprofile;
