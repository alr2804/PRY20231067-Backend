const {Router} = require('express');
const router = Router();
const {PostForoController} = require('../../controllers/postForo.controller');

function PostForoRoutes(app){
    app.use('/postsForo', router);

    
     /**
     * @openapi
     * /postsForo:
     *  get:
     *      tags:
     *          - Post Foro
     *      summary: "Obtener todas las publicaciones del foto"
     *      responses: 
     *          '200':
     *              description: Obtuvo todas las publicaciones con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', PostForoController.getPostsForo)

    
    /**
     * @openapi
     * /postsForo/{id}:
     *  get:
     *      tags:
     *          - Post Foro
     *      summary: "Obtener una publicacion del foro en específico"
     *      description: "Obtiene una publicacion del foro mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Post Foro ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Post Foro obtenido
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/postForo'
     *          '404':
     *              description: Post Foro no encontrada
     * 
     */
    router.get('/:id', PostForoController.getPostForoByID)

    /**
     * @openapi
     * /postsForo/getPostForoByuserID/{id}:
     *  get:
     *      tags:
     *          - Post Foro
     *      summary: "Obtener publicaciones por ID del usuario"
     *      description: "Obtiene publicaciones por ID del usuario"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: User obtenido
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/postForo'
     *          '404':
     *              description: Publicaciones no encontradas
     * 
     */
    router.get('/getPostForoByuserID/:id', PostForoController.getPostForoByuserID)

    /**
     * @openapi
     * /postsForo:
     *  post:
     *      tags:
     *          - Post Foro
     *      summary: "Create a post foro"
     *      description: "Crear una publicacion para el foro"
     *      requestBody:
     *          description: Objeto modelo para crear una publicacion
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/postForo'
     *      responses:
     *          '200':
     *              description: Post Foro creado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/postForo'
     * 
     */
    router.post('/', PostForoController.createPostForo);

    
     /**
     * @openapi
     * /postsForo/{id}:
     *  put:
     *      tags:
     *          - Post Foro
     *      summary: "Actualizar una publicacion del foro"
     *      description: "Actualiza los campos de la publicación mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Post Foro ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Campos de la publicacion
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/postForoUpdate'
     *      responses:
     *          '200':
     *              description: Publicacion actualizada
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/postForo'
     *          
     * 
     */
    router.put('/:id', PostForoController.updatePostForo);

    
    /**
     * @openapi
     * /postsForo/{id}:
     *  delete:
     *      tags:
     *          - Post Foro
     *      summary: "Borrar una publicacion del foro"
     *      description: "Borra una publicacion mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Post Foro ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Publicacion eliminada
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/postForo'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', PostForoController.deletePostForo);
}

module.exports = {PostForoRoutes};