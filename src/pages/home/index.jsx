import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import Recipeitem from '../../components/recipeitem';

export default function Home() {
  const{recipes,loading} = useContext(GlobalContext);
  const recipeItems = recipes?.data?.recipes;
  if(loading){
   return <div className='container'>Loading...Please Wait.</div>
  }
  return (
    <div className='container mt-5'>
      <div className="row g-5">
      {recipeItems && recipeItems.length>0 ? recipeItems.map((item,index)=> <Recipeitem item={item} key={index} />) : <div className='mt-5 text-center'> No matched recipes. Search New.</div>}

      </div>
    </div>
  )
}
