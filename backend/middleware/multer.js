const multer = require('multer')

const MIME_TYPES = {
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'png',
    'image/webp':'webp',
    'application/pdf':'pdf'
}

const storage = multer.diskStorage({
    destination:(req, file, callback) => {
            const folder = file.mimetype.startsWith('image/') ? 'images' : 'fiche_tech';
            callback(null, folder);
    },
    filename:(req, file, callback) =>{
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name +req.body.id + '.' + extension)
    }
})

const fileFilter = (req, file, callback) => {
    const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(new Error('Invalid file type'), false);
    }
}

module.exports = multer({storage: storage, fileFilter: fileFilter}).fields([
    { name: 'image', maxCount: 1 },
    { name: 'fiche_tech', maxCount: 1 }])