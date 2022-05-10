import React from 'react';


const ReviewCard = ({ review }) => {
    const { img,reviewDetails,name } = review;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>{reviewDetails}</p>
                    <img className='w-20 mx-auto mt-4' src={img} alt="" />
                    <h2 class="card-title mx-auto">{name}</h2>
                     
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;