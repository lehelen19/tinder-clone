import { useState } from 'react';

const AuthModal = ({ setShowModal }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // don't want page to refresh
  };

  const isSignUp = true;

  return (
    <div className="auth-modal">
      <button className="close-icon" onClick={handleClick}>
        X
      </button>
      <h2>{isSignUp ? 'Create Account' : 'Log In'}</h2>
      <p>
        By clicking this button you agree to our terms. Learn how we process
        your data in our Privacy Policy and Cookie Policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      AUTH MODAL
    </div>
  );
};

export default AuthModal;
