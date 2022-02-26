import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';

export default function Header() {
  const {
    user: { email },
    setUser,
  } = useUser();

  return (
    <div>
      {email ? (
        <div>
          <p>Welcome {email}</p>
          <button
            onClick={async () => {
              await signOutUser();
              setUser({});
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          Have an account?
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
      )}
    </div>
  );
}
