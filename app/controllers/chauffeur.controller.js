const chauffeur = require('../models/chauffeur.model')

exports.chauffeurGet = async(req,res)=>{
    try {
        const chauffeurGet = await chauffeur.find()
        res.json(chauffeurGet)
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
        password: password
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