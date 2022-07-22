const init = () => {
    const el = document.querySelector('[data-name="test"]');
    el.addEventListener('click', async () => {
        const result = await Promise.all([
        axios.post(
            url = 'https://api.wayforpay.com/api',
            data = {
                "transactionType":"CREATE_INVOICE",
                "merchantAccount":"test_merch_n1",
                "merchantAuthType":"SimpleSignature",
                "merchantDomainName":"www.super.org",
                "merchantSignature":"60c5d743b71f79abe48c7183ada4b451",
                "apiVersion":1,
                "orderReference":"myOrder1",
                "orderDate":1421412898,
                "amount":1547.36,
                "currency":"UAH",
                "orderTimeout": 86400,
                "productName":["Samsung WB1100F","Samsung Galaxy Tab 4 7.0 8GB 3G Black"],
                "productPrice":[21.1,30.99],
                "productCount":[1,2],
                "paymentSystems": "card;privat24",
                "clientFirstName":"Bulba",
                "clientLastName":"Taras",
                "clientEmail":"rob@mail.com",
                "clientPhone":"380556667788"
            }
            // url = 'https://petstore.swagger.io/v2/store/order',
            // data = {
            //     "id": 0,
            //     "petId": 0,
            //     "quantity": 0,
            //     "shipDate": "2022-07-19T19:22:20.097Z",
            //     "status": "placed",
            //     "complete": true
            // }
        )
        .then(response => { 
            const elContent = document.querySelector('.outputApi');
            elContent.innerHTML = `${response.data.status}`;
            console.log(response);
        })
        .catch(error => {
            console.log(error.response);
        })
        
    ])   
    
});

}

init();

