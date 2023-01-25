import whiteLogo from '../images/tinder_logo_white.png';
import colorLogo from '../images/color-logo-tinder.png';

const NavBar = ({ minimal, showModal, setShowModal, setIsSignUp }) => {
  const authToken = false;
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} />
      </div>
      {!authToken && !minimal && (
        <button className="nav-btn" onClick={handleClick} disabled={showModal}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default NavBar;
