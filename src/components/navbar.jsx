import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context'

export default function Navbar() {
    const {searchParam,setSearchParam,handleSubmit} = useContext(GlobalContext);
  return (
   <nav className='d-flex justify-content-between align-items-center my-3'> 
        <h2 className='fs-5 fw-bolder'>Food Recipe</h2>
        <form onSubmit={handleSubmit} className='w-50'>
        <input 
        type="text" 
        className='form-control  shadow-sm rounded' 
        placeholder='Enter Items...'
        value={searchParam}
        onChange={(e)=>setSearchParam(e.target.value)}
        />
        </form>
        <ul className='d-flex me-2' style={{listStyle:'none'}}>
            <li className='mx-3 fs-6 fw-bolder'>
                <NavLink to={'/'} style={{textDecoration:'none'}} className='text-dark'>Home</NavLink>
            </li>
            <li className='fs-6 fw-bolder'>
                <NavLink to={'/favorites'} style={{textDecoration:'none'}} className='text-dark'>Favorites</NavLink>
            </li>
        </ul>
   </nav>
    
    
 
    
  )
}
