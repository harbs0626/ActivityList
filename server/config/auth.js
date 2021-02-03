let session = require('express-session');

let passport = require('passport');
let passportJWT = require('passport-jwt');

let strategyJWT = passportJWT.Strategy;
let extractJWT = passportJWT.ExtractJwt;

let passportLocal = require('passport-local');
let strategyLocal = passportLocal.Strategy;

let flash = require('connect-flash');

module.exports = { 
    session, 
    passport, 
    passportJWT, 
    strategyJWT, 
    extractJWT, 
    passportLocal, 
    strategyLocal, 
    flash }
