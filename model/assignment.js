let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean
});

AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
// le premier paramètre est le nom de la collection. Notez que
// Mongoose fait du "matching" et prend la collection dont le nom
// est le plus proche (en gros, Assignment ou assignments va marcher)
// Attention la distance syntaxique doit être "petite"
module.exports = mongoose.model('assignments', AssignmentSchema);
