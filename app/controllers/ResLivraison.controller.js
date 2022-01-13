const resLivraison = require('../models/resLivraison.model')

exports.resLivraisonGet = async(req,res)=>{
    try {
        const resLivraisonGet = await resLivraison.find()
        res.json(resLivraisonGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.resLivraisonAdd = async(req,res)=>{
    const data = req.body;
    const addManage = new resLivraison({
        name: data.name,
        email:data.email,
    })
    try{
        const newresLivraison = await addManage.save()
        res.status(201).json(newresLivraison)
    }catch(err){
        res.status(404).json({ message : err.message })
    }
}

exports.resLivraisonDelete = async(req,res)=>{
    const data= req.params.id;
    try {
        await resLivraison.remove({_id:data})
        res.json({ message: 'Deleted resLivraison' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.resLivraisonUpdate = async(req,res)=>{
    const data= req.params.id;
    try {
        const updatedresLivraison = await resLivraison.updateOne(
            {_id:data},
            {$set: {name:req.body.name, email:req.body.email}}
        )
        res.json(updatedresLivraison)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}