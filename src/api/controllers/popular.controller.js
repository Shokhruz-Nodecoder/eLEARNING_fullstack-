const {v4:uuid} = require("uuid")
const pg = require("../../libs/pg");

const path = require("path")

const create = async(req,res)=>{
    const {image} = req.files
    const {cost, profession} = req.body
    const imageName = `${uuid()}${path.extname(image.name)}`;
  
    image.mv(process.cwd() + "/uploads/" + imageName);
    const newPopular = await pg("insert into popular(image,cost,profession) values($1, $2, $3)",
    imageName,cost,profession)
    
    res.redirect('/form');
}


module.exports = {
    create
}