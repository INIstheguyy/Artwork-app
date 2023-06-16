import React from 'react';
import ArtCard from './Artcard';
import Footer from './Footer';
import Navbar from './Navbar';
import { Arts } from '../const/gallery';

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center py-[10px] text-[#395B64] font-heading2 font-semibold lg:text-[34px] lg:py-[19px] pl-1 text-[28px] leading-[19px] tracking-[2.7px]">
          Welcome to our Gallery
        </h1>
        <section id='sold'>
          <div>
            <h2 className=' font-heading1 text-gray-500 font-semibold text-center underline my-2 text-3xl'>Recently Sold Arts</h2>
            <div className=' flex flex-col items-center md:grid grid-cols-3 gap-4 '>
              {Arts.find(section => section.title ==='Sold Arts').Pieces.map(piece => (
                <ArtCard key={piece.id} img2={piece.image} description={piece.text} pricing={piece.pricing} />
              ))}
            </div>
          </div>
        </section>
        <section id='available'>
          <div className=' '>
            <h2 className=' font-heading1 text-gray-500 font-semibold text-center underline my-2 text-3xl '>Available Arts</h2>
            <div className='md:grid grid-cols-3 gap-4'>
              {Arts.find(section => section.title === 'Availabe Arts').Pieces.map(piece => (
                <ArtCard key={piece.id} img2={piece.image} description={piece.text} pricing={piece.pricing} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Gallery;

