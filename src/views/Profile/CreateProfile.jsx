import React from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
import { createProfile, updateProfile } from '../../services/profiles';
import ProfileForm from './ProfileForm';

export default function CreateProfile({ isCreatingProfile = false }) {
  const history = useHistory();
  const { setProfile } = useProfile();

  const handleProfile = async ({ name, email, bio, birthday }) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (isCreatingProfile) {
        await createProfile({ name, email, bio, birthday });
        history.push('/profile');
      } else {
        const resp = await updateProfile(name, email, birthday, bio);
        setProfile({
          name: resp.name,
          email: resp.email,
          bio: resp.bio,
          birthday: resp.birthday,
        });
        history.push('/profile');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      {isCreatingProfile ? 'Create new profile' : 'Edit your profile'}
      <div>
        <h1>Your Profile</h1>
        <ProfileForm onSubmit={handleProfile} />
      </div>
    </>
  );
}
