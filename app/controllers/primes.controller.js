const prime = require('../models/prime.model')

//Get primes
exports.PrimeGet = async(req,res,next)=>{
    try {
        const adminGGet = await prime.find()
        res.json(adminGGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}