import React from 'react'
import bookList from "../assets/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function FreeBook() {
    const freeBook = bookList.filter((data)=> data.category === "free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className="">
        <h1 className='text-xl font-bold'>Free Courses</h1>
        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quas perferendis beatae distinctio quis fuga illo explicabo recusandae nostrum eos. Labore, quasi reiciendis!</p>
      </div>

      <div className="">
        <div className="slider-container">
            <Slider {...settings}>
              {freeBook.map((item)=> (
                <Card item={item} key={item.id}/>
              ))}
            </Slider>
          </div>
      </div>
    </div>
  )
}

export default FreeBook
