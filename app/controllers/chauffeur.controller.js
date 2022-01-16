const chauffeur = require('../models/chauffeur.model')
const jwt = require("jsonwebtoken");

exports.chauffeurGet = async(req,res)=>{
    try {
        const chauffeurGet = await chauffeur.find()
        res.json(chauffeurGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.login = async(req,res)=>{
    try {
        const chauffeurGet = await chauffeur.find()
        const Chauffeur = chauffeurGet.find((admin) => admin.email == req.body.email && admin.password == req.body.password);
        if (Chauffeur){
            const token = jwt.sign(
              { id: Chauffeur.id },
              `${process.env.JWT_SECRET_KEY}`,  
              {
                expiresIn: "1h",
              }
            );
            res.json(token);
        
          }else {
            res.status(400).send("information incorrect");
          }

    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.chauffeurAdd = async(req,res)=>{
    var password = (Math.random() + 1).toString(36).substring(8);
    const data = req.body;
    const addManage = new chauffeur({
        name: data.name,
        email:data.email,
        password: password,
        camion: data.camion
    })
    try{
        const newchauffeur = await addManage.save()
        res.status(201).json(newchauffeur)
    }catch(err){
        res.status(404).json({ message : err.message })
    }
}

exports.chauffeurDelete = async(req,res)=>{
    const data= req.params.id;
    try {
        await chauffeur.remove({_id:data})
        res.json({ message: 'Deleted chauffeur' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.chauffeurUpdate = async(req,res)=>{
    const data= req.params.id;
    try {
        const updatedchauffeur = await chauffeur.updateOne(
            {_id:data},
            {$set: {name:req.body.name, email:req.body.email}}
        )
        res.json(updatedchauffeur)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}