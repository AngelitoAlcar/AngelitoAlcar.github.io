//*? BACKEND

const { Router } = require('express');
const { Recipe, Diettype } = require('../db')
const { getAllInfo  } = require('../controllers/ApiData')
// Importar todos los routers;

 
const router = Router();

//*! query y todas las recetas

router.get("/recipes", async(req, res, next)=>{
   try {
       const { name } = req.query
       const recetas = await getAllInfo();
       if(name){
           const nombreQuery = recetas.filter(rec => rec.name.toLowerCase().includes(name.toLowerCase()))
           if(nombreQuery.length > 0){
               res.status(200).json(nombreQuery)
         }else{
             res.status(404).send("No se encontró la receta con ese nombre")
         }
       }else{
           res.send(recetas)
       }
       
   } catch (error) {
       next(error)
   }
});



//*! id
router.get('/recipes/:id', async(req, res, next) =>{
    try {
        const { id } = req.params
        const recetaId = await getAllInfo()

        if (id) {
            const recipeId = recetaId.filter(el => el.id.toString() === id.toString());
            if (recipeId.length > 0) res.status(200).send(recipeId)
            else res.status(404).json("No recipes with that ID" )
        }
    } catch (error) {
        next(error)
    }
})

// async function crearID(){
//     const allRecipes = await Recipe.findAll();
//     const allID = allRecipes.map(r => { return r.id })
    
//     while(allID.includes(id)){
//         id = Math.floor(Math.random()123456)
//     }
//     return id
// };

//*! post
router.post('/recipes', async(req, res, next) =>{
    try {
        const { name, resumen, nivelSalud, pasos, imagen, dieta } = req.body
        let id = Math.floor(Math.random()*12345)
        const recipeCreated = await Recipe.create({ 
             id,
             name,
             resumen,
             nivelSalud,
             pasos,
             imagen
        })
    //     tipoDietas.map(async(diet) => {const dieta = await Dietas.findOne({ where: { name: diet }})
    // await receta.addDietas(dieta); })
        //   dieta.map(async(d) =>{const recetaC = await Diettype.findOne({
        //         where:{
        //             name: d
        //         }
        //     })
        // })
        const recetaC = await Diettype.findAll({
            where:{
                name: dieta
            }
        })
        // console.log(Object.getPrototypeOf(recipeCreated))
        await recipeCreated.addDietum(recetaC)
        res.status(200).send('¡Receta creada exitosamente!')


    } catch (error) {
        next(error)
    }
})




router.get('/diets', async (req, res, next) =>{
    const tipoDeDietas = ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan", "paleolithic", "primal", "whole 30",
    "fodmap friendly", "vegetarian", "pescatarian", "ketogenic"];
    try {
        tipoDeDietas.forEach(diet =>{
            Diettype.findOrCreate({
                where: {
                    name: diet
                }
            })
        })
        const dietas = await Diettype.findAll()
        res.status(200).send(dietas)
    } catch (error) {
        next(error)
    }

})


// Configurar los routers






module.exports = router;
