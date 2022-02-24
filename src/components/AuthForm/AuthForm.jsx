import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export default function AuthForm({ label, onSubmit }) {
  //get props from useForm
  const { state, formError, handleFormChange, setError } = useForm({
    email: '',
    password: '',
  });
  //set loading state
  const [loading, setLoading] = useState(false);

  //handle submit with formState
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;

    //try catch with if statement for no email or short password
    try {
      if (!email || password.length < 8)
        throw new Error('An email and password with 8+ characters required');
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      //setLoading false
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{label}</p>
      <label>
        <input type="text" name="email" value={state.email} onChange={handleFormChange} />
      </label>

      <label>
        <input type="text" name="password" value={state.password} onChange={handleFormChange} />
      </label>

      <button type="submit">submit</button>
      {formError && <p>{formError}</p>}
    </form>
  );
}
