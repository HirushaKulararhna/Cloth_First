import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchIcon, UserIcon, ShoppingBagIcon, Menu, ChevronLeft } from 'lucide-react'


const Navbar = () => {  

  const [visible, setVisible] = useState(false);

  
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <h1 className='text-2xl italic font-semibold cursor-pointer text-stone-900'>CLOTH_FIRST</h1>

      <ul className='hidden gap-8 text-sm text-gray-700 sm:flex'>
        <li> 
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>

        <li> 
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>

        <li> 
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>

        <li> 
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
          <button aria-label="Search" className="hover:text-gray-600">
            <SearchIcon size={20} />
          </button>
          
          <div className='relative group'>
            <button aria-label="Account" className="hover:text-gray-600">
              <UserIcon size={20} />
            </button>
            <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu '>
              <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
          
          <NavLink to='/cart' className='relative' >
          <button aria-label="Cart" className="relative hover:text-gray-600">
            <ShoppingBagIcon size={20} />
            <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-black rounded-full -top-1 -right-1">
              0
            </span>
          </button>
          </NavLink>

          <button onClick={() => setVisible(true)} aria-label="Menu" className="hover:text-gray-600 sm:hidden">
            <Menu size={20} />
          </button>
          
        </div>

        {/*sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'  }`}>
          <div className='flex flex-col text-gray-600 '>
            <div className='flex items-center gap-4 p-3'>
              <button onClick={() => setVisible(false)} aria-label="Close" className="cursor-pointer hover:text-gray-600">
                <ChevronLeft size={20} />
              </button>
              <p>back</p>
            </div>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
          </div>
        </div>
        
    </div>
  );
};

export default Navbar;
