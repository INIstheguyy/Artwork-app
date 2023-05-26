import React from "react";
import styles from '../Styles'
import logo from './assets/images/logo.png'
import facebook from './assets/images/facebook.svg'
import twitter from './assets/images/twitter.svg'
import instagram from './assets/images/instagram.svg'
import linkedin from './assets/images/linkedin.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-[#395B64] p-6`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Artistry that Captivates, Inspires, and Transforms
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-evenly text-white font-heading3 flex-wrap md:mt-0 mt-10">
       <div>
            <h1 className="py-2 font-semibold ">Useful Links</h1>
            <ul>
                <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/'>Home</Link></li>
                <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/services'>Services</Link></li>
                <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/gallery'>Gallery</Link></li>
                <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/contact'>Contact</Link></li>
            </ul>
       </div>
       <div>
            <h1 className="py-2 font-semibold ">Community</h1>
            <ul>
                <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/'>How it works</Link></li>
                <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/terms'>Terms & Services</Link></li>
                <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/'>Partners</Link></li>
            </ul>
       </div>
      </div>
    </div>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45] '>
      <div>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">Copyright
      2022 ArtbyJenna_ . All Rights Reserved.</p>
      </div>
      <div className='flex flex-row md:mt-0 mt-6'>
       <img src={facebook} alt="" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
       <img src={twitter} alt="" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
       <img src={instagram} alt="" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
       <img src={linkedin} alt="" className="w-[21px] h-[21px] object-contain cursor-pointer mr-0" />
      </div>
    </div>
    </section>
  );
};

export default Footer;
