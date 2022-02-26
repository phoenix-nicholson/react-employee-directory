import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

export default function ProfileForm({ onSubmit }) {
  const { user } = useUser();

  const { handleFormChange, state, formError, setError } = useForm({
    name: '',
    email: user.email,
    birthday: '',
    bio: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, birthday, bio } = state;
    try {
      await onSubmit(name, email, birthday, bio);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      {loading ? (
        'loading...'
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="your name"
              name="name"
              value={state.name}
              onChange={handleFormChange}
            />
            <input
              type="text"
              disabled={true}
              name="email"
              value={state.email}
              onChange={handleFormChange}
            />
            <input type="date" name="birthday" value={state.birthday} onChange={handleFormChange} />
            <input
              type="text"
              placeholder="type a bio"
              name="bio"
              value={state.bio}
              onChange={handleFormChange}
            />
            <button>submit</button>
          </form>
          {formError}
        </div>
      )}
    </>
  );
}
