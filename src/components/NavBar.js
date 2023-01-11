import whiteLogo from '../images/tinder_logo_white.png';
import colorLogo from '../images/color-logo-tinder.png';

const NavBar = ({ minimal, authToken, setShowModal }) => {
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} />
      </div>
      {!authToken && !minimal && (
        <button className="nav-btn" onClick={handleClick}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default NavBar;
