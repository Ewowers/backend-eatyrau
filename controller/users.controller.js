const Model = require("../model/users.model");
class Controller {
  async create(req, res) {
    const { name, data } = req.body;
    const model = new Model({
      name,
      data,
    });
    await model.save();
    return res.json(model);
  }
}
module.exports = new Controller();
