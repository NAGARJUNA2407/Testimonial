import React, { useState } from 'react'
import Card from './Card'
import { FaChevronLeft ,FaChevronRight } from "react-icons/fa";

const Testimonial = (props) => {
  let reviews=props.reviews;
  let [index,setIndex]=useState(0);

  function leftShiftHandler(){
    if(index-1<0){
      setIndex(reviews.length -1 )
    }
    else{
      setIndex(index-1);
    }
  }
  function rightShiftHandler(){
    if(index+1>=reviews.length){
      setIndex(0); 
    }
    else{setIndex(index+1);}
  }
  function surpriseHandler(){
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  
    return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center hover:shadow-xl mt-10 p-10 transition-all duration-700 rounded-md'>
      <Card review={reviews[index]} />
      
      <div className='flex text-3xl mt-9 gap-3 text-violet-400 font-bold mx-auto '>
      <button className='cursor-pointer hover:text-violet-500' onClick={leftShiftHandler}><FaChevronLeft /></button>
      <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}><FaChevronRight /></button> 
      </div> 

      <div className='mx-auto mt-6'>
        <button className='bg-violet-500 hover:bg-violet-600 transition-all duration-200 px-10 py-2 cursor-pointer rounded-md font-bold text-white text-lg ' onClick={surpriseHandler}>Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonial
