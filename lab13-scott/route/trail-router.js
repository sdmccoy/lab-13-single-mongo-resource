'use strict';

const jsonParser = require('body-parser').json();
const {Router} = require('express');

const Trail = require('../model/trail.js');


const trailRouter = module.exports = new Router();

trailRouter.post('/api/trails', jsonParser, (req, res, next) => {
  console.log('Hit POST /api/trails route');
  console.log('req.body: ', req.body);
  new Trail(req.body)
  .save()
  .then(trail => res.json(trail))
  .catch(next);
});
