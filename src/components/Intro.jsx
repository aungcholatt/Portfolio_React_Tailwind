import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h5 className="text-3xl text-teal-600 md:text-4xl mb-1 md:mb-3 font-bold pt-6">AungChoLatt</h5>
         <p className="text-base text-indigo-300 md:text-xl mb-3 font-medium">Full stack Developer</p>
         <p className="text-sm max-w-xl mb-6 text-gray-600 font-bold">
            Hi, I'm Full Stack Developer and software engineer. I specialize in making beautiful UI's for mobile and web interfaces. I have always had a passion for software development and technology. My purpose is to create apps that people just love to use .
            <br />
            {/* to more than 400k subscribers. */}
         </p>
      </div>
   )
}

export default Intro;