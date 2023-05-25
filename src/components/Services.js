import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import bgVideo from './assets/images/delivery.mp4'

const Service = () => {
    
    return (
        <div>
            Hello World
        </div>
    );
}

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
                    Welcome to <br className="block md:hidden" />
                        <span className="text-[#A5C9CA] font-heading1 md:text-[150px] font-medium text-4xl leading-[100px] md:py-[10px]">
                        Jenna's art
                        </span>
                    </h1>
                    <p className="font-heading1 tracking-wider leading-[30px] text-[#E7F6F2] text-justify py-6 px-2 md:max-w-[600px] mx-auto lg:text-[26px] ">
                        Where art comes to life and inspires the world! At Jenna's art, we are passionate about the transformative power of art.
                        We believe that art has the ability to captivate, engage, and evoke emotions like no other medium. Whether you're an art enthusiast, a collector, or someone who simply appreciates the beauty of artistic expression,
                        you've come to the right place.
                    </p>
                </div>
            </section>
            <section>
                <h1 className=" text-center py-[10px] text-[#395B64] font-heading2 font-semibold lg:text-[34px] lg:py-[19px] pl-1 text-[18px] leading-[19px] tracking-[2.7px]">The Services we offer</h1>
            </section>
            <Footer/>
        </div>
    );
}

export default Services;