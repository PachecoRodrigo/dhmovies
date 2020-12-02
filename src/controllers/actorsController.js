const {Movie, Genre, Actor} = require("../database/models")
const {Op} = require('sequelize'); 

const controller = {
    /*** SHOW ALL ACTORS ***/
    all:async (req, res)=> {
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
    
    /*** SHOW ONE ACTORS ***/
    detail:async (req, res) => {
        try {
            const oneActor = await Actor.findByPk(req.params.idActor,{include: {all: true}} )
            const Movies = await Movie.findAll();                    
            res.render("actorDetail",{oneActor: oneActor, Movies})
        }catch(error){
            console.log(error)
        }
    },
    
    /*** CREATE NEW ACTORS ***/ 
    new:(req, res, next) =>{

    },
    create:(req, res, next) =>{

    },

    /*** EDIT ACTORS ***/ 
    edit:(req, res, next) =>{

    },
    update:(req, res, next) =>{

    },

    /*** DELETE ACTORS ***/ 
    destroy:(req, res, next) =>{

    },

    /*** SHOW RECOMMENDED ***/
    recommended:(req, res, next) =>{

    },

    /*** SHOW SEARCH ***/ 
    search:(req, res, next) =>{

    }

};

module.exports = controller;