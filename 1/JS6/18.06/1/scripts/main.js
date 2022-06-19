const elBrand = document.querySelector('select[name="brand"]');
const elStatus = document.querySelector('.status');
const elData = document.querySelector(".data");
const elStandart = document.querySelector(".standart");
const elSpeed = document.querySelector(".speed");
const elPic = document.querySelector(".pic");
const sdcard = [
        {
                brand: 'Hikvision',
                name: 'sdcard',
                data: ['64 MB', '128 MB', '256 MB'],
                standart: 'microSDXC',
                speed: '10/U1',
                pic: 'https://content.rozetka.com.ua/goods/images/preview/260868420.jpg'
        },

        {
                brand: 'Kingston',
                name: 'sdcard',
                data: ['16 MB', '64 MB', '128 MB'],
                standart: 'microSD',
                speed: '9',
                pic: 'https://content2.rozetka.com.ua/goods/images/preview/22848377.jpg'
        },

        {
                brand: 'SanDisk',
                name: 'sdcard',
                data: ['32 MB', '128 MB', '256 MB'],
                standart: 'microSDXC',
                speed: '10/U1',
                pic: 'https://content.rozetka.com.ua/goods/images/preview/13978350.jpg'
        },

]

const run = () => {
        const vBrand = elBrand.value;
        if (vBrand === 'hikvision') {
                elStatus.innerHTML = `Card: ${sdcard[0].brand}`;
                elData.innerHTML = `Обсяг пам'яті: ${sdcard[0].data[0]}`;
                elStandart.innerHTML = `Стандарт: ${sdcard[0].standart}`;
                elSpeed.innerHTML = `Клас швидкості: ${sdcard[0].speed}`;
                elPic.innerHTML = `<img src="${sdcard[0].pic}">`;
        } else if (vBrand === 'kingston') {
                elStatus.innerHTML = `Card: ${sdcard[1].brand}`;
                elData.innerHTML = `Обсяг пам'яті: ${sdcard[1].data[0]}`;
                elStandart.innerHTML = `Стандарт: ${sdcard[1].standart}`;
                elSpeed.innerHTML = `Клас швидкості: ${sdcard[1].speed}`;
                elPic.innerHTML = `<img src="${sdcard[1].pic}">`;
        } else if (vBrand === 'sanDisk') {
                elStatus.innerHTML = `Card: ${sdcard[2].brand}`;
                elData.innerHTML = `Обсяг пам'яті: ${sdcard[2].data[0]}`;
                elStandart.innerHTML = `Стандарт: ${sdcard[2].standart}`;
                elSpeed.innerHTML = `Клас швидкості: ${sdcard[2].speed}`;
                elPic.innerHTML = `<img src="${sdcard[2].pic}">`;
        }
        console.log(sdcard[0]);
}

elBrand.addEventListener('change', run);


