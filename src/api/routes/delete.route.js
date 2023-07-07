const {Router} = require("express")
const { deleteCateg, deletePop, deleteExpert } = require("../controllers/delete.controller")

const router = new Router()
router.delete("/deleteCateg/:id", deleteCateg)
router.delete("/deletePopular/:id", deletePop)
router.delete("/deleteExpert/:id", deleteExpert)

module.exports = router