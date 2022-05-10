import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import Button from '../Shared/Button';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            Description: "Medical profession is my satisfication space",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Feelings",
            Description: "Medical profession is my satisfication space",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth whitening",
            Description: "Medical profession is my satisfication space",
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary  text-xl font-bold uppercase'>Our services</h2>
                <h1 className='text-4xl'>Services with Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div class="hero min-h-screen bg-white px-24">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='pl-10'>
                        <h1 class="text-5xl font-bold">Execptional Dental Care On Your Terms!</h1>
                        <p class="py-6">Dental implants are biocompatible tooth restorations which are made to imitate the function of natural tooth roots. When you have a missing tooth, an implant can replace it and support a permanent crown, bridge or denture. Dental implants are the perfect alternative to traditional bridges and partial dentures, because they can function independent of the other teeth.</p>
                       <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;