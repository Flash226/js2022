const express = require('express');
const serv = express();
serv.set('view engine', 'ejs');
serv.set('views', './views/');
serv.use(express.static(`${__dirname}/public`));
serv.use('/product', express.static(`${__dirname}/public`));

const products = [
    { id: 1, category: 'TV', brand: 'Samsung', model: 'QE50Q60AAUXUA', diagonal: 50, resolution: '3840x2160', year: 2021, country: 'Korea', price: 27199, picture: './img/1.jpg' },
    { id: 2, category: 'TV', brand: 'Hisense', model: '50E76GQ', diagonal: 50, resolution: '3840x2160', year: 2021, country: 'China', price: 18999, picture: './img/2.jpeg' },
    { id: 3, category: 'TV', brand: 'Philips', model: '55OLED806', diagonal: 55, resolution: '3840x2160', year: 2021, country: 'Poland', price: 56999, picture: './img/3.jpeg' },
    { id: 4, category: 'TV', brand: 'LG', model: 'OLED48C14LB', diagonal: 48, resolution: '3840x2160', year: 2021, country: 'Poland', price: 59499, picture: './img/4.jpeg' },
    { id: 5, category: 'TV', brand: 'Sony', model: 'XR65A90JCEP', diagonal: 65, resolution: '3840x2160', year: 2021, country: 'Japan', price: 126500, picture: './img/5.jpeg' },
    { id: 6, category: 'TV', brand: 'Samsung', model: 'QE50Q60AAUXUA', diagonal: 32, resolution: '1920x1080', year: 2021, country: 'Hungary', price: 11999, picture: './img/6.jpeg' }
];

serv.get('/', (req, res) => {
    let cards = '';
    for (i = 0; i < products.length; i++) {
        cards += `<div class="card"> <div class="name">${products[i].brand} ${products[i].model}</div>
        <div class="pic"><img class "imgCard" src="${products[i].picture}" alt="${products[i].brand} ${products[i].model}" height="180" ></div>
        <div class="price">Price: ${products[i].price}</div>
        <div class="link"><a href="./product/${products[i].id}">Details...</a></div></div>`
    }
    console.log(cards)
    res.render('main', { data: cards });
})

serv.get('/product/:id', (req, res) => {
    const { id } = req.params;
    const findProduct = (id) => {
        const result = products.find(item => item.id === id);
        return result;
    };
    const product = findProduct(Number(id));
    res.render('product', {
        category: product.category,
        brand: product.brand,
        model: product.model,
        diagonal: product.diagonal,
        resolution: product.resolution,
        year: product.year,
        country: product.country,
        price: product.price,
        picture: product.picture
    });
})

serv.listen(3000);