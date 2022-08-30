const express = require('express');
const multer = require('multer');

const serv = express();
const PORT = process.env.PORT ?? 3000;

serv.set('view engine', 'ejs');
serv.set('views', './views/');

serv.use(express.static(__dirname + './public'));

const upload = multer({ dest: "public/uploads/" });

serv.use(express.json());
serv.use(express.urlencoded({ extended: true }));


serv.post("/test", upload.single("file"), uploadFile);

function uploadFile(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
}







serv.get('/', (req, res) => {
    res.render('main');
});

// serv.post('/test', (req, res) => {
//     console.log('work')
//     res.json({status: 'ok'});
// });


serv.listen(PORT, () => 
console.log(`Server has been started on port ${PORT}...`));