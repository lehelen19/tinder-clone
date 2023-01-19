import { useState } from 'react';
import NavBar from '../components/NavBar';

const Onboarding = () => {
  const handleSubmit = () => {
    console.log('submitted');
  };
  const handleChange = () => {
    console.log('changed');
  };
  return (
    <>
      <NavBar minimal={true} showModal={false} setShowModal={() => {}} />
      <div className="onboarding">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <section>
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
            <fieldset>
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
              <label htmlFor="male-gender-identity">Female</label>
              <input
                type="radio"
                id="more-gender-identity"
                name="gender_identity"
                value="more"
                checked={false}
                onChange={handleChange}
              />
              <label htmlFor="male-gender-identity">More</label>
            </fieldset>
            <label htmlFor="show-gender">Show gender on my profile</label>
            <input
              type="checkbox"
              id="show-gender"
              name="show_gender"
              checked={false}
              onChange={handleChange}
            />
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
