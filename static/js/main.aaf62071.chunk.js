(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var r=n(129),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9930eba9-1ef1-4421-97ea-4694b019c095"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/ ".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},132:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2C_EM"}},133:function(e,t){e.exports="data:image/png;base64,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"},134:function(e,t,n){e.exports=n.p+"static/media/6.3e17cba4.gif"},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(28),a=n(29),o=n(31),u=n(30),i=n(32),c=n(0),s=n.n(c),l=n(25),f=n(12),p=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(l.a,{to:"/login"})}}]),n}(s.a.Component);return Object(f.b)(p)(t)}},164:function(e,t,n){e.exports=n(291)},169:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__1Faar",item:"Navbar_item__2lrLy",activeLink:"Navbar_activeLink__1vSSp"}},170:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(64),u=n.n(o),i=(n(169),n(28)),c=n(29),s=n(31),l=n(30),f=n(32),p=(n(170),n(17)),m=n.n(p),g=n(11),d=function(){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(g.b,{to:"/profile",activeClassName:m.a.activeLink},"Profile")),a.a.createElement("div",{className:m.a.item},a.a.createElement(g.b,{to:"/dialogs",activeClassName:m.a.activeLink},"Massage")),a.a.createElement("div",{className:m.a.item},a.a.createElement(g.b,{to:"/users",activeClassName:m.a.activeLink},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement(g.b,{to:"/news",activeClassName:m.a.activeLink},"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement(g.b,{to:"/music",activeClassName:m.a.activeLink},"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement(g.b,{to:"/setting",activeClassName:m.a.activeLink},"Settings")))},b=n(8),O=n.n(b),h=n(20),v=n(43),E=n(14),y=n(13);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w=function(e,t,n,r){return e.map((function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},r):e}))};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},C=function(e){return{type:"FOLLOW",userId:e}},x=function(e){return{type:"UNFOLLOW",userId:e}},I=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},z=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},T=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS ",isFetching:e,userId:t}},k=function(){var e=Object(h.a)(O.a.mark((function e(t,n,r,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(T(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return S({},e,{users:w(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return S({},e,{users:w(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return S({},e,{users:t.users});case"SET_CURRENT_PAGE":return S({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return S({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return S({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS ":return S({},e,{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},U=n(12),F=n(52),H=n(126),B=n(69),R=n.n(B),D=n(131),Z=n.n(D),N=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/c),m=Object(r.useState)(1),g=Object(H.a)(m,2),d=g[0],b=g[1],O=(d-1)*c+1,h=d*c;return a.a.createElement("div",{className:R.a.paginator},d>1&&a.a.createElement("button",{onClick:function(){b(d-1)}},"PREV"),l.filter((function(e){return e>=O&&e<=h})).map((function(e){return a.a.createElement("span",{className:Z()(Object(E.a)({},R.a.a,o===e),R.a.pageNumber),key:e,onClick:function(t){u(e)}},e)})),p>d&&a.a.createElement("button",{onClick:function(){b(d+1)}},"NEXT"))},K=n(132),G=n.n(K),X=n(133),Y=n.n(X),q=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(g.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Y.a,className:G.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},M=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,u=e.users,i=Object(F.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return a.a.createElement("div",null,a.a.createElement(N,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:r}),a.a.createElement("div",null,u.map((function(e){return a.a.createElement(q,{user:e,followingInProgress:i.followingInProgress,key:e.id,unfollow:i.unfollow,follow:i.follow})}))))},J=n(42),V=(n(138),n(7)),W=n(135),Q=Object(W.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),_=function(e){return e.usersPage.pageSize},$=function(e){return e.usersPage.totalUsersCount},ee=function(e){return e.usersPage.currentPage},te=function(e){return e.usersPage.isFetching},ne=function(e){return e.usersPage.followingInProgress},re=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.getUsers(e,t)},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(J.a,null):null,a.a.createElement(M,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),ae=Object(V.d)(Object(U.b)((function(e){return{users:Q(e),pageSize:_(e),totalUsersCount:$(e),currentPage:ee(e),isFetching:te(e),followingInProgress:ne(e)}}),{follow:function(e){return function(){var t=Object(h.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k(n,e,y.c.follow.bind(y.c),C);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(h.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k(n,e,y.c.unfollow.bind(y.c),x);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:I,toggleFollowingProgress:T,getUsers:function(e,t){return function(){var n=Object(h.a)(O.a.mark((function n(r){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(z(!0)),r(I(e)),n.next=4,y.c.getUsers(e,t);case 4:a=n.sent,r(z(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(re),oe=n(90),ue=n.n(oe),ie=function(e){return a.a.createElement("header",{className:ue.a.header},a.a.createElement("img",{src:"https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png"}),a.a.createElement("div",{className:ue.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(g.b,{to:"/login"},"Login")))},ce=n(39);function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe="samurai-network/auth/SET_USER_DATA",pe={userId:null,email:null,login:null,isAuth:!1},me=function(e,t,n,r){return{type:fe,payload:{userId:e,email:t,login:n,isAuth:r}}},ge=function(){return function(){var e=Object(h.a)(O.a.mark((function e(t){var n,r,a,o,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,u=r.email,t(me(a,u,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return le({},e,{},t.payload);default:return e}},be=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(ie,this.props)}}]),t}(a.a.Component),Oe=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(h.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.data.resultCode&&t(me(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(be),he=n(125),ve=n(37),Ee=n(55),ye=n(25),je=n(53),we=n.n(je),Pe=Object(he.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(ve.c)("Email","email",[Ee.b],ve.a),Object(ve.c)("Password","password",[Ee.b],ve.a,{type:"password"}),Object(ve.c)(null,"rememberMe",[],ve.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:we.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),Se=Object(U.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(h.a)(O.a.mark((function r(a){var o,u;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y.a.login(e,t,n,!0);case 2:0===(o=r.sent).data.resultCode?a(ge()):(u=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(ce.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(ye.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(Pe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}));function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe={initialized:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Ce({},e,{initialized:!0});default:return e}},ze=n(93),Te=n(94),ke=n(137),Le=n(127),Ue=Object(V.c)({profilePage:ze.b,messagePage:Te.a,usersPage:L,auth:de,form:Le.a,app:Ie}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,He=Object(V.e)(Ue,Fe(Object(V.a)(ke.a)));window._store_=He;var Be=He,Re=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(J.a,null)},a.a.createElement(e,t))}},De=a.a.lazy((function(){return n.e(4).then(n.bind(null,297))})),Ze=a.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),Ne=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(Oe,null),a.a.createElement(d,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(ye.b,{path:"/dialogs",render:Re(De)}),a.a.createElement(ye.b,{path:"/profile/:userId?",render:Re(Ze)}),a.a.createElement(ye.b,{path:"/users",render:function(){return a.a.createElement(ae,null)}}),a.a.createElement(ye.b,{path:"/login",render:function(){return a.a.createElement(Se,null)}}))):a.a.createElement(J.a,null)}}]),t}(a.a.Component),Ke=Object(V.d)(ye.f,Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ge());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ne),Ge=function(e){return a.a.createElement(g.a,null,a.a.createElement(U.a,{store:Be},a.a.createElement(Ke,null)))};u.a.render(a.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(52),a=n(0),o=n.n(a),u=n(53),i=n.n(u),c=(n(55),n(87)),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return o.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:" ")},o.a.createElement("div",null,a),u&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e," ",o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e," ",o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},42:function(e,t,n){"use strict";var r=n(134),a=n.n(r),o=n(0),u=n.n(o);t.a=function(){return u.a.createElement("div",null,u.a.createElement("img",{src:a.a}))}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2e9HH",error:"FormsControls_error__1XtlZ",formSummaryError:"FormsControls_formSummaryError__1682S"}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},69:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__1mZP3",paginator:"Paginator_paginator__3wPsw",a:"Paginator_a__1o7Zq"}},90:function(e,t,n){e.exports={header:"Header_header__18oKW",loginBlock:"Header_loginBlock__3B73d"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return b}));var r=n(8),a=n.n(r),o=n(20),u=n(43),i=n(14),c=n(13);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={posts:[{id:1,message:"Hi, how are you",likesCount:12},{id:2,message:"It is my first post",likesCount:17},{id:3,message:"huhuhauhau",likesCount:17},{id:4,message:"mmkmkmkm",likesCount:17}],profile:null,status:""},p=function(e){return{type:"ADD-POST",newPostText:e}},m=function(e){return{type:"SET_STATUS",status:e}},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return l({},e,{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return l({},e,{status:t.status});case"SET_USER_PROFILE":return l({},e,{profile:t.profile});case"DELETE_POST":return l({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},94:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(43),a=n(14);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={dialogs:[{id:1,name:"Ashot"},{id:2,name:"Mashot"},{id:3,name:"Atabek"},{id:4,name:"Ibrahim"},{id:5,name:"Sveta"},{id:6,name:"Karlen"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"YO"},{id:4,message:"Yo"},{id:5,message:"YO"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return u({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}}},[[164,1,2]]]);
//# sourceMappingURL=main.aaf62071.chunk.js.map