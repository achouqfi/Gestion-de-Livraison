const camion = require('../models/camion.model')

//get all camion
exports.camionGet = async(req,res)=>{
    try {
        const camionGet = await camion.find()
        res.json(camionGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//add camion
exports.camionAdd = async(req,res)=>{
    var password = (Math.random() + 1).toString(36).substring(8);
    const data = req.body;
    const addManage = new camion({
        name: data.name,
        type:data.type,
        immatriculation: data.immatriculation
    })
    try{
        const newcamion = await addManage.save()
        res.status(201).json(newcamion)
    }catch(err){
        res.status(404).json({ message : err.message })
    }
}

//delete camion
exports.camionDelete = async(req,res)=>{
    const data= req.params.id;
    try {
        await camion.remove({_id:data})
        res.json({ message: 'Deleted camion' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//update camion
exports.camionUpdate = async(req,res)=>{
    const data= req.params.id;
    try {
        const updatedcamion = await camion.updateOne(
            {_id:data},
            {$set: {
                name: req.body.name,
                type: req.body.type,
                immatriculation: req.body.immatriculation
            }}
        )
        res.json(updatedcamion)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}