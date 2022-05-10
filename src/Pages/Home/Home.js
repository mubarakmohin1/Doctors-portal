import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-20'>
          <Banner></Banner>  
          <Info></Info>
          <Services></Services>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
          <ExtraSection></ExtraSection>
          <Footer></Footer>
        </div>
    );
};

export default Home;