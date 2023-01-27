import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'


const Footer = () => {
    return (
        <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'>
            <div>
                <div className='logoDiv'>
                    <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
                        <strong>Job</strong>Search
                    </h1>
                </div>
                <p className='text-white pb-[13px] opacity-70 leading-7'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                    Company
                </span>
                <div className='grid gap-3 cursor-pointer'>
                    <li className='text-white opacity-[.7] hover:opacity-100'>About Us</li>
                    <li className='text-white opacity-[.7] hover:opacity-100'>Features</li>
                    <li className='text-white opacity-[.7] hover:opacity-100'>News</li>
                    <li className='text-white opacity-[.7] hover:opacity-100'>FAQ</li>
                </div>
            </div>
            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                    Resources
                </span>
                <div className='grid gap-3 cursor-pointer'>
                    <li className='text-white opacity-[.7] hover:opacity-100'>Account</li>
                    <li className='text-white opacity-[.7] hover:opacity-100'>Support Center</li>
                    <li className='text-white opacity-[.7] hover:opacity-100'>Feedback</li>
                    <li className='text-white opacity-[.7] hover:opacity-100'>Contact Us</li>
                </div>
            </div>
            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                    Support
                </span>
                <div className='grid gap-3 cursor-pointer'>
                    <li className='text-white opacity-[.7] hover:opacity-100'>Events</li>
                    <li className='text-white opacity-[.7] hover:opacity-100'>Promo</li>
                    <li className='text-white opacity-[.7] hover:opacity-100'>Request Demo</li>
                    <li className='text-white opacity-[.7] hover:opacity-100'>Careers</li>
                </div>
            </div>
            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                    Contact Info
                </span>
                <div>
                    <small className='text-[14px] text-white'>
                        princeradebe@gmail.com
                    </small>
                    <div className='icons flex gap-4 py-[1rem]'>
                        <AiOutlineInstagram className='bg-white p-[18px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                        <BsFacebook className='bg-white p-[18px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                        <AiOutlineTwitter className='bg-white p-[18px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                        <AiOutlineInstagram className='bg-white p-[18px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
