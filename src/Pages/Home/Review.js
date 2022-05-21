import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:lg-w-lg bg-base-100 shadow-xl">
  <div className="card-body">
    <p>You might also offer your view on what the company is doing well, and how they can improve. But keep things friendly and courteous!</p>
    <div className="flex items-center">
    <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
    <img src={review.img} alt=""/>
  </div>
</div>
      <div>
          <h4 className="text-xl">{review.name}</h4>
          <p>{review.location}</p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Review;