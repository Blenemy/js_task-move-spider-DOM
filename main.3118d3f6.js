parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=document.querySelector(".spider"),e=window.getComputedStyle(document.querySelector(".wall")),l=parseFloat(e.height)-t.offsetHeight;document.addEventListener("click",function(e){e.target.classList.contains("wall")&&(t.style.top="".concat(e.offsetY-t.offsetHeight/2,"px"),t.style.left="".concat(e.offsetX-t.offsetWidth/2,"px"),parseFloat(t.style.top)>l&&(t.style.top="350px"),parseFloat(t.style.top)<0&&(t.style.top="0px"),parseFloat(t.style.left)>l&&(t.style.left="350px"),parseFloat(t.style.left)<0&&(t.style.left="0px"))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3118d3f6.js.map