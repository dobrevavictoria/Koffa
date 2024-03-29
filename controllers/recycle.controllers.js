const Marker = require('../models/marker.model');

module.exports = {
  create: (req, res) => { //POST array of elements 
    const markers = req.fields;

    Marker.create(markers, function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal error please try again' });
      }
      else {
        res.status(200).json({ info: 'Operation successfull.' });
      }
    });
  },
  fetch: (req, res) => {
    Marker.find({}, function (err, markers) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
            error: 'Internal error please try again'
          });
      }
      else {
        res.send(markers);
      }
    });
  }
}