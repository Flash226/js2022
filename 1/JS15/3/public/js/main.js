const initProduct = async () => {
    const result = await axios.get('./product.json')
    console.log(result.data);
}
initProduct();