const {Router} = require('express');
const router = Router();
const {UserObject3DController} = require('../../controllers/user_object3d.controller');

function UserObjectRoutes(app){
    app.use('/users-object3d', router);

     /**
     * @openapi
     * /users-object3d/{idUser}/{idObject3D}:
     *  get:
     *      tags:
     *          - Users Object
     *      summary: "Obtener usuario y su objecto 3D"
     *      parameters:
     *          - in: path
     *            name: idUser
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *          - in: path
     *            name: idObject3D
     *            description: 'Object3D ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses: 
     *          '200':
     *              description: Obtuvo todos los usuarios con su ob5jecto 3d con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/:_user/:_object3d', UserObject3DController.getUsersObject3D);

    
    /**
     * @openapi
     * /users-object3d:
     *  post:
     *      tags:
     *          - Users Object
     *      summary: "Create a user object"
     *      description: "Crear una relacion usuario y objeto 3D"
     *      requestBody:
     *          description: Objeto modelo para crear una relacion usuario y objeto 3D
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/user_object'
     *      responses:
     *          '200':
     *              description: Post Foro creado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/user_object'
     * 
     */
    router.post('/', UserObject3DController.createUserObject);

    
    // /**
    //  * @openapi
    //  * /users/{id}:
    //  *  get:
    //  *      tags:
    //  *          - Users
    //  *      summary: "Obtener un usuario específico"
    //  *      description: "Obtiene un usuario mediante su ID"
    //  *      parameters:
    //  *          - in: path
    //  *            name: id
    //  *            description: 'User ID'
    //  *            required: true
    //  *            schema:
    //  *              type: string
    //  *      responses:
    //  *          '200':
    //  *              description: Usuario obtenido
    //  *              content:
    //  *                  application/json:
    //  *                      schema:
    //  *                          $ref: '#/components/schemas/user'
    //  *          '404':
    //  *              description: Usuario no encontrado          
    //  * 
    //  */
    // router.get('/:id', UserController.getUser);


    //  /**
    //  * @openapi
    //  * /users/{id}:
    //  *  put:
    //  *      tags:
    //  *          - Users
    //  *      summary: "Actualizar usuario"
    //  *      description: "Actualiza los campos del usuario mediante su ID"
    //  *      parameters:
    //  *          - in: path
    //  *            name: id
    //  *            description: 'User ID'
    //  *            required: true
    //  *            schema:
    //  *              type: string
    //  *      requestBody:
    //  *          description: Campos del usuario
    //  *          content: 
    //  *              application/json:
    //  *                  schema:
    //  *                      $ref: '#/components/schemas/userUpdate'
    //  *      responses:
    //  *          '200':
    //  *              description: Usuario actualizado
    //  *              content:
    //  *                  application/json:
    //  *                      schema:
    //  *                          $ref: '#/components/schemas/userUpdate'
    //  *          
    //  * 
    //  */
    // router.put('/:id', UserController.updateUser);


    // /**
    //  * @openapi
    //  * /users/{id}:
    //  *  delete:
    //  *      tags:
    //  *          - Users
    //  *      summary: "Borrar usuario"
    //  *      description: "Borra un usuario mediante su ID"
    //  *      parameters:
    //  *          - in: path
    //  *            name: id
    //  *            description: 'User ID'
    //  *            required: true
    //  *            schema:
    //  *              type: string
    //  *      responses:
    //  *          '200':
    //  *              description: Usuario eliminado
    //  *              content:
    //  *                  application/json:
    //  *                      schema:
    //  *                          $ref: '#/components/schemas/user'
    //  *          
    //  *      security:
    //  *         - bearerAuth: []
    //  */
    // router.delete('/:id', UserController.deleteUser);
}

module.exports = {UserObjectRoutes};