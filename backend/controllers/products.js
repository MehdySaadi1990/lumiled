const path = require('path');
const fs = require('fs');

exports.getItems=(req,res,next)=>{
    const db = req.app.get('db');
    db.query(`SELECT * FROM items`)
    .then((result)=>res.status(200).json(result[0]))
    .catch((error)=>res.status(400).json({error})) 
}

exports.createItem=(req,res,next)=>{
    const db = req.app.get('db');
    db.query(`INSERT INTO items (ref, type, serie, certificat, power, etancheite, duree, light_color, couverture, image, fiche_tech, userId, brand)
                VALUES ('${req.body.ref}', '${req.body.type}', 'Série ${req.body.serie}', '${req.body.certificat}', '${req.body.power}', '${req.body.etancheite}', '${req.body.duree}', '${req.body.light_color}', '${req.body.couverture}', '${`${req.protocol}://${req.get('host')}/images/${req.files['image'][0].filename}`}', '${`${req.protocol}://${req.get('host')}/fiche_tech/${req.files['fiche_tech'][0].filename}`}', '${req.auth.userId}','${req.body.brand}')`)
   .then((result)=>res.status(200).json(console.log(result)))
   .catch(error=>res.status(400).json({error}))
   }

   exports.getPdf=(req,res,next)=>{
        const fileName = req.params.fiche_tech
        const filePath = path.join(__dirname, '../fiche_tech', fileName);
        if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'application/pdf')
            res.download(filePath, (err) => {
            if (err) {
                console.error("Erreur lors de l'envoi du fichier :", err);
                res.status(500).send("Erreur lors de l'envoi du fichier.");
            }
                
        })
    }
   }
exports.deleteItem = (req,res,next)=>{
    const db = req.app.get('db')
    db.query(`SELECT * FROM items WHERE id = '${req.body.id}'`)
    .then((result)=>{
        if (result[0][0].userId != req.auth.userId) {
            res.status(201).json({message:'action non-autorisée'})
        }else{
            const imageName = result[0][0].image.split('/images/')[1];
                fs.unlink(`images/${imageName}`, ()=>{
                const fileName = result[0][0].fiche_tech.split('/fiche_tech/')[1];
                fs.unlink(`fiche_tech/${fileName}`,()=>{
                db.query(`DELETE FROM items WHERE id=${req.params.id}`)
                .then(()=>res.status(200).json({message : 'Produit supprimé'}))
                .catch(error=>res.status(400).json({error}))
                })
            })
        }
        })
    .catch(error=>res.status(400).json({error}))
}

exports.updateItem = (req,res,next)=>{
    const db = req.app.get('db')
    db.query(`SELECT * FROM items WHERE id = ${req.params.id}`)
    .then((result)=>{
        if (result[0][0].userId != req.auth.userId) {
            res.status(201).json({message:'action non-autorisée'})
        }else{
            let newImage = result[0][0].image
            let newFicheTech = result[0][0].fiche_tech
            if(req.files && req.files['image'][0]){
            const imageName = result[0][0].image.split('/images/')[1];
            newImage = `${req.protocol}://${req.get('host')}/images/${req.files['image'][0].filename}`;
            fs.unlink(`images/${imageName}`, (err)=>{
                if (err) {
                    return res.status(500).json({ error: 'Erreur lors de la suppression de l\'ancienne image' });
                }
                }
            )
           
            }
            if(req.files && req.files['fiche_tech']){
            const fileName = result[0][0].fiche_tech.split('/fiche_tech/')[1];
            newFicheTech = `${req.protocol}://${req.get('host')}/fiche_tech/${req.files['fiche_tech'][0].filename}`
            fs.unlink(`fiche_tech/${fileName}`,(err)=>{
                if (err) {
                    return res.status(500).json({ error: 'Erreur lors de la suppression de l\'ancienne fiche' });
                    }
                })
            }
            db.query(`UPDATE items SET image = '${newImage}', fiche_tech = '${newFicheTech}' WHERE id = '${req.params.id}'`)
            .then(()=>res.status(200).json({message : 'fiche supprimé'}))
            .catch((error)=>res.status(400).json({error}))
        }
    })
        .catch((error)=>res.status(400).json({error}))
}