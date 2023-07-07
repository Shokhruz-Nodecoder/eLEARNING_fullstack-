const cors = require("cors");
const routes = require("../api/routes");
const express = require("express");
const cookie = require("cookie-parser");
const fileUpload = require("express-fileupload");
const modules = (app) =>{
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
  app.use(cookie());
  app.use(fileUpload());
  app.use(express.static(process.cwd() + "/src/public"));
  app.use(express.static(process.cwd() + "/src/admin.templates"));
  app.use(express.static(process.cwd() + "/uploads"));
  app.set("view engine", "ejs");
  app.set("views", "src/views");
  app.use(routes)
}

module.exports = modules