const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects"

// 1. Logs data in the form of an array of object IDs, with the messages "hello" and "hello again" in the console

// const getAllObjects = async ()=>{
    
//     const response = await fetch(API_URL);
//     const objects = await response.json();

//     return objects.objectIDs

// }

// getAllObjects().then((data)=>{
//     console.log(data);
// });

// console.log("hello");
// console.log("hello again");


// 2. Returns a single random object ID in the console

// const getRandomObjectFromArray = array =>{
//     return array[Math.floor(Math.random() * array.length)];
// }

// const getAllObjects = async ()=>{
    
//     const response = await fetch(API_URL);
//     const objects = await response.json();

//     return objects.objectIDs

// }

// getAllObjects().then((data)=>{
//     const randomObjectID = getRandomObjectFromArray(data);
//     console.log(randomObjectID);
// });

// console.log("hello");
// console.log("hello again");


// 3. Using JS to populate a div with the ID "main-art-item" in HTML. The API fetches a random objectID and places its image, title, and medium on the webpage

const getRandomObjectFromArray = array =>{
    return array[Math.floor(Math.random() * array.length)];
}

const getAllObjects = async ()=>{
    
    const response = await fetch(API_URL);
    const objects = await response.json();

    return objects.objectIDs

}

const getOneObject = async (objectID)=>{
    const response = await fetch(API_URL + "/" + objectID);
    const object = await response.json();
    return object;
}

getAllObjects().then((data)=>{
    const randomObjectID = getRandomObjectFromArray(data);


    getOneObject(randomObjectID).then((object)=>{
        console.log(object)
        paintArtworkOnPage(object);
    })
});

// const exampleItem = {"objectID":47892,"isHighlight":false,"accessionNumber":"29.149.70a, b","accessionYear":"1929","isPublicDomain":true,"primaryImage":"https://images.metmuseum.org/CRDImages/as/original/75497.jpg","primaryImageSmall":"https://images.metmuseum.org/CRDImages/as/web-large/75497.jpg","additionalImages":["https://images.metmuseum.org/CRDImages/as/original/29_149_70ab_O1_sf.jpg","https://images.metmuseum.org/CRDImages/as/original/29_149_70ab_O2_sf.jpg","https://images.metmuseum.org/CRDImages/as/original/29_149_70ab_O3_sf.jpg","https://images.metmuseum.org/CRDImages/as/original/29_149_70ab_O4_sf.jpg","https://images.metmuseum.org/CRDImages/as/original/29_149_70ab_O5_sf.jpg"],"constituents":null,"department":"Asian Art","objectName":"Jar","title":"Jar","culture":"China","period":"Qing dynasty (1644–1911), Qianlong period (1736–95)","dynasty":"","reign":"","portfolio":"","artistRole":"","artistPrefix":"","artistDisplayName":"","artistDisplayBio":"","artistSuffix":"","artistAlphaSort":"","artistNationality":"","artistBeginDate":"","artistEndDate":"","artistGender":"","artistWikidata_URL":"","artistULAN_URL":"","objectDate":"","objectBeginDate":1736,"objectEndDate":1795,"medium":"Porcelain decorated in underglaze blue, with crackled glaze","dimensions":"H. with cover: 2 7/8 in. (7.3 cm)","measurements":[{"elementName":"Overall","elementDescription":null,"elementMeasurements":{"Height":7.3}}],"creditLine":"Bequest of William Rhinelander Stewart, 1929","geographyType":"","city":"","state":"","county":"","country":"","region":"","subregion":"","locale":"","locus":"","excavation":"","river":"","classification":"Ceramics","rightsAndReproduction":"","linkResource":"","metadataDate":"2024-02-21T04:57:45.157Z","repository":"Metropolitan Museum of Art, New York, NY","objectURL":"https://www.metmuseum.org/art/collection/search/47892","tags":[{"term":"Men","AAT_URL":"http://vocab.getty.edu/page/aat/300025928","Wikidata_URL":"https://www.wikidata.org/wiki/Q8441"}],"objectWikidata_URL":"","isTimelineWork":false,"GalleryNumber":""}

const paintArtworkOnPage = (item)=>{
    const artWorkContainer = document.getElementById("main-art-item")
    artWorkContainer.innerHTML = `
    <div class="art-wrapper">
    <img class="art-image" src=${item.primaryImageSmall}>
        <h2> ${item.title}</h2>
        <p>${item.medium}</p>
    </div>`
}

window.addEventListener("load", ()=> {
    paintArtworkOnPage(exampleItem)
})