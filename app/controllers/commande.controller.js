const commande = require('../models/commade.model')
const nodemailer = require("nodemailer");
const chauffeur = require('../models/chauffeur.model')

//get all commande
exports.CommandeGet = async(req,res)=>{
    try {
        const commandeGet = await commande.find().populate("chauffeur")
        res.json(commandeGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//insert commande
exports.CommandeAdd = async(req,res)=>{
    const data = req.body;
    
    const addManage = new commande({
        heure:data.heure,
        depart:data.depart,
        arrive:data.arrive,
        poids:data.poids,
        prix:data.prix,
        distance_kilometrage:data.distance_kilometrage,
        status:'en cours',
    });

    try{
        const newcommande = await addManage.save();
        const chauffeurGet = await chauffeur.find().populate("camion");
        
        chauffeurGet.forEach(element => {
            if(element.camion.type == "voiture" && data.poids > 0  && data.poids <= 200 ){
                console.log(element.email);
            }else if(element.camion.type == "petit" && data.poids >= 200 && data.poids <= 800 ){
                console.log(element.email);
            }else if(element.camion.type == "grand" && data.poids >= 800 && data.poids <= 1600 ){
                console.log(element.email);
            }
        });
        res.status(201).json(newcommande)
    }catch(err){
        res.status(404).json({ message : err.message })
    }
}

//delete commande
exports.CommandeDelete = async(req,res)=>{
    const data= req.params.id;
    try {
        await commande.remove({_id:data})
        res.json({ message: 'Deleted commande' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//update commande
exports.CommandeUpdate = async(req,res)=>{
    const data= req.params.id;
    try {
        const updatedcommande = await commande.updateOne(
            {_id:data},
            {$set: {name:req.body.name, email:req.body.email}}
        )
        res.json(updatedcommande)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}