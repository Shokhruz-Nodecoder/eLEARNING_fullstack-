const { Router } = require("express");
const isAuth = require("../middlewares/isAuth");
const { create } = require("../controllers/category.controller");

const router = new Router();

router.post("/category", isAuth, create);

module.exports = router;
