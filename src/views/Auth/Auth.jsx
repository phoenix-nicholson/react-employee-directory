import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleAuth = async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.push('/confirm-email');
      } else {
        const resp = await signInUser(email, password);
        setUser({ id: resp.id, email: resp.email });
        history.push('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <h2>{isSigningUp ? 'Hello!' : 'Hello Again!'}</h2>
      <AuthForm onSubmit={handleAuth} label={isSigningUp ? 'Sign Up' : 'Sign In'} />
      {isSigningUp ? (
        <p>
          Have an account? <Link to="/login">Sign In</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/register">Sign Up</Link>
        </p>
      )}
    </div>
  );
}
