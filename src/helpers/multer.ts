import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    filename: (req, file, cb) => { cb(null, `${file.fieldname}${Date.now()}.${file.mimetype.split("/")[1]}`) },
    destination: path.join(__dirname, "../img")

})

const mdMulter = multer({
    storage
})

export {
    mdMulter
}