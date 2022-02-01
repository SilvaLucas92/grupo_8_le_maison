const path = require('path');
//multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        let folder = path.join(__dirname, '../public/images')
        cb(null, folder);
    },
    filename: (req, file, cb) => {      
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, 'img - ' + uniqueSuffix + '-' + file.fieldname + path.extname(file.originalname))
    }
});
const fileUpload = multer({storage});

module.exports = fileUpload;