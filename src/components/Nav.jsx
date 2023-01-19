import React from "react";
// import Button from './components/Button'
import { DiCoffeescript } from "react-icons/di";
import { AiOutlineMenu } from "react-icons/ai";
const Nav = () => {
  const Links =[
      {name:"Home", link:"/"},
      {name:"Service", link:"/"},
      {name:"About", link:"/"},
      {name:"Protfolio", link:"/"},
      {name:"Contact", link:"/"},
  ];
  return (
     <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppon] text-gray-800">
          <span className="text-5xl text-brown-600 mr-1 pt-2">
            <DiCoffeescript/>
        </span>
          <p className="md:text-blue-600">***</p>
        </div>
        <span className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden block">
          <icon name="menu" onclick="Menu(this)"><AiOutlineMenu/></icon>
        </span>
        <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8'><a href={link.link}>{link.name}</a></li>
            ))
          }
          {/* <Button></Button> */}
        </ul>
      </div>
     </div>

  );

};
{/* <script>
  function Menu(e){
    let list = document.querySelector('ul');
     e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu" , list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }
</script> */}

export default Nav;