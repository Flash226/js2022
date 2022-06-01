let put = document.querySelector('input[name="text1"]');
put.addEventListener('change', (ev) => { 
    let text = ev.target.value;
    const el = document.querySelector('.change');
    el.innerHTML = text;
    let st = document.querySelector('.change');
    st.style.backgroundColor = 'yellow';
    console.log(text);
    })