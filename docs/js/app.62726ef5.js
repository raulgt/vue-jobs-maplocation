(function(t){function e(e){for(var a,r,i=e[0],u=e[1],c=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f97890d3"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"606a4ea0"}[t]+".css",o=u.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===a||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue-jobs-maplocation/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0529":function(t,e,n){},"101c":function(t,e,n){"use strict";n("9dc8")},2581:function(t,e,n){},4770:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}));var a=["auth/me","jobs"],r={lat:7.449624,lng:-66.215991}},"4c73":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s={name:"App"},i=s,u=n("2877"),c=Object(u["a"])(i,r,o,!1,null,null,null),l=c.exports,d=n("a18c"),p=n("5f5b"),f=n("b1e0"),m=n("1dce"),h=n.n(m),g=(n("f9e3"),n("2dd8"),n("025a")),v=(n("d3b7"),n("caad"),n("2532"),n("ac1f"),n("1276"),n("bc3a")),b=n("c572"),w=n("4770"),k=v["interceptors"].request.use((function(t){if(y(t)){var e=b["a"].getToken();t.headers.Authorization="Bearer ".concat(e)}return t}),(function(t){return Promise.reject(t)})),y=function(t){return!!w["b"].includes(t.url.split("api/")[1])},_={globalInterceptor:k};a["default"].config.productionTip=!1,a["default"].use(h.a),a["default"].use(p["a"]),a["default"].use(g["a"],{defaultPosition:"toast-bottom-center",defaultTimeout:"2000"}),a["default"].use(f["a"]),_.globalInterceptor,new a["default"]({router:d["a"],render:function(t){return t(l)}}).$mount("#app")},"98fc":function(t,e,n){"use strict";n("4c73")},"9dc8":function(t,e,n){},a18c:function(t,e,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("2b0e"),r=n("8c4f"),o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"error-template"},[n("h1",[t._v(" Oops!")]),n("h2",[t._v(" 404 Not Found")]),n("div",{staticClass:"error-details"},[t._v(" Sorry, an error has occured, Requested page not found! ")]),n("div",{staticClass:"error-actions"},[n("h5",[t._v("Ask to: ")]),n("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:"https://github.com/raulgt",target:"_blank"}},[t._v("Carlos Abreu")])])])])])])}],i={},u=i,c=n("2877"),l=Object(c["a"])(u,o,s,!1,null,"4d181a18",null),d=l.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-group"},[n("div",{staticClass:"card m-l-5 m-t-5"},[n("div",{staticClass:"card-body"},[n("LocationMap",{attrs:{apiKey:t.googleKey,mapConfig:t.mapConf,taskRow:t.currentTaskRow,tableTasks:t.currentTasks},on:{markerClick:t.clickOnMarker}})],1)]),n("div",{staticClass:"card m-r-5 m-l-5 m-t-5"},[n("div",{staticClass:"card-body"},[n("TaskTable",{attrs:{markerId:t.markerClickedId},on:{clickedRow:t.selectRowMarker,tasksArray:t.tasksLocal}})],1)])])},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Google Maps")]),n("div",{ref:"googleMap",staticClass:"google-map"}),Boolean(this.google)&&Boolean(this.map)?[t._t("default",null,{google:t.google,map:t.map})]:t._e()],2)},h=[],g=n("1da1"),v=(n("96cf"),n("a9e3"),n("d81d"),n("99af"),n("a4d3"),n("e01a"),n("159b"),n("7db0"),n("f464")),b=n.n(v),w={name:"LocationMap",props:{mapConfig:{type:Object,default:function(){}},apiKey:{type:String,default:""},taskRow:{type:Number,default:0},tableTasks:{type:Array,default:null}},data:function(){return{google:null,map:null,currentMapMarkers:[],infoWindowsList:[],tasks:[],rowId:0}},mounted:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b()({apiKey:t.apiKey});case 2:n=e.sent,t.google=n,t.initializeMap();case 5:case"end":return e.stop()}}),e)})))()},methods:{initializeMap:function(){var t=this.$refs.googleMap;this.map=new this.google.maps.Map(t,this.mapConfig)},newMarker:function(t,e,n,a){return new this.google.maps.Marker({id:a,position:t,map:e,title:n})},buildInfoWindow:function(t){var e="<b style='font-weight:bold;'>".concat(t.title,"</b><br>\n                                 <b>Status: ").concat(t.status,"</b><br>\n                                 <b>Description: ").concat(t.description,"</b><br>\n                                 <b>Updated at: ").concat(new Date(t.updated_at).toLocaleDateString()," - ").concat(new Date(t.updated_at).toLocaleTimeString(),"</b>\n                                 <br>");return e},setInfoWindow:function(t,e){return new this.google.maps.InfoWindow({content:t,id:e})},newLatLng:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8.494105,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-69.12718;return new this.google.maps.LatLng(t,e)},buildMarker:function(t){var e={title:t.title,id:t.id,lat:Number(t.latitude),lng:Number(t.longitude),status:t.status,description:t.description,updated_at:t.updated_at};return e},addLocalMarker:function(t){var e=new this.google.maps.LatLng(t.lat,t.lng),n=this.newMarker(e,this.map,t.title,t.id);this.currentMapMarkers.push(n);var a=this.buildInfoWindow(t),r=this.setInfoWindow(a,t.id);this.infoWindowsList.push(r),this.clickEventOnMarker(n,r)},setMapMarkers:function(t){var e=this;t.map((function(t){var n=e.buildMarker(t);e.addLocalMarker(n)}))},clickEventOnMarker:function(t,e){var n=this;this.google.maps.event.addListener(t,"click",(function(){n.infoWindowsList.forEach((function(t){return t.close()})),e.open(n.map,t),n.$emit("markerClick",t.id)}))},openMarkerInfoByTableClick:function(t){var e=this.currentMapMarkers.find((function(e){return e.id===t})),n=this.infoWindowsList.find((function(e){return e.id===t}));this.infoWindowsList.forEach((function(t){return t.close()})),n.open(this.map,e)}},watch:{taskRow:{handler:function(t){this.rowId=t,this.openMarkerInfoByTableClick(this.rowId)},deep:!0},tableTasks:{handler:function(t){this.tasks=t,this.setMapMarkers(this.tasks)},deep:!0}}},k=w,y=(n("ef29"),Object(c["a"])(k,m,h,!1,null,"fb71d99e",null)),_=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-responsive"},[n("p",[t._v("Map Tasks")]),n("table",{staticClass:"table table-hover"},[n("thead",[n("tr",t._l(t.gridColumns,(function(e){return n("th",{key:e},[t._v(" "+t._s(e)+" ")])})),0)]),n("tbody",t._l(t.data,(function(e){return n("tr",{key:e,style:{"background-color":e.id===t.clickedRow?t.highlightedRow:""},on:{click:function(n){return t.clickTableRow(e.id)}}},t._l(t.columns,(function(a){return n("td",{key:a},[t._v(" "+t._s(e[a])+" ")])})),0)})),0)])])},O=[],M=n("bc3a"),x=n("edfa"),L=function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M["get"]("".concat(x["a"],"/jobs"));case 3:return e=t.sent,n=R(e),t.abrupt("return",n.data);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",{});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),R=function(t){if(200!==t.status)throw Error("custom-error: ".concat(t.message," with status: ").concat(t.status));if(null===t)throw Error("null response");if(!t.data)throw Error("null response");return t},T={getTasks:L},j=n("b166"),I="MMM dd, yyyy",D="#f8de7e",E={name:"TaskTable",data:function(){return{searchQuery:"",gridColumns:["Id","Title","Status","Assigned to","Created at"],columns:["id","title","status","assigned_to","created_at"],data:[],startRow:0,rowsPerPage:10,taskDetailDtoOutput:{id:0,title:"",description:"",latitude:"",longitude:"",image:"",date:"",status:"",assigned_to:"",created_at:"",updated_at:""},taskDtoOut:{current_page:0,data:[],total:0,last_page:0,per_page:0},clickedRow:0,highlightedRow:D}},props:{tasks:{type:Object,default:function(){}},markerId:{type:Number,default:0}},created:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCurrentTasks();case 2:case"end":return e.stop()}}),e)})))()},methods:{getCurrentTasks:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.getTasks();case 2:t.taskDtoOut=e.sent,(null===(n=t.taskDtoOut)||void 0===n?void 0:n.data.length)>0&&(t.data=t.taskDtoOut.data,t.data.map((function(e){return e.created_at=t.shortDate(e.created_at)})),t.$emit("tasksArray",t.data));case 4:case"end":return e.stop()}}),e)})))()},shortDate:function(t){return t?Object(j["a"])(new Date(t),I):""},selectRowByMarkerId:function(t){this.clickedRow=t},clickTableRow:function(t){this.clickedRow=t,this.$emit("clickedRow",this.clickedRow)}},watch:{markerId:{handler:function(t){this.selectRowByMarkerId(t)},deep:!0}}},$=E,S=(n("98fc"),Object(c["a"])($,C,O,!1,null,"acdcdf38",null)),N=S.exports,A="AIzaSyD3LxfgPqNE870u9O5V48hvf7HYWGITIXk",P=n("4770"),U={name:"Home",components:{LocationMap:_,TaskTable:N},data:function(){return{currentTaskRow:0,currentTasks:[],googleKey:A,mapConf:{center:P["a"],zoom:7},markerClickedId:0}},methods:{selectRowMarker:function(t){this.currentTaskRow=t},tasksLocal:function(t){this.currentTasks=t},clickOnMarker:function(t){this.markerClickedId=t}}},B=U,W=Object(c["a"])(B,p,f,!1,null,null,null),q=W.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("NavBar",{attrs:{currentUser:t.userDetail.name}}),n("div",{staticClass:"container-fluid"},[n("router-view")],1),n("Footer",{attrs:{userEmail:t.userDetail.email,created:t.userDetail.created_at}})],1)},Y=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer bg-secondary text-center"},[n("p",[n("a",{attrs:{href:"#"}},[t._v(t._s(t.userEmail))])]),n("p",[t._v(t._s(t._f("shortDate")(t.created)))])])},F=[],J={name:"Footer",props:{userEmail:{type:String,default:""},created:{type:String,default:""}},filters:{shortDate:function(t){return t?Object(j["a"])(new Date(t),I):""}}},V=J,H=(n("101c"),Object(c["a"])(V,z,F,!1,null,"45b05bc8",null)),G=H.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg bd-navbar navbar-light"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand"},[t._v(t._s(t.currentUser))]),n("button",{staticClass:"btn btn-bd-download",attrs:{type:"button"},on:{click:function(e){return t.askToLogout()}}},[n("span",{staticClass:"button-text"},[t._v("Logout")])])])]),n("Modal",{attrs:{message:t.modalMessage,isOpen:t.showModal},on:{handleNo:t.closeModal,handleYes:t.setLogout}})],1)},X=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",attrs:{id:"myModal"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("span",{staticClass:"close",on:{click:function(e){t.isOpen=!1}}},[t._v("×")]),n("h2",[t._v("Confirm")])]),n("div",{staticClass:"modal-body"},[n("p",[t._v(t._s(t.message))])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.isOpen=!1}}},[t._v("No")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.onYes()}}},[t._v("Yes")])])])])},tt=[],et={name:"Modal",props:{message:{type:String,default:function(){return""}},isOpen:{type:Boolean,default:function(){return!1}}},methods:{onYes:function(){this.isOpen=!1,this.$emit("handleYes")},onNo:function(){this.$emit("handleNo")},openClose:function(t){var e=document.getElementById("myModal");t?e.setAttribute("style","display: block"):(this.onNo(),e.setAttribute("style","display: none"))}},watch:{isOpen:{handler:function(t){this.openClose(t)}}}},nt=et,at=(n("c04ed"),Object(c["a"])(nt,Z,tt,!1,null,"f346f85a",null)),rt=at.exports,ot=n("c572"),st={name:"NavBar",data:function(){return{modalMessage:"Please, confirm the logout..!!",showModal:!1}},props:{currentUser:{type:String,default:""}},components:{Modal:rt},methods:{askToLogout:function(){this.showModal=!0},closeModal:function(){this.showModal=!1},setLogout:function(){ot["a"].logOutUser()}}},it=st,ut=(n("dedf"),Object(c["a"])(it,Q,X,!1,null,"64402280",null)),ct=ut.exports,lt={name:"Template",components:{NavBar:ct,Footer:G},created:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getLsUserDetails();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{userDetail:{id:0,name:"",email:"",email_verified_at:"",created_at:"",updated_at:""}}},methods:{getLsUserDetails:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ot["a"].getLocalStorageUserDetail();case 2:t.userDetail=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},dt=lt,pt=Object(c["a"])(dt,K,Y,!1,null,null,null),ft=pt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"limiter"},[n("div",{staticClass:"container-login100"},[n("div",{staticClass:"wrap-login100"},[n("form",{staticClass:"login100-form validate-form flex-sb flex-w",on:{submit:function(e){return e.preventDefault(),t.submitLogin.apply(null,arguments)}}},[t._m(0),n("div",{staticClass:"wrap-input100 mt-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input100",class:{invalid:t.$v.email.$invalid&&t.$v.email.$dirty},attrs:{type:"text",name:"email",placeholder:"Username",autocomplete:"off"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("span",{staticClass:"focus-input100"})]),n("div",{staticClass:"wrap-input100 mt-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input100",class:{invalid:t.$v.password.$invalid&&t.$v.password.$dirty},staticStyle:{"padding-left":"red"},attrs:{type:"password",name:"password",placeholder:"Password",autocomplete:"off"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",{staticClass:"container-login100-form-btn mt-2"},[n("button",{staticClass:"login100-form-btn",class:{"disable-button":t.$v.$invalid},attrs:{type:"submit"}},[t._v(" Ingresar ")])])])])])])},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"login100-form-title"},[t._v(" Task mapping "),n("p",[t._v("Using Vue.js")])])}],gt=(n("b64b"),n("b5ae")),vt={name:"Login",data:function(){return{email:"",password:"",credentials:{access_token:"",expires_in:0,token_type:""},userDetail:{id:0,name:"",email:"",email_verified_at:"",created_at:"",updated_at:""}}},validations:{email:{required:gt["required"],email:gt["email"]},password:{required:gt["required"]}},methods:{submitLogin:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$v.$touch(),t.$v.$invalid){e.next=14;break}return n={email:t.email,password:t.password},e.next=5,ot["a"].loginUser(n);case 5:if(t.credentials=e.sent,0===Object.keys(t.credentials).length){e.next=13;break}return e.next=9,ot["a"].getUserDetail();case 9:t.userDetails=e.sent,0!==Object.keys(t.userDetails).length&&t.$router.push("/dashboard"),e.next=14;break;case 13:t.wrongLogin();case 14:case"end":return e.stop()}}),e)})))()},wrongLogin:function(){this.email="",this.password="",this.$toastr.e("UNAUTHORIZED")}}},bt=vt,wt=(n("cb92"),Object(c["a"])(bt,mt,ht,!1,null,"3f8a7540",null)),kt=wt.exports,yt=(n("b0c0"),function(t,e,n){"login"===t.name||ot["a"].isTokenValid()?"login"===t.name&&ot["a"].isTokenValid()?n({path:"/dashboard"}):n():n({path:"/login"})}),_t={guardMainRoute:yt};a["default"].use(r["a"]);var Ct=[{path:"/",redirect:"/init/login"},{path:"/init/login",name:"login",component:kt,beforeEnter:_t.guardMainRoute},{path:"/dashboard",name:"dashboard",component:ft,beforeEnter:_t.guardMainRoute,children:[{title:"home",path:"/",name:"home",component:q}]},{path:"*",component:d},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"be3e"))}}],Ot=new r["a"]({mode:"history",base:"/vue-jobs-maplocation/",routes:Ct});e["a"]=Ot},b665:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=function(t,e){localStorage.setItem(t,JSON.stringify(e))},r=function(t){var e=localStorage.getItem(t);return e?JSON.parse(e):null},o=function(t){localStorage.removeItem(t)},s=function(){return localStorage.clear()},i={setLsItem:a,getLsItem:r,removeLsItem:o,removeLsAll:s}},b859:function(t,e,n){},c04ed:function(t,e,n){"use strict";n("eb58")},c572:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return b}));var a=n("1da1"),r=(n("d3b7"),n("25f0"),n("ac1f"),n("1276"),n("96cf"),n("bc3a")),o=n("a18c"),s=n("b665"),i=n("edfa"),u=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r["post"]("".concat(i["a"],"/auth/login"),e);case 3:return n=t.sent,a=v(n),t.next=7,m(a.data.access_token);case 7:return t.abrupt("return",a.data);case 10:return t.prev=10,t.t0=t["catch"](0),console.error(t.t0),t.abrupt("return",{});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r["get"]("".concat(i["a"],"/auth/me"));case 3:return e=t.sent,n=v(e),t.next=7,h(n.data);case 7:return t.abrupt("return",n.data);case 10:return t.prev=10,t.t0=t["catch"](0),t.abrupt("return",{});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",s["a"].getLsItem("userDetails"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){s["a"].removeLsItem("token"),s["a"].removeLsItem("userDetails"),o["a"].push("/init/login")},p=function(){var t=g();return!(!t||f(t.toString()))},f=function(e){var n=JSON.parse(t.from(e.split(".")[1],"base64")).exp;return Math.floor((new Date).getTime()/1e3)>=n},m=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s["a"].setLsItem("token",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s["a"].setLsItem("userDetails",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){return s["a"].getLsItem("token")},v=function(t){if(200!==t.status)throw Error("custom-error: ".concat(t.message));if(null===t)throw Error("null response");if(!t.data)throw Error("null response");return t},b={loginUser:u,logOutUser:d,getToken:g,getUserDetail:c,getLocalStorageUserDetail:l,isTokenValid:p}}).call(this,n("b639").Buffer)},cb92:function(t,e,n){"use strict";n("0529")},dedf:function(t,e,n){"use strict";n("2581")},eb58:function(t,e,n){},edfa:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a="https://coding-test.rootstack.net/api"},ef29:function(t,e,n){"use strict";n("b859")}});
//# sourceMappingURL=app.62726ef5.js.map