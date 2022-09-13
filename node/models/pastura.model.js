var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PasturaSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
    Familia: String,
    Especie: String,
    TipoVegetativo: String,
    RizomaEngrosado: Boolean,
    Mocollo1: String,
    Mocollo2: String,
    ConsistenciaLigula: String,
    FormaLigula: String,
    Tamano: String,
    OtrasCaracteristicasLigula: String,
    ColorLigula: String,
    FormaLamina: String,
    Canaliculada: String,
    TipoLamina: String,
    Apice: String,
    NervaduraCentralMarcada: Boolean,
    Observaciones: String,
    Pelos: String,
    UbicacionPelos: String,
    Observacion: String,
    ObservacionesGenerales: String,
    CicloVida: String,
    CicloProductivo: String,
    TipoProductivo: String,
    TipoCampo: String,
});


// Export the model
module.exports = mongoose.model('Pastura', PasturaSchema);