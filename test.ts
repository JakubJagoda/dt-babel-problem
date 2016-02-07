//these are not correct
//import bluebird from 'bluebird'; //error TS1192: Module ''bluebird'' has no default export.
//import jquery from 'jquery'; //error TS1192: Module ''jquery'' has no default export.

//we need to use these
import * as bluebird from 'bluebird';
import * as jquery from 'jquery';

//but webpack resolves these kind of transforms in such a way:
//1. create an empty object
//2. get all the exported things (functions, variables) and insert them as properties of the object
//therefore libs are now not callable, even that they should export functions

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

//Problem with d3 is a bit different. It does not have a default export either, so we need to import it the same way
import * as d3 from 'd3';

//let's setup just a few things to demonstrate what the problem is
const stage = d3.select('#stage');
stage.on('mouseover', handler);
//this setup causes that every time you hover on the red square, the "handler" function below gets called

//now, d3 has an "event" property which holds current mouse event (yes, this is bad, but we're not discussing that)
//because of the way Babel imports things, the "event" property on imported d3 is not the same as "event" property
//that d3 sets internally. Therefore d3.event is always null!
function handler (){
    console.log(d3.event); //always null
}
