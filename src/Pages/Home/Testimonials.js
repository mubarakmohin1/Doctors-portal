import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import ReviewCard from './ReviewCard';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'William carry',
            reviewDetails: 'Find the lowest price for California Dental Clinic today! Now on sale at GigaPromo. GigaPromo is the website to compare California Dental Clinic. Search and save now! Save Online. The Best Price.',
            img: people1
        },
        {
            _id: 2,
            name: 'John setry',
            reviewDetails: 'Find the lowest price for California Dental Clinic today! Now on sale at GigaPromo. GigaPromo is the website to compare California Dental Clinic. Search and save now! Save Online. The Best Price.',
            img: people2
        },
        {
            _id: 3,
            name: 'Paul xeymen',
            reviewDetails: 'Find the lowest price for California Dental Clinic today! Now on sale at GigaPromo. GigaPromo is the website to compare California Dental Clinic. Search and save now! Save Online. The Best Price.',
            img: people3
        },
    ]
    return (
        <section className='mt-10'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-primary font-bold'>Testimonials</h3>
                    <h2 className='text-3xl'>What are patients say!</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)}
            </div>
        </section>
    );
};

export default Testimonials;