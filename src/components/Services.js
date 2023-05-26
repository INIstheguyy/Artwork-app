import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import bgVideo from './assets/images/delivery.mp4'
import Card from './Card';
import { services } from '../const/serv';
import artsales from './assets/images/art-sales.jpg'
import artconsult from './assets/images/art-consult.png'
import artrep from './assets/images/art-representation.jpg'



const Services = () => {
    return (
        <div>
            <Navbar/>
            <section id="welcome" className="relative -z-50">
                <div className="video-background">
                    <video autoPlay muted loop className="object-cover w-full">
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-[#E7F6F2] font-heading2 font-medium lg:text-[28px] lg:py-[10px] pl-1 text-[18px] leading-[19px] tracking-[2.7px]">
                    Here at <br className="block md:hidden" />
                        <span className="text-[#A5C9CA] font-heading1 md:text-[150px] font-medium text-4xl leading-[100px] md:py-[10px]">
                        Jenna's art
                        </span>
                    </h1>
                    <p className="font-heading3 tracking-wider leading-[30px] text-[#2C3333] text-justify py-6 px-2 md:max-w-[600px] mx-auto lg:text-[26px] ">
                    We curate a diverse and curated selection of artworks from renowned artists and emerging talents alike
                    . Our mission is to create a platform where art lovers can explore, discover,
                     and acquire exceptional pieces that resonate with their unique taste and style.
                    </p>
                </div>
            </section>
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