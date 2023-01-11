const AuthModal = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className="auth-modal">
      <button onClick={handleClick}>X</button>
      AUTH MODAL
    </div>
  );
};

export default AuthModal;
