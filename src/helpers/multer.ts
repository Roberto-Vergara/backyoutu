import multer from "multer"

const storage = multer.diskStorage({
    filename: (req, file, cb) => { cb(null, `${file.fieldname}${Date.now()}.${file.mimetype.split("/")[1]}`) },
    destination: "./src/img"
})

const mdmu = multer({
    storage
})

export {
    mdmu
}