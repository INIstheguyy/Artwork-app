import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from './Navbar';
import Footer from './Footer';



  function ContactForm() {
    const [state, handleSubmit] = useForm("xgebbryw");
  
    if (state.succeeded) {
      return <p className="text-green-500">Thanks for joining!</p>;
    }

  return (
    <section>
        <Navbar/>
            <section className='p-5'>  
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className=' my-5'>
                        <h1 className='font-heading1 font-semibold text-gray-800 text-[26px] lg:text-[39px] '>Contact Form </h1>
                        <p className=" font-heading3 text-justify pr-5 font-medium lg:text-[24px] text-gray-500">
                            Please fill out the form provided below and we will respond to your inquiry shortly. Thank you!
                        </p>
                    </div>
                    <div className="mb-4">
                    <label htmlFor="name" className="text-sm">
                    Name:
                    </label>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                    />
                    <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                    />
                    </div>
            
                    <div className="mb-4">
                    <label htmlFor="email" className="text-sm">
                    Email Address:
                    </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                    />
                    <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                    />
                    </div>
            
                    <div className="mb-4">
                    <label htmlFor="instagram" className="text-sm">
                    Instagram  Username:
                    </label>
                    <input
                    id="instagram"
                    type="text"
                    name="instagram"
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                    />
                    <ValidationError
                    prefix="Instagram"
                    field="instagram"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                    />
                    </div>
            
                    <div className="mb-4">
                    <label htmlFor="message" className="text-sm">
                    Message:
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full h-32 resize-none"
                    ></textarea>
                    <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                    />
                    </div>
            
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                    Submit
                    </button>
                </form>
            </section>
            <div className='bg-[#2C3333] text-white text-center py-5 pl-16 md:pl-0'>
                <h1 className=" font-heading1 text-[40px]  font-medium underline md:text-center text-left mb-5">Find Us</h1>
                <div className=" flex md:flex-row  flex-col justify-around">
                    <div className='text-left tracking-wider font-heading3 py-5 md:py-0 '>
                        <h2 className="text-2xl">Location:</h2>
                        <p className=""></p>
                    </div>
                    <div className='text-left tracking-wider font-heading3 py-5 md:py-0'>
                        <h2 className=" text-2xl">Contact:</h2>
                        <div className="">
                            <p className="">Email:<span className=""></span></p>
                            <p className="">Mobile:<span className=""></span></p>
                        </div>
                    </div>
                    <div className='text-left tracking-wider font-heading3 py-5 md:py-0'>
                        <h2 className="text-2xl">Hours:</h2>
                        <div className="">
                            <p className="">Monday-Friday:  <span className="">9:00AM - 7:00PM</span></p>
                            <p className="">Saturday:  <span className="">10:30AM - 8:00PM</span></p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </section>
  );
};

export default ContactForm;
               