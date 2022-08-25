const multer = require('multer');
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let media_dest = '';
        if (file.fieldname == "file1" || file.fieldname == 'file2') {
            media_dest = `${__dirname}../../assets/products`
        }
        cb(null, media_dest)
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

const fileFilter = (req, file, cb) => {
    cb(null, true);
}

const upload = multer({
    fileFilter,
    storage
});


module.exports = upload;