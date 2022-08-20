const { Recipe, Diettype } = require('../db')
const axios = require('axios')
const { API_KEY } = process.env


async function getApi() {
    try {
        const infoApi = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const apiData = infoApi.data?.results.map((r)=>{
            return {
                id: r.id,
                name: r.title,
                resumen: r.summary,
                nivelSalud: r.healthScore,
                imagen: r.image,
                pasos: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps? r.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):''),
                dieta: r.diets
            }
        })
        return apiData
    } catch(err){
        console.log(err)
    }
}


const getDbInfo = async () =>{
    return await Recipe.findAll({
        include:{
            as: "dieta",
            model: Diettype,
            attributes: ["name"],
            through: {
                attributes: []
            },
        },
    }) 
    // if(data.length === 0){
    //     data = 'No existen datos en la base de datos'
    //     return data
    // }else{
    //     const ReceDb = data.map((r) =>{
    //         return{
                
    //             dieta: r.diets.map(d =>{
    //                 return d.name
    //             })
    //         }
    //     })
    //     return ReceDb
    // }
}


const getAllInfo = async () =>{
    const apiInfo = await getApi()
    const dbInfo = await getDbInfo()
    const infoTotal = await apiInfo.concat(dbInfo)
    
    return infoTotal
}





module.exports = {
      getApi,
      getAllInfo
 }


