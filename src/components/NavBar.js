import whiteLogo from '../images/tinder_logo_white.png';
import colorLogo from '../images/color-logo-tinder.png';

const NavBar = ({ minimal }) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} />
      </div>
      <ul>
        <li>Nav bar #1</li>
      </ul>
    </nav>
  );
};

export default NavBar;
