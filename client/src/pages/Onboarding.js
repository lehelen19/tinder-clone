import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Onboarding = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: false,
    gender_identity: 'male',
    gender_interest: 'female',
    url: '',
    about: '',
    matches: [],
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitted');
    try {
      const response = await axios.put('http://localhost:8000/user', {
        formData,
      });
      const success = response.status === 200;
      if (success) navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    console.log(e);
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <NavBar minimal={true} showModal={false} setShowModal={() => {}} />
      <div className="onboarding">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <section>
            {/* PERSONAL INFO */}
            {/* NAME */}
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />

            {/* BIRTH DATE */}
            <fieldset>
              <legend>Birthday</legend>
              <label htmlFor="dob_day"></label>
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              <label htmlFor="dob_month"></label>
              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <label htmlFor="birth year"></label>
              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </fieldset>

            {/* GENDER */}
            <fieldset className="gender">
              <legend>Gender</legend>
              <input
                type="radio"
                id="male-gender-identity"
                name="gender_identity"
                value="male"
                checked={formData.gender_identity === 'male'}
                onChange={handleChange}
              />
              <label htmlFor="male-gender-identity">Male</label>
              <input
                type="radio"
                id="female-gender-identity"
                name="gender_identity"
                value="female"
                checked={formData.gender_identity === 'female'}
                onChange={handleChange}
              />
              <label htmlFor="female-gender-identity">Female</label>
              <input
                type="radio"
                id="more-gender-identity"
                name="gender_identity"
                value="more"
                checked={formData.gender_identity === 'more'}
                onChange={handleChange}
              />
              <label htmlFor="more-gender-identity">More</label>
            </fieldset>
            <label htmlFor="show-gender">
              Show gender on my profile
              <input
                type="checkbox"
                id="show-gender"
                name="show_gender"
                checked={formData.show_gender}
                onChange={handleChange}
              />
            </label>

            {/* GENDER INTEREST */}
            <label>Show me</label>
            <fieldset className="gender">
              <legend className="hidden">Partner Gender Preference</legend>
              <input
                type="radio"
                id="male-gender-interest"
                name="gender_interest"
                value="male"
                checked={formData.gender_interest === 'male'}
                onChange={handleChange}
              />
              <label htmlFor="male-gender-interest">Male</label>
              <input
                type="radio"
                id="female-gender-interest"
                name="gender_interest"
                value="female"
                checked={formData.gender_interest === 'female'}
                onChange={handleChange}
              />
              <label htmlFor="female-gender-interest">Female</label>
              <input
                type="radio"
                id="everyone-gender-interest"
                name="gender_interest"
                value="everyone"
                checked={formData.gender_interest === 'everyone'}
                onChange={handleChange}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </fieldset>

            <label htmlFor="about">About me</label>
            <input
              type="text"
              id="about"
              name="about"
              required={true}
              placeholder="I climb 3x a week!"
              value={formData.about}
              onChange={handleChange}
            />
            <input type="submit" />
          </section>

          <section>
            {/* PROFILE PICTURE */}
            <label>Profile Picture</label>
            <input
              type="url"
              id="url"
              name="url"
              required={true}
              onChange={handleChange}
            />
            <div className="photo-container">
              {formData.url && (
                <img src={formData.url} alt="Profile picture preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
