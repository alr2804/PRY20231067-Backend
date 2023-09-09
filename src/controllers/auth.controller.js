const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const SignIn = async(req, res) => {
    try{
        //Primero vemos si existe un usuario con ese username
        const {username, password} = req.body;
        const userFound = await User.findOne({username: username}).select('+password');
        
        //Si no existe ese usuario con username, devuelve error
        if(!userFound) {
            return res.status(404).send({message: "User not found"})
        } 
        
        //Usuario si existe, entonces comparamos la contraseña que llega del cliente con la de la bd
        const passwordsCompared = await bcrypt.compare(password, userFound.password);
        console.log('aqui')

        //Esto es si no coinciden las contraseñas
        if(!passwordsCompared){
            return res.status(400).send({message: "Invalid password"})
        }

        //Creamos un token para el cliente y se lo devolvemos
        const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET_KEY);

        res.json({data:userFound, token});
    } catch(err) {
        return res.status(400).send({error:err})
    }
}

const SignUp = async(req, res) => {
    try{
        console.log(req.body)
        const {firstname , lastname, username, email, password } = req.body;

        //hash password
        const salt = await bcrypt.genSalt(10);
        //Encriptamos la contraseña
        const passwordEncrypt = await bcrypt.hash(password, salt)

        //Se crea el usuario
        const newUser = await new User({
            firstname,
            lastname,
            username,
            email, 
            password: passwordEncrypt, 
        });

        //Guardamos el usuario en la bd
        const userSaved = await newUser.save();

        console.log('userSaved', userSaved);
        //Se crea un token para el cliente y expira en 1 hora (3600 segundos)
        const token = jwt.sign({id: userSaved._id}, process.env.JWT_SECRET_KEY , {expiresIn: 3600}); 

        //Retornamos la data con exito
        return res.status(201).json({
            token,
            data: userSaved
        });
    } catch (err){
        return res.status(400).send({error:err})
    }
}
module.exports.AuthController = {
    SignIn,
    SignUp
}