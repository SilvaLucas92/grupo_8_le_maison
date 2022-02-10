const path = require('path');
//multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        let folder = path.join(__dirname, '../public/images')
        cb(null, folder);
        
        cb(null, path.join(__dirname, '../public/images'))
    },
    filename: (req, file, cb) => {      
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, 'img - ' + uniqueSuffix + '-' + file.fieldname + path.extname(file.originalname))
        
        const newFilname = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilname)
    }
});
const fileUpload = multer({storage});
const upload = multer ({ storage });

module.exports = fileUpload;
module.exports = upload;