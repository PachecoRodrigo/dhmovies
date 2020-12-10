/************ Requir bodyements *************/
const {Op} = require('sequelize');
const moment = require('moment');
let {check, validationResult, body} = require('express-validator');
const {Movie, Genre, Actor} = require("../database/models")

const controller = {
  /*** SHOW ALL GENRES */
  all:async (req, res)=> {
    try {
    const genres = await Genre.findAll({include: {all: true},
      order: [
        ["name", "DESC"]
      ],
    })
    res.render("genres",{genres: genres})
    }catch(error){
      console.log(error)
    }
  },
  
  /*** SHOW ONE GENRE */
  detail:async (req, res) => {
    try {
      const oneGenre = await Genre.findByPk(req.params.idGenre,{include: {all: true}} )
      const Movies = await Movie.findAll();
      res.render("genresDetail",{oneGenre: oneGenre, Movies})
    }catch(error){
      console.log(error)
    }
  },
}

module.exports = controller