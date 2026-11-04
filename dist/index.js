"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var q=c(function(P,f){
function g(e,r,a,i,s){var u,n,t,o;for(u=a.data,n=a.accessors[0],t=s,o=0;o<e;o++){if(n(u,t)>=r)return o;t+=i}return-1}f.exports=g
});var v=c(function(R,x){
var p=require('@stdlib/array-base-arraylike2object/dist'),O=q();function G(e,r,a,i,s){var u,n,t;if(e<=0)return-1;if(n=p(a),n.accessorProtocol)return O(e,r,n,i,s);for(u=s,t=0;t<e;t++){if(a[u]>=r)return t;u+=i}return-1}x.exports=G
});var l=c(function(m,d){
var T=require('@stdlib/strided-base-stride2offset/dist'),b=v();function h(e,r,a,i){return b(e,r,a,i,T(e,i))}d.exports=h
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=l(),j=v();E(y,"ndarray",j);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
