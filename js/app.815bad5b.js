(function(t){function r(r){for(var a,n,c=r[0],l=r[1],i=r[2],b=0,j=[];b<c.length;b++)n=c[b],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&j.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(r);while(j.length)j.shift()();return o.push.apply(o,i||[]),e()}function e(){for(var t,r=0;r<o.length;r++){for(var e=o[r],a=!0,c=1;c<e.length;c++){var l=e[c];0!==s[l]&&(a=!1)}a&&(o.splice(r--,1),t=n(n.s=e[0]))}return t}var a={},s={app:0},o=[];function n(r){if(a[r])return a[r].exports;var e=a[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var a in t)n.d(e,a,function(r){return t[r]}.bind(null,a));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="/vue-covid-19-dashboard/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=r,c=c.slice();for(var i=0;i<c.length;i++)r(c[i]);var d=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},4678:function(t,r,e){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var r=o(t);return e(r)}function o(t){if(!e.o(a,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=o,t.exports=s,s.id="4678"},"56d7":function(t,r,e){"use strict";e.r(r);var a,s,o=e("2b0e"),n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),t.arrPositive.length>0?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("h2",[t._v("Positive")]),e("line-chart",{attrs:{"char-data":t.arrPositive,options:t.chartOptions,label:"Positive",chartColors:t.positiveChartColors}})],1)]):t._e(),t.arrHospitalized.length>0?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("h2",[t._v("Hospitalized")]),e("line-chart",{attrs:{"char-data":t.arrHospitalized,options:t.chartOptions,label:"Hospitalized",chartColors:t.hospitalizedChartColors}})],1)]):t._e(),t.arrInIcu.length>0?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("h2",[t._v("In ICU")]),e("line-chart",{attrs:{"char-data":t.arrInIcu,options:t.chartOptions,label:"In ICU",chartColors:t.inIcuChartColors}})],1)]):t._e(),t.arrOnVentilators.length>0?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("h2",[t._v("On Ventilators")]),e("line-chart",{attrs:{"char-data":t.arrOnVentilators,options:t.chartOptions,label:"On Ventilators",chartColors:t.OnVentilatorsChartColors}})],1)]):t._e(),t.arrRecovered.length>0?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("h2",[t._v("Recovered")]),e("line-chart",{attrs:{"char-data":t.arrRecovered,options:t.chartOptions,label:"Recovered",chartColors:t.recoveredChartColors}})],1)]):t._e(),t.arrDeaths.length>0?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("h2",[t._v("Deaths")]),e("line-chart",{attrs:{"char-data":t.arrDeaths,options:t.chartOptions,label:"Deaths",chartColors:t.deathsChartColors}})],1)]):t._e()])},c=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col text-center"},[e("h1",[t._v("COVID-19 Data Visualization")])])])}],l=e("bc3a"),i=e.n(l),d=e("c1df"),b=e.n(d),j=e("1fca"),f={extends:j["a"],props:{label:{type:String},charData:{type:Array},options:{type:Object},chartColors:{type:Object}},mounted(){const t=this.charData.map(t=>t.date).reverse(),r=this.charData.map(t=>t.total).reverse(),{borderColor:e,pointBorderColor:a,pointBackgroundColor:s,backgroundColor:o}=this.chartColors;this.renderChart({labels:t,datasets:[{label:this.label,data:r,borderColor:e,pointBorderColor:a,pointBackgroundColor:s,backgroundColor:o}]},this.options)}},h=f,u=e("2877"),p=Object(u["a"])(h,a,s,!1,null,null,null),C=p.exports,v={name:"App",components:{LineChart:C},data(){return{arrInIcu:[],arrDeaths:[],arrPositive:[],arrRecovered:[],arrHospitalized:[],arrOnVentilators:[],chartOptions:{responsive:!0,maintainAspectRatio:!1},positiveChartColors:{borderColor:"#077187",pointBackgroundColor:"#AFD6AC",pointBorderColor:"#0E1428",backgroundColor:"#74A57F"},OnVentilatorsChartColors:{borderColor:"#ffc857",pointBackgroundColor:"#e9724c",pointBorderColor:"#c5283d",backgroundColor:"#481d24"},hospitalizedChartColors:{borderColor:"#606c38",pointBackgroundColor:"#283618",pointBorderColor:"#fefae0",backgroundColor:"#dda15e"},recoveredChartColors:{borderColor:"#6b2737",pointBackgroundColor:"#e08e45",pointBorderColor:"#f8f4a6",backgroundColor:"#3943b7"},deathsChartColors:{borderColor:"#96acb7",pointBackgroundColor:"#40376e",pointBorderColor:"#48233c",backgroundColor:"#36558f"},inIcuChartColors:{borderColor:"#0d1821",pointBackgroundColor:"#b4cded",pointBorderColor:"#bfcc94",backgroundColor:"#f0f4ef"}}},async created(){const{data:t}=await i.a.get("https://api.covidtracking.com/v1/states/current.json");t.forEach(t=>{const r=b()(t.date,"YYYYMMDD").format("MM/DD"),{positive:e,inIcuCurrently:a,hospitalizedCurrently:s,onVentilatorCurrently:o,recovered:n,death:c}=t;this.arrDeaths.push({date:r,total:c}),this.arrPositive.push({date:r,total:e}),this.arrRecovered.push({date:r,total:n}),this.arrInIcu.push({date:r,total:a}),this.arrHospitalized.push({date:r,total:s}),this.arrOnVentilators.push({date:r,total:o})})}},m=v,g=Object(u["a"])(m,n,c,!1,null,null,null),k=g.exports;e("f9e3");o["a"].config.productionTip=!1,new o["a"]({render:t=>t(k)}).$mount("#app")}});
//# sourceMappingURL=app.815bad5b.js.map