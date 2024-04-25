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


fetch('sheetybutJSON.json')
.then(response => response.json())
.then(data => {

const lyrics = document.getElementById('lyrics');

    const buttonReset = document.getElementById('all');

data.forEach(item => {
    const div = document.createElement('div');
    const title = document.createElement('h5');

    title.textContent = item.Lyrics;

    div.style.display = "block";

    
    
    div.appendChild(title);
    lyrics.appendChild(div);
    });

})

.catch(error => console.error(error));

