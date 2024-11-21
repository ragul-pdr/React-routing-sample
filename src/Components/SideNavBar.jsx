import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/SideNavBar.css';

const SideNavBar = () => {
  return (
    <div className='sidenavbar'>
        <ul>
            <li className='rounded'><Link className='l1' to='/'>Home</Link></li>
            <li className='rounded'><Link className='l1' to='/plans'>Plans</Link></li>
            <li className='rounded'><Link className='l1' to='/active-plans'>Active Plans</Link></li>
        </ul>

    </div>
  )
}

export default SideNavBar;
