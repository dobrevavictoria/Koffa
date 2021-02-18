const Marker = require('../models/marker.model');
module.exports = {
    places: (req, res) => { //post
        const markers = [
            {
                name: 'Buying Scarp',
                position: { lat: 42.66833178808714, lng: 23.352121650795137 },
                materials: 'Plastic, Glass, Metal',
                address: 'Address: Sofia, Gorublyane, ul. inj.Georgi Belov 2, 1712, България',
                workingHours: 'Working hours: Mon-Fri 09:00-18:00',
                telephone: 'Telephone: +359 87 922 8888'
            },
            {
                name: 'Hard Grey Metals',
                position: { lat: 42.6378858357197, lng: 23.397288078773915 },
                materials: 'Plastic, Glass, Metal, Nylon',
                address: 'Address: Sofia, Gorublyane, ul. inj.Georgi Belov 2, 1712, България',
                workingHours: 'Working hours: Mon-Fri 09:00-18:00',
                telephone: 'Telephone: +359 87 922 8888'
            },
            {
                name: 'Ecoland Consult EOOD',
                position: { lat: 42.63871985628394, lng: 23.39705256938967 },
                materials: 'Plastic, Glass, Metal',
                address: 'Address: Sofia, Gorublyane, ul. inj.Georgi Belov 2, 1712, България',
                workingHours: 'Working hours: Mon-Fri 09:00-18:00',
                telephone: 'Telephone: +359 87 922 8888'
            },
            {
                name: 'Alfa Eco',
                position: { lat: 42.68298826596982, lng: 23.381072727062445 },
                materials: 'Plastic, Glass, Metal',
                address: 'Address: Slatina, Geo Milev 162, 1000 Sofia, Bulgaria',
                workingHours: 'Working hours: Mon-Fri 09:00-18:00',
                telephone: 'Telephone: +359 87 101 1188'
            },
            {
                name: 'Technopolis',
                position: { lat: 42.664375458633636, lng: 23.289073996375002 },
                materials: 'Electronics',
                address: 'Address:  bul. „Bulgaria" 69, 1404 kv. Manastirski livadi, Sofia, Bulgaria',
                workingHours: 'Working hours: Mon-Sun 10:00-22:00',
                telephone: 'Telephone: +359 2 903 5959'
            }
        ];

        Marker.create(markers, function (err) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal error please try again' });
            }
            else {
                res.status(200).json({ info: 'Operation successfull.' });
            }
        });

        // const allMarkers = Marker.find({});
        // console.log(allMarkers);
    },
    show: (req, res) => { //get
        const allMarkers = Marker.find({}, function (err, res) {
            if (err) {
                console.error(err);
                res.status(500)
                    .json({
                        error: 'Internal error please try again'
                    });
            } else {
                console.log(allMarkers);
                res.send(allMarkers);
                res.status(200).json({ info: 'Operation successfull.' });
            }

        });
    }
    //todo - filter by id?
}