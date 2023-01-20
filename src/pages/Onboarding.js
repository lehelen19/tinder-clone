import { useState } from 'react';
import NavBar from '../components/NavBar';

const Onboarding = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: false,
    gender_identity: 'male',
    gender_interest: 'female',
    email: '',
    url: '',
    about: '',
    matches: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };
  const handleChange = (e) => {
    console.log(e);
    const value = e.target.value;
    const name = e.target.name;
    console.log(value, name);
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
              value={''}
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
                value={''}
                onChange={handleChange}
              />
              <label htmlFor="dob_month"></label>
              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={''}
                onChange={handleChange}
              />
              <label htmlFor="birth year"></label>
              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={''}
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
                checked={false}
                onChange={handleChange}
              />
              <label htmlFor="male-gender-identity">Male</label>
              <input
                type="radio"
                id="female-gender-identity"
                name="gender_identity"
                value="female"
                checked={false}
                onChange={handleChange}
              />
              <label htmlFor="female-gender-identity">Female</label>
              <input
                type="radio"
                id="more-gender-identity"
                name="gender_identity"
                value="more"
                checked={false}
                onChange={handleChange}
              />
              <label htmlFor="more-gender-identity">More</label>
            </fieldset>
            <label htmlFor="show-gender">Show gender on my profile</label>
            <input
              type="checkbox"
              id="show-gender"
              name="show_gender"
              checked={false}
              onChange={handleChange}
            />

            {/* GENDER INTEREST */}
            <label>Show me</label>
            <fieldset className="gender">
              <legend>Partner Gender Preference</legend>
              <input
                type="radio"
                id="male-gender-interest"
                name="gender_interest"
                value="male"
                checked={false}
                onChange={handleChange}
              />
              <label htmlFor="male-gender-interest">Male</label>
              <input
                type="radio"
                id="female-gender-interest"
                name="gender_interest"
                value="female"
                checked={false}
                onChange={handleChange}
              />
              <label htmlFor="female-gender-interest">Female</label>
              <input
                type="radio"
                id="everyone-gender-interest"
                name="gender_interest"
                value="everyone"
                checked={false}
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
              value={''}
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
            <div className="photo-container"></div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
