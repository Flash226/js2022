const express = require('express');
const serv = express();
const allRouter = require('./routes/routes');
const PORT = process.env.PORT ?? 3000;

serv.set('view engine', 'ejs');
serv.set('views', './views/');

serv.use(express.static('./public'));
serv.use(allRouter);

serv.listen(PORT, () => 
console.log(`Server has been started on port ${PORT}...`));