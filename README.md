# Capitals  [![Build Status](https://travis-ci.org/hosein2398/Capitals.svg?branch=master)](https://travis-ci.org/hosein2398/Capitals)
Get countries' capitals name and reverse.

## Installation
```
npm i --save capitals
```

## Usage 
Get a capital name :
```JS
var capitals = require('capitals');

var germany = capitals.capitalOf('Germany');
console.log(germany); // Berlin
```

Get a country name:
```JS
var capitals = require('capitals');

var jakarta = capitals.isCapitalOf('Jakarta');
console.log(jakarta); // Indonesia
```

## Api

**capitalOf** (parameter : `string`)  
Description : returns name a city.  
Returns : `string`  

**isCapitalOf** (parameter : `string`)  
Description : returns name a country.  
Returns `string`  
