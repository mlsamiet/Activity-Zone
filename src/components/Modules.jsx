import React from 'react';

const Modules = () => {
  return (
    <section id="modules" className="p-8 md:w-3/4 pb-20 my-10 scroll-smooth">
      <h2 className="text-3xl font-bold mb-10 text-primary text-center">Modules to Cover:</h2>
      <div className="space-y-6 w-full flex flex-col items-center justify-center">
        <a href="https://learn.microsoft.com/en-us/plans/o1mmcm6o12jygw?tab=tab-created&learnerGroupId=267baffa-cb19-49f1-a7c5-d965ddae5a2f&wt.mc_id=studentamb_389197"
          className='block w-full bg-secondary text-white text-xl font-semibold text-center py-6 px-8 rounded-xl shadow-lg hover:bg-primary transition duration-300 ease-in-out transform hover:scale-105'>
          Copilot for Microsoft 365
        </a>
        <a href=""
          className='block w-full bg-secondary text-white text-xl font-semibold text-center py-6 px-8 rounded-xl shadow-lg hover:bg-primary transition duration-300 ease-in-out transform hover:scale-105'>
          MODULE-2
        </a>
        <a href=""
          className='block w-full bg-secondary text-white text-xl font-semibold text-center py-6 px-8 rounded-xl shadow-lg hover:bg-primary transition duration-300 ease-in-out transform hover:scale-105'>
          MODULE-3
        </a>

        <button
          className="mt-12 bg-primary text-white text-sm md:text-lg font-medium px-8 py-4 rounded-xl shadow-md hover:bg-secondary transition duration-300 ease-in-out transform hover:scale-105 "
        >
          Submit your details here, and stand a chance to win exciting prizes
        </button>
      </div>
    </section>
  );
};

export default Modules;