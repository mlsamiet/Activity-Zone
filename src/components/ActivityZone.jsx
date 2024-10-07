import React from 'react';
import girl from '../images/girl.png';

const ActivityZone = () => {
  return (
    <div id='ImagesSection' className="h-fit flex flex-col p-8 mb-8">
      <header className="flex justify-between items-center mb-8">
       
      </header>
      
      <main className="flex-grow flex items-center justify-between">
        <div className="w-1/3 flex justify-end items-center">
          <img src={girl} alt="3D Character" className="w-3/4" />
        </div>
        
        <div className="w-2/3 pl-8 flex flex-col items-center justify-center gap-5">
          <h1 className="text-primary text-7xl font-semibold mb-4">The Activity Zone</h1>
          <a className="bg-secondary text-white px-6 py-3 rounded-md flex items-center" href='#modules'>
            October 24 - December 24
            {/* You can add a down arrow here as a simple text or an emoji if needed */}
          </a>
        </div>
      </main>
    </div>
  );
};

export default ActivityZone;
