const search = document.querySelector('.search');
const inp = document.querySelector('.inp');
const temp = document.querySelector('.block__main-data-temp');
const currentCity = document.querySelector('.block__main-data-currentCity');
const favorite = document.querySelector('.block__main-history__txt');
const like = document.querySelector('.like')




let elements = [];







search.addEventListener('click', ()=>{
    const serverUrl = 'http://api.openweathermap.org/data/2.5/forecast';
    const cityName = inp.value;
    const apiKey = 'bead7c080f6cdbd0e527a2e6825bc046'; // этот ключ имеет ограничение в кол-ве запросов, если будут ошибки - придется сгенерировать новый или спросить в чате
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(response => { //Обработка ошибки 404
            if (response.status === 404) {
                alert('City not found');
                throw new Error('City not found');  
            }
            return response.json();
        })
        .then(function(data){
            temp.textContent = Math.round(data.list[0].main.temp-270,15);
            currentCity.textContent = inp.value;

            like.addEventListener('click', ()=>{
                
                if (!elements.includes(inp.value)){

                    elements.push(inp.value);
                    const newDiv = document.createElement('div');
                    newDiv.textContent = inp.value;
                    newDiv.className = 'favoriteCity';
                    favorite.appendChild(newDiv);

                    newDiv.addEventListener('click',(e)=>{
                        
                        const val = e.target.innerText;
                        currentCity.textContent=val;
                        temp.textContent = Math.round(data.list[0].main.temp-270,15);
                    });
                    //inp.value = "";
                    //favorite.innerHTML=elements.join();
                } 
            })
        })
        
});
