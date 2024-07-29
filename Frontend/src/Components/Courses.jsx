import React from 'react'
import bookList from "../assets/list.json"
import Card from './Card'
import { Link } from 'react-router-dom'

function Courses() {

  return (
    <div className='max-w-screen-2xl container z-10 mx-auto md:px-20 px-4'>
      <div className="mt-32">
        <h1 className='text-3xl font-bold text-center'>We are delighted to have you <span className='text-pink-500'>here :)</span></h1>
        <p className='text-center md:mx-16 mx-4 mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsum hic, iusto perspiciatis harum dolorem sunt iste, reprehenderit aperiam veniam facilis officiis numquam quo esse iure, suscipit saepe tenetur! Delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aspernatur similique debitis fugit architecto omnis hic animi dolore? Quos illum velit similique quasi harum eveniet atque sapiente corrupti vel nemo.</p>
        <div className=" flex items-center justify-center mt-8">
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 rounded py-2 hover:bg-pink-700">Back</button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 my-16">
          {bookList.map((item)=>(
            <Card item={item} key={item.id}/>
          ))}
      </div>
    </div>
  )
}

export default Courses
