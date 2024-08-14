import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context';

export default function Details() {
  const {id} = useParams();
  const {recipeDetails, setRecipeDetails,handleFavorite,favorites} = useContext(GlobalContext);
 
  useEffect(()=>{
      async function fetchDetails(){
        try{
          
          const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
          const data = await res.json();
          
          if(data?.data){
            setRecipeDetails(data?.data);
           
           

          }
        }catch(e){
          console.log(e.message)
        }
      }
      fetchDetails();
  },[])
  console.log(recipeDetails);
  return (
    <div className='container'>
        <div className="row">
           <div className="col-lg-6">
              <div className="p-5">
              <img src={recipeDetails?.recipe?.image_url} alt="" className='w-100' />
              </div>
           </div>
           <div className="col-lg-6">
              <div className="p-5">
              <h3 className='fs-5'>{recipeDetails?.recipe?.publisher}</h3>
              <h3 className='fs-5 fw-bolder'>{recipeDetails?.recipe?.title}</h3>
              <button className='btn-primary btn' onClick={()=>handleFavorite(recipeDetails?.recipe)}>
                {favorites.findIndex(item=>item.id ===recipeDetails?.recipe?.id ) !== -1 ?'Remove from favorites' :'Save as favorites'}
              </button>
              <h3>Ingredients</h3>
              {recipeDetails?.recipe?.ingredients.map((ingredient)=>{
                return(
                  <li>{ingredient.quantity} {ingredient.unit} {ingredient.description}</li>
                )
              })}
              </div>
           </div>
        </div>
    </div>
  )
}
