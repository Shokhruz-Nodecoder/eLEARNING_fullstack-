const { Router } = require("express");
const router = Router();
const { home, adminPage, formPage, showCategory, showPopular, showExpert } = require("../controllers/home.controller");

const isAuth = require("../middlewares/isAuth");

router.get("/", home);
router.get("/admin", isAuth, adminPage);
router.get("/form", isAuth, formPage);
router.get("/showCategory", isAuth, showCategory)
router.get("/showPopular", isAuth, showPopular)
router.get("/showExpert", isAuth, showExpert)

module.exports = router;
