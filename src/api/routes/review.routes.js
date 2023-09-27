const {Router} = require('express');
const router = Router();
const {ReviewController} = require('../../controllers/review.controller');

function ReviewRoutes(app){
    app.use('/reviews', router);


     /**
     * @openapi
     * /reviews:
     *  get:
     *      tags:
     *          - Review
     *      summary: "Obtener todas las reseñas"
     *      responses: 
     *          '200':
     *              description: Obtuvo todas las reseñas con éxito
     *          '400':
     *              description: Ocurrió un error 400 (Bad Request)
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', ReviewController.getReviews);


     /**
     * @openapi
     * /reviews/getReviewByPlaceID/{id}:
     *  get:
     *      tags:
     *          - Review
     *      summary: "Obtener reseñas por el ID del lugar"
     *      description: "Obtener reseñas por el ID del lugar"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Place ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Reseña obtenida
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/review'
     *          '404':
     *              description: Reseña no encontrada
     * 
     */
    router.get('/getReviewByPlaceID/:id', ReviewController.getReviewByPlaceID);

    
    /**
     * @openapi
     * /reviews:
     *  post:
     *      tags:
     *          - Review
     *      summary: "Create review"
     *      description: "Crear una reseña"
     *      requestBody:
     *          description: Objeto modelo para crear una reseña
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/review'
     *      responses:
     *          '200':
     *              description: Reseña creada
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/review'
     * 
     */
    router.post('/', ReviewController.createReview);

    
     /**
     * @openapi
     * /reviews/{id}:
     *  put:
     *      tags:
     *          - Review
     *      summary: "Actualizar reseña"
     *      description: "Actualiza los campos del lugar mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Review ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Campos del lugar
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/reviewUpdate'
     *      responses:
     *          '200':
     *              description: Lugar actualizado
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/review'
     *          
     * 
     */
    router.put('/:id', ReviewController.updateReview);

    
    /**
     * @openapi
     * /reviews/{id}:
     *  delete:
     *      tags:
     *          - Review
     *      summary: "Borrar reseña"
     *      description: "Borra una reseña mediante su ID"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Review ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Reseña eliminada
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/reseña'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', ReviewController.deleteReview);
}

module.exports = {ReviewRoutes};