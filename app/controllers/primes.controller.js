const prime = require('../models/prime.model')

//Get primes
exports.PrimeGet = async(req,res,next)=>{
    try {
        const PrimeGet = await prime.find()
        res.json(PrimeGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Get livreur prime
exports.chauffeurPrime = async(req,res,next)=>{
    const mois  = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre "] ;
    let date = new Date();
    let nameMois = mois[date.getMonth()];
    try {
        let distance = 0;
        let prix = 0;
        const PrimeGetByChauffeur = await prime.find({chauffeur:req.params.id}).populate("livraison")
        PrimeGetByChauffeur.forEach(element => {
            if(element.mois == nameMois){
                distance += parseInt(element.livraison.distance_kilometrage);
                prix += parseInt(element.livraison_prix)
            }
        });
        montantPrime = 0;
        if(distance => 1000 && distance <= 1999 ){
            montantPrime = prix * 0.15
        }else if(distance => 2000 && distance <= 2999){
            montantPrime = prix * 0.22
        }else if(distance => 2500){
            montantPrime = prix * 0.3
        }
        res.json(montantPrime)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}

