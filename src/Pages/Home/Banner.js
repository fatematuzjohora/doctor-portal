import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="max-w-sm rounded-lg shadow-2xl" src={chair} alt="" />
          <div>
            <h1 className="text-3xl font-bold">Your New Smile Start Here</h1>
            <p className="py-6">Start the Year with a New Smile A brand new year means ample opportunity to start new projects, try new things, and embark on new adventures.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default Banner;