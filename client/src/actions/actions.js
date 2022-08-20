import axios from 'axios';


export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const DIET_TYPE_FILTER = "DIET_TYPE_FILTER";
export const FILTRO_CREACION = "FILTRO_CREACION";
export const ALPHABETICAL_SORT = "ALPHABETICAL_SORT";
export const SCORE_SORT = "SCORE_SORT";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const GET_DIET = "GET_DIET";
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS";
export const RESET_DETAIL = "RESET_DETAIL";
 



export function getAllRecipes(){
    return function(dispatch){
         axios.get(`http://localhost:3001/recipes`)
        .then(recetas =>
            dispatch({
                type: "GET_ALL_RECIPES",
                payload: recetas.data
            })
        )
        .catch(error => console.log(error))
    }
}


export function filterByDiet(payload){
    console.log(payload)
    return{
        type: "DIET_TYPE_FILTER",
        payload: payload
    }
}



export function getRecipeDetail(id){
    return async function(dispatch){
        try {
            const detalle = await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch({
                type: "GET_RECIPE_DETAILS",
                payload: detalle.data
            })
        } catch (error) {
            console.log(error)
        } 
    }
}


export function recipeByName(name){
    return async function(dispatch){
        try {
            const busqueda = await axios.get(`http://localhost:3001/recipes?name=${name}`)
            return dispatch({
                type: "SEARCH_RECIPE",
                payload: busqueda.data
            })
        } catch (error) {
            alert("Receta inexistente")
        }
    }
}


export function geDieta(){
    return async function(dispatch){
        try {
            const dieta = axios.get(`http://localhost:3001/diets`)
            return dispatch({
                type: "GET_DIET",
                payload: dieta.data
            })
        } catch (error) {
            
        }
    }
}


export function postReceta(payload){
    return async function(dispatch){
        const posteo = await axios.post(`http://localhost:3001/recipes`, payload)
        return posteo
    }
}




export function recipeCreated(payload){
    return{
        type: 'FILTRO_CREACION',
        payload
    }
}



export function alphabeticSort(payload){
    return{
        type: "ALPHABETICAL_SORT",
        payload: payload
    }   
}



export function scoreSort(payload){
    return{
        type: "SCORE_SORT",
        payload: payload
    }
}


export function resetDetail(){
    return{
        type: "RESET_DETAIL",
    }
}