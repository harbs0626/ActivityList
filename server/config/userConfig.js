let userModel = require('../models/user');
let User = userModel.User;

const SetPassport = (props) => {
    props.passport.use(User.createStrategy());
    props.passport.serializeUser(User.serializeUser());
    props.passport.deserializeUser(User.deserializeUser());

    let jwtOptions = {};
    jwtOptions.jwtFromRequest = props.extractJWT.fromAuthHeaderAsBearerToken();
    jwtOptions.secretOrKey = props.dbSecret;

    let strategy = new props.strategyJWT(jwtOptions, (jwt_payload, done) => {
       User.findById(jwt_payload.id)
        .then(user => {
            return done(null, user);
        })
        .catch(err => {
            return done(err, false);
        }); 
    });

    props.passport.use(strategy);
}

module.exports = { SetPassport };
