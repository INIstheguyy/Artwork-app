import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react';
const Gallery = () => {

    
    return ( 
        <div>
            <Navbar/>
            <div>
                <h1 className=" text-center py-[10px] text-[#395B64] font-heading2 font-semibold lg:text-[34px] lg:py-[19px] pl-1 text-[28px] leading-[19px] tracking-[2.7px]">Recently sold out ARTs</h1>
                <section id='sold'>
                    <div className=''>
                    </div>
                </section>
                <section id='avail'>
                    <div className=''>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Gallery;