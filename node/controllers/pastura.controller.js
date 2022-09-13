var mongoose = require('mongoose');
const Pastura = require('../models/pastura.model');

exports.test = function (req, res) {
    res.send('API PASTURA BACKEND ANDANDO');
};

exports.pastura_create = function (req, res,next) {
    let pastura = new Pastura(
        {
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
        }
    );

    pastura.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Pastura creado satisfactoriamente')
    })
}
