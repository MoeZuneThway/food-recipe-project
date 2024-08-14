import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipeitem({item}) {
  return (
   
            <div className="col-lg-3">
               <div className='p-2 shadow-sm'>
               <img src={item.image_url} alt="" className='w-100' style={{height:"180px"}}/>
                <p className=' fs-6 mt-1'>{item.publisher}</p>
                <h3 className='fw-bolder fs-6 text-center'>{item.title}</h3>
                <div className='text-center'>
                <Link to={`/recipe-item/${item.id}`} className='btn btn-success my-3 '> See More</Link>
                </div>
               </div>
                
            </div>
            
       
  )
}
