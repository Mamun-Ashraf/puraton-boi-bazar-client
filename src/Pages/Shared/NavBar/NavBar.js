import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png';
const NavBar = () => {

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
        <li><button className='btn mr-4'><Link to='/login' className='text-white px-3'>Login</Link></button></li>
        <li><button className='btn'><Link to='/logout' className='text-white px-3'>Log Out</Link></button></li>

    </React.Fragment>
    return (
        <div>
            <div className="navbar bg-base-100 justify-between mb-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className='flex'>
                        <img src={logo} alt="" className='h-8 mr-4' />
                        <Link to='/' className='font-bold text-xl text-yellow-400'>Puraton Boi Bazar</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;