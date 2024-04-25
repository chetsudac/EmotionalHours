options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric'
  };
  const clock = () => dateTime.innerText=new Intl.DateTimeFormat('en-EN', options).format(new Date())
  clock()
  setInterval(clock, 1000);

document.body.style.background = "linear-gradient(to bottom, pink, navy)"
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


// JSON data file URL
const jsonDataUrl = 'sheetybutJSON.json';

// Function to fetch JSON data
async function fetchJSONData() {
    try {
        const response = await fetch(jsonDataUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return null;
    }
}

// Function to randomly select data
function getRandomData(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

// Function to display randomly selected data
async function displayRandomData() {
    const jsonData = await fetchJSONData();

    if (!jsonData) {
        console.error('No JSON data available.');
        return;
    }

    const randomData = getRandomData(jsonData);

    // Display randomly selected data on the website
    const randomDataContainer = document.getElementById('random-data');
    randomDataContainer.innerHTML = `
        <h2> -> ${randomData.Lyrics}</h2>
    `;
}

// Call the displayRandomData function to initiate the process
displayRandomData();