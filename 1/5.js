const fs = require('fs');
const earthquakeData = JSON.parse(fs.readFileSync('earthquakeData.json', 'utf8'));

function countryWithMostEarthquakes(data) {
    const countryCount = data.reduce((acc, record) => {
        acc[record.country] = (acc[record.country] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(countryCount).reduce((a, b) => countryCount[a] > countryCount[b] ? a : b);
}

function highestMagnitudeEarthquake(data) {
    return data.reduce((max, record) => record.magnitude > max.magnitude ? record : max, data[0]);
}

function totalEarthquakeRecords(data) {
    return data.length;
}

const mostFrequentCountry = countryWithMostEarthquakes(earthquakeData);
const highestMagnitudeRecord = highestMagnitudeEarthquake(earthquakeData);
const totalRecords = totalEarthquakeRecords(earthquakeData);

console.log(`Country with most earthquakes: ${mostFrequentCountry}`);
console.log(`Highest magnitude earthquake: Country - ${highestMagnitudeRecord.country}, Magnitude - ${highestMagnitudeRecord.magnitude}, Date - ${highestMagnitudeRecord.date}`);
console.log(`Total number of earthquake records: ${totalRecords}`);