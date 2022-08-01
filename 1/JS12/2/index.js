let funcWeather = require ('./functionWeather');

const init = async () => {
    const data = await funcWeather('Kiev, Ukraine');
    console.log(`${data[0].location.name} - ${data[0].current.temperature} ${data[0].location.degreetype}`)
}
init();
