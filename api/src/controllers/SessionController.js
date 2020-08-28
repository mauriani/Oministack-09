/** Referente ao login */
/** index - retorna listagem, show - lista uma unica, update - editar, destroy - remover */

const User = require("../models/User");
module.exports = {
  async store(req, res) {
    const { email } = req.body;

    // verifica se tem um usuario com o mesmo email
    let user = await User.findOne({ email });

    // se ele não encontrar
    if (!user) {
      user = await User.create({
        email,
      });
    }
    return res.json(user);
  },
};
