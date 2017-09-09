var fs = require("fs");
var contents = fs.readFileSync("country-capital.json");
var jsonContent = JSON.parse(contents);

function capitalOf(countryName) {
    for (key in jsonContent) {
        if (countryName.toLowerCase() === jsonContent[key].country.toLowerCase()) {
            console.log(jsonContent[key].city);
            return jsonContent[key].city;
        }
    }
}


function isCapitalOf(capitalName) {
    for (key in jsonContent) {
        if (jsonContent[key].city) {
            if (capitalName.toLowerCase() === jsonContent[key].city.toLowerCase()) {
                return jsonContent[key].country;
            }
        }
    }
}

module.exports = {
    capitalOf : capitalOf,
    isCapitalOf : isCapitalOf
}