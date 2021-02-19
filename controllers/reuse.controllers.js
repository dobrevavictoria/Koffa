const Item = require('../models/item.model');

module.exports = {
  add: (req, res) => {
    console.log(req.body);
    const { category, name, city, price, imageBase64 } = req.fields;
    const { image } = req.files;
    const buffer = Buffer.from(imageBase64, 'base64');
    console.log('Image buffer db: ', buffer);

    var imageBuffer = {data: buffer, contentType: "image/png"};

    const item = new Item({ name, category, city, price, imageBuffer });
    console.log('item: ',item);

    item.save(function (err) {
      if (err) {
        if (11000 === err.code) {
          res.status(409).json({ error: 'Item with this name already exists.' });
        }
        else {
          console.log(err);
          res.status(500).json({ error: 'Error adding new item please try again.' });
        }
      } else {
        res.status(200).json({ info: 'Item added successfully.' });
      }
    });
  },
  // items: (req, res) => { //post

  //   const items = [
  //     {
  //       name: 'Night Lamp', category: 'Home', city: 'Plovdiv',  price: 20, img: require('../client/src/images/lamp.jpg')
  //     },
  //     {
  //       name: 'Home Decoration', category: 'Home', city: 'Burgas',  price: 5, img: require('../client/src/images/homedecor1.jpg')
  //     },
  //     {
  //       name: 'Mini Dress by Lola Dre', category: 'Fashion', city: 'Varna', price: 20, img: require('../client/src/images/dress.jpg')
  //     },
  //     {
  //       name: 'Kitchen Table', category: 'Home', city: 'Sofia',  price: 150, img: require('../client/src/images/table.jpg')
  //     },
  //     {
  //       name: 'Men Watch', category: 'Fashion', city: 'Plovdiv', price: 55, img: require('../client/src/images/watch.jpg')
  //     },
  //     {
  //       name: '"The Long Walk" by St. King', category: 'Books & Hobbies', city: 'Sofia',  price: 10, img: require('../client/src/images/book.jfif')
  //     },
  //     {
  //       name: 'X13 Yoga (13”) Intel', category: 'Electronics', city: 'Pernik', price: 700, img: require('../client/src/images/laptop.jfif')
  //     },
  //   ];


  //   Item.create(items, function (err) {
  //     if (err) {
  //       console.error(err);
  //       res.status(500).json({ error: 'Internal error please try again' });
  //     }
  //     else {
  //       res.status(200).json({ info: 'Operation successfull - items added.' });
  //     }
  //   });
  // },
  show: (req, res) => { // shows all available items
    Item.find({available: true}, function (err, items) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
            error: 'Internal error please try again'
          });
      } else {
        console.log(items);
        res.send(items);
      }
      //todo - filter by id?
    });
  }
}

