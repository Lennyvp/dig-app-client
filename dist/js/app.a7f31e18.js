(function(t){function e(e){for(var n,l,i=e[0],s=e[1],u=e[2],c=0,d=[];c<i.length;c++)l=i[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function l(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0bffbf23"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=l(t);var u=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(c);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}o[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("TheNavbar"),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"green darken-3",dense:"",dark:""}},[a("v-toolbar-title",{staticStyle:{cursor:"pointer"},on:{click:t.goHome}},[t._v("DIG App")]),a("v-spacer"),a("v-btn",{staticClass:"red text--white mr-2",attrs:{route:"",to:{name:"Registration"}}},[t._v("Register")]),a("v-btn",{staticClass:"black text--white mr-2",attrs:{route:"",to:{name:"Login"}}},[t._v("Login")]),a("v-btn",{staticClass:"black text--white",attrs:{route:"",to:{name:"Logs"}}},[t._v("Logs")])],1)},i=[],s={name:"TheNavbar",data:function(){return{}},methods:{goHome:function(){this.$router.push("/").catch((function(){}))}}},u=s,c=a("2877"),p=a("6544"),d=a.n(p),f=a("40dc"),v=a("8336"),m=a("2fa4"),h=a("2a7f"),b=Object(c["a"])(u,l,i,!1,null,null,null),V=b.exports;d()(b,{VAppBar:f["a"],VBtn:v["a"],VSpacer:m["a"],VToolbarTitle:h["a"]});var g={name:"App",components:{TheNavbar:V},data:function(){return{}}},x=g,y=a("7496"),w=a("a523"),_=a("a75b"),k=Object(c["a"])(x,o,r,!1,null,null,null),C=k.exports;d()(k,{VApp:y["a"],VContainer:w["a"],VContent:_["a"]});a("d3b7");var T=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("GenerateSolutions",{on:{sentData:function(e){return t.updateData(e)}}}),a("Solutions",{attrs:{solutions:t.solutions}})],1)},O=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-card",{staticClass:"mx-auto",attrs:{elevation:"5"}},[a("v-card-title",[t._v("Inputs")]),a("v-row",{staticClass:"mx-auto",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"4",md:"3",ml:"3",lg:"1"}},[a("v-text-field",{attrs:{label:"Size",outlined:"",clearable:"",hint:"Size of divided group"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1),a("v-col",{attrs:{cols:"4",md:"3",ml:"3",lg:"1"}},[a("v-text-field",{attrs:{label:"Groups",outlined:"",clearable:"",hint:"Amount of groups"},model:{value:t.groups,callback:function(e){t.groups=e},expression:"groups"}})],1),a("v-col",{attrs:{cols:"4",md:"4",ml:"3",lg:"1"}},[a("v-text-field",{attrs:{label:"Deviation",outlined:"",clearable:"",hint:"Deviation from the mean value of the set of numbers"},model:{value:t.deviation,callback:function(e){t.deviation=e},expression:"deviation"}})],1)],1)],1),a("InputValues",{staticClass:"my-auto",attrs:{inputValues:t.inputValues},on:{updateValues:function(e){return t.updateValues(t.event)}}}),a("v-row",{attrs:{justify:"center"}},[a("div",[a("v-btn",{attrs:{color:"primary"},on:{click:t.sentPost}},[t._v("Generate")])],1)])],1)},S=[],L=(a("d81d"),a("bc3a")),P=a.n(L),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"6",md:"4",ml:"3",lg:"1"}},[a("v-text-field",{attrs:{label:"Value",rules:t.rules,outlined:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addValue(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),a("v-col",{attrs:{cols:"6",md:"4",ml:"3",lg:"1"}},[a("v-text-field",{attrs:{label:"Search",outlined:"",clearable:""},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"4",lg:"10"}},[t.inputValues.length?a("v-card",[a("v-chip-group",{attrs:{column:"","active-class":"primary--text"}},t._l(t.searchValues,(function(e){return a("ChipInputValue",{key:e.id,attrs:{inputValue:e},on:{removeValue:function(a){return t.removeValue(e)}}})})),1)],1):t._e()],1)],1)],1)},D=[],I=(a("4de4"),a("c975"),a("a434"),a("ac1f"),a("466d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.chip?a("v-btn",{staticClass:"ml-2 mt-2",attrs:{close:"",dark:""},on:{click:t.removeChip}},[t._v(" "+t._s(t.inputValue.value)+" "),a("v-icon",{attrs:{right:""}},[t._v("mdi-close-circle-outline")])],1):t._e()}),R=[],A={name:"ChipInputValue",props:["inputValue"],data:function(){return{chip:!0}},methods:{removeChip:function(){this.$emit("removeValue",this.inputValue),this.chip=!1}}},z=A,F=a("132d"),B=Object(c["a"])(z,I,R,!1,null,null,null),G=B.exports;d()(B,{VBtn:v["a"],VIcon:F["a"]});var H={name:"InputValues",props:["inputValues"],data:function(){return{id:0,inputValue:null,searchValue:null,rules:[function(t){return!!t||"Required."},function(t){var e=/^\d*\.?\d*$/;return e.test(t)||"Only number."}]}},components:{ChipInputValue:G},methods:{updateValues:function(){this.$emit("updateValues",this.inputValues)},addValue:function(){this.inputValues.push({id:this.id,value:this.inputValue}),this.id++},removeValue:function(t){this.inputValues.splice(this.inputValues.indexOf(t),1)},resetValues:function(){this.inputValues=[],this.$emit("updateValues",this.inputValues)}},computed:{searchValues:function(){var t=this;return null!=this.searchValue?this.inputValues.filter((function(e){return e.value.match(t.searchValue)})):this.inputValues}}},M=H,N=a("b0af"),q=a("ef9a"),J=a("62ad"),K=a("0fd9"),Q=a("8654"),U=Object(c["a"])(M,$,D,!1,null,null,null),W=U.exports;d()(U,{VCard:N["a"],VChipGroup:q["a"],VCol:J["a"],VContainer:w["a"],VRow:K["a"],VTextField:Q["a"]});var X={name:"GenerateSolutions",data:function(){return{groups:null,size:null,deviation:.15,inputValue:null,intputData:[],inputValues:[]}},components:{InputValues:W},methods:{sentPost:function(){var t=this;this.intputData=this.inputValues.map((function(t){return t.value})),console.log(this.intputData),P.a.post("https://dig-app-server.herokuapp.com/solve",{username:"Lenny",groups:this.groups,size:this.size,values:this.intputData,deviation:this.deviation}).then((function(e){console.log(e.data),t.$emit("sentData",e.data)}))},updateValues:function(t){this.inputValues=t}}},Y=X,Z=a("99d9"),tt=Object(c["a"])(Y,E,S,!1,null,null,null),et=tt.exports;d()(tt,{VBtn:v["a"],VCard:N["a"],VCardTitle:Z["c"],VCol:J["a"],VContainer:w["a"],VRow:K["a"],VTextField:Q["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[t.solutions.length?a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"single-select":t.singleSelect,"item-key":"id","show-select":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1):a("div",[t._v("The Array is Empty")])])},nt=[],ot=(a("4160"),a("159b"),{name:"Solutions",props:["solutions"],data:function(){return{headers:[],id:0,items:[],selected:[],baseText:"Group ",baseValue:"value",singleSelect:!1,idItem:0}},created:function(){},methods:{initHeaders:function(){var t=this;this.solutions.forEach((function(e){t.headers=[],t.id=0,t.items=[],e.forEach((function(){var e={};e.text=t.baseText+(t.id+1),e.value=t.baseValue+t.id,e.id=t.id,t.headers.push(e),t.id++}))}))},initialize:function(){var t=this;this.solutions.forEach((function(e){var a={id:t.idItem++};t.headers.forEach((function(t){a[t.value]=e[t.id]})),t.items.push(a)}))}},watch:{solutions:function(){this.initHeaders(),this.initialize()}}}),rt=ot,lt=a("8fea"),it=Object(c["a"])(rt,at,nt,!1,null,null,null),st=it.exports;d()(it,{VContainer:w["a"],VDataTable:lt["a"]});var ut={name:"Home",data:function(){return{solutions:[]}},components:{GenerateSolutions:et,Solutions:st},methods:{updateData:function(t){this.solutions=t}}},ct=ut,pt=Object(c["a"])(ct,j,O,!1,null,null,null),dt=pt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("LoginForm")},vt=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login form")]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""}},[a("v-icon",[t._v("mdi-account")]),a("span",[t._v("Login")])],1)],1),a("v-card-text",[a("v-form",{on:{submit:function(t){t.preventDefault()}}},[a("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:t.signIn}},[t._v("Login")])],1)],1)],1)],1)},ht=[],bt=a("cb24"),Vt=bt["a"],gt=a("4bd4"),xt=a("71d9"),yt=a("3a2f"),wt=Object(c["a"])(Vt,mt,ht,!1,null,null,null),_t=wt.exports;d()(wt,{VBtn:v["a"],VCard:N["a"],VCardActions:Z["a"],VCardText:Z["b"],VCol:J["a"],VForm:gt["a"],VIcon:F["a"],VRow:K["a"],VSpacer:m["a"],VTextField:Q["a"],VToolbar:xt["a"],VToolbarTitle:h["a"],VTooltip:yt["a"]});var kt={name:"Login",components:{LoginForm:_t},data:function(){return{}}},Ct=kt,Tt=Object(c["a"])(Ct,ft,vt,!1,null,null,null),jt=Tt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("RegistrationFrom")},Et=[],St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Registration form")]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""}},[a("v-icon",[t._v("mdi-account-plus")]),a("span",[t._v("Register")])],1)],1),a("v-card-text",[a("v-form",{on:{submit:function(t){t.preventDefault()}}},[a("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}}),a("v-text-field",{attrs:{label:"Email",name:"email","prepend-icon":"mdi-email",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-text-field",{attrs:{id:"retypePassword",label:"Retype Password",name:"retypePassword","prepend-icon":"mdi-lock",type:"password"},model:{value:t.retypePassword,callback:function(e){t.retypePassword=e},expression:"retypePassword"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:t.register}},[t._v("Register")])],1)],1)],1)],1)},Lt=[],Pt={data:function(){return{login:null,email:null,password:null,retypePassword:null}},methods:{register:function(){P.a.post("http://localhost:8081/register",{login:this.login,email:this.email,password:this.password}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},$t=Pt,Dt=Object(c["a"])($t,St,Lt,!1,null,null,null),It=Dt.exports;d()(Dt,{VBtn:v["a"],VCard:N["a"],VCardActions:Z["a"],VCardText:Z["b"],VCol:J["a"],VForm:gt["a"],VIcon:F["a"],VRow:K["a"],VSpacer:m["a"],VTextField:Q["a"],VToolbar:xt["a"],VToolbarTitle:h["a"],VTooltip:yt["a"]});var Rt={name:"Registration",components:{RegistrationFrom:It}},At=Rt,zt=Object(c["a"])(At,Ot,Et,!1,null,null,null),Ft=zt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("LogsDataTable")},Gt=[],Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[t._v("A")])},Mt=[],Nt={},qt=Nt,Jt=Object(c["a"])(qt,Ht,Mt,!1,null,null,null),Kt=Jt.exports;d()(Jt,{VContainer:w["a"]});var Qt={name:"Logs",components:{LogsDataTable:Kt},data:function(){}},Ut=Qt,Wt=Object(c["a"])(Ut,Bt,Gt,!1,null,null,null),Xt=Wt.exports;n["a"].use(T["a"]);var Yt=[{path:"/",name:"Home",component:dt},{path:"/login",name:"Login",component:jt},{path:"/registration",name:"Registration",component:Ft},{path:"/logs",name:"Logs",component:Xt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Zt=new T["a"]({mode:"history",base:"/",routes:Yt}),te=Zt,ee=a("2f62");n["a"].use(ee["a"]);var ae=new ee["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ne=a("f309");n["a"].use(ne["a"]);var oe=new ne["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:te,store:ae,vuetify:oe,render:function(t){return t(C)}}).$mount("#app")},cb24:function(t,e,a){"use strict";(function(t){a("99af"),a("d3b7"),a("25f0");var n=a("bc3a"),o=a.n(n);e["a"]={name:"LoginForm",data:function(){return{login:null,password:null}},methods:{signIn:function(){var e=this.login,a=this.password,n=t.from("".concat(e,":").concat(a),"utf8").toString("base64");o.a.post("http://localhost:8081/login",{headers:{Authorization:"Basic ".concat(n)}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}}}).call(this,a("b639").Buffer)}});
//# sourceMappingURL=app.a7f31e18.js.map