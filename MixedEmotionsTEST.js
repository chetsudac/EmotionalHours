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
} else if (hour < 22) {
    body.style.background = "linear-gradient(to bottom, #040918, #93B6CC)";
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

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to display randomly selected data
async function displayRandomData() {
    const jsonData = await fetchJSONData();

    if (!jsonData) {
        console.error('No JSON data available.');
        return;
    }

    const shuffledData = shuffleArray(jsonData);

    // Update the content of existing div elements with new data
    document.getElementById('random-data1').innerHTML = `
        <h2>"${shuffledData[0].Lyrics}"</h2>
    `;

    document.getElementById('random-data2').innerHTML = `
        <h2>"${shuffledData[1].Lyrics}"</h2>
    `;

    document.getElementById('random-data3').innerHTML = `
        <h2>"${shuffledData[2].Lyrics}"</h2>
    `;
    
    document.getElementById('random-data4').innerHTML = `
        <h2>"${shuffledData[3].Lyrics}"</h2>
    `;

    document.getElementById('random-data5').innerHTML = `
        <h2>"${shuffledData[4].Lyrics}"</h2>
    `;
}

// Call the displayRandomData function to initiate the process
displayRandomData();

// Create and append button dynamically
const button = document.createElement('button');
button.textContent = 'REMIX';
button.addEventListener('click', displayRandomData);
button.style.padding = '10px 20px';
button.style.backgroundColor = 'white';
button.style.color = 'black';
button.style.borderRadius = '50px';
button.style.cursor = 'pointer';
button.style.fontSize = '16px';
button.style.display = 'block'; // Ensures the button takes up the full width

document.body.appendChild(button);

const audio = new Audio("./assets/tape-insert.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
