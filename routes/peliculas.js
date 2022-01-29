var express = require('express');
var router = express.Router();
var PeliculaModel = require('../models/PeliculaModel');


// Endpoint todas las peliculas
// GET: peliculas
router.get('/', async function(req, res, next) {
    const peliculas = await PeliculaModel.find({});
    let result = (peliculas.length > 0) ? peliculas: {};
    res.json(result);
});


// Endpoint busqueda titulo
// GET: peliculas/titulo/:titulo
router.get('/titulo/:titulo', async function(req, res, next) {
    const pelicula = await PeliculaModel.find({title : req.params.titulo});
    let result = (pelicula.length > 0) ? pelicula: {};
    res.json(result);
});

// Endpoint busqueda id
// GET: peliculas/id/:id
router.get('/id/:id', async function(req, res, next) {
    const pelicula = await PeliculaModel.findById(req.params.id);
    let result = (pelicula !== null) ? pelicula.toJSON(): {};
    res.json(result);
});


module.exports = router;
