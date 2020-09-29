let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

const pantrySchema = new mongoose.Schema({
  food: String,
  qty: Number,
  unit: String
});
const Pantry = mongoose.model('Pantry', pantrySchema, 'pantry');

router.get('/pantry', function(req, res) {
  Pantry.find(callback(function (items) {
    res.json(items.map(item => ({
      food: item.food,
      quantity: item.qty,
      unit: item.unit
    })));
  }));
});

router.post('/pantry', function(req, res) {
  console.log(req.body);
});

function callback(handleResponse) {
  return function(err, response) {
    if(err) {
      console.log("MongoDB error");
    }
    else {
      handleResponse(response);
    }
  }
}

module.exports = router;
