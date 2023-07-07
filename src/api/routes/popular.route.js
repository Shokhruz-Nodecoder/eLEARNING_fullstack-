const { Router } = require("express");
const isAuth = require("../middlewares/isAuth");
const { create } = require("../controllers/popular.controller");
const router = new Router()
router.post("/popular", isAuth,create)

module.exports = router