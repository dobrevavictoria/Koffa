const Item = require('../models/item.model');

module.exports = {
  create: (req, res) => {
    const { category, name, city, price, imageBase64 } = req.fields;
    const buffer = Buffer.from(imageBase64, 'base64');

    var imageBuffer = { data: buffer, contentType: "image/png" };

    const item = new Item({ name, category, city, price, imageBuffer });

    item.save(function (err) {
      if (err) {
        if (11000 === err.code) {
          res.status(409).json({ error: 'Item with this name already exists.' });
        }
        else {
          res.status(500).json({ error: 'Error adding new item please try again.' });
        }
      } else {
        res.status(200).json({ info: 'Item added successfully.' });
      }
    });
  },
  fetch: (req, res) => {
    Item.find({ available: true }, function (err, items) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
            error: 'Internal error please try again'
          });
      } else {
        res.send(items);
      }
    });
  }
}

