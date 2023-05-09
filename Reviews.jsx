import React from 'react'
import Scroller from './SlickCarousel/SliderWithContent.jsx'

const Reviews = () => {
  return (
    <section className='h-auto bg-white float-left relative py-[30px] z-1 w-full'>
      
      <div>
        {/* Title Section for Customer Reviews */}
        <div id='section-title' className='float-left relative w-full pb-[40px]'>
          <h2 className='float-left w-full text-center text-[#007aff] text-[34px] font-extrabold'>
            Testimonials
          </h2>

          <span className='float-left w-full relative my-[20px] mx-0 
                          before:content-[""] 
                          before:absolute 
                          before:left-[50%] 
                          before:top-0 
                          before:h-[3px] 
                          before:w-[50px] 
                          before:border-r-[3px] 
                          before:z-2 
                          before:bg-[#007aff]
                          before:ml-[-25px]'>
          </span>

          <p className='text-[#7d93b2] text-[13px] h-[20px] max-w-[550px] my-0 mx-auto text-center'>
            Check out what our customers think!
          </p>
        </div>
        {/* End of Title Section for Customer Reviews */}

        {/* Customer Review Carousel "To change reviews or add more look for CustReviews Directory and update there" */}
        <Scroller />
      </div>
      
    </section>
  )
}

export default Reviews