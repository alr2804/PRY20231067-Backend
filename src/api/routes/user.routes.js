const {Router} = require('express');
const router = Router();
const {UserController} = require('../../controllers/user.controller');

function UserRoutes(app){
    app.use('/users', router);

     /**
     * @openapi
     * /users:
     *  get:
     *      tags:
     *          - Users
     *      summary: "Obtener todos los usuarios"
     *      responses: 
     *          '200':
     *              description: Obtuvo todos los usuarios con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', UserController.getUsers);

    
    /**
     * @openapi
     * /users/{id}:
     *  get:
     *      tags:
     *          - Users
     *      summary: "Obtener un usuario específico"
     *      description: "Obtiene un usuario mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Usuario obtenido
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/user'
     *          '404':
     *              description: Usuario no encontrado          
     * 
     */
    router.get('/:id', UserController.getUser);


     /**
     * @openapi
     * /users/{id}:
     *  put:
     *      tags:
     *          - Users
     *      summary: "Actualizar usuario"
     *      description: "Actualiza los campos del usuario mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Campos del usuario
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/userUpdate'
     *      responses:
     *          '200':
     *              description: Usuario actualizado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/userUpdate'
     *          
     * 
     */
    router.put('/:id', UserController.updateUser);


    /**
     * @openapi
     * /users/{id}:
     *  delete:
     *      tags:
     *          - Users
     *      summary: "Borrar usuario"
     *      description: "Borra un usuario mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Usuario eliminado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/user'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', UserController.deleteUser);
}

module.exports = {UserRoutes};