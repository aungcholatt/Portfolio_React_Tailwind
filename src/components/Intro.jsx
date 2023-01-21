import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h5 className="text-3xl text-teal-600 md:text-4xl mb-1 md:mb-3 font-bold pt-6">AungChoLatt</h5>
         <p className="text-base text-indigo-300 md:text-xl mb-3 font-medium">Full stack Developer</p>
         <p className="text-sm max-w-xl mb-6 text-gray-600 font-bold">
            I'm an full-stack developer and moblie application creator building my
            version of the digital world one step at a time. All coding projects
            are built from the ground up, from planning and designing all the way
            to solving real-life problems with code.
            <br />
            {/* to more than 400k subscribers. */}
         </p>
      </div>
   )
}

export default Intro;