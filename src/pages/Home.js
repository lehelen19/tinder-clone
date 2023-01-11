import { useState } from 'react';
import AuthModal from '../components/AuthModal';
import NavBar from '../components/NavBar';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const authToken = false;

  const handleClick = () => {
    console.log('Primary button clicked');
    setShowModal(true);
  };

  return (
    <div className="overlay">
      <NavBar
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
      />
      <div className="home">
        <h1>Swipe Right®</h1>
        <button className="primary-btn" onClick={handleClick}>
          {authToken ? 'Sign out' : 'Create account'}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default Home;
