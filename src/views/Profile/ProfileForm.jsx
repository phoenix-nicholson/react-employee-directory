import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

export default function Profile({ onSubmit }) {
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
            <input type="text" name="name" value={state.name} onChange={handleFormChange} />
            <input type="text" name="email" value={state.email} onChange={handleFormChange} />
            <input type="text" name="birthday" value={state.birthday} onChange={handleFormChange} />
            <input type="text" name="bio" value={state.bio} onChange={handleFormChange} />
            <button>submit</button>
          </form>
          {formError}
        </div>
      )}
    </>
  );
}
