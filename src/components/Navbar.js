import logo from '../components/assets/images/logo.png'
import menu from '../components/assets/images/menu.svg'
import close from '../components/assets/images/close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return ( 
        
        <nav className=' flex justify-between items-center p-5 bg-[#395B64]'>
            <img src={logo} alt="" className=" w-[200px]" />
            <div className=" md:hidden flex flex-1 justify-end items-center">
                <img onClick={() => setToggle((prev) => !prev)}  src={toggle ? close : menu} alt="menu" className="outline-none  cursor-pointer object-contain w-[28px] h-[28px]" />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-10 right-0 mx-2 my-4 rounded-xl  min-w-[140px] `}>
                <div className='relative h-full w-30 p-5'>
                <div className='absolute inset-0 backdrop-filter backdrop-blur-lg'></div>
                <div className='relative h-full'>
                  <div className='flex flex-col justify-end items-start h-full text-[#E7F6F2] text-left z-50'>
                    <p className='my-5 font-normal text-base leading-tight tracking-wider hover-underline-animation' style={{ backdropFilter: 'none' }}>
                        <Link to='/'><span className='font-heading2 font-bold text-base leading-tight tracking-wider'>00</span> HOME</Link> 
                    </p>
                    <p className='my-5 font-normal text-base leading-tight tracking-wider hover-underline-animation' style={{ backdropFilter: 'none' }}>
                      <Link to='/services'><span className='font-heading2 font-bold text-base leading-tight tracking-wider'>01</span> SERVICES</Link> 
                    </p>
                    <p className='my-5 font-normal text-base leading-tight tracking-wider hover-underline-animation' style={{ backdropFilter: 'none' }}>
                      <Link to='/gallery'><span className='font-heading2 font-bold text-base leading-tight tracking-wider'>02</span> GALLERY</Link>
                    </p>
                    <p className='my-5 font-normal text-base leading-tight tracking-wider hover-underline-animation' style={{ backdropFilter: 'none' }}>
                    <Link to='/contact'><span className='font-heading2 font-bold text-base leading-tight tracking-wider'>03</span> CONTACT</Link>
                    </p>
                  </div>
                </div>
              </div>
              
                </div>
            </div>
            <div className='md:flex hidden items-center '>
            <div className='list-container pr-[8vw] pl-[7vw] pt-[29px] pb-[28px] md:pl-[1vw] md:pr-[1vw] '>
                <div className='list-none sm:list-none sm:flex  justify-end items-center flex-1 flex-wrap  bg-opacity-4 backdrop-blur-41  '>
                    <p className='hover-underline-animation text-white  mr-10  h-[19px] text-base font-normal tracking-widest leading-tight font-heading2'> <Link to='/'> <span className='text-base font-semibold tracking-widest leading-tight'>00</span> HOME</Link></p>
                    <p className='hover-underline-animation text-white  mr-10  h-[19px] text-base font-normal tracking-widest leading-tight font-heading2'> <Link to='/services'><span className='text-base font-semibold tracking-widest leading-tight'>01</span> SERVICES</Link> </p>
                    <p className='hover-underline-animation text-white  mr-10  h-[19px] text-base font-normal tracking-widest leading-tight font-heading2'> <Link to='/gallery'> <span className='text-base font-semibold tracking-widest leading-tight'>02</span > GALLERY</Link></p>
                    <p className='hover-underline-animation text-white  mr-16  h-[19px] text-base font-extralight tracking-widest leading-tight font-heading2'> <Link to='/contact'><span className='text-base font-bold tracking-widest leading-tight'>03</span> CONTACT</Link> </p>
                </div>
            </div> 
        </div>
        </nav>
     );
}
 
export default Navbar;