import React from "react";
import {BsTelegram} from 'react-icons/bs';
import {FaViber} from 'react-icons/fa';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGoogleCircle,
} from "react-icons/ai";
const Header = () => {
  const [state] = React.useState({
    title: "I am Jonathan Doe",
    text:
      "i,m Jonathan, professional web developer with long time \
    experience in this field​",
    image: "/images/man-01.png",
  });
  return (
    <div>
     <h1>Header</h1>
     <nav className="text-3xl flex justify-center gap-2 py-3 text-gray-600">
        <a href="https://github.com/aungcholatt"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/aungcho-latt-580755243/"><AiFillLinkedin/></a>
        <a href="https://www.facebook.com/profile.php?id=100009292796950"><AiFillFacebook/></a>
        <a href="https://aungcholatt888@gmail.com"><AiFillGoogleCircle/></a>
        <a href="https://t.me/AungChoLatt"><BsTelegram/></a>
        <a href="viber://contact?number=%2B959453391177"><FaViber/></a>
     </nav>
    </div>
        
    // <header className="header">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-6">
    //         <div className="header__content">
    //           <div className="header__section">
    //             <ul className="header__ul">
    //               <li>
    //                 <FaFacebookF className="headerIcon" />
    //               </li>
    //               <li>
    //                 <FaTwitter className="headerIcon" />
    //               </li>
    //               <li>
    //                 <FaPinterest className="headerIcon" />
    //               </li>
    //               <li>
    //                 <FaInstagram className="headerIcon" />
    //               </li>
    //             </ul>
    //             <h1>{state.title}</h1>
    //             <p>{state.text}</p>
    //             <div className="header__buttons">
    //               <a href="" className="btn btn-outline">
    //                 My Portfolio
    //               </a>
    //               &nbsp;&nbsp;&nbsp;
    //               <a href="" className="btn btn-smart">
    //                 <FaPlay className="play" />
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-6">
    //         <div className="banner__img">
    //           <img src={state.image} alt="man" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;