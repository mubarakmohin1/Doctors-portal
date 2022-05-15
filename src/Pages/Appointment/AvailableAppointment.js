import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {

    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h4 className='text-center mb-8 text-xl text-secondary'> Available Appointment on {format(date || new Date(), 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services?.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}>

                        </Service>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}>
                refetch={refetch}
            </BookingModal>}
        </div>
    );
};

export default AvailableAppointment;