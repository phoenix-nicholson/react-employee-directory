import { createContext, useContext, useEffect, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const resp = await getProfile();

        if (resp.length > 0) {
          setProfile(resp[0]);
        }
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const value = {
    profile,
    setProfile,
    loading,
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useProfile must be used in ProfileProvider');
  }
  return context;
};

export { ProfileProvider, useProfile };
