const jwt = require('jsonwebtoken')

//middleware de l'admin general 
exports.adminG =(req, res, next) =>{
    const token =req.cookies.token;
    console.log(token);
    if (token !== null) {
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
            } else {
                // console.log(decodedToken);
                if(decodedToken.role == 'adminG'){
                    next()
                }
            }
        })
    } else {
        console.log(err.message);
    }
}

// middleware de manager
exports.Manager =(req, res, next) =>{
    const token =req.cookies.token;
    if (token !== null) {
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
            }else {
                // console.log(decodedToken);
                if(decodedToken.role == 'Manager'){
                    next()
                }
            }
        })
    }else{
        console.log(err.message);
    }
}

//middleware de ResLivraison
exports.ResLivraison =(req, res, next) =>{
    const token =req.cookies.token;
    if (token !== null) {
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
            }else {
                if(decodedToken.role == 'ResLivraison'){
                    next()
                }
            }
        })
    }else{
        console.log(err.message);
    }
}

//middleware de Chauffeur
exports.Chauffeur =(req, res, next) =>{
    const token =req.cookies.token;
    if (token !== null) {
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
            }else {
                if(decodedToken.role == 'Chauffeur'){
                    next()
                }
            }
        })
    }else{
        console.log(err.message);
    }
}