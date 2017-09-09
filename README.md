# Capitals 
Get countries capitals name and reverse.

## Installation
```
npm i --save capitals
```

## Usage 
Get capital names :
```
var capitals = require('capitals');

var germany = capitals.capitalOf('Germany');
console.log(germany); // Berlin
```

Get countries names:
```
var capitals = require('capitals');

var jakarta = capitals.isCapitalOf('Jakarta');
console.log(jakarta); // Indonesia
```

## Api

capitalOf(paramater : `String`)
Returns name a city.
returns `String`

isCapitalOf(paramater : `String`)
Returns name a country.
returns `String`
