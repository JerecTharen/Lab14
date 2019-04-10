
let jsDiv = document.getElementById('dateJs');
let reactDiv = document.getElementById('dateReact');

const render = ()=>{
    jsDiv.innerHTML = `<div>JS Template <input /> <p>${new Date()}</p></div>`;
};

setInterval(render(), 1000);
