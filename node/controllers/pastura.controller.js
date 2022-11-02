var mongoose = require("mongoose");
const Pastura = require("../models/pastura.model");

exports.emptyRoute = function (req, res) {
  res.setHeader("Content-Range", "pasturas 0-20/20");
  res.json({});
};

exports.test = function (req, res) {
  res.send("API PASTURA BACKEND ANDANDO");
};

exports.pastura_create = function (req, res, next) {
  if(req.body.NervaduraCentralMarcada == ""){
    req.body.NervaduraCentralMarcada = false;
  }
  if(req.body.RizomaEngrosado == ""){
    req.body.RizomaEngrosado = false;
  }
  let pastura = new Pastura({
    _id: new mongoose.Types.ObjectId(),
    Familia: "Gramineas",
    Especie: req.body.Especie,
    TipoVegetativo: req.body.TipoVegetativo,
    RizomaEngrosado: req.body.RizomaEngrosado,
    Mocollo1: req.body.Mocollo1,
    Mocollo2: req.body.Mocollo2,
    ConsistenciaLigula: req.body.ConsistenciaLigula,
    FormaLigula: req.body.FormaLigula,
    Tamano: req.body.Tamano,
    OtrasCaracteristicasLigula: req.body.OtrasCaracteristicasLigula,
    ColorLigula: req.body.ColorLigula,
    FormaLamina: req.body.FormaLamina,
    Canaliculada: req.body.Canaliculada,
    TipoLamina: req.body.TipoLamina,
    Apice: req.body.Apice,
    NervaduraCentralMarcada: req.body.NervaduraCentralMarcada,
    Observaciones: req.body.Observaciones,
    Pelos: req.body.Pelos,
    UbicacionPelos: req.body.UbicacionPelos,
    Observacion: req.body.Observacion,
    ObservacionesGenerales: req.body.ObservacionesGenerales,
    CicloVida: req.body.CicloVida,
    CicloProductivo: req.body.CicloProductivo,
    TipoProductivo: req.body.TipoProductivo,
    TipoCampo: req.body.TipoCampo,
    Imagen: req.body.Imagen,
  });

  pastura.save(function (err) {
    if (err) {
      return next(err);
    }
    res.json(pastura);
  });
};

exports.pastura_getAll = function (req, res, next) {
  Pastura.find({}, function (err, pasturas) {
    if (err) return next(err);
    res.json(pasturas);
  });
};
exports.pastura_get = function (req, res) {
  Pastura.find({}, function (err, pasturas) {
    if (err) return next(err);
    res.json(pasturas);
  });
};

exports.pastura_pasturas = function (req, res) {
  console.log(req.query);
  
  Pastura.find({}, function (err, pasturas) {
    if (err) return next(err);
    if(req.query.RizomaEngrosado == 'true'){
      pasturas = pasturas.filter(pastura => pastura.RizomaEngrosado == true);
    } else if (req.query.RizomaEngrosado == 'false') {
      pasturas = pasturas.filter(pastura => pastura.RizomaEngrosado == false);
    }

    if(req.query.NervaduraCentralMarcada == 'true'){
      pasturas = pasturas.filter(pastura => pastura.NervaduraCentralMarcada == true);
    } else if (req.query.NervaduraCentralMarcada == 'false') {
      pasturas = pasturas.filter(pastura => pastura.NervaduraCentralMarcada == false);
    }

    if(req.query.TipoVegetativo == 'Cespitoso'){
      pasturas = pasturas.filter(pastura => pastura.TipoVegetativo == 'Cespitoso');
    } else if (req.query.TipoVegetativo == 'Estolonifero') {
      pasturas = pasturas.filter(pastura => pastura.TipoVegetativo == 'Estolonifero');
    } else if (req.query.TipoVegetativo == 'Rizomatozo') {
      pasturas = pasturas.filter(pastura => pastura.TipoVegetativo == 'Rizomatozo');
    } else if (req.query.TipoVegetativo == 'Estolonifero-rizomatozo') {
      pasturas = pasturas.filter(pastura => pastura.TipoVegetativo == 'Estolonifero-rizomatozo');
    }

    if(req.query.Mocollo1 == 'Semi rollizo'){
      pasturas = pasturas.filter(pastura => pastura.Mocollo1 == 'Semi rollizo');
    } else if (req.query.Mocollo1 == 'Comprimido') {
      pasturas = pasturas.filter(pastura => pastura.Mocollo1 == 'Comprimido');
    } else if (req.query.Mocollo1 == 'Semi Rolliza') {
      pasturas = pasturas.filter(pastura => pastura.Mocollo1 == 'Semi Rolliza');
    } else if (req.query.Mocollo1 == 'Rollizo') {
      pasturas = pasturas.filter(pastura => pastura.Mocollo1 == 'Rollizo');
    }

    if(req.query.Mocollo2 == 'Intravaginal'){
      pasturas = pasturas.filter(pastura => pastura.Mocollo2 == 'Intravaginal');
    } else if (req.query.Mocollo2 == 'Extravaginal') {
      pasturas = pasturas.filter(pastura => pastura.Mocollo2 == 'Extravaginal');
    } else if (req.query.Mocollo2 == 'Extravaginal principalmente') {
      pasturas = pasturas.filter(pastura => pastura.Mocollo2 == 'Extravaginal principalmente');
    } else if (req.query.Mocollo2 == 'Intra o extra') {
      pasturas = pasturas.filter(pastura => pastura.Mocollo2 == 'Intra o extra');
    } else if (req.query.Mocollo2 == 'Intravaginal o Extravaginal') {
      pasturas = pasturas.filter(pastura => pastura.Mocollo2 == 'Intravaginal o Extravaginal');
    } else if (req.query.Mocollo2 == 'Intravaginal o Extravaginal principalmente') {
      pasturas = pasturas.filter(pastura => pastura.Mocollo2 == 'Intravaginal o Extravaginal principalmente');
    }

    if(req.query.ConsistenciaLigula == 'Membranacea'){
      pasturas = pasturas.filter(pastura => pastura.ConsistenciaLigula == 'Membranacea');
    } else if (req.query.ConsistenciaLigula == 'Disuelta en pelos') {
      pasturas = pasturas.filter(pastura => pastura.ConsistenciaLigula == 'Disuelta en pelos');
    } else if (req.query.ConsistenciaLigula == 'Mixta') {
      pasturas = pasturas.filter(pastura => pastura.ConsistenciaLigula == 'Mixta');
    }

    if(req.query.FormaLigula == 'Truncada y dientada'){
      pasturas = pasturas.filter(pastura => pastura.FormaLigula == 'Truncada y dientada');
    } else if (req.query.FormaLigula == 'Truncada') {
      pasturas = pasturas.filter(pastura => pastura.FormaLigula == 'Truncada');
    } else if (req.query.FormaLigula == 'Aguda') {
      pasturas = pasturas.filter(pastura => pastura.FormaLigula == 'Aguda');
    } else if (req.query.FormaLigula == 'Redondeada') {
      pasturas = pasturas.filter(pastura => pastura.FormaLigula == 'Redondeada');
    }

    if(req.query.FormaLamina == 'Linear'){
      pasturas = pasturas.filter(pastura => pastura.FormaLamina == 'Linear');
    } else if (req.query.FormaLamina == 'Navicular') {
      pasturas = pasturas.filter(pastura => pastura.FormaLamina == 'Navicular');
    } else if (req.query.FormaLamina == 'Linear-Lanceolada') {
      pasturas = pasturas.filter(pastura => pastura.FormaLamina == 'Linear-Lanceolada');
    } else if (req.query.FormaLamina == 'Lanceolada') {
      pasturas = pasturas.filter(pastura => pastura.FormaLamina == 'Lanceolada');
    }

    if(req.query.TipoLamina == 'Plana'){
      pasturas = pasturas.filter(pastura => pastura.TipoLamina == 'Plana');
    } else if (req.query.TipoLamina == 'Navicular-Plegada') {
      pasturas = pasturas.filter(pastura => pastura.TipoLamina == 'Navicular-Plegada');
    } else if (req.query.TipoLamina == 'Navicular') {
      pasturas = pasturas.filter(pastura => pastura.TipoLamina == 'Navicular');
    } else if (req.query.TipoLamina == 'Plegada') {
      pasturas = pasturas.filter(pastura => pastura.TipoLamina == 'Plegada');
    } else if (req.query.TipoLamina == 'Navicular a plana') {
      pasturas = pasturas.filter(pastura => pastura.TipoLamina == 'Navicular a plana');
    }

    if(req.query.Apice == 'Agudo'){
      pasturas = pasturas.filter(pastura => pastura.Apice == 'Agudo');
    } else if (req.query.Apice == 'Obtuso') {
      pasturas = pasturas.filter(pastura => pastura.Apice == 'Obtuso');
    }
    
    if(req.query.Pelos == 'Glabra'){
      pasturas = pasturas.filter(pastura => pastura.Pelos == 'Glabra');
    } else if (req.query.Pelos == 'Pubecente') {
      pasturas = pasturas.filter(pastura => pastura.Pelos == 'Pubecente');
    } else if (req.query.Pelos == 'Glabra o Pubecente') {
      pasturas = pasturas.filter(pastura => pastura.Pelos == 'Glabra o Pubecente');
    } else if (req.query.Pelos == 'Poco a nada') {
      pasturas = pasturas.filter(pastura => pastura.Pelos == 'Poco a nada');
    }

    if(req.query.CicloVida == 'Anual'){
      pasturas = pasturas.filter(pastura => pastura.CicloVida == 'Anual');
    } else if (req.query.CicloVida == 'Perenne') {
      pasturas = pasturas.filter(pastura => pastura.CicloVida == 'Perenne');
    }

    if(req.query.CicloProductivo == 'Invernal'){
      pasturas = pasturas.filter(pastura => pastura.CicloProductivo == 'Invernal');
    } else if (req.query.CicloProductivo == 'Estival') {
      pasturas = pasturas.filter(pastura => pastura.CicloProductivo == 'Estival');
    }

    res.setHeader("X-Total-Count", pasturas.length);
    res.setHeader("Content-Range", "pasturas 0-20/" + pasturas.length);
    res.send(pasturas);
  });
};

exports.pastura_edit = function (req, res, next) {
  Pastura.find({}, function (err, pasturas) {
    var pasturaMap = [];
    pasturas.forEach(function (pastura) {
      if (pastura.id == req.params.id) {
        pasturaMap.push(pastura);
      }
    });
    res.send(pasturaMap[0]);
  });
};

exports.pastura_delete = function (req, res, next) {
  Pastura.find({}, function (err, pasturas) {
    pasturas.forEach(function (pastura) {
      if (pastura.id == req.params.id) {
        console.log(pastura._id);
        Pastura.findByIdAndRemove(pastura._id, function (err) {
          if (err) return next(err);
          res.json(pastura);
        });
      }
    });
  });
};

exports.pastura_update = function (req, res, next) {
  console.log(req.body);
  if(req.body.NervaduraCentralMarcada == ""){
    req.body.NervaduraCentralMarcada = false;
  }
  if(req.body.RizomaEngrosado == ""){
    req.body.RizomaEngrosado = false;
  }
  Pastura.find({}, function (err, pasturas) {
    pasturas.forEach(function (pastura) {
      if (pastura.id == req.params.id) {
        console.log(pastura._id);
        Pastura.findByIdAndUpdate(
          pastura._id,
          { $set: req.body } ,
          function (err) {
          if (err) return next(err);
          res.json(pastura);
        });
      }
    });
  });
};
// {name: req.body.name, price: req.body.price}
// exports.pastura_update = function (req, res, next) {
//   Pastura.find({}, function (err, pasturas) {
//     pasturas.forEach(function (pastura) {
//       if (pastura.id == req.params.id) {
//         console.log(pastura._id);
//         Pastura.findByIdAndUpdate(pastura._id,{ $set: req.body },
//           function (err, pastura) {
//             if (err) return next(err);
//             res.send("Pastura actualizado satisfactoriamente");
//           }
//         );
//       }
//     });
//   });
// };