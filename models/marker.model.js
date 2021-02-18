const mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

const positionSchema = mongoose.Schema({

    lat: { type: String, required: true },
    lng: { type: String, required: true }
});

const markerSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    position: positionSchema, //[Position.schema]
    materials: [{ type: String, required: true }],
    address: { type: String, required: true },
    workingHours: { type: String, required: true },
    telephone: { type: String, required: true }
});


module.exports = mongoose.model('Position', positionSchema);
module.exports = mongoose.model('Marker', markerSchema);
