import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id:1,
        name:"Fluride Treatment",
        Description:"Medical profession is my satisfication space",
        img:fluoride
    },
        {
            _id:2,
        name:"Cavity Feelings",
        Description:"Medical profession is my satisfication space",
        img:cavity
    },
        {
            _id:3,
        name:"Teeth whitening",
        Description:"Medical profession is my satisfication space",
        img:whitening
    }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h2 className='text-primary  text-xl font-bold uppercase'>Our services</h2>
            <h1 className='text-4xl'>Services with Provide</h1>
            </div>
           <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 px-20'>
           {
               services.map(service => <Service key={service._id} service ={service}></Service>)
           }
           </div>
        </div>
    );
};

export default Services;