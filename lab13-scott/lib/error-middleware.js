'use strict';

// const errorHandler = module.exports = {};

module.exports = (err, req, res, next) => {
  console.log('Hit error handler');
  console.error(err.message);
  //400 error if bad content
  if(err.message.toLowerCase().includes('validation failed')) return res.sendStatus(400);
  console.log('break point 2');
  //404 error if bad id
  if(err.message.toLowerCase().includes('objectid failed')) return res.sendStatus(404);
  console.log('break point 3');
  //409 error if duplicate content
  if(err.message.toLowerCase().includes('duplicate key')) return res.sendStatus(409);
};
