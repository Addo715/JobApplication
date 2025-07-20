import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] h-[25rem]' src={assets.about} alt="" />
      

{/* right side  */}
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
       <p>At JobBridge, we believe in building real connections between talent and opportunity. Our mission is to simplify and enhance the hiring journey—for both employers and job seekers. Whether you're a growing company looking for the right talent or a professional ready for your next career move, we're here to bridge that gap with efficiency, precision, and trust.</p>
        <p>With a user-first approach, cutting-edge tools, and a passion for transforming recruitment, we’ve created a platform that delivers smarter hiring, faster onboarding, and meaningful results. Backed by real success stories and trusted by industry leaders, JobBridge is more than a job portal—it's a career-building partner.</p>
        <b className='text-gray'>Our Vision</b>
       <p> Our vision at JobBridge is to reshape the future of work by closing the gap between employers and job seekers through innovation, technology, and trust. We aim to build a platform where finding a job or hiring the right talent is easy, fast, and efficient for everyone involved.</p>
      </div>
    </div>

    <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
    </div>

    <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5F6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Efficiency:</b>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5F6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Convenience:</b>
      <p>Access to a network of trusted compaines professionals in your area.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5F6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Personalization:</b>
      <p>Tailored recommendations and reminders to help you stay on top of your Job.</p>
      </div>
    </div>
    </div>
  )
}

export default About
