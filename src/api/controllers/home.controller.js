const pg = require("../../libs/pg");


const home = async (req, res) => {
  const categories = await pg("select * from category")
  const populars = await pg("select * from popular")
  const experts = await pg("select * from expert")

  res.render("index",{
    categories,
    populars,
    experts
  });
};

const adminPage = async (req, res) => {
  res.render("admin");
};
const formPage = async (req, res) => {
  res.render("form");
};

const showCategory = async (req, res) => {
  const categories = await pg("select * from category")

    res.render("categoryPage",{
      categories
    })
}

const showPopular = async (req,res)=>{
  const populars = await pg("select * from popular")
  res.render("popularPage",{
    populars
  })
}


const showExpert = async (req,res)=>{
  const experts = await pg("select * from expert")
  res.render("expertPage",{
    experts
  })
}
module.exports = {
    home,
    adminPage,
    formPage,
    showCategory,
    showPopular,
    showExpert
}