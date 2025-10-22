import fetch from "node-fetch"

async function getObjectFromUrl(url) {
    const response = await fetch(url)
    const text = await response.text()
    return JSON.parse(text)
}

async function getCountryBounds(country) {

    const object = await getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
    return {
        minLatitude: object[0].boundingbox[0],
        maxLatitude: object[0].boundingbox[1],
        minLongitude: object[0].boundingbox[2],
        maxLongitude: object[0].boundingbox[3]
    }

}

async function getPlanes(country){
    const {minLatitude,maxLatitude,minLongitude,maxLongitude} = await getCountryBounds(country);
    const url=`https://opensky-network.org/api/states/all?lamin=${minLatitude}&lomin=${minLongitude}&lamax=${maxLatitude}&lomax=${maxLongitude}`;
    const response = await fetch(url);
    const data= await response.json();
    return data;
}

getCountryBounds('Romania').then(bounds => console.log('Romania: ', bounds))
getCountryBounds('France').then(bounds => console.log('France: ', bounds))
getPlanes('Romania').then(data=>console.log(data));