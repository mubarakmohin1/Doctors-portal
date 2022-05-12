import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-130px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-2'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus hic ab minima? Obcaecati sit nulla reprehenderit, sed quas qui, aliquid quis optio non molestiae exercitationem voluptas praesentium soluta labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus iure molestias illum asperiores officiis in similique at nesciunt animi, perspiciatis temporibus? Quaerat repellendus, similique obcaecati maxime alias necessitatibus natus.</p>
                <Button>Get Started</Button>
            </div>
        </section>
    );
};

export default MakeAppointment;