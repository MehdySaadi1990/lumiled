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
    db.query(`INSERT INTO items (ref, type, serie, certificat, power, etancheite, duree, light_color, couverture, image, fiche_tech, userId, brand, price)
                VALUES ('${req.body.ref}', '${req.body.type}', 'Série ${req.body.serie}', '${req.body.certificat}', '${req.body.power}', '${req.body.etancheite}', '${req.body.duree}', '${req.body.light_color}', '${req.body.couverture}', '${`${req.protocol}://${req.get('host')}/images/${req.files['image'][0].filename}`}', '${`${req.protocol}://${req.get('host')}/fiche_tech/${req.files['fiche_tech']?req.files['fiche_tech'][0].filename:''}`}', '${req.auth.userId}','${req.body.brand}', '${req.body.price}')`)
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
                .then(()=>{res.status(200).json({message : 'Produit supprimé'})})
                .catch(error=>res.status(400).json({error}))
                })
            })
        }
        })
    .catch(error=>res.status(400).json({error}))
}

exports.updateItem = (req,res,next)=>{
    const db = req.app.get('db')
    db.query('SELECT * FROM items WHERE id = ?', [req.params.id])
    .then((result)=>{
        if (result[0].length === 0) {
            return res.status(404).json({ message: 'Élément non trouvé' });
        }
        if (result[0][0].userId != req.auth.userId) {
            res.status(201).json({message:'action non-autorisée'})
        }else{
        let fieldsToUpdate = {};
        Object.keys(req.body).forEach(key => {
            if(req.body[key] !== ''){
                fieldsToUpdate[key] = req.body[key];
            }
         })
         const oldImage = result[0][0].image
         const oldFile = result[0][0].fiche_tech
         const oldImageName = oldImage.split('/images/')[1];
         const oldFileName = oldFile.split('/fiche_tech/')[1];
         fieldsToUpdate.image = oldImage
         fieldsToUpdate.fiche_tech = oldFile
        if(req.files){
                if(req.files['image'] && req.files['image'][0]){
                    newImageName = `${req.protocol}://${req.get('host')}/images/${req.files['image'][0].filename}`;
                    fieldsToUpdate.image = newImageName
                    fs.unlink(`images/${oldImageName}`, (err)=>{
                        if (err) {
                            return res.status(500).json({ error: 'Erreur lors de la suppression de l\'ancienne image' });
                        }
                }
            )
                }
                if(req.files['fiche_tech'] && req.files['fiche_tech'][0]){
                    newFicheTechName = `${req.protocol}://${req.get('host')}/fiche_tech/${req.files['fiche_tech'][0].filename}`
                    fieldsToUpdate.fiche_tech = newFicheTechName
                    fs.unlink(`fiche_tech/${oldFileName}`,(err)=>{
                        if (err) {
                            return res.status(500).json({ error: 'Erreur lors de la suppression de l\'ancienne fiche' });
                            }
                        })
                    }
            }
            if (Object.keys(fieldsToUpdate).length === 0) {
                return res.status(400).json({ message: 'Aucune donnée fournie pour la mise à jour' });
            }
            db.query('UPDATE items SET ? WHERE id = ?', [fieldsToUpdate, req.params.id])
                    .then(()=>res.status(200).json({message : 'fiche modifié'}))
                    .catch((error)=>res.status(400).json({error}))
        }

        })
        .catch((error)=>res.status(400).json({error}))
}