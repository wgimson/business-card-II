(function(e){function t(t){for(var n,i,o=t[0],u=t[1],s=t[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/business-card-II/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav",{staticClass:"green"},[r("div",{staticClass:"nav-wrapper"},[r("span",{staticClass:"brand-logo"},[e._v("Neqquess Business And Security Applications and Loans")]),r("ul",{staticClass:"right"},[r("li",[e.activeUser?e._e():r("a",{on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v("Login")])]),r("li",[e.activeUser?r("a",{on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[e._v("Logout")]):e._e()])])])]),r("router-view")],1)},c=[],i=(r("96cf"),r("1da1")),o={name:"App",data:function(){return{activeUser:null}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.refreshActiveUser();case 2:case"end":return t.stop()}}),t)})))()},watch:{$route:"refreshActiveUser"},methods:{login:function(){this.$auth.loginRedirect()},refreshActiveUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$auth.getUser();case 2:e.activeUser=t.sent;case 3:case"end":return t.stop()}}),t)})))()},logout:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$auth.logout();case 2:return t.next=4,e.refreshActiveUser();case 4:e.$router.push("/loggedout");case 5:case"end":return t.stop()}}),t)})))()}}},u=o,s=(r("034f"),r("2877")),l=Object(s["a"])(u,a,c,!1,null,null,null),p=l.exports,f=r("8c4f"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"custom-contain container"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content center-align"},[r("h1",[e._v("Log back in to Macy and Billy's Business Card O Rama!!!")])])])])}],v={},g=Object(s["a"])(v,d,h,!1,null,null,null),m=g.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"custom-contain container"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content center-align"},[r("h1",[e._v(" qwerty "+e._s(e.activeUser.name)+"!!!")])])])])},w=[],y={name:"LoggedIn",data:function(){return{activeUser:{name:null}}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.refreshActiveUser();case 2:case"end":return t.stop()}}),t)})))()},methods:{refreshActiveUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$auth.getUser();case 2:e.activeUser=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},_=y,x=Object(s["a"])(_,b,w,!1,null,null,null),O=x.exports,j=r("bc79"),U=r.n(j);n["a"].use(U.a,{issuer:"https://dev-64727739.okta.com/oauth2/default",clientId:"0oa613x71xX9hKSl75d6",redirectUri:"http://localhost:8080/implicit/callback",scope:"openid profile email"}),n["a"].use(f["a"]);var k=[{path:"/loggedout",name:"LoggedOut",component:m},{path:"/implicit/callback",component:U.a.handleCallback()},{path:"/",name:"Loggedin",component:O,meta:{requiresAuth:!0}}],R=new f["a"]({mode:"history",base:"/business-card-II/",routes:k});R.beforeEach(n["a"].prototype.$auth.authRedirectGuard());var C=R;n["a"].config.productionTip=!1,new n["a"]({router:C,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.55e36b76.js.map