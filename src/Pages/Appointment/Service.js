import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, _id, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center mx-auto">

                <h2 className="text-3xl  text-primary">{name}</h2>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available </p>
                <p>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try Another Day</span>
                    }
                </p>

                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">
                        Book Appointment
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Service;