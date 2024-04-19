// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const express = require("express");
const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { getPlanets, getPlanet, createPlanet, deletePlanet } = require('../controllers/planet.controller')

router.get('/', getPlanets);
router.get('/:id', getPlanet);
router.post('/', createPlanet);
router.post('/:id', deletePlanet);

// eslint-disable-next-line no-undef
module.exports = router;
