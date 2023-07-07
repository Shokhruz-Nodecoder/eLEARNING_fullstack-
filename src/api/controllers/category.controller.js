const {v4:uuid} = require("uuid")
const pg = require("../../libs/pg");

const path = require("path")

const create = async(req,res)=>{
    const {image} = req.files
    const {name,volume} = req.body
    const imageName = `${uuid()}${path.extname(image.name)}`;
  
    image.mv(process.cwd() + "/uploads/" + imageName);
    const newCategory = await pg("insert into category(name,image,volume) values($1, $2, $3)",
    name,imageName,volume)
    console.log(newCategory)
    res.redirect('/form');
}


module.exports = {
    create
}