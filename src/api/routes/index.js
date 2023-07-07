const auth = require("./auth.route")
const home = require("./home.route")
const category = require("./category.route")
const deletePost = require("./delete.route")
const popular = require("./popular.route")
const expert = require("./expert.route")

module.exports = [auth,home,category,deletePost,popular,expert]