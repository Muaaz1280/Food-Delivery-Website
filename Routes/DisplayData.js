const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
  try {
    console.log("POST /foodData hit");
    res.send({ 
      food_items: global.food_items, 
      foodCategory: global.foodCategory 
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
