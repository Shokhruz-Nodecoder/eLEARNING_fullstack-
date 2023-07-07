const { JsonWebTokenError } = require("jsonwebtoken");
const { generataHash, comparePass } = require("../../libs/bcrypt");
const pg = require("../../libs/pg");
const jwt = require("../../libs/jwt");
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const findUser = (
      await pg(`select * from users where username = $1`, username)
    )[0];

    console.log(findUser);
    if (!findUser) {
      return res.redirect("/login");
    }

    const compare = await comparePass(password, findUser.password);
    if (!compare) {
      return res.redirect("/login");
    }

    const token = jwt.sign({ id: findUser.id });

    res.cookie("token", token);
    res.redirect("/admin");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { username, name, password } = req.body;
    const findUser = await pg(
      `select * from users where username = $1`,
      username
    );

    if (findUser.length) {
      return res.status(409).json({ message: "User already registered" });
    }

    const hashedPass = await generataHash(password);
    const newUser = (
      await pg(
        "insert into users (name,username,password) values($1,$2,$3) returning *",
        name,
        username,
        hashedPass
      )
    )[0];

    const token = jwt.sign({ id: findUser.id });

    res.status(200).json({ message: "Success", data: token });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

const loginGet = async (req, res) => {
  res.render("login");
};
module.exports = {
  login,
  register,
  loginGet,
};
