const fs = require('fs')

exports.getItems=(req,res,next)=>{
    const db = req.app.get('db');
    db.query("SELECT * FROM liper")
    .then((result)=>res.status(200).json(result[0]))
    .catch((error)=>res.status(400).json({error})) 
}

exports.createItem=(req,res,next)=>{
    const db = req.app.get('db');
    db.query('')
   .then((result)=>res.status(200).json(result))
   .catch(error=>res.status(400).json({error}))
   }

