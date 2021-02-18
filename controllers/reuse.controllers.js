const Item = require('../models/item.model');

module.exports = {
    add: (req,res) => {
        const {category, name, city, price} = req.body;
        const item = new Item({name, category, city, price});
        //todo add image
        item.save(function(err){
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
    items: (req,res) => {
      const allItems = Item.find({}, function (err, res) {
        if (err) {
            console.error(err);
            res.status(500)
                .json({
                    error: 'Internal error please try again'
                });
        } else {
            console.log(allItems);
            res.send(allItems);
            res.status(200).json({ info: 'Operation successfull.' });
        }
        //todo - filter by id?
    });
  }
}
//api/reuse/
