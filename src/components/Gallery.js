import React from 'react';
import ArtCard from './Artcard';
import Footer from './Footer';
import Navbar from './Navbar';
import { Arts } from '../const/gallery';
import art1 from '../components/assets/images/gallery1.webp'

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
            <h2>Sold Arts</h2>
            <div className=' flex flex-row flex-wrap'>
              {Arts.find(section => section.title === 'Sold Arts').Pieces.map(piece => (
                <ArtCard key={piece.id} img2={art1} description={piece.text} pricing={piece.pricing} />
              ))}
            </div>
          </div>
        </section>
        <section id='available'>
          <div>
            <h2>Available Arts</h2>
            <div className='art-grid'>
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

