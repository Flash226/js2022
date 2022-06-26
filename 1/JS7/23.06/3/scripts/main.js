const elSort = document.querySelector('select[name="sort"]');
const elResult = document.querySelector('table');
const elPriceMin = document.querySelector('.priceMin');
const elPriceMax = document.querySelector('.priceMax');


const ware = [
        { name: 'Hyundai ARN07HSSUAWF1', power: 0.7, coldPower: 2.05, heatPower: 2.3, wifi: 'option', area: 20, compressor: 'invertor', price: 11999 },
        { name: 'ERGO AC 0708 CH', power: 0.65, coldPower: 2.05, heatPower: 2.2, wifi: 'no', area: 20, compressor: 'usual', price: 8499 },
        { name: 'Hyundai ARN09HSSUAWF1', power: 0.82, coldPower: 2.64, heatPower: 2.93, wifi: 'option', area: 25, compressor: 'invertor', price: 12999 },
        { name: 'Cooper&Hunter CH-S07FTXF', power: 0.75, coldPower: 2.2, heatPower: 2.3, wifi: 'yes', area: 25, compressor: 'invertor', price: 17570 },
        { name: 'Gree GWH07QA', power: 0.65, coldPower: 2.2, heatPower: 2.3, wifi: 'no', area: 20, compressor: 'invertor', price: 21480 },
        { name: 'Cooper&Hunter CH-S18FTXF', power: 1.4, coldPower: 4.6, heatPower: 5.2, wifi: 'yes', area: 54, compressor: 'invertor', price: 32440 },
];


const run = () => {
        const vPriceMax = Number(elPriceMax.value);
        const vPriceMin = Number(elPriceMin.value);
        const vSort = elSort.value;

        let filtronware = ware.filter((pricex) => {
                return pricex.price <= vPriceMax && pricex.price >= vPriceMin;
        });

        let sorted = (field) => {
                return (a, b) => a[field] > b[field] ? 1 : -1;
        }
        filtronware.sort(sorted(vSort));

        for (let i = 0; i < filtronware.length; i++) {
                if (i === 0) {
                        elResult.innerHTML = `<tr>
                                <th>Name</th>
                                <th>Power</th>
                                <th>Cold Power</th>
                                <th>Heat Power</th>
                                <th>Wi-Fi</th>
                                <th>Area</th>
                                <th>Compressor</th>
                                <th>Price</th>
                                </tr><tr>    
                                <td>${filtronware[i].name}</td> 
                                <td>${filtronware[i].power}</td> 
                                <td>${filtronware[i].coldPower}</td> 
                                <td>${filtronware[i].heatPower}</td>
                                <td>${filtronware[i].wifi}</td>
                                <td>${filtronware[i].area}</td>
                                <td>${filtronware[i].compressor}</td>
                                <td>${filtronware[i].price}</td>
                                </tr>`;

                } else {
                        elResult.innerHTML += `<tr><td>${filtronware[i].name}</td> 
                                <td>${filtronware[i].power}</td> 
                                <td>${filtronware[i].coldPower}</td> 
                                <td>${filtronware[i].heatPower}</td>
                                <td>${filtronware[i].wifi}</td>
                                <td>${filtronware[i].area}</td>
                                <td>${filtronware[i].compressor}</td>
                                <td>${filtronware[i].price}</td>
                                </tr>`;
                }
        }
}
elPriceMax.addEventListener('change', run);
elPriceMin.addEventListener('change', run);
elSort.addEventListener('change', run);