const bcrypt = require('bcrypt')

const generataHash = async(password) =>{
  return await bcrypt.hash(password, 10);
}

const comparePass = async(password, hashedPass) =>{
    return await bcrypt.compare(password, hashedPass);
};


module.exports = {
    generataHash,
    comparePass
}