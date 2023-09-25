const {Router} = require('express');
const router = Router();
const {PlaceController} = require('../../controllers/place.controller');

function PlaceRoutes(app){
    app.use('/places', router);


     /**
     * @openapi
     * /places:
     *  get:
     *      tags:
     *          - Place
     *      summary: "Obtener todos los lugares"
     *      responses: 
     *          '200':
     *              description: Obtuvo todos los lugares con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', PlaceController.getPlaces);

    
    /**
     * @openapi
     * /places:
     *  post:
     *      tags:
     *          - Place
     *      summary: "Create place"
     *      description: "Crear un lugar"
     *      requestBody:
     *          description: Objeto modelo para crear un lugar
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/place'
     *      responses:
     *          '200':
     *              description: Lugar creado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/place'
     * 
     */
    router.post('/', PlaceController.createPlace);

    
     /**
     * @openapi
     * /places/{id}:
     *  put:
     *      tags:
     *          - Place
     *      summary: "Actualizar lugar"
     *      description: "Actualiza los campos del lugar mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Place ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Campos del lugar
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/place'
     *      responses:
     *          '200':
     *              description: Lugar actualizado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/place'
     *          
     * 
     */
    router.put('/:id', PlaceController.updatePlace);

    
    /**
     * @openapi
     * /places/{id}:
     *  delete:
     *      tags:
     *          - Place
     *      summary: "Borrar lugar"
     *      description: "Borra un lugar mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Place ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Lugar eliminado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/place'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', PlaceController.deletePlace);
}

module.exports = {PlaceRoutes};