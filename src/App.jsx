
import './App.css';
import Auth from './redux-practice/components/Auth';
import Header from './redux-practice/components/Header';
import ReduxCounter from './redux-practice/components/ReduxCounter';
import UserProfile from './redux-practice/components/UserProfile';

const App = () => {
  
  return (
    <>
      <Header />
      <Auth />
      {/* <UserProfile /> */}
      <ReduxCounter />
    </>
  );
};

export default App;
