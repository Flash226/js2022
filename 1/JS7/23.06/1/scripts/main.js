const elSort = document.querySelector('select[name="sort"]');
const elStatus = document.querySelector('.status');
const elPriceMin = document.querySelector('.priceMin');
const elPriceMax = document.querySelector('.priceMax');
const elResult = document.querySelector('.result');


let vSort = elSort.value;
let vPriceMin = elPriceMin.value;
let vPriceMax = elPriceMax.value;

const ware = [
        { name: 'Hyundai ARN07HSSUAWF1', power: '0.7', coldPower: '2.05', heatPower: '2.3', wifi: 'option', area: '20', compressor: 'invertor', price: '11999'},
        { name: 'ERGO AC 0708 CH', power: '0.65', coldPower: '2.05', heatPower: '2.2', wifi: 'no', area: '20', compressor: 'usual', price: '8499'},
        { name: 'Hyundai ARN09HSSUAWF1', power: '0.82', coldPower: '2.64', heatPower: '2.93', wifi: 'option', area: '25', compressor: 'invertor', price: '12999'},
        { name: 'Cooper&Hunter CH-S07FTXF', power: '0.75', coldPower: '2.2', heatPower: '2.3', wifi: 'yes', area: '25', compressor: 'invertor', price: '17570'},
        { name: 'Gree GWH07QA', power: '0.65', coldPower: '2.2', heatPower: '2.3', wifi: 'no', area: '20', compressor: 'invertor', price: '21480'},
        { name: 'Cooper&Hunter CH-S18FTXF', power: '1.4', coldPower: '4.6', heatPower: '5.2', wifi: 'yes', area: '54', compressor: 'invertor', price: '32440'},
];
const sorted = () => {
console.log(ware);
console.log(vSort);
console.log(vPriceMin);
console.log(vPriceMax);
elResult.innerHTML = "Enter the correct time";
}
elSort.addEventListener('change', sorted);
elPriceMin.addEventListener('change', sorted);

//elBrand.addEventListener('change', run);


