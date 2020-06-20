const section = document.querySelector('.postcard'); 
console.log(section);

const url = 'https://api.openaq.org/v1/cities'; //1

// fetch(url)
// .then(function(object){ 
//     return object.json() 
// })
// .then(function(data) {
//     displayResults (data); 
//     //let city = json.results;
// })
// .catch(err => console.error({error: err}));


let button = document.querySelector('button').addEventListener("click", fetchResults);
//console.log(button);

function fetchResults(city) {
    city.preventDefault();
    //console.log(city);
    //console.log(city.results);
    //console.log(`${city}`);

    fetch(url)
    .then(function(object){ 
        return object.json() 
    })
    .then(function(data) {
        console.log(data); 
        //let city = json.results;
    })

    fetch(url).then(function(result) {
        return result.json();
      }).then(function(json) {
        displayResults(json);
      });
    }

    function displayResults(city) {
    //.catch(err => console.error({error: err}));

    let town = city.results;
    console.log(town[0].city);
    //console.log(`Thank you for visiting ${town[0].city}!`)

    //town.length
    console.log(Math.floor(Math.random(100)*town.length));

    let x = Math.floor(Math.random(100)*town.length);

    let cityName = document.querySelector("p");
    cityName.textContent = town[x].city;
    //cityName.appendChild(cityName); 
   // console.log(town[p].city);

}


