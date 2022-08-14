const container = document.querySelector('.container');

const sendGetRequest = async () => {
    const res = await axios.get('./api/allProducts');
    for (i = 0; i < res.data.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<div class="name">${res.data[i].brand} ${res.data[i].model}</div>
     <div class="pic"><img class "imgCard" src="${res.data[i].picture}" alt="${res.data[i].brand} ${res.data[i].model}" height="180" ></div>
     <div class="price">Price: ${res.data[i].price}</div>
     <div class="link"><a href="./product/${res.data[i].id}">Details...</a></div>`
        container.appendChild(card);
    };
};

sendGetRequest();