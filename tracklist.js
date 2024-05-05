options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric'
  };
  const clock = () => dateTime.innerText=new Intl.DateTimeFormat('en-EN', options).format(new Date())
  clock()
  setInterval(clock, 1000);

const body = document.querySelector('body');
const light = document.querySelector('light');
const date = new Date();
const hour = date.getHours();


