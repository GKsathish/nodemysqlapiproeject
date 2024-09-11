const express = require('express');
const postscontroller = require('../controllers/postcontroller');
const postcontroller = require('../controllers/postcontroller');
const router = express.Router();
router.post("/",postcontroller.save);

router.post("/:id",postcontroller.show);
router.get("/",postcontroller.showall);
router.patch("/:id",postcontroller.update);

module.exports = router;
