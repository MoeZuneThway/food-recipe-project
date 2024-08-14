import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import Recipeitem from '../../components/recipeitem';

export default function Home() {
  const{favorites,loading} = useContext(GlobalContext);
  console.log(favorites);
  if(loading){
   return <div className='container'>Loading...Please Wait.</div>
  }
  return (
    <div className='container mt-5'>
      <div className="row g-5">
      {favorites && favorites.length>0 ? favorites.map((item,index)=> <Recipeitem item={item} key={index} />) : <div className='mt-5 text-center'> No matched favorites. Search New.</div>}

      </div>
    </div>
  )
}
