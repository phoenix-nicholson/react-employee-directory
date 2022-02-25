import React from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

export default function Profile() {
  const history = useHistory();
  const { profile, loading } = useProfile();

  const handleEdit = () => {
    history.push('/profile/edit');
  };
  console.log('profile', profile);

  return (
    <>
      {loading && <p>loading...</p>}
      {!loading && profile.name ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Birthday: {profile.birthday}</p>
          <p>Bio: {profile.bio}</p>
        </div>
      ) : (
        ''
      )}
      <button onClick={handleEdit}>Edit Profile</button>
    </>
  );
}
