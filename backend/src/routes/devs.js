const express = require("express");
const router = express.Router();
const DevController = require("../controllers/DevController");
const SearchController = require("../controllers/SearchController");
const asyncMiddleware = require("../middleware/async");

router.post("/devs", asyncMiddleware(DevController.store));
router.get("/devs", asyncMiddleware(DevController.index));
router.get("/search", asyncMiddleware(SearchController.index));

module.exports = router;
