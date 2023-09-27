const {Router} = require('express');
const router = Router();
const {NewController} = require('../../controllers/news.controller');

function NewRoutes(app){
    app.use('/news', router);

    
     /**
     * @openapi
     * /news:
     *  get:
     *      tags:
     *          - News
     *      summary: "Obtener todas las noticias"
     *      responses: 
     *          '200':
     *              description: Obtuvo todos los souvenirs con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', NewController.getNews)

    
    /**
     * @openapi
     * /news/{id}:
     *  get:
     *      tags:
     *          - News
     *      summary: "Obtener una noticia en específico"
     *      description: "Obtiene un souvenir mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'New ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Noticia obtenida
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/new'
     *          '404':
     *              description: Noticia no encontrada
     * 
     */
    router.get('/:id', NewController.getNewByID)

    /**
     * @openapi
     * /news:
     *  post:
     *      tags:
     *          - News
     *      summary: "Create new"
     *      description: "Crear una noticia"
     *      requestBody:
     *          description: Objeto modelo para crear una noticia
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/new'
     *      responses:
     *          '200':
     *              description: Noticia creada
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/new'
     * 
     */
    router.post('/', NewController.createNew);

    
     /**
     * @openapi
     * /news/{id}:
     *  put:
     *      tags:
     *          - News
     *      summary: "Actualizar noticia"
     *      description: "Actualiza los campos de la noticia mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'New ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Campos de la noticia
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/new'
     *      responses:
     *          '200':
     *              description: Noticia actualizada
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/new'
     *          
     * 
     */
    router.put('/:id', NewController.updateNew);

    
    /**
     * @openapi
     * /news/{id}:
     *  delete:
     *      tags:
     *          - News
     *      summary: "Borrar noticia"
     *      description: "Borra una noticia mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'New ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Noticia eliminada
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/new'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', NewController.deleteNew);
}

module.exports = {NewRoutes};