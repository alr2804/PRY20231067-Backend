const {Router} = require('express');
const router = Router();
const {SouvenirController} = require('../../controllers/souvenir.controller');

function SouvenirRoutes(app){
    app.use('/souvenirs', router);

    router.get('/', SouvenirController.getSouvenirs);
    router.get('/:id', SouvenirController.getSouvenirByID);
    router.post('/', SouvenirController.createSouvenir);
    router.put('/:id', SouvenirController.updateSouvenir);
    router.delete('/:id', SouvenirController.deleteSouvenir);
}

module.exports = {SouvenirRoutes};