import"./client.a4f2d9ad.js";function t(t){var o=t-1;return o*o*o+1}function o(o){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.delay,i=void 0===n?0:n,r=a.duration,d=void 0===r?400:r,e=a.easing,c=void 0===e?t:e,p=a.x,s=void 0===p?0:p,g=a.y,l=void 0===g?0:g,m=a.opacity,u=void 0===m?0:m,v=getComputedStyle(o),h=+v.opacity,y="none"===v.transform?"":v.transform,f=h*(1-u);return{delay:i,duration:d,easing:c,css:function(t,o){return"\n\t\t\ttransform: ".concat(y," translate(").concat((1-t)*s,"px, ").concat((1-t)*l,"px);\n\t\t\topacity: ").concat(h-f*o)}}}function a(o){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.delay,i=void 0===n?0:n,r=a.duration,d=void 0===r?400:r,e=a.easing,c=void 0===e?t:e,p=getComputedStyle(o),s=+p.opacity,g=parseFloat(p.height),l=parseFloat(p.paddingTop),m=parseFloat(p.paddingBottom),u=parseFloat(p.marginTop),v=parseFloat(p.marginBottom),h=parseFloat(p.borderTopWidth),y=parseFloat(p.borderBottomWidth);return{delay:i,duration:d,easing:c,css:function(t){return"overflow: hidden;"+"opacity: ".concat(Math.min(20*t,1)*s,";")+"height: ".concat(t*g,"px;")+"padding-top: ".concat(t*l,"px;")+"padding-bottom: ".concat(t*m,"px;")+"margin-top: ".concat(t*u,"px;")+"margin-bottom: ".concat(t*v,"px;")+"border-top-width: ".concat(t*h,"px;")+"border-bottom-width: ".concat(t*y,"px;")}}}export{o as f,a as s};
