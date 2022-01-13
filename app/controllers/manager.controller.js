const manager = require('../models/manager.model')

exports.ManagerGet = async(req,res)=>{
    try {
        const managerGet = await manager.find()
        res.json(managerGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.ManagerAdd = async(req,res)=>{
    const data = req.body;
    const addManage = new manager({
        name: data.name,
        email:data.email,
    })
    try{
        const newManager = await addManage.save()
        res.status(201).json(newManager)
    }catch(err){
        res.status(404).json({ message : err.message })
    }
}

exports.ManagerDelete = async(req,res)=>{
    const data= req.params.id;
    try {
        await manager.remove({_id:data})
        res.json({ message: 'Deleted manager' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.ManagerUpdate = async(req,res)=>{
    const data= req.params.id;
    try {
        const updatedManager = await manager.updateOne(
            {_id:data},
            {$set: {name:req.body.name, email:req.body.email}}
        )
        res.json(updatedManager)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}