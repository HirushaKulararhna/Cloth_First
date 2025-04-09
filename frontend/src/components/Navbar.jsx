import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {  
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt="Logo" /> 

      <ul className='hidden gap-8 text-sm text-gray-700 sm:flex'>
        <li> 
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-full border-none h-[1.5px] bg-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300' />
          </NavLink>
        </li>

        <li> 
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-full border-none h-[1.5px] bg-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300' />
          </NavLink>
        </li>

        <li> 
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-full border-none h-[1.5px] bg-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300' />
          </NavLink>
        </li>

        <li> 
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-full border-none h-[1.5px] bg-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300' />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
