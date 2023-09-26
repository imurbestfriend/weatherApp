const temp = document.querySelector('.block__main-data-temp');
const search = document.querySelector('.search');
const currentCity = document.querySelector('.block__main-data-currentCity');
const like = document.querySelector('.like');

const addedLocation = []; 


search.addEventListener('click', ()=>{

    const favoriteCity = document.querySelector('.block__main-history__txt');
    const inp = document.querySelector('.inp');
    
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = inp.value;
    const apiKey = '3ecbf20065d6c89ca540e7c2012eecc2'; // этот ключ имеет ограничение в кол-ве запросов, если будут ошибки - придется сгенерировать новый или спросить в чате
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    addedLocation.push(inp.value);
    
    const newDiv = document.createElement('li');
    currentCity.textContent = inp.value; 
    
    
    like.addEventListener('click', ()=>{
        newDiv.className = 'list';
        newDiv.textContent = cityName;
        favoriteCity.appendChild(newDiv);
         
    })
    
    
    
    
    fetch(url)
        .then(response => {
            if (response.status === 404) {
                alert('City not found');
                throw new Error('City not found');  
            }
            return response.json();
        })
        .then(data => show(data))
        .catch(error => console.error(error));
        function show(data){
            temp.textContent = Math.round(data.main.temp - 273,15);
            newDiv.addEventListener('click',(e)=>{
                const val = e.target.innerText;
                currentCity.innerText = val;
                temp.textContent = Math.round(data.main.temp - 273,15);
            }); 
        }

       
});

