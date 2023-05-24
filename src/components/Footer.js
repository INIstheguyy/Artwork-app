import React from "react";
import styles from '../Styles'
import logo from './assets/images/jenna-icon.jpg'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-blue-700`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
       
      </div>
    </div>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45] '>
      <div>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">Copyright
      2021 HooBank. All Rights Reserved.</p>
      </div>
      <div className='flex flex-row md:mt-0 mt-6'>
       
      </div>
    </div>
    </section>
  );
};

export default Footer;
