const {Router} = require('express');
const router = Router();
const {Object3DController} = require('../../controllers/object3d.controller');

function Object3DRoutes(app){
    app.use('/objects3d', router);

    router.get('/', Object3DController.getObjects3D);
    router.get('/:id', Object3DController.getObject3DByID);
    router.post('/', Object3DController.createObject3D);
    router.put('/:id', Object3DController.updateObject3D);
    router.delete('/:id', Object3DController.deleteObject3D);
}

module.exports = {Object3DRoutes};