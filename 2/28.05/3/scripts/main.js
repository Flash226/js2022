const elLight = document.querySelector('select[name="light"]');
const elDoorKitchen = document.querySelector('select[name="doorKitchen"]');
const elFreezer = document.querySelector('select[name="freezer"]');
const elDNight = document.querySelector('select[name="dNight"]');
const elStatus = document.querySelector('.status > span');


const run = () => {
        const valueLight = elLight.value;
        const valueKitchen = elDoorKitchen.value;
        const valueFreezer = elFreezer.value;
        const valueDnight = elDNight.value;

        if(valueKitchen !='1') {
                const spun = document.querySelector('span');
                spun.insertAdjacentHTML('afterend', '<span>Спочатку відкрийте двері в кухні</span></br><hr>');
                console.log('Спочатку відкрийте двері в кухні.');
                return;
            }

        if(valueLight === '1' && valueKitchen ==='1' && valueDnight ==='day') {
                const spun = document.querySelector('span');
                spun.insertAdjacentHTML('afterend', '<span>Електрику потрібно економити. Вимкніть світло!</span></br><hr>');
                console.log('Електрику потрібно економити. Вимкніть світло!');
            }

        if(valueKitchen ==='1' && valueDnight ==='day' && valueFreezer === '0') {
                console.log('Відкрийте дверцята холодильника щоб взяти ковбасу.');
                const spun = document.querySelector('span');
                spun.insertAdjacentHTML('afterend', '<span>Відкрийте дверцята холодильника щоб взяти ковбасу.</span></br><hr>');
                return;
            }
            
        if(valueKitchen ==='1' && valueDnight ==='night' && valueLight === '1' && valueFreezer === '0') {
                const spun = document.querySelector('span');
                spun.insertAdjacentHTML('afterend', '<span>Відкрийте дверцята холодильника щоб взяти ковбасу.</span></br><hr>');
                console.log('Відкрийте дверцята холодильника щоб взяти ковбасу.');
                return;
        }
        
        if(valueKitchen ==='1' && valueDnight ==='night' && valueLight === '1' && valueFreezer === '1') {
                const spun = document.querySelector('span');
                spun.insertAdjacentHTML('afterend', '<span>Вітаю! Ви пройшли квест і можете взяти ковбасу.</span></br><hr>');
                console.log('Вітаю! Ви пройшли квест і можете взяти ковбасу.');
                return;
        }  
        
        if(valueKitchen ==='1' && valueDnight ==='day' && valueFreezer === '1') {
                const spun = document.querySelector('span');
                spun.insertAdjacentHTML('afterend', '<span>Вітаю! Ви пройшли квест і можете взяти ковбасу.</span></br><hr>');
                console.log('Вітаю! Ви пройшли квест і можете взяти ковбасу.');
                return;
        }     

        if(valueLight === '0' && valueKitchen ==='1' && valueDnight ==='night') {
                const spun = document.querySelector('span');
                spun.insertAdjacentHTML('afterend', '<span>Увімкніть світло щоб дійти до холодильника.</span></br><hr>');
                console.log('Увімкніть світло щоб дійти до холодильника.');
                return;
            }

        
}




run();
elLight.addEventListener('change', run);
elDoorKitchen.addEventListener('change', run);
elFreezer.addEventListener('change', run);
elDNight.addEventListener('change', run);