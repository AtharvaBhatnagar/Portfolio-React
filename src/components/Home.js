import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
    
            <div className='flex flex-col justify-center h-full'>
                <h2 className=' mt-32  text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className=' text-gray-500 py-4 max-wd-md'>
                I am currently pursuing computer science and engineering(CSE) at PSIT, Kanpur. I aim to become a proficient software engineer and I am looking to work with leading companies.
During my two years of academics, I have completed a number of projects in development and my recent one is based on crypto wallet named draphline wallet . 
I have also done other projects during these last 2 years, some of which include:
-> HostelMate web app
-> Codeial web app
I am extremely confident that my skills will be further enhanced after working with the renowned companies through internships, and jobs.
Looking forward to working with established software firms.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white wd-fit px-6 py-3 mt-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500  to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="My profile" className=' rounded-2xl mx-auto w-2/3  md:w-full' />
            </div>
        </div>
    </div>
  )
} 

export default Home