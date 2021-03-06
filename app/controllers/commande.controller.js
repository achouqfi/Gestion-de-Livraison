const commande = require('../models/commade.model')
const nodemailer = require("nodemailer");
const chauffeur = require('../models/chauffeur.model')
const prime = require('../models/prime.model')
const axios = require('axios')

//get all commande
exports.CommandeGet = async(req,res)=>{
    try {
        const commandeGet = await commande.find().populate("chauffeur");
        res.json(commandeGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//function d'email
email = (email)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'testcoding975@gmail.com',
          pass: 'testCoding1998'
        }
      });
      
      var mailOptions = {
        from: 'testcoding975@gmail.com',
        to: email,
        subject: 'vous avez une livraison',
        text: 'link'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

//insert commande
exports.CommandeAdd = async(req,res)=>{
    const data = req.body;
    let prix;
    if(data.poids > 3){
        prix = (data.poids - 3) * 5 + 120;
    }else{
        prix = data.poids * 40;
    }
    const response = await axios(`https://www.distance24.org/route.json?stops=${data.ville_depart}%7C${data.ville_arrive}`)

    const addManage = new commande({
        heure:data.heure,
        depart:data.depart,
        ville_depart:data.ville_depart,
        ville_arrive:data.ville_arrive,
        poids:data.poids,
        prix: prix,
        distance_kilometrage:response.data.distances.join(),
        status:'en cours'
    });

    try{
        const newcommande = await addManage.save();
        const chauffeurGet = await chauffeur.find().populate("camion");
        chauffeurGet.forEach(element => {
            if(element.camion.type == "voiture" && data.poids > 0  && data.poids <= 200 ){
                console.log(element.email);
                email(element.email)
            }else if(element.camion.type == "petit" && data.poids >= 200 && data.poids <= 800 ){
                console.log(element.email);
                email(element.email)
            }else if(element.camion.type == "grand" && data.poids >= 800 && data.poids <= 1600 ){
                console.log(element.email);
                email(element.email)
            }
        });
        res.status(201).json(newcommande);
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
    const data = req.body;
    let prix;
    if(data.poids > 3){
        prix = (data.poids - 3) * 5 + 120;
    }else{
        prix = data.poids * 40;
    }
    const response = await axios(`https://www.distance24.org/route.json?stops=${data.ville_depart}%7C${data.ville_arrive}`)

    try{
        const updatedcommande = await commande.updateOne(
            {_id:req.params.id},
            {$set: {
                heure:data.heure,
                depart:data.depart,
                ville_depart:data.ville_depart,
                ville_arrive:data.ville_arrive,
                poids:data.poids,
                prix: prix,
                distance_kilometrage:response.data.distances.join(),
            }}
        )
        const chauffeurGet = await chauffeur.find().populate("camion");
        chauffeurGet.forEach(element => {
            if(element.camion.type == "voiture" && data.poids > 0  && data.poids <= 200 ){
                console.log(element.email);
                email(element.email)
            }else if(element.camion.type == "petit" && data.poids >= 200 && data.poids <= 800 ){
                console.log(element.email);
                email(element.email)
            }else if(element.camion.type == "grand" && data.poids >= 800 && data.poids <= 1600 ){
                console.log(element.email);
                email(element.email)
            }
        });
        res.status(201).json(newcommande);
    }catch(err){
        res.status(404).json({ message : err.message })
    }

}

//update commande status
exports.CommandeStatusUpdate = async(req,res)=>{
    const mois  = ["Janvier","F??vrier","Mars","Avril","Mai","Juin","Juillet","Ao??t","Septembre","Octobre","Novembre","D??cembre "] ;
    let date = new Date();
    let nameMois = mois[date.getMonth()];
    try {
        console.log(req.body.chauffeur_id);
        const updatedcommande = await commande.updateOne(
            {_id:req.params.id},
            {$set: { status:req.body.status,chauffeur:req.body.chauffeur_id}}
        )
        console.log(updatedcommande);
        const GetCommandeById = await commande.find({id:req.params.id});
        const prixCommande = GetCommandeById.find((prix) => {return prix.prix})
        const addCommandeToPrime = new prime({
            mois:nameMois,
            livraison_prix:prixCommande.prix,
            chauffeur:req.body.chauffeur_id,
            livraison:req.params.id
        })
        // await addCommandeToPrime.save()
        res.json(updatedcommande)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}