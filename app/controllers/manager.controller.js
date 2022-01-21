const manager = require("../models/manager.model");
const jwt = require("jsonwebtoken");

exports.ManagerGet = async (req, res) => {
  try {
    const managerGet = await manager.find();
    res.json(managerGet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const managerGet = await manager.find();

    const managerG = managerGet.find(
      (admin) =>
        admin.email == req.body.email && admin.password == req.body.password
    );
    console.log(managerG);
    if (managerG) {
      const token = jwt.sign(
        { id: managerG.id },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "1h",
        }
      );
      res.json(token);
    } else {
      res.status(400).send("information incorrect");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.ManagerAdd = async (req, res) => {
  var password = (Math.random() + 1).toString(36).substring(8);
  const data = req.body;
  const addManage = new manager({
    name: data.name,
    email: data.email,
    password: password,
  });
  try {
    const newManager = await addManage.save();
    res.status(201).json(newManager);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.ManagerDelete = async (req, res) => {
  const data = req.params.id;
  try {
    await manager.remove({ _id: data });
    res.json({ message: "Deleted manager" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.ManagerUpdate = async (req, res) => {
  const data = req.params.id;
  try {
    const updatedManager = await manager.updateOne(
      { _id: data },
      { $set: { name: req.body.name, email: req.body.email } }
    );
    res.json(updatedManager);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
