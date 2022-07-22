const init = () => {
    const el = document.querySelector('[data-name="test"]');
    el.addEventListener('click', async () => {
        const result = await Promise.all([
        axios.get('https://swapi.dev/api/people/1/'),
        axios.get('https://swapi.dev/api/people/2/'),
        ])

    const elContent = document.querySelector('.outputApi');
    elContent.innerHTML = `${result[0].data.name} ${result[1].data.name}`;
    console.log(11)
});

}

init();


