//now everything works!

import bluebird from 'bluebird';
import jquery from 'jquery';

//no errors:
try {
    new bluebird((resolve) => { resolve(); });
} catch (e) {
    console.error(e);
}

try {
    jquery();
} catch (e) {
    console.error(e);
}

import d3 from 'd3';

const stage = d3.select('#stage');
stage.on('mouseover', handler);

//d3.event holds proper data
function handler (){
    console.log(d3.event); //an object
}
