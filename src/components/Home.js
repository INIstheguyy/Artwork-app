import React from "react";
import Navbar from "./Navbar";
import icon from './assets/images/jenna-icon.jpg'
import CarouselComponent from "./Carousel";
import Footer from "./Footer";
import bgVideo from './assets/images/welcome-video.mp4'
import salogo from './assets/images/sa-logo.svg'
import  ugallery from './assets/images/Ugallery-logo1.svg'
import artspace from './assets/images/logo_artspace.svg'
import onexrun from './assets/images/1xrun-logo.svg'
import WelcomeSection from "./Welcome";

const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <WelcomeSection
            title="Welcome to"
            subtitle="Jenna's art"
            description="Where art comes to life and inspires the world! At Jenna's art, we are passionate about the transformative power of art.
            We believe that art has the ability to captivate, engage, and evoke emotions like no other medium. Whether you're an art enthusiast, a collector, or someone who simply appreciates the beauty of artistic expression,
            you've come to the right place.
"
            bgVideo={bgVideo}
        />
          
            <section className=" ">
                <div className=" flex items-center justify-center ">
                   <span className=" bg-[#E7F6F2] z-50 p-10 ">
                    <div className=" text-center ">
                        <h1 className=" text-[#2C3333] font-heading1 font-semibold lg:text-[36px] lg:py-[10px] pl-1 text-[18px] leading-[19px] tracking-[2.7px]">Who is Jenna & What's Jenna's Art about?</h1>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={icon} alt="" className="w-2/5 rounded-full my-5 md:w-2/5 lg:h-1/5" />
                            </div>
                        <div className=" flex flex-col text-left md:flex-row">
                        <p className=" text-[#2C3333]  py-5 md:px-5 text-justify font-heading3">
                            <span className="  text-[#2C3333] font-heading1 font-normal lg:text-[28px] lg:py-[10px] pl-1 text-[22px] leading-[19px] tracking-[2.7px] underline-offset-2">Jenna:</span> <br className=" block"/>
                            Jenna Grey is a visionary entrepreneur and the CEO and founder of Jenna's Art, a leading artwork selling company based in the heart of the art world. With a passion for art and a keen business acumen, Jenna has carved a successful niche in the industry.
                            Born and raised in a family of artists, 
                            Jenna developed a deep appreciation for the power of creativity from a young age. After completing her business degree, she recognized the need for a platform that could bridge the gap between talented artists and art enthusiasts worldwide. This realization led her to establish ArrtbyJenna, with the aim of revolutionizing the way art is discovered,
                            appreciated, and acquired.
                        </p>
                        <p className=" py-5 text-[#2C3333] font-heading3 text-justify md:px-5">
                            <span className="  text-[#2C3333] font-heading1 font-normal lg:text-[28px] lg:py-[10px] pl-1 text-[22px] leading-[19px] tracking-[2.7px] underline-offset-2">Her art:</span><br className=" block"/>
                             ArrtbyJenna is a dynamic and innovative artwork selling company founded by Jenna Grey, a visionary CEO with a deep passion for art.
                             With a mission to revolutionize the art market, ArrtbyJenna serves as a leading platform for artists to showcase and sell their work to a global audience.At ArrtbyJenna, artists and collectors find a vibrant community that celebrates creativity and supports artistic endeavors.
                             Through a carefully curated selection of artwork, 
                             ArrtbyJenna offers a diverse range of styles, mediums, and genres, catering to art enthusiasts with varying tastes and preferences.
                        </p>
                        </div>
                    </div>
                   </span>
                </div>
            </section>
            <section id="services" className=" bg-[#2C3333]">
                <h1 className="  text-center py-[10px] text-[#E7F6F2] font-heading2 font-semibold lg:text-[34px] lg:py-[19px] pl-1 text-[18px] leading-[19px] tracking-[2.7px]"> Notable Partners</h1>   
                <div className="flex flex-wrap md:justify-between justify-center items-center p-5">
                    <img className="max-w-[300px] p-2 flex-shrink-0" src={onexrun} alt="" />
                    <img className="max-w-[300px] p-2 flex-shrink-0" src={artspace} alt="" />
                    <img className="max-w-[300px] p-2 flex-shrink-0" src={salogo} alt="" />
                    <img className="max-w-[300px] p-2 flex-shrink-0" src={ugallery} alt="" />
                </div>
            </section>
            <section id="testimonial" className=" ">
                <CarouselComponent/>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
     );
}
 
export default Home;



                        


                        