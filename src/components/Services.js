import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import bgVideo from './assets/images/delivery.mp4'
import Card from './Card';
import { services } from '../const/serv';
import artsales from './assets/images/art-sales.jpg'
import artconsult from './assets/images/art-consult.png'
import artrep from './assets/images/art-representation.jpg'
import WelcomeSection from './Welcome';



const Services = () => {
         
    return (
        <div>
            <Navbar/>
            <WelcomeSection
                title="Here at"
                subtitle="Jenna's art"
                description="We curate a diverse and curated selection of artworks from renowned artists and emerging talents alike. Our mission is to create a platform where art lovers can explore, discover, and acquire exceptional pieces that resonate with their unique taste and style."
                bgVideo={bgVideo}
            />

            <section>
                <h1 className=" text-center py-[10px] text-[#395B64] font-heading2 font-semibold lg:text-[34px] lg:py-[19px] pl-1 text-[28px] leading-[19px] tracking-[2.7px]">The Services we offer</h1>
                <div className='flex justify-around flex-col md:flex-row flex-wrap items-center'>
                    <Card  image={artsales} name={services.one.name}  description={services.one.text}/>
                    <Card  image={artconsult} name={services.two.name}  description={services.two.text}/>
                    <Card  image={artrep} name={services.three.name}  description={services.three.text}/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Services;