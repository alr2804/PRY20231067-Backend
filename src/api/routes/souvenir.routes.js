const {Router} = require('express');
const router = Router();
const {SouvenirController} = require('../../controllers/souvenir.controller');

function SouvenirRoutes(app){
    app.use('/souvenirs', router);

    
     /**
     * @openapi
     * /souvenirs:
     *  get:
     *      tags:
     *          - Souvenir
     *      summary: "Obtener todos los souvenir"
     *      responses: 
     *          '200':
     *              description: Obtuvo todos los souvenirs con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', SouvenirController.getSouvenirs);

    
    /**
     * @openapi
     * /souvenirs/{id}:
     *  get:
     *      tags:
     *          - Souvenir
     *      summary: "Obtener un souvenir específico"
     *      description: "Obtiene un souvenir mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Souvenir ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Souvenir obtenido
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/souvenir'
     *          '404':
     *              description: Souvenir no encontrado          
     * 
     */
    router.get('/:id', SouvenirController.getSouvenirByID);

    /**
     * @openapi
     * /souvenirs:
     *  post:
     *      tags:
     *          - Souvenir
     *      summary: "Create souvenir"
     *      description: "Crear un souvenir"
     *      requestBody:
     *          description: Objeto modelo para crear un souvenir
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/souvenir'
     *      responses:
     *          '200':
     *              description: Souvenir creado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/souvenir'
     * 
     */
    router.post('/', SouvenirController.createSouvenir);

    
     /**
     * @openapi
     * /souvenirs/{id}:
     *  put:
     *      tags:
     *          - Souvenir
     *      summary: "Actualizar souvenir"
     *      description: "Actualiza los campos del souvenir mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Souvenir ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Campos del souvenir
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/souvenir'
     *      responses:
     *          '200':
     *              description: Souvenir actualizado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/souvenir'
     *          
     * 
     */
    router.put('/:id', SouvenirController.updateSouvenir);

    
    /**
     * @openapi
     * /souvenirs/{id}:
     *  delete:
     *      tags:
     *          - Souvenir
     *      summary: "Borrar souvenir"
     *      description: "Borra un souvenir mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Souvenir ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Souvenir eliminado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/souvenir'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', SouvenirController.deleteSouvenir);
}

module.exports = {SouvenirRoutes};