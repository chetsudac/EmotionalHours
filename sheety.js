options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric'
  };
  const clock = () => dateTime.innerText=new Intl.DateTimeFormat('en-EN', options).format(new Date())
  clock()
  setInterval(clock, 1000);

document.body.style.background = "linear-gradient(to bottom, pink, blue)"
const body = document.querySelector('body');
const light = document.querySelector('light');
const date = new Date();
const hour = date.getHours();

if (hour < 12) {
  body.style.backgroundColor = 'lightblue';
} else if (hour < 16) {
  body.style.background = "linear-gradient(to bottom, #7890E4, #E78840)";
} else {
  body.style.background = "linear-gradient(to bottom, #11114D, #FFAD62)";
}

document.addEventListener('DOMContentLoaded', function(event) {
  ready();
})

function ready() {
const API_URL = "https://api.sheety.co/d7d8b8847e67266e0c170ea38345a197/emotionalHours/sheet1";

  // 1. When fetching data, make sure your URL is structured to perform a GET request to the correct endpoint.
  // The URL structure is as follows: https://api.sheety.co/username/projectName/sheetName
  // If you want to return a specific record, append the object ID (which is just the row number) to the endpoint URL.
  // For example: https://api.sheety.co/phill/themeParks/parks/2
  
const getAllObjects = async ()=>{
      
const response = await fetch(API_URL);
const data = await response.json();

return data

}
  
getAllObjects().then((data)=>{
console.log(data);

});
  
console.log("hello");
console.log("hello again");

}

