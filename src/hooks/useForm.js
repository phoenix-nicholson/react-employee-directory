import { useState } from 'react';

export function useForm(inputs = {}) {
  const [state, setState] = useState(inputs);
  const [error, setError] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return { state, error, handleFormChange, setError };
}
