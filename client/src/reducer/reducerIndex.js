import {GET_ALL_RECIPES, 
    DIET_TYPE_FILTER, 
    FILTRO_CREACION, 
    ALPHABETICAL_SORT,
    SCORE_SORT, 
    SEARCH_RECIPE,
    GET_DIET,
    GET_RECIPE_DETAILS,
    RESET_DETAIL} from '../actions/actions' 
  
  
  const initialState = {
      recetas: [],
      recetasCopy: [],
      detalles: [],
  }
  
  export default function rootReducer(state = initialState, action){
    switch (action.type) {
      case GET_ALL_RECIPES: 
        return{
          ...state, 
          recetas: action.payload,
          recetasCopy: action.payload
        }
        case SEARCH_RECIPE:
          return{
            ...state,
            recetas: action.payload
          }
  
          case "POST_RECETA":
            return{
              ...state
            }
  
            case GET_DIET:
              return{
                ...state,
                diets: action.payload
              }
  
            case DIET_TYPE_FILTER: 
              const todasRecetas = state.recetasCopy
              const filtroDieta = todasRecetas.filter(r => r.dieta?.some(d => d === action.payload))
  
              return{
                ...state,
                recetas: filtroDieta
              }
  
  
              case FILTRO_CREACION:
                const dFilter = state.recetasCopy
                const dataFiltrada = action.payload === 'created' ? dFilter.filter(f => f.creadoEnDb) : dFilter.filter(fil => !fil.creadoEnDb)
                console.log(dataFiltrada)
                return{
                  ...state,
                  recetas: action.payload === "all" ? state.recetasCopy : dataFiltrada
                }
                case ALPHABETICAL_SORT: 
                  const array = action.payload === "asc" ? state.recetas.sort(function(a, b){
                    if(a.name > b.name){
                      return 1
                    }
                    if(b.name > a.name){
  
                      return -1
                    }
                    return 0
                  }) :
                  state.recetas.sort(function(a, b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                      return -1
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
  
                      return 1
                    }
                    return 0
                  })
                   console.log(array)
  
                  return{
                    ...state,
                    recetas: array
                  }
  
                  case SCORE_SORT:  
                    let sortedArr = action.payload === 'down' ? state.recetas.sort(function (a, b) {
                        if (a.nivelSalud > b.nivelSalud) {
                            return 1
                        }
                        if (b.nivelSalud > a.nivelSalud) {
                            return -1
                        }
                        return 0
                    }) :
                        state.recetas.sort(function (a, b) {
                            if (a.nivelSalud > b.nivelSalud) {
                                return -1
                            }
                            if (b.nivelSalud > a.nivelSalud) {
                                return 1
                            }
                            return 0
                        })
                    return {
                        ...state,
                        recetas: sortedArr
                    }
                    case GET_RECIPE_DETAILS:
                      return{
                        ...state,
                        detalles: action.payload
                      }
                
  
                      case RESET_DETAIL:
  
                        const reseteo = []
                        console.log(reseteo)
          
                          return{
                            ...state,
                            detalles: reseteo
                          }
                   
          default:
            return {...state}
        }
  };