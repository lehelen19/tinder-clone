import { useState } from 'react';

const AuthModal = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // don't want page to refresh
    try {
      if (isSignUp && password !== confirmPassword) {
        setError('Passwords need to match!');
      }
      console.log('Make a POST request to the database.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-modal">
      <button className="close-icon" onClick={handleClick}>
        X
      </button>
      <h2>{isSignUp ? 'Create Account' : 'Log In'}</h2>
      <p>
        By clicking Submit, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input type="submit" className="secondary-btn" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};

export default AuthModal;
