import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleSubmit = async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.push();
      } else {
        const resp = await signInUser(email, password);
        setUser({ id: resp.id, email: resp.email });
        history.push();
      }
    } catch (error) {
      throw error;
    }
  };
  return;
}
