import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);
    useEffect(()=>{
        fetch('service.json').then(res =>res.json()).then(data =>{
            
            setServices(data)
        })
    },[])
    return (
        <div>
          <h4 className='text-center text-xl text-secondary'> Available Appointment on {format(date ||new Date(),'PP')}</h4>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
              {
                  services.map(service =><Service key={service._id} service = {service} setTreatment = {setTreatment}></Service>)
              }
          </div>
          {treatment && <BookingModal treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;