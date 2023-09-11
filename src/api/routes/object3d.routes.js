const {Router} = require('express');
const router = Router();
const {Object3DController} = require('../../controllers/object3d.controller');

function Object3DRoutes(app){
    app.use('/objects3d', router);

    
     /**
     * @openapi
     * /objects3d:
     *  get:
     *      tags:
     *          - Object 3D
     *      summary: "Obtener todos los objectos 3D"
     *      responses: 
     *          '200':
     *              description: Obtuvo todos los objetos 3D con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', Object3DController.getObjects3D);

    
    /**
     * @openapi
     * /objects3d/{id}:
     *  get:
     *      tags:
     *          - Object 3D
     *      summary: "Obtener un object 3D específico"
     *      description: "Obtiene un object 3D mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Object 3D ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Object 3D obtenido
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/object3d'
     *          '404':
     *              description: Usuario no encontrado          
     * 
     */
    router.get('/:id', Object3DController.getObject3DByID);

    /**
     * @openapi
     * /objects3d:
     *  post:
     *      tags:
     *          - Object 3D
     *      summary: "Create object 3D"
     *      description: "Crear un object 3D"
     *      requestBody:
     *          description: Objeto modelo para crear un object 3D
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/object3d'
     *      responses:
     *          '200':
     *              description: Object 3D creado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/object3d'
     * 
     */
    router.post('/', Object3DController.createObject3D);

    
     /**
     * @openapi
     * /objects3d/{id}:
     *  put:
     *      tags:
     *          - Object 3D
     *      summary: "Actualizar object 3D"
     *      description: "Actualiza los campos del object 3D mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Object 3D ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Campos del object 3D
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/object3d'
     *      responses:
     *          '200':
     *              description: Object 3D actualizado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/object3d'
     *          
     * 
     */
    router.put('/:id', Object3DController.updateObject3D);

    
    /**
     * @openapi
     * /objects3d/{id}:
     *  delete:
     *      tags:
     *          - Object 3D
     *      summary: "Borrar object 3D"
     *      description: "Borra un object 3D mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Object 3D ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Object 3D eliminado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/object3d'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', Object3DController.deleteObject3D);
}

module.exports = {Object3DRoutes};