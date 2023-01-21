// import React , { useState } from "react";
// import { DiCoffeescript } from "react-icons/di";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// const Nav = () => {
//   const [ nav, setNav ] = useState(false);
//   const handleNav = () => {
//     setNav(!nav)
//   }
//   const Links =[
//       {name:"Home", link:"/"},
//       {name:"About", link:"/"},
//       {name:"Skills", link:"/"},
//       {name:"Projects", link:"/"},
//       {name:"Contact", link:"/"},
//   ];
//   return (
//      <div className="fixed shadow-md w-full h-20 top-0 left-0">
//       <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
//         <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppon] text-gray-800">
//           <span className="text-5xl text-brown-600 mr-1 pt-2">
//             <DiCoffeescript/>
//         </span>
//           <p className="md:text-blue-600">...</p>
//         </div>
//         <span className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden block">
//           <button onClick={() => setNav(!nav)}> { nav ? (<AiOutlineMenu/>) : (<AiOutlineClose/>) }</button>
//         </span>
//         <ul onClick="" className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
//           {
//           Links.map((link)=>(
//             <li key={link.name} className='md:ml-8'><a href={link.link}>{link.name}</a></li>
//             ))
//           }
//         </ul>
//       </div>
//      </div>

//   );

// };

// export default Nav;

import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { DiCoffeescript } from "react-icons/di";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
       <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppon]   text-gray-800">       
             <span className="text-5xl text-brown-600 mr-1 pt-2">
                 <DiCoffeescript/>
             </span>
          <p className="md:text-blue-600">...</p>
       </div>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <a href="#">Home</a>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
               <a href="#">About</a>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
               <a href="#">Skill</a>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
                <a href="#">Project</a>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <a href="#">Resume</a>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppon]   text-gray-800">       
                 <span className="text-5xl text-brown-600 mr-1 pt-2">
                    <DiCoffeescript/>
                 </span>
               <p className="md:text-blue-600">...</p>
            </div>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build software better, together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                   <a href="#">Home</a>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                   <a href="#">About</a>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                   <a href="#">Skills</a>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                   <a href="#">Projects</a>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    <a href="#">Resume</a>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    <a href="#">contact</a>
                </li>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/aungcho-latt-580755243/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/aungcholatt'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a
                  href='https://aungcholatt888@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div
                    // onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                  </a>
                  <a
                  href=''
                  target='_blank'
                  rel='noreferrer'
                   >
                  <div
                    // onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
