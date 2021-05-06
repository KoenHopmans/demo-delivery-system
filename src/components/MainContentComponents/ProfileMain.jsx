/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import './ProfileMain.css';
import {
  BiLockAlt, BiUser, BiEnvelope, BiCalendar, BiPhone,
} from 'react-icons/bi';
import {
  BsExclamationCircle,
} from 'react-icons/bs';
import HexagonProfile from '../ReusableComponents/HexagonProfile/HexagonProfile';

const ProfileMainContent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="profileMainContentContainer">
      <div className="profileMainContent">
        <div className="profile-box">
          <h1>Profile</h1>
          <HexagonProfile photo="photo01" />
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="text-box">
              <BiUser />
              <label htmlFor="username" className="inputLabel">
                Username
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  {...register('username', {
                    required: 'Please enter your username',
                    minLength: { value: 4, message: 'At least 4 characters' },

                  })}
                />
                {errors.username && (
                <div className="error">
                  <BsExclamationCircle />
                  {errors.username.message}
                </div>
                )}
              </label>
            </div>
            <div className="text-box">
              <BiEnvelope />
              <label htmlFor="email" className="inputLabel">
                Email
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register('email', {
                    required: 'Please enter your email',
                    minLength: { value: 4, message: 'At least 4 characters' },

                  })}
                />
                {errors.email && (
                <div className="error">
                  <BsExclamationCircle />
                  {errors.email.message}
                </div>
                )}
              </label>
            </div>
            <div className="text-box">
              <BiLockAlt />
              <label htmlFor="password" className="inputLabel">
                Password
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                                    // name="password"
                  {...register('password')}
                />
              </label>
            </div>
            <div className="text-box">
              <BiCalendar />
              <label htmlFor="birthday" className="inputLabel">
                Birthday
                <input
                  id="birthday"
                  type="date"
                  placeholder="Enter your birthday"
                  {...register('birthday', {
                    required: 'Please enter your birthday',
                    minLength: { value: 4, message: 'At least 4 characters' },

                  })}
                />
                {errors.birthday && (
                <div className="error">
                  <BsExclamationCircle />
                  {errors.birthday.message}
                </div>
                )}
              </label>
            </div>
            <div className="text-box">
              <BiPhone />
              <label htmlFor="phoneNumber" className="inputLabel">
                Phone number
                <input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register('phoneNumber', {
                    required: 'Please enter your phone number',
                    minLength: { value: 4, message: 'At least 4 characters' },

                  })}
                />
                {errors.username && (
                <div className="error">
                  <BsExclamationCircle />
                  {errors.username.message}
                </div>
                )}
              </label>
            </div>
            <input className="btn" type="submit" name="" value="Save" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainContent;
