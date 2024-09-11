const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signIn = async (req, res, next)=>{
    const db= req.app.get('db');
    const {email, password} = req.body
    const hashPassword = await bcrypt.hash(password, 10) 
    db.query(`INSERT INTO user (email, password) VALUES ('${email}', '${hashPassword}')`)
    .then((result)=>{
        res.status(200).json({message:'utilisateur enregistré'})
    })
    .catch(error=>res.status(400).json(error))
}


exports.login = (req,res,next)=>{
    const db = req.app.get('db');
    const {email, password} = req.body
    db.query(`SELECT * FROM user WHERE email = '${email}'`)
    .then(async(result)=>{
        if (!email){
            res.status(401).json({message : "Adresse e-mail manquante"})
        }else{
                await bcrypt.compare(password, result[0][0].password)
                .then((valid)=>{
                    if(!valid){
                        res.status(401).json({message:'Paire email/ Mot de passe invalide'})
                    }else{
                        if(email==="mehdy.saadi.dk@gmail.com"){
                            res.status(200).json({
                                userId: result[0][0].id,
                                admin: true,
                                token: jwt.sign(
                                    {userId:result[0][0].id},
                                    'RANDOM_TOKEN_SECRET',
                                    {expiresIn:'24h'}
                                )})
                        }else{
                            res.status(200).json({
                                userId: result[0][0].id,
                                admin:false,
                                token: jwt.sign(
                                    {userId:result[0][0].id},
                                    'RANDOM_TOKEN_SECRET',
                                    {expiresIn:'24h'}
                                )})
                        }
                        
                    }
                })
                .catch((error)=>res.status(400).json({error}))
        }
        })
    .catch((error)=>res.status(400).json({error})) 
}

exports.getUsers = (req, res, next)=>{
const db = req.app.get('db')
db.query('SELECT * FROM user WHERE id != 1')
.then((result)=>res.status(200).json(result[0]))
.catch((error)=>res.status(400).json({error}))
}

exports.deleteUser = (req, res, next)=>{
    const db = req.app.get('db')
    db.query(`DELETE FROM user WHERE id='${req.body.id}'`)
    .then(()=>res.status(200).json())
    .catch((error)=>res.status(400).json({error}))
}
