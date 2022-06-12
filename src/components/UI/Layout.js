import React from 'react';
import MainNavigation from './MainNavigation';

const Layout = (props) => {

    return(
        <>
            <div className='min-h-screen' style={{backgroundColor: "#e5e0d8"}}>
                <MainNavigation />
                
                <main className='flex justify-center mx-5 md:w-2/3 md:mx-auto'>
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default Layout;

/*
    #774f2a
    #9e6f46
    #d4bca2
    #e5e0d8
    #c05915
*/