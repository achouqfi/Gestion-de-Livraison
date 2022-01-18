const adminG = require('../models/adminG.model')
const jwt = require("jsonwebtoken");

exports.adminGGet = async(req,res,next)=>{
    try {
        const adminGGet = await adminG.find()
        res.json(adminGGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.login = async(req,res)=>{
    try {
        const adminGGet = await adminG.find()
        const GAdmin = adminGGet.find((admin) => admin.email == req.body.email && admin.password == req.body.password);
        if (GAdmin) {
            const token = jwt.sign(
              { id: GAdmin.id },
              `${process.env.JWT_SECRET_KEY}`,  
              {
                expiresIn: "1h",
              }
            );
            res.json(token);
        
          }else {
            res.status(400).send("information incorrect");
          }

        res.json(adminGGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}
