import React,{useEffect} from 'react'

export default function Card({feature}) {


useEffect(() => {
}, []);


  return (
    <div className='card'>
      <h2>{feature.title}</h2>  
    </div>
  )
}
