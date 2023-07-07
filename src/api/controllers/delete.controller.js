const pg = require("../../libs/pg");

const deleteCateg = async (req, res) => {
  const { id } = req.params;

  try {
    const deletes = await pg(`DELETE FROM category WHERE id = '${id}'`);

    if (deletes.length == 0) {
      return res.redirect("/admin");
    }

    res.redirect("/showCategory");
  } catch (error) {
    console.log(error);
    res.redirect("/admin");
  }
};

const deletePop = async (req, res) => {
  const { id } = req.params;

  try {
    const deletes = await pg(`DELETE FROM popular WHERE id = '${id}'`);

    if (deletes.length == 0) {
      return res.redirect("/admin");
    }

    res.redirect("/showPopular");
  } catch (error) {
    console.log(error);
    res.redirect("/admin");
  }
};

const deleteExpert = async (req, res) => {
  const { id } = req.params;
  try {
    const deletes = await pg(`DELETE FROM expert WHERE id = '${id}'`);

    if (deletes.length == 0) {
      return res.redirect("/admin");
    }

    res.redirect("/showExpert");
  } catch (error) {
    console.log(error);
    res.redirect("/admin");
  }
};
module.exports = { deleteCateg, deletePop,deleteExpert };
