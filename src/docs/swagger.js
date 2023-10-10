const swaggerJSDoc = require('swagger-jsdoc');

const authSchema = require('./schemas/auth.schema');
const userSchema = require('./schemas/user.schema');
const object3dSchema = require('./schemas/object3d.schema');
const souvenirSchema = require('./schemas/souvenir.schema');
const placeSchema = require('./schemas/place.schema')
const reviewSchema = require('./schemas/review.schema')
const newSchema = require('./schemas/new.schema')
const postForoSchema = require('./schemas/postForo.schema')
const userObjectSchema = require('./schemas/user_object.schema')




const swaggerDefinition = {
    openapi: "3.0.1",
    info: {
        title: "API AR Documentation",
        description: `Documentación de los endpoints utilizados en la aplicación de Realidad Aumentada.`,
        version: "1.0.0"
    },
    servers: [
        {
            url: process.env.API_RENDER_URL || "http://localhost:3000"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: 'JWT',
            }
        },
        schemas: {
            // AUTH
            authSignUp: authSchema.authSignUp,
            authSignIn: authSchema.authSignIn, 
            // USER
            user: userSchema.user,
            userUpdate: userSchema.userUpdate,
            // OBJECT 3D
            object3d: object3dSchema.object3d,
            // SOUVENIR
            souvenir: souvenirSchema.souvenir,
            //PLACE
            place: placeSchema.place,
            //REVIEW
            review: reviewSchema.review,
            reviewUpdate: reviewSchema.reviewUpdate,
            // NEWS
            new: newSchema.new,
            // POST FORO
            postForo: postForoSchema.postForo,
            postForoUpdate: postForoSchema.postForoUpdate,
            // USER OBJECT 3D
            user_object: userObjectSchema.user_object



           
        }
    }
}

const swaggerOptions = {
    swaggerDefinition,
    apis: ["./src/api/routes/*.js"]
}

module.exports = swaggerJSDoc(swaggerOptions);