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
                console.log('Спочатку відкрийте двері в кухні.');
                return;
            }

        if(valueLight === '1' && valueKitchen ==='1' && valueDnight ==='day') {
                console.log('Електрику потрібно економити. Вимкніть світло!');
            }

        if(valueKitchen ==='1' && valueDnight ==='day' && valueFreezer === '0') {
                console.log('Відкрийте дверцята холодильника щоб взяти ковбасу.');
                return;
            }
            
        if(valueKitchen ==='1' && valueDnight ==='night' && valueLight === '1' && valueFreezer === '0') {
                console.log('Відкрийте дверцята холодильника щоб взяти ковбасу.');
                return;
        }
        
        if(valueKitchen ==='1' && valueDnight ==='night' && valueLight === '1' && valueFreezer === '1') {
                console.log('Вітаю! Ви пройшли квест і можете взяти ковбасу.');
                return;
        }  
        
        if(valueKitchen ==='1' && valueDnight ==='day' && valueLight === '1' && valueFreezer === '1') {
                console.log('Вітаю! Ви пройшли квест і можете взяти ковбасу.');
                return;
        }     

        if(valueLight === '0' && valueKitchen ==='1' && valueDnight ==='night') {
                console.log('Увімкніть світло щоб дійти до холодильника.');
                return;
            }

        
}




run();
elLight.addEventListener('change', run);
elDoorKitchen.addEventListener('change', run);
elFreezer.addEventListener('change', run);
elDNight.addEventListener('change', run);