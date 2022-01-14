const adminG = require('../models/adminG.model')

exports.adminGGet = async(req,res)=>{
    try {
        const adminGGet = await adminG.find()
        res.json(adminGGet)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}




