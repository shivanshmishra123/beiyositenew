import React from 'react';
import { Home, Target, Compass, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-yellow-50 min-h-screen p-8">
      <div className="grid grid-cols-4 grid-rows-3 gap-6 max-w-6xl mx-auto">
        {/* Header Tile */}
        <div className="col-span-4 mt-16 bg-black  p-6 rounded-xl flex flex-col justify-center items-center">
          <h1 className="text-4xl text-yellow-300 font-bold">Why We Are Doing It</h1>
        </div>

        {/* Search Story Tile */}
        <div className="col-span-2 row-span-1 bg-yellow-100 p-6 rounded-xl flex flex-col justify-center">
          <div className="text-black text-lg font-semibold">
            <p>IN OUR <span className="text-yellow-600">SEARCH</span></p>
            <p>WE COULDN'T <span className="text-yellow-600 font-bold">LOCATE</span> IT,</p>
            <p>SO WE <span className="text-yellow-600 font-bold">CRAFTED</span> IT FOR YOU</p>
          </div>
        </div>

        {/* Image Tile */}
        <div className="col-span-2 row-span-2 bg-transparent rounded-xl overflow-hidden">
          <img 
            src="/images/aboutuspng.png" 
            alt="Team" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* PG Confinement Tile */}
        <div className="col-span-1 bg-yellow-200 p-4 rounded-xl flex flex-col justify-center items-center">
          <Home className="text-black w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold text-black mb-2">Confined PGs?</h2>
          <p className="text-center text-black">Feel trapped in limited housing options?</p>
        </div>

        {/* Escape Tile */}
        <div className="col-span-1 bg-black text-yellow-300 p-4 rounded-xl flex flex-col justify-center items-center">
          <Compass className=" w-12  h-12 mb-4"  color="#FDE047" />
          <h2 className="text-xl text-yellow-300 font-bold mb-2">Escape to Beiyo!</h2>
          <p className="text-center text-yellow-300">Bid farewell to cramped quarters.</p>
        </div>

        {/* Sanctuary Tile */}
        <div className="col-span-1 bg-yellow-200 p-4 rounded-xl flex flex-col justify-center items-center">
          <Target className="text-black w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold text-black mb-2">Beiyo: Your Sanctuary</h2>
          <p className="text-center text-black">Crafted by those who understand.</p>
        </div>

        {/* Comfort Tile */}
        <div className="col-span-1 bg-black text-yellow-300 p-4 rounded-xl flex flex-col justify-center items-center">
        <Heart className="w-12 h-12 mb-4" color="#FDE047" />
          <h2 className="text-xl text-yellow-300 font-bold mb-2">Where Comfort Awaits</h2>
          <p className="text-center text-yellow-300">Your comfort is our priority.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;