/** @license Apache-2.0 */

'use strict';

/**
* Return the first index of an element in a strided array which is greater than or equal to a specified search element.
*
* @module @stdlib/blas-ext-base-gindex-of-greater-than-equal
*
* @example
* var gindexOfGreaterThanEqual = require( '@stdlib/blas-ext-base-gindex-of-greater-than-equal' );
*
* var x = [ 0.0, 0.0, 1.0, 0.0 ];
*
* var idx = gindexOfGreaterThanEqual( x.length, 1.0, x, 1 );
* // returns 2
*
* @example
* var gindexOfGreaterThanEqual = require( '@stdlib/blas-ext-base-gindex-of-greater-than-equal' );
*
* var x = [ 0.0, 0.0, 1.0, 0.0 ];
*
* var idx = gindexOfGreaterThanEqual.ndarray( x.length, 1.0, x, 1, 0 );
* // returns 2
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
