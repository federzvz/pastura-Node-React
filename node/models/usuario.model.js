var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
});

// Export the model
module.exports = mongoose.model('Usuario', UsuarioSchema);