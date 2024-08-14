import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export default function GlobalState({children}){
    const [searchParam,setSearchParam] = useState('');
    const [loading,setLoading] = useState(false);
    const [recipes, setRecipes] = useState(null);
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [favorites, setFavorites] = useState([]);
    async function handleSubmit(event){
        event.preventDefault()
        try{
            setLoading(true);
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();
            if(data){
                setRecipes(data);
                setLoading(false);
            }
        }catch(e){
            console.log(e.message)
        }
    }
    function handleFavorite(currentItem){
            console.log(currentItem.id)
            const cpyFavorite = [...favorites];
            const index = cpyFavorite.findIndex(item=>item.id === currentItem.id);
            if(index ===-1){
                cpyFavorite.push(currentItem);
            }else{
                cpyFavorite.splice(index);
            }
            console.log(cpyFavorite);
            setFavorites(cpyFavorite);
    }
    return <GlobalContext.Provider 
    value={{searchParam,setSearchParam,handleSubmit,recipes, setRecipes, recipeDetails, setRecipeDetails, handleFavorite,favorites,setFavorites}}>
        {children}</GlobalContext.Provider>
}