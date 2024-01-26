import React, { useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

const UpdateProfile = () => {
  const [storedData, setStoredData] = useLocalStorage('profileData');
  const [formData, setFormData] = useState(storedData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStoredData(formData);
    history.push('/profile');
  };

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleInputChange}
          value={formData.firstName}
        />
        
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UpdateProfile;