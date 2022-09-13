var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PasturaSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
    nombre: String,
});


// Export the model
module.exports = mongoose.model('Pastura', PasturaSchema);