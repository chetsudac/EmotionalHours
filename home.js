options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric'
  };
  const clock = () => dateTime.innerText=new Intl.DateTimeFormat('en-EN', options).format(new Date())
  clock()
  setInterval(clock, 1000);
  
    // Your NASA API key
    const apiKey = 'eoVXgMJ1VP02Y427y52nkEieKdq6jVtllPm0fWIF';

    // List of NASA image IDs
    const imageIds = ['iss011e11806', 's62-03248', 's62-03266', 'KSC-20220612-PH-JBS01_0034', 'KSC-2012-3670', 'KSC-2014-3457', 'KSC-20180730-PH_KLS02_0002', 'KSC-20180730-PH_KLS02_0009',
    'KSC-2014-3456', 'KSC-20191031-PH-GEB01_0003', 'KSC-20191031-PH-GEB01_0002', 'PIA17936', 'KSC-2009-1362', 'KSC-2011-2642', 'KSC-314D-0491_0020', 'KSC-20161215-PH_SWW01_0069',
    'NHQ202210080001', 'KSC-20200730-PH-KLS01_0001', 'KSC-2012-2382', 'KSC-2012-2404', 'KSC01padig151', 'KSC-2013-2797', 'AFRC2021-0003-18', 'AFRC2018-0287-074', 'AFRC2021-0106-02']; // Add your image IDs here

    // Function to fetch and display a random image
    function displayRandomImage() {
        // Randomly select an image ID from the list
        const randomIndex = Math.floor(Math.random() * imageIds.length);
        const randomId = imageIds[randomIndex];

        // NASA Images API endpoint
        const apiUrl = `https://images-api.nasa.gov/asset/${randomId}`;

        // Make a GET request to the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Extract the URL of the image from the response
                const imageUrl = data.collection.items[0].href;

                // Set image source for background image
                document.getElementById('background-image').src = imageUrl;
            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });
        
        // Schedule the next image update after 5 seconds
        setTimeout(displayRandomImage, 24000); // 5000 milliseconds = 5 seconds
    }

    // Initial display of a random image
    displayRandomImage();