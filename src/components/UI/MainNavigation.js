import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from '../../global/GlobalStyles.css';

const MainNavigation = () => {
    return (  
        <>
            <header className='items-center flex flex-col md:flex-row md:justify-between md:px-32 lg:px-52 pt-3 fixed min-w-full' style={{backgroundColor: '#9e6f46'}}>
                <div>
                    <Link className={`uppercase font-bold text-2xl px-1 animate-bounce`} style={{color: '#e5e0d8'}} to='/all'>Chicago Med</Link>
                </div>
                <nav className='m-2 flex flex-col md:flex-row md:px-1'>
                    <NavLink className='px-3 py-1 text-xl rounded-md' activeClassName={classes.active} to='/new-entry'>Add one</NavLink>
                    <NavLink 
                        className='px-3 py-1 text-xl rounded-md' 
                        activeClassName={classes.active} 
                        to='/graphic'>Graphics</NavLink>
                </nav>
            </header>
        </>
    );
}

export default MainNavigation;

/*


*/