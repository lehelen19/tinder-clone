import NavBar from '../components/NavBar';

const Home = () => {
  // Assume we are logged in for now
  const authToken = true;

  const handleClick = () => {
    console.log('Primary button clicked');
  };
  return (
    <div className="overlay">
      <NavBar minimal={false} authToken={authToken} />
      <h1>Swipe Right®</h1>
      <button className="primary-btn" onClick={handleClick}>
        {authToken ? 'Sign out' : 'Creat account'}
      </button>
    </div>
  );
};

export default Home;
