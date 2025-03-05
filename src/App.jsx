
import { useSelector } from 'react-redux';
import './App.css';
import Auth from './redux-practice/components/Auth';
import Header from './redux-practice/components/Header';
import ReduxCounter from './redux-practice/components/ReduxCounter';
import UserProfile from './redux-practice/components/UserProfile';

const App = () => {

  const login = useSelector(state => state.auth.isLoggedIn);
  
  return (
    <>
      <Header />
      {login ? <UserProfile /> : <Auth />}
      <ReduxCounter />
    </>
  );
};

export default App;
