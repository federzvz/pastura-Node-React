var mongoose = require("mongoose");
const Usuario = require("../models/usuario.model");

exports.test = function (req, res) {
  res.send("API USUARIO BACKEND ANDANDO");
};

exports.usuario_login = function (req, res, next) {
  console.log("ENTRO AL LOGIN");
  console.log(req.body);
  Usuario.find({}, function (err, usuarios) {
    usuarios.forEach(function (usuario) {
      if (usuario.username == req.body.username && usuario.password == req.body.password) {
        console.log("LOGIN:"+usuario.username);
          res.json(usuario);
      }else{
        res.status(401).send("Usuario o contraseña incorrectos");
      }
    });
  });
};
