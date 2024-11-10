import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json"
import Card from './Card';

function Freeshop() {
    const filterData=list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3 ,
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
    <>
    <div className="max-w-screen-2xl container max-auto md:px-20 px-4">
        <h1 className="font-bold text-xl pb-2">Free offered Books</h1>
        <p>Books are like treasure chests, each brimming with something unique. They contain stories, information, emotions, 
            and ideas. Depending on the book, you might find detailed facts, creative narratives,
             beautiful illustrations, or thought-provoking discussions.</p>
    </div>
    <div>
    <Slider {...settings}>
        {
            filterData.map((item)=>(
                <Card item={item} key={item.id}/>
            ))
        }
      </Slider>
    </div>
    </>
  )
}

export default Freeshop 