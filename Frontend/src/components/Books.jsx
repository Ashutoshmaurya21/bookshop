import React from 'react'

import Bbshop from "./Bbshop"
import {Link} from "react-router-dom"

 



function Books() {

 
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl md:text-4xl'>
        We're delighted to have you here for the 
        <span className='text-pink-500'> latest books !!!</span>
      </h1>
      <p className='mt-12'>Books are essentially vessels of human knowledge, creativity, and expression. 
        They take various forms, from dense academic textbooks to light-hearted novels.
         Books provide us with the ability to explore different worlds, experience emotions, 
         and gain insights into the human condition. For instance, classic literature allows us 
         to see through the eyes of characters in different eras and societies, while non-fiction books
          can educate us on topics ranging from history to science.
         The beauty of books lies in their diversity; there's a genre and a style for every reader.
      </p>
      
      <Link to="/">
      <button className='mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-green-500 duration-300'> Back</button>
      </Link>
    </div>
    <div className='mt-12 grid-cols-1 md:grid-cols-4'>
     <Bbshop/>
     <Bbshop/>
     <Bbshop/>
    </div>
    

   </div>
   </>
  )
}

export default Books