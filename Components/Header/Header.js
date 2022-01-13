import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.scss"

const Header = () => {
    return (
        <>
           
            <div className='header'>
           <NavLink className='nav' to='/'><h2>MovEapp</h2></NavLink>
           <h3>Signin</h3>
               
           </div>
        </>
    )
}

export default Header
