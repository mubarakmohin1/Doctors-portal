import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('service.json').then(res =>res.json()).then(data =>{
            console.log(data);
            setServices(data)
        })
    },[])
    return (
        <div>
          <h4 className='text-center text-xl text-secondary'> Available Appointment on {format(date ||new Date(),'PP')}</h4>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
              {
                  services.map(service =><Service key={service._id} service = {service}></Service>)
              }
          </div>
        </div>
    );
};

export default AvailableAppointment;