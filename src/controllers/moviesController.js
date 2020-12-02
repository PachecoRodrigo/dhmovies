/************ Requir bodyements *************/
const {Op} = require('sequelize'); 
const moment = require('moment');
let {check, validationResult,} = require('express-validator'); 

/********* Requirements Models ***********/
const {Movie, Genre, Actor} = require('../database/models')

const controller = {
    /*** SHOW ALL MOVIE ***/
    all: async (req, res)=> {
        try {
            const movies = await Movie.findAll({include: {all:true}});
            // console.log(movies);
            res.render('movies', {movies:movies});
        }catch(error){
            console.log(error);
        }
    },
        
    /*** SHOW ONE MOVIE ***/
    detail: async (req, res, next) =>{
        try {
            const oneMovie = await Movie.findByPk(req.params.idMovie,{include: {all: true}} )
            const actores = await Actor.findAll();                    
            res.render("moviesDetail",{oneMovie: oneMovie, actores})
        }catch(error){
            console.log(error)
        }
    },
    
    /*** SHOW NEW MOVIES ***/ 
    new:async (req, res, next) => {
        try {
            const movies = await Movie.findAll({
                order: [
                    ["release_date", "DESC"]
                ],
                limit: 5
            })            
            res.render("moviesNew",{movies: movies})    
        }catch(error){
            console.log(error)
        }    
    },
    
    /*** SHOW SEARCH ***/ 
    search:async (req, res) => {
        try {
            let peliBuscada = req.body.pelicula;
            let orden = req.body.Orden;
            const movies = await Movie.findAll({
                where: {
                    title: { [Op.like] : "%" + peliBuscada +"%" },                   
                },
                order: [
                    [orden, "DESC"]
                ]                    
            })
            console.log(req.body)             
            res.render("moviesSearch",{movies: movies, orden})        
        }catch(error){
            console.log(error)
        }        
    },
    
    /*** SHOW RECOMMENDED ***/
    recommended:async (req, res) => {
        try {
            const movies = await Movie.findAll({
                where: { 
                    rating: {[Op.gte] : 8}
                },
                order: [
                    ["rating", "DESC"]
                ]       
            })         
            res.render("moviesRecommended",{movies: movies})    
            }catch(error){
                console.log(error)
            }
    },

    /*** CREATE NEW MOVIES ***/ 
    create:(req, res, next) =>{
        
    },

    /*** EDIT MOVIE ***/ 
    edit:(req, res, next) =>{

    },
    update:(req, res, next) =>{

    },
    
    /*** DELETE MOVIE ***/
    destroy:(req, res, next) =>{
    },
    
    
}

module.exports = controller