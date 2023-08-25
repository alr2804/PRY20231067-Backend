const {Router} = require('express');
const router = Router();
const {UserController} = require('../../controllers/user.controller');

function UserRoutes(app){
    app.use('/users', router);

    router.get('/', UserController.getUsers);
}

module.exports = {UserRoutes};