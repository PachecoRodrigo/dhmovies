const {Movie, Genre, Actor} = require("../database/models")
const {Op} = require('sequelize'); 

const controller = {
    /*** SHOW ALL ACTORS */
    all:async (req, res, next)=> {
        try {
        const actors = await Actor.findAll({include: {all: true},
            order: [
                ["first_name", "ASC"]
            ],
        })        
        res.render("actors",{actors: actors})
        }catch(error){
            console.log(error)
        }
    },
    
    /*** SHOW ONE ACTORS */
    detail:async (req, res, next) => {
        try {
            const oneActor = await Actor.findByPk(req.params.idActor,{include: {all: true}} )
            const Movies = await Movie.findAll();
            res.render("actorsDetail",{oneActor: oneActor, Movies})
        }catch(error){
            console.log(error)
        }
    },
    
    /*** SHOWING ACTING */ 
    acting: async (req, res, next)=> {
        try {
        const actors = await Actor.findAll({include: {all: true}})
        const movies = await Movie.findAll({include: {all: true}})
        res.render("acting",{actors: actors, movies: movies})
        }catch(error){
            console.log(error)
        }
    },
    store:async (req, res, next)=>{
        try {
            const movieId = req.body.movies; 
            const updateMovie = await Movie.findByPk(movieId,{include: {all: true}});
            await updateMovie.addActores(req.body.actores);
            res.redirect("/movies")
        }catch(error){
            console.log(error)
        }
    },
        
    /*** CREATE NEW ACTORS */ 
    new:(req, res, next) =>{
        
    },
    create:(req, res, next) =>{
        
    },

    /*** EDIT ACTORS */ 
    edit:(req, res, next) =>{
        
    },
    update:(req, res, next) =>{
        
    },
    
    /*** DELETE ACTORS */ 
    destroy:(req, res, next) =>{
        
    },
    
    /*** SHOW RECOMMENDED */
    discover:(req, res, next) =>{
        
    },
    
    /*** SHOW SEARCH */ 
    search:(req, res, next) =>{
        
    }
    
};

module.exports = controller;