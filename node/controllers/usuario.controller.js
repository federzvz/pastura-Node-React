var mongoose = require("mongoose");
const { exists } = require("../models/usuario.model");
const Usuario = require("../models/usuario.model");

exports.test = function (req, res) {
  res.send("API USUARIO BACKEND ANDANDO");
};

// exports.usuario_login = function (req, res, next) {
//   console.log("ENTRO AL LOGIN");
//   console.log(req.body);
//   Usuario.find({}, function (err, usuarios) {
//     usuarios.forEach(function (usuario) {
//       if (usuario.username == req.body.username && usuario.password == req.body.password) {
//         console.log("LOGIN:"+usuario.username);
//           res.status(200);
//           res.json(usuario);
//           res.send();
          
//       }else{
//         // res.status(401).send("Usuario o contraseña incorrectos");
//         // res.status(401).send("Usuario o contraseña incorrectos");
//         // res.send();
//       }
//     });
//     res.status(401).send("Usuario o contraseña incorrectos");
//   });
// };


exports.usuario_login = function (req, res, next) {
  if(!req.query) {
    res.status(400).json({
        error: 'No data received'
    });
  }
  const username = req.body.username;
  const password = req.body.password;
  // console.log("ENTRO AL LOGIN");
  console.log(req.body);

  Usuario.findOne({ username: username, password: password }, (err, user) => {
    // if (err) throw err; <= ESTO TAMPOCO, PORQUE DETIENE TU SERVER
    if(err) { // un error indica que hubo problemas con la consulta
        res.status(500).json({
            error: 'Server error'
        });
    }
    if(!user) { // Si el usuario no existe
      console.log("USUARIO NO ENCONTRADO: ");
        res.status(401).send("Usuario o contraseña incorrectos");
    } else {
      console.log("USUARIO ENCONTRADO: ", user);
      res.status(200).json(user); // <= SI ENVIAS EL RESULTADO. NO PUEDES HACER AMBAS
    }
    // } else {
    // next();
    // }
    // console.log("USUARIO ENCONTRADO: ", user);
    // res.status(200).json(user); // <= SI ENVIAS EL RESULTADO. NO PUEDES HACER AMBAS
    // AQUI PUEDES LLAMAR A TU SIGUIENTE MIDDLEWARE O DEVOLVER EL RESULTADO
    // next(); <= SI VAS A LLAMAR AL SIGUIENTE MIDDLEWARE
    // if (user.username == username && user.password == password) {
    //   console.log("LOGIN:"+ user.username);
    //     res.status(200).json(user); // <= SI ENVIAS EL RESULTADO. NO PUEDES HACER AMBAS
    //   // res.status(200);
    //   //   res.json(usuario);
    //   //   res.send();
    // } else {
    //   res.status(401).send("Usuario o contraseña incorrectos");
    // }
  });
  // res.send();
};
