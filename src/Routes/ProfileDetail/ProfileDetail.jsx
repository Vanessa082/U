import { Link } from 'react-router-dom';
import { useLocalStorage } from '@uidotdev/usehooks'

const ProfileDetail = () => {
  const [storedData] = useLocalStorage('profileData');

  return (
    <div>
      <h1>Profile Details</h1>
      <p>First Name: {storedData.firstName}</p>
      <p>Last Name: {storedData.lastName}</p>
      <p>Email: {storedData.email}</p>
      <p>Phone Number: {storedData.number}</p>
      <Link to="/profile/update">Update Profile</Link>
    </div>
  );
};

export default ProfileDetail;