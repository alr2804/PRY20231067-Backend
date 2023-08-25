const {Router} = require('express');
const router = Router();
const {AuthController} = require('../../controllers/auth.controller');


function AuthRoutes(app) {
    app.use(('/auth'), router); 

    router.post('/sign-up', AuthController.SignUp);

    router.post('/sign-in', AuthController.SignIn);
}

module.exports = {AuthRoutes};