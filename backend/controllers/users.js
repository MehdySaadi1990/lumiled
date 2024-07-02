exports.login = (req,res,next)=>{
    const db = req.app.get('db');
    const {email, password} = req.body
    db.query(`SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`)
    .then((result)=>{
        if (!email || !password){
            res.status(401).json({message : "Login ou Mot de passe manquant"})
        }else{
            if(result[0].length === 0){
                res.status(401).json({message : "Paire login / Mot de passe incorrect"})
            }else{
                res.status(200).json({message : "Utilisateur authentifié"})
            }
        }
        })
    .catch((error)=>res.status(400).json({error})) 
}