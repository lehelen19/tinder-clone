const Home = () => {
  // Assume we are logged in for now
  const authToken = true;

  const handleClick = () => {
    console.log('Primary button clicked');
  };
  return (
    <>
      <h1>Swipe Right®</h1>
      <button className="primary-btn" onClick={handleClick}>
        {authToken ? 'Sign out' : 'Creat account'}
      </button>
    </>
  );
};

export default Home;
