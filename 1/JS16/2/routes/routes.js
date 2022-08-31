const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const crypto = require('crypto');
const mime = require('mime-types');
const path = require('path');
const db = [];

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', (req, res) => {
    res.render('main');
});


router.get('/uploaded', (req, res) => {
   res.render('uploaded', { db });
});


const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "./uploads");
   },
   filename: (req, file, cb) => {
      cb(null, `temp${path.extname(file.originalname)}`);
   }
});

const uploadStorage = multer({storage: storage})

router.post("/upload", uploadStorage.array("files"), uploadFiles);

function uploadFiles(req, res) {
   const sha1sum = crypto.createHash('sha1').update(fs.readFileSync(`./uploads/${req.files[0].filename}`)).digest("hex");
   const newFileName = `${sha1sum}.${mime.extension(`${req.files[0].mimetype}`)}`;

   fs.rename(`./uploads/${req.files[0].filename}`, `./public/uploads/${newFileName}`, err => {
      if(err) throw err; 
      res.json({ message: "Successfully uploaded files" });
      if (db.includes(newFileName) === false) { 
      db.push(`${sha1sum}.${mime.extension(`${req.files[0].mimetype}`)}`)
      console.log(db)

      const json = Object.assign({}, db);
      console.log(json);
      }
   });
}

module.exports = router;