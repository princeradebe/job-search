import React from 'react'

const NavBar = () => {
    return (
        <nav className='navBar flex justify-between items-center p-[3rem]'>
            <div className='logoDiv'>
                <h1 className='logo text-[25px] text-blueColor'><strong>Job</strong>Search</h1>
            </div>
            <div className='menu flex gap-8'>
                <li className='menuLink text-[#6f6f6f] hover:text-blueColor list-none relative'>Jobs</li>
                <li className='menuLink text-[#6f6f6f] hover:text-blueColor list-none relative'>Company</li>
                <li className='menuLink text-[#6f6f6f] hover:text-blueColor list-none relative'>About</li>
                <li className='menuLink text-[#6f6f6f] hover:text-blueColor list-none relative'>Contact</li>
                <li className='menuLink text-[#6f6f6f] hover:text-blueColor list-none relative'>Blog</li>
                <li className='menuLink text-[#6f6f6f] hover:text-blueColor list-none relative'>Login</li>
                <li className='menuLink text-[#6f6f6f] hover:text-blueColor list-none relative'>Register</li>
            </div>
        </nav>
    )
}

export default NavBar
