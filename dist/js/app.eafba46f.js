(function(t){function e(e){for(var a,u,i=e[0],l=e[1],s=e[2],c=0,d=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0bffbf23"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var s=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}r[t]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("TheNavbar"),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"green darken-3",dense:"",dark:""}},[n("v-toolbar-title",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[t._v("DIG App")]),n("v-spacer"),n("v-btn",{staticClass:"red text--white mr-2",attrs:{route:"",to:{name:"Registration"}}},[t._v("Register")]),n("v-btn",{staticClass:"black text--white mr-2",attrs:{route:"",to:{name:"Login"}}},[t._v("Login")]),n("v-btn",{staticClass:"black text--white",attrs:{route:"",to:{name:"Logs"}}},[t._v("Logs")])],1)},i=[],l={name:"TheNavbar",data:function(){return{}}},s=l,c=n("2877"),p=n("6544"),d=n.n(p),v=n("40dc"),f=n("8336"),m=n("2fa4"),h=n("2a7f"),b=Object(c["a"])(s,u,i,!1,null,null,null),V=b.exports;d()(b,{VAppBar:v["a"],VBtn:f["a"],VSpacer:m["a"],VToolbarTitle:h["a"]});var g={name:"App",components:{TheNavbar:V},data:function(){return{}}},y=g,_=n("7496"),x=n("a523"),w=n("a75b"),k=Object(c["a"])(y,r,o,!1,null,null,null),C=k.exports;d()(k,{VApp:_["a"],VContainer:x["a"],VContent:w["a"]});n("d3b7");var j=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("GenerateSolutions",{on:{sentData:function(e){return t.updateData(e)}}}),n("Solutions",{attrs:{solutions:t.solutions}})],1)},S=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-card",{staticClass:"mx-auto",attrs:{elevation:"5"}},[n("v-card-title",[t._v("Inputs")]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{sm:"6",md:"1"}},[n("v-text-field",{attrs:{label:"Size",outlined:"",clearable:"",hint:"Size of divided group"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1),n("v-col",{attrs:{sm:"6",md:"1"}},[n("v-text-field",{attrs:{label:"Groups",outlined:"",clearable:"",hint:"Amount of groups"},model:{value:t.groups,callback:function(e){t.groups=e},expression:"groups"}})],1),n("v-col",{attrs:{cols:"5",sm:"6",md:"1"}},[n("v-text-field",{attrs:{label:"Deviation",outlined:"",clearable:"",hint:"Deviation from the mean value of the set of numbers"},model:{value:t.deviation,callback:function(e){t.deviation=e},expression:"deviation"}})],1)],1)],1),n("InputValues",{attrs:{inputValues:t.inputValues},on:{updateValues:function(e){return t.updateValues(t.event)}}}),n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"mt-10"},[n("v-btn",{attrs:{small:"",color:"primary"},on:{click:t.sentPost}},[t._v("Generate")]),n("v-btn",{staticClass:"ml-2",attrs:{small:"",color:"red"},on:{click:t.sentGet}},[t._v("Test GET")])],1)])],1)},E=[],$=(n("d81d"),n("bc3a")),D=n.n($),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"5",md:"1",ml:"1",lg:"1"}},[n("v-text-field",{attrs:{label:"Value",outlined:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addValue(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),n("v-col",{attrs:{cols:"5",md:"1",ml:"1",lg:"1"}},[n("v-text-field",{attrs:{label:"Search",outlined:"",clearable:""}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"4",lg:"10"}},[t.inputValues.length?n("v-card",[n("v-chip-group",{attrs:{column:"","active-class":"primary--text"}},t._l(t.inputValues,(function(e){return n("ChipInputValue",{key:e.id,attrs:{inputValue:e},on:{removeValue:function(n){return t.removeValue(e)}}})})),1)],1):t._e()],1)],1)],1)},G=[],I=(n("c975"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.chip?n("v-btn",{staticClass:"ml-2 mt-2",attrs:{close:"",dark:""},on:{click:t.removeChip}},[t._v(" "+t._s(t.inputValue.value)+" "),n("v-icon",{attrs:{right:""}},[t._v("mdi-close-circle-outline")])],1):t._e()}),z=[],A={name:"ChipInputValue",props:["inputValue"],data:function(){return{chip:!0}},methods:{removeChip:function(){this.$emit("removeValue",this.inputValue),this.chip=!1}}},L=A,R=n("132d"),B=Object(c["a"])(L,I,z,!1,null,null,null),M=B.exports;d()(B,{VBtn:f["a"],VIcon:R["a"]});var N={name:"InputValues",props:["inputValues"],data:function(){return{id:0,inputValue:null,exampleData:[{id:0,value:1},{id:1,value:1},{id:2,value:2},{id:3,value:3},{id:4,value:5},{id:5,value:5},{id:6,value:7},{id:7,value:8},{id:8,value:9}]}},components:{ChipInputValue:M},methods:{updateValues:function(){this.$emit("updateValues",this.inputValues)},addValue:function(){this.inputValues.push({id:this.id,value:this.inputValue}),this.id++},removeValue:function(t){this.inputValues.splice(this.inputValues.indexOf(t),1)},resetValues:function(){this.inputValues=[],this.$emit("updateValues",this.inputValues)}}},F=N,H=n("b0af"),J=n("ef9a"),q=n("62ad"),K=n("0fd9"),Q=n("8654"),U=Object(c["a"])(F,P,G,!1,null,null,null),W=U.exports;d()(U,{VCard:H["a"],VChipGroup:J["a"],VCol:q["a"],VContainer:x["a"],VRow:K["a"],VTextField:Q["a"]});var X={name:"GenerateSolutions",data:function(){return{groups:null,size:null,deviation:.15,inputValue:null,intputData:[],inputValues:[]}},components:{InputValues:W},methods:{sentPost:function(){var t=this;this.intputData=this.inputValues.map((function(t){return t.value})),console.log(this.intputData),D.a.post("https://dig-app-server.herokuapp.com/solve",{username:"Lenny",groups:this.groups,size:this.size,values:this.intputData,deviation:this.deviation}).then((function(e){console.log(e.data),t.$emit("sentData",e.data)}))},sentGet:function(){D.a.get("https://dig-app-server.herokuapp.com/test").then((function(t){console.log(t)}))},updateValues:function(t){this.inputValues=t}}},Y=X,Z=n("99d9"),tt=Object(c["a"])(Y,T,E,!1,null,null,null),et=tt.exports;d()(tt,{VBtn:f["a"],VCard:H["a"],VCardTitle:Z["a"],VCol:q["a"],VContainer:x["a"],VRow:K["a"],VTextField:Q["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[t.solutions.length?n("div",t._l(t.solutions,(function(e){return n("v-row",{key:e.id},t._l(e,(function(e){return n("v-col",{key:e.id},[t._v(t._s(e))])})),1)})),1):n("div",[t._v("The Array is Empty")])])},at=[],rt={name:"Solutions",props:["solutions","groups"],data:function(){return{headers:[{text:"id",align:"start",sortable:!1,value:"name"},{text:"Values",value:"values"}],items:[],values:[],id:0,id2:0}},computed:{}},ot=rt,ut=Object(c["a"])(ot,nt,at,!1,null,null,null),it=ut.exports;d()(ut,{VCol:q["a"],VContainer:x["a"],VRow:K["a"]});var lt={name:"Home",data:function(){return{solutions:[]}},components:{GenerateSolutions:et,Solutions:it},methods:{updateData:function(t){this.solutions=t}}},st=lt,ct=Object(c["a"])(st,O,S,!1,null,null,null),pt=ct.exports;a["a"].use(j["a"]);var dt=[{path:"/",name:"Home",component:pt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],vt=new j["a"]({mode:"history",base:"/",routes:dt}),ft=vt,mt=n("2f62");a["a"].use(mt["a"]);var ht=new mt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),bt=n("f309");a["a"].use(bt["a"]);var Vt=new bt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:ft,store:ht,vuetify:Vt,render:function(t){return t(C)}}).$mount("#app")}});
//# sourceMappingURL=app.eafba46f.js.map