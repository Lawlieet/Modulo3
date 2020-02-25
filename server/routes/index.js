const express = require('express');
const router  = express.Router();

const {
  getAllPlaces,
  getPlace,
  createPlace,
  updatePlace,deletePlace
} = require("../controllers/place")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//Place CRUD

router.get("/api/places", getAllPlaces)
router.post("/api/places", createPlace)
router.get("/api/places/:id",getPlace)
router.put("/api/places/:id",updatePlace)
router.delete("/api/places/:id",deletePlace)

module.exports = router;

