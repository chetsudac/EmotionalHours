const APIKEY = 'LyQ6uKyDq22ELeqXAaOsyfOPHuk0XS5HAuhDEyrw'

let hazardousObjects = []

document.addEventListener("DOMContentLoaded", function () {
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?&api_key=${APIKEY}`)

    .then((response)=> response.json())
    .then((data) => {

        console.log('data', data);
        
        let title = document.createElement('h1')
        title.innerText = data.element_count
        document.querySelector('main').append(title)

        let allDates = Object.entries(data.near_earth_objects).map(([date, value]) => ({date, value}));

        allDates.forEach (date => {
            console.log('date', date);

            const hazardous = date.filter(item => item.is_potentially_hazardous_asteroid)
            console.log('hazardous', hazardous)
        });

        console.log('allDates', allDates);

    })
    .catch((error) => console.error("Error fetching JSON:", error));
})


