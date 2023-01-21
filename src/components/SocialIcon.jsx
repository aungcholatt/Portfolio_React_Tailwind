import React from "react";
import {BsTelegram} from 'react-icons/bs';
import {FaViber} from 'react-icons/fa';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGoogleCircle,
} from "react-icons/ai";
const SocialIcon = () => {

  return (
    <div>
        <div className="pt-20">
            <p className='uppercase font-bold flex justify-center tracking-widest text-gray-600'>
                Let&#39;s Connect
              </p>
            </div>
        <div className="pt-3">
            <nav className="text-3xl flex justify-center gap-2 py-3 text-[#5651e5]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3">
                <a href="https://github.com/aungcholatt"><AiFillGithub/></a>
                 </div>
                 <div className="rounded-full shadow-lg shadow-gray-400 p-3">
                 <a href="https://www.linkedin.com/in/aungcho-latt-580755243/"><AiFillLinkedin/></a>
                 </div>
                 <div className="rounded-full shadow-lg shadow-gray-400 p-3">
                 <a href="https://www.facebook.com/profile.php?id=100009292796950"><AiFillFacebook/></a>
                 </div>  
                 <div className="rounded-full shadow-lg shadow-gray-400 p-3">
                   <a href="https://aungcholatt888@gmail.com"><AiFillGoogleCircle/></a>
                 </div>
                 <div className="rounded-full shadow-lg shadow-gray-400 p-3">
                   <a href="https://t.me/AungChoLatt"><BsTelegram/></a>
                 </div>
                 <div className="rounded-full shadow-lg shadow-gray-400 p-3">
                    <a href="viber://contact?number=%2B959453391177"><FaViber/></a>
                 </div>
            </nav>
        </div>
    </div>
      
  );
};

export default SocialIcon;