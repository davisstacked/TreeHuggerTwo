import { useContext } from 'react';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  return (
    <div>
      <p>I am the header</p>
    </div>
  )
}

export default Header;
