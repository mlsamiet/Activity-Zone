import React from 'react';
import logo from '../images/logo.png'
const ActivityZone = () => {
  return (
    <div id='ImagesSection' className="flex flex-col min-h-screen p-8 mb-8 scroll-smooth">
      <header className="flex items-center justify-between mb-8">
       
      </header>
      
      <main className="flex flex-col items-center justify-center flex-grow md:flex-row">
        <div className="items-center justify-end hidden w-1/3 md:flex">
          <img src={logo} alt="3D Character" className="w-3/4" id='logo' />
        </div>
        
        <div className="flex flex-col items-center justify-center gap-5 md:w-2/3 md:pl-8">
          <h1 className="mb-4 text-3xl font-bold text-center text-primary lg:text-7xl font-primary">THE ACTIVITY ZONE</h1>
          <a className="flex items-center px-6 py-3 text-xs text-white rounded-md bg-secondary md:text-base font-primary" href='#modules'>
            October 24 - December 24
            {/* You can add a down arrow here as a simple text or an emoji if needed */}
            {/* will be adding some cool stuff in the evening stay tunes */}
          </a>
        </div>
      </main>
    </div>
  );
};

export default ActivityZone;
