const init = () => {
    const el = document.querySelector('[data-name="test"]');
    el.addEventListener('click', async () => {


    
        const requestOptions = {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            
                    transactionType: "CREATE_INVOICE",
                    merchantAccount: "test_merch_n1",
                    merchantAuthType: "SimpleSignature",
                    merchantDomainName: "www.super.org",
                    merchantSignature: "60c5d743b71f79abe48c7183ada4b451",
                    apiVersion: 1,
                    orderReference: "myOrder1",
                    orderDate: 1421412898,
                    amount: 1547.36,
                    currency: "UAH",
                    orderTimeout: 86400,
                    productName: [
                      "Samsung WB1100F",
                      "Samsung Galaxy Tab 4 7.0 8GB 3G Black"
                    ],
                    productPrice: [
                      21.1,
                      30.99
                    ],
                    productCount: [
                      1,
                      2
                    ],
                    paymentSystems: "card;privat24",
                    clientFirstName: "Bulba",
                    clientLastName: "Taras",
                    clientEmail: "rob@mail.com",
                    clientPhone: "380556667788"
                  
              })
        };
        const response = await fetch('https://api.wayforpay.com/api', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
        const data = await response.json();
        console.log(data);

    })
}

init();