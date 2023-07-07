const { Router } = require("express");
const isAuth = require("../middlewares/isAuth");
const { create } = require("../controllers/expert.controller");

const router = new Router()
router.post("/expert",isAuth,create)

module.exports = router