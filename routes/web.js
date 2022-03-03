const express = require('express')
const route = express.Router() 

route.get('/', (req, res) => res.res('Hello Web!'));
module.exports=route;

