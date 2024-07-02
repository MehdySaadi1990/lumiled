const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
         type : { type: String, required: true } ,
         serie : { type: String, required: true } ,
         certificat : { type: String, required: true },
         power :{ type: String, required: true },
         etancheite : { type: String, required: true } ,
         duree :  { type: String, required: true },
         light_color : { type: String, required: true } ,
         couverture : { type: String, required: true } ,
         image : { type: String, required: true } ,
         fiche_tech : { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);