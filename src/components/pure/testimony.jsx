import React from 'react'
const images = require.context("../../assets/img", true);


export default function Testimony({review}) {
  return (
    <div className='testimony__card'>
        {/* <div className='testimony__card--image'>
            <img src={images(review.imgUrl)}></img>
        </div> */}
{/* 
        <iframe
            src="https://www.youtube.com/embed/4V2KlR4u4HQ"
            title="OTM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe> */}


    </div>

  )
}
