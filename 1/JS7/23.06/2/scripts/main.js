const elSort = document.querySelector('select[name="brand"]');



let vSort = elSort.value;
console.log(vSort);
const sorted = () => {
console.log(vSort);
//elResult.innerHTML = "Enter the correct time";
}

elSort.addEventListener('change', sorted);


//elBrand.addEventListener('change', run);


