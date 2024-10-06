import React from 'react';
import Header from './components/Header';
import Modules from './components/Modules';
import ImagesSection from './components/ImagesSection';
import Footer from './components/Footer';
import ActivityZone from './components/ActivityZone';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffe9c9]">
      <Header />
      <ActivityZone /> {/* Add the Front component here */}
      <main className="flex-grow">
        <Modules />
        <ImagesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;