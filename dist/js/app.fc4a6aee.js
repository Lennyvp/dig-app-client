(function(t){function e(e){for(var a,o,u=e[0],s=e[1],l=e[2],c=0,d=[];c<u.length;c++)o=u[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0bffbf23"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=o(t);var l=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("TheNavbar"),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"green darken-3",dense:"",dark:""}},[n("v-toolbar-title",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[t._v("DIG App")]),n("v-spacer"),n("v-btn",{staticClass:"red text--white mr-2",attrs:{route:"",to:{name:"Registration"}}},[t._v("Register")]),n("v-btn",{staticClass:"black text--white mr-2",attrs:{route:"",to:{name:"Login"}}},[t._v("Login")]),n("v-btn",{staticClass:"black text--white",attrs:{route:"",to:{name:"Logs"}}},[t._v("Logs")])],1)},u=[],s={name:"TheNavbar",data:function(){return{}}},l=s,c=n("2877"),p=n("6544"),d=n.n(p),v=n("40dc"),f=n("8336"),h=n("2fa4"),m=n("2a7f"),b=Object(c["a"])(l,o,u,!1,null,null,null),V=b.exports;d()(b,{VAppBar:v["a"],VBtn:f["a"],VSpacer:h["a"],VToolbarTitle:m["a"]});var g={name:"App",components:{TheNavbar:V},data:function(){return{}}},y=g,x=n("7496"),_=n("a523"),w=n("a75b"),C=Object(c["a"])(y,r,i,!1,null,null,null),k=C.exports;d()(C,{VApp:x["a"],VContainer:_["a"],VContent:w["a"]});n("d3b7");var j=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("GenerateSolutions",{on:{sentData:function(e){return t.updateData(e)}}}),n("Solutions",{attrs:{solutions:t.solutions}})],1)},T=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-card",{staticClass:"mx-auto",attrs:{elevation:"5"}},[n("v-card-title",[t._v("Inputs")]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{sm:"6",md:"1"}},[n("v-text-field",{attrs:{label:"Size",outlined:"",clearable:"",hint:"Size of divided group"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1),n("v-col",{attrs:{sm:"6",md:"1"}},[n("v-text-field",{attrs:{label:"Groups",outlined:"",clearable:"",hint:"Amount of groups"},model:{value:t.groups,callback:function(e){t.groups=e},expression:"groups"}})],1),n("v-col",{attrs:{cols:"5",sm:"6",md:"1"}},[n("v-text-field",{attrs:{label:"Deviation",outlined:"",clearable:"",hint:"Deviation from the mean value of the set of numbers"},model:{value:t.deviation,callback:function(e){t.deviation=e},expression:"deviation"}})],1)],1)],1),n("InputValues",{attrs:{inputValues:t.inputValues},on:{updateValues:function(e){return t.updateValues(t.event)}}}),n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"mt-10"},[n("v-btn",{attrs:{small:"",color:"primary"},on:{click:t.sentPost}},[t._v("Generate")]),n("v-btn",{staticClass:"ml-2",attrs:{small:"",color:"red"},on:{click:t.sentGet}},[t._v("Test GET")])],1)])],1)},S=[],D=(n("d81d"),n("bc3a")),$=n.n(D),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"5",md:"1",ml:"1",lg:"1"}},[n("v-text-field",{attrs:{label:"Value",outlined:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addValue(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),n("v-col",{attrs:{cols:"5",md:"1",ml:"1",lg:"1"}},[n("v-text-field",{attrs:{label:"Search",outlined:"",clearable:""}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"4",lg:"10"}},[t.inputValues.length?n("v-card",[n("v-chip-group",{attrs:{column:"","active-class":"primary--text"}},t._l(t.inputValues,(function(e){return n("ChipInputValue",{key:e.id,attrs:{inputValue:e},on:{removeValue:function(n){return t.removeValue(e)}}})})),1)],1):t._e()],1)],1)],1)},P=[],z=(n("c975"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.chip?n("v-btn",{staticClass:"ml-2 mt-2",attrs:{close:"",dark:""},on:{click:t.removeChip}},[t._v(" "+t._s(t.inputValue.value)+" "),n("v-icon",{attrs:{right:""}},[t._v("mdi-close-circle-outline")])],1):t._e()}),I=[],A={name:"ChipInputValue",props:["inputValue"],data:function(){return{chip:!0}},methods:{removeChip:function(){this.$emit("removeValue",this.inputValue),this.chip=!1}}},L=A,B=n("132d"),H=Object(c["a"])(L,z,I,!1,null,null,null),M=H.exports;d()(H,{VBtn:f["a"],VIcon:B["a"]});var R={name:"InputValues",props:["inputValues"],data:function(){return{id:0,inputValue:null,exampleData:[{id:0,value:1},{id:1,value:1},{id:2,value:2},{id:3,value:3},{id:4,value:5},{id:5,value:5},{id:6,value:7},{id:7,value:8},{id:8,value:9}]}},components:{ChipInputValue:M},methods:{updateValues:function(){this.$emit("updateValues",this.inputValues)},addValue:function(){this.inputValues.push({id:this.id,value:this.inputValue}),this.id++},removeValue:function(t){this.inputValues.splice(this.inputValues.indexOf(t),1)},resetValues:function(){this.inputValues=[],this.$emit("updateValues",this.inputValues)}}},N=R,F=n("b0af"),J=n("ef9a"),q=n("62ad"),K=n("0fd9"),Q=n("8654"),U=Object(c["a"])(N,G,P,!1,null,null,null),W=U.exports;d()(U,{VCard:F["a"],VChipGroup:J["a"],VCol:q["a"],VContainer:_["a"],VRow:K["a"],VTextField:Q["a"]});var X={name:"GenerateSolutions",data:function(){return{groups:null,size:null,deviation:.15,inputValue:null,intputData:[],inputValues:[]}},components:{InputValues:W},methods:{sentPost:function(){var t=this;this.intputData=this.inputValues.map((function(t){return t.value})),console.log(this.intputData),$.a.post("https://dig-app-server.herokuapp.com/solve",{username:"Lenny",groups:this.groups,size:this.size,values:this.intputData,deviation:this.deviation}).then((function(e){console.log(e.data),t.$emit("sentData",e.data)}))},sentGet:function(){$.a.get("https://dig-app-server.herokuapp.com/test").then((function(t){console.log(t)}))},updateValues:function(t){this.inputValues=t}}},Y=X,Z=n("99d9"),tt=Object(c["a"])(Y,E,S,!1,null,null,null),et=tt.exports;d()(tt,{VBtn:f["a"],VCard:F["a"],VCardTitle:Z["a"],VCol:q["a"],VContainer:_["a"],VRow:K["a"],VTextField:Q["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[t.solutions.length?n("div",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items}})],1):n("div",[t._v("The Array is Empty")])])},at=[],rt=(n("4160"),n("159b"),{name:"Solutions",props:["solutions"],data:function(){return{headers:[{text:"id",align:"start",sortable:!1,value:"name"}],id:0,items:[],baseText:"Group ",baseValue:"value"}},created:function(){},methods:{initHeaders:function(){var t=this;this.solutions.forEach((function(e){t.headers=[],t.id=0,t.items=[],e.forEach((function(){var e={};e.text=t.baseText+(t.id+1),e.value=t.baseValue+t.id,e.id=t.id,t.headers.push(e),t.id++}))}))},initialize:function(){var t=this;this.solutions.forEach((function(e){var n={};t.headers.forEach((function(t){n[t.value]=e[t.id]})),t.items.push(n)}))}},watch:{solutions:function(){this.initHeaders(),this.initialize()}}}),it=rt,ot=n("8fea"),ut=Object(c["a"])(it,nt,at,!1,null,null,null),st=ut.exports;d()(ut,{VContainer:_["a"],VDataTable:ot["a"]});var lt={name:"Home",data:function(){return{solutions:[]}},components:{GenerateSolutions:et,Solutions:st},methods:{updateData:function(t){this.solutions=t}}},ct=lt,pt=Object(c["a"])(ct,O,T,!1,null,null,null),dt=pt.exports;a["a"].use(j["a"]);var vt=[{path:"/",name:"Home",component:dt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ft=new j["a"]({mode:"history",base:"/",routes:vt}),ht=ft,mt=n("2f62");a["a"].use(mt["a"]);var bt=new mt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Vt=n("f309");a["a"].use(Vt["a"]);var gt=new Vt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:ht,store:bt,vuetify:gt,render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.fc4a6aee.js.map