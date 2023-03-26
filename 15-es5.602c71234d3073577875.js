function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7pt1":function(l,n,u){"use strict";u.d(n,"a",(function(){return r}));var e=u("g9Q4"),t=u("8Y7J"),i=u("IheW"),r=function(){var l=function(){function l(n,u){var e=this;_classCallCheck(this,l),this.http=n,this.serverAddress=u,this.UserSet=!1,this.username={username:""},this.getTakenUsernames=function(){return e.http.get(e.serverAddress.getServerAddress()+"/get/users")}}return _createClass(l,[{key:"authLoginData",value:function(l){return this.http.post(this.serverAddress.getServerAddress()+"/auth/user",l)}},{key:"onCorrectCred",value:function(l,n,u){this.setUsername(n),console.log(l),this.stat=u,console.log(this.stat)}},{key:"onIncorrectCred",value:function(l,n){console.log(l),this.stat=n}},{key:"isUserSet",value:function(){return this.UserSet}},{key:"setUser",value:function(){this.UserSet=!0}},{key:"setUsername",value:function(l){this.username.username=l,this.setUser()}},{key:"getUsername",value:function(){return this.username.username}},{key:"signUpUser",value:function(l){this.pushUsernameToDatabase(l)}},{key:"pushUsernameToDatabase",value:function(l){this.http.post(this.serverAddress.getServerAddress()+"/push/username",l).subscribe((function(l){console.log(l)}))}}]),l}();return l.ngInjectableDef=t.Tb({factory:function(){return new l(t.Ub(i.c),t.Ub(e.a))},token:l,providedIn:"root"}),l}()},g9Q4:function(l,n,u){"use strict";u.d(n,"a",(function(){return t}));var e=u("8Y7J"),t=function(){var l=function l(){var n=this;_classCallCheck(this,l),this.development="http://localhost:3000",this.prod="https://backstab319.herokuapp.com",this.address=this.prod,this.getServerAddress=function(){return n.address}};return l.ngInjectableDef=e.Tb({factory:function(){return new l},token:l,providedIn:"root"}),l}()},lXdG:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},i=u("pMnS"),r=u("oBZk"),a=u("ZZ/e"),o=u("mrSG"),s=u("7pt1"),b=function(){function l(n,u,e,t){_classCallCheck(this,l),this.modalCtl=n,this.AlertCtl=u,this.toastCtl=e,this.userSrv=t}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"closeSignUpModal",value:function(){this.modalCtl.dismiss()}},{key:"signUpUser",value:function(l){return o.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var u,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.isUsernameAvailable(l.value.username);case 2:if(!this.usernameTaken){n.next=4;break}return n.abrupt("return",void console.log("The username is already taken!"));case 4:u=l.value.password1,e=l.value.password2,!1!==(l.valid&&u.length>3&&e.length>3&&u===e)?(this.signUpData={username:l.value.username,password:l.value.password1},this.userSrv.signUpUser(this.signUpData),l.resetForm(),this.modalCtl.dismiss(),this.successfullToast()):this.checkCredentialAlert();case 6:case"end":return n.stop()}}),n,this)})))}},{key:"checkCredentialAlert",value:function(){return o.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.AlertCtl.create({header:"Error",subHeader:"Please check your credentials",buttons:[{text:"Ok",role:"ok"}],translucent:!0});case 2:return n=l.sent,l.next=5,n.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}},{key:"successfullToast",value:function(){return o.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toastCtl.create({message:"Sign up successfull! Now you can login to start chatting!",color:"primary",duration:2e3});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}},{key:"isUsernameAvailable",value:function(l){return o.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var u=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(this.userSrv.getTakenUsernames().subscribe((function(n){u.usernameTaken=n.toString().split(",").includes(l)}),(function(l){return console.log("Some error occured while fetching usernames",l)})),this.usernameTaken));case 1:case"end":return n.stop()}}),n,this)})))}}]),l}(),c=function(){function l(n,u,e,t){var i=this;_classCallCheck(this,l),this.modalCtl=n,this.navCtl=u,this.us=e,this.toastCtl=t,this.usernameExists=!1,this.authStat=!1,this.closeUsernameModal=function(){return i.modalCtl.dismiss()}}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"usernameFormProcessor",value:function(l){var n=this;if(!l.invalid){var u=l.value.username;this.us.authLoginData({username:u,password:l.value.password}).subscribe((function(l){"exist&&passcorrect"===l.status?n.us.onCorrectCred(l.message,u,l.status):n.us.onIncorrectCred(l.message,l.status)}),(function(l){console.log("There was some error authenticating",l)}),(function(){"exist&&passcorrect"!==n.us.stat?n.wrongCredToast():n.proceedToPage(u)})),l.resetForm()}}},{key:"proceedToPage",value:function(l){this.us.setUsername(l),this.modalCtl.dismiss(),this.us.setUser(),this.navCtl.navigateForward("/applications/chat-web-app/chat-page")}},{key:"gotoSignUpPage",value:function(){this.modalCtl.dismiss(),this.signUpPageModal()}},{key:"signUpPageModal",value:function(){return o.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.modalCtl.create({component:b});case 2:return n=l.sent,l.next=5,n.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}},{key:"wrongCredToast",value:function(){return o.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toastCtl.create({message:"Incorrect user credentials. Please check your user name and password and try again",duration:2e3,color:"danger",translucent:!0});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}}]),l}(),d=function(){function l(n,u){_classCallCheck(this,l),this.alertCtl=n,this.modalCtl=u}return _createClass(l,[{key:"ngOnInit",value:function(){this.presentWarning()}},{key:"presentWarning",value:function(){return o.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertCtl.create({header:"Security warning!",subHeader:"Please do not use any username or password that you are using currently anywhere else",buttons:[{text:"Ok",role:"ok"}]});case 2:return n=l.sent,l.next=5,n.present();case 5:case"end":return l.stop()}}),l,this)})))}},{key:"presentUsernameModal",value:function(){return o.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.modalCtl.create({component:c});case 2:return n=l.sent,l.next=5,n.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}}]),l}(),p=e.yb({encapsulation:0,styles:[[""]],data:{}});function g(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,13,"ion-header",[],null,null,null,r.bb,r.p)),e.zb(1,49152,null,0,a.B,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,11,"ion-toolbar",[],null,null,null,r.xb,r.L)),e.zb(3,49152,null,0,a.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,r.Q,r.e)),e.zb(5,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.jb,r.y)),e.zb(7,49152,null,0,a.R,[e.j,e.p,e.F],null,null),(l()(),e.Ab(8,0,null,0,2,"ion-back-button",[["defaultHref","/applications"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Lb(l,10).onClick(u)&&t),t}),r.O,r.c)),e.zb(9,49152,null,0,a.g,[e.j,e.p,e.F],{defaultHref:[0,"defaultHref"]},null),e.zb(10,16384,null,0,a.h,[[2,a.ib],a.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),e.Ab(11,0,null,0,2,"ion-title",[],null,null,null,r.wb,r.K)),e.zb(12,49152,null,0,a.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Chat web app"])),(l()(),e.Ab(14,0,null,null,76,"ion-content",[],null,null,null,r.Y,r.m)),e.zb(15,49152,null,0,a.u,[e.j,e.p,e.F],null,null),(l()(),e.Ab(16,0,null,0,74,"ion-grid",[],null,null,null,r.ab,r.o)),e.zb(17,49152,null,0,a.A,[e.j,e.p,e.F],null,null),(l()(),e.Ab(18,0,null,0,46,"ion-row",[],null,null,null,r.nb,r.B)),e.zb(19,49152,null,0,a.jb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(20,0,null,0,44,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,r.X,r.l)),e.zb(21,49152,null,0,a.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(22,0,null,0,42,"ion-card",[["class","ion-padding"]],null,null,null,r.V,r.f)),e.zb(23,49152,null,0,a.m,[e.j,e.p,e.F],null,null),(l()(),e.Ab(24,0,null,0,8,"ion-card-header",[],null,null,null,r.S,r.h)),e.zb(25,49152,null,0,a.o,[e.j,e.p,e.F],null,null),(l()(),e.Ab(26,0,null,0,3,"ion-card-title",[["class","ion-padding-start"]],null,null,null,r.U,r.j)),e.zb(27,49152,null,0,a.q,[e.j,e.p,e.F],null,null),(l()(),e.Ab(28,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Welcome to the chat web app"])),(l()(),e.Ab(30,0,null,0,2,"ion-card-subtitle",[["class","ion-padding-start"]],null,null,null,r.T,r.i)),e.zb(31,49152,null,0,a.p,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["A simple chat web app that gets the job done."])),(l()(),e.Ab(33,0,null,0,31,"ion-card-content",[],null,null,null,r.R,r.g)),e.zb(34,49152,null,0,a.n,[e.j,e.p,e.F],null,null),(l()(),e.Ab(35,0,null,0,29,"ion-list",[["lines","none"]],null,null,null,r.ib,r.v)),e.zb(36,49152,null,0,a.O,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Ab(37,0,null,0,6,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(38,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(39,0,null,0,1,"ion-icon",[["name","checkmark"]],null,null,null,r.cb,r.q)),e.zb(40,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(41,0,null,0,2,"ion-label",[],null,null,null,r.gb,r.u)),e.zb(42,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Simple to use"])),(l()(),e.Ab(44,0,null,0,6,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(45,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(46,0,null,0,1,"ion-icon",[["name","checkmark"]],null,null,null,r.cb,r.q)),e.zb(47,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(48,0,null,0,2,"ion-label",[],null,null,null,r.gb,r.u)),e.zb(49,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Features that you would actually use"])),(l()(),e.Ab(51,0,null,0,6,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(52,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(53,0,null,0,1,"ion-icon",[["name","checkmark"]],null,null,null,r.cb,r.q)),e.zb(54,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(55,0,null,0,2,"ion-label",[],null,null,null,r.gb,r.u)),e.zb(56,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Simple design"])),(l()(),e.Ab(58,0,null,0,6,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(59,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(60,0,null,0,1,"ion-icon",[["name","checkmark"]],null,null,null,r.cb,r.q)),e.zb(61,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(62,0,null,0,2,"ion-label",[],null,null,null,r.gb,r.u)),e.zb(63,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["No shady stuff in the background"])),(l()(),e.Ab(65,0,null,0,25,"ion-row",[],null,null,null,r.nb,r.B)),e.zb(66,49152,null,0,a.jb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(67,0,null,0,23,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,r.X,r.l)),e.zb(68,49152,null,0,a.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(69,0,null,0,21,"ion-card",[["class","ion-padding"]],null,null,null,r.V,r.f)),e.zb(70,49152,null,0,a.m,[e.j,e.p,e.F],null,null),(l()(),e.Ab(71,0,null,0,10,"ion-card-header",[],null,null,null,r.S,r.h)),e.zb(72,49152,null,0,a.o,[e.j,e.p,e.F],null,null),(l()(),e.Ab(73,0,null,0,3,"ion-card-title",[["class","ion-padding-start"]],null,null,null,r.U,r.j)),e.zb(74,49152,null,0,a.q,[e.j,e.p,e.F],null,null),(l()(),e.Ab(75,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Start chatting away!"])),(l()(),e.Ab(77,0,null,0,4,"ion-card-subtitle",[["class","ion-padding-start"]],null,null,null,r.T,r.i)),e.zb(78,49152,null,0,a.p,[e.j,e.p,e.F],null,null),(l()(),e.Ab(79,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,r.ub,r.I)),e.zb(80,49152,null,0,a.xb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Pb(-1,0,["Under beta phase!"])),(l()(),e.Ab(82,0,null,0,8,"ion-card-content",[],null,null,null,r.R,r.g)),e.zb(83,49152,null,0,a.n,[e.j,e.p,e.F],null,null),(l()(),e.Ab(84,0,null,0,6,"ion-buttons",[["class","ion-padding-start"]],null,null,null,r.Q,r.e)),e.zb(85,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(86,0,null,0,4,"ion-button",[["color","primary"],["expand","block"],["fill","solid"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.presentUsernameModal()&&e),e}),r.P,r.d)),e.zb(87,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.Ab(88,0,null,0,1,"ion-icon",[["name","chatbubbles"],["slot","start"]],null,null,null,r.cb,r.q)),e.zb(89,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Pb(-1,0,[" Chat"]))],(function(l,n){l(n,9,0,"/applications"),l(n,10,0,"/applications"),l(n,21,0,"12"),l(n,36,0,"none"),l(n,40,0,"checkmark"),l(n,47,0,"checkmark"),l(n,54,0,"checkmark"),l(n,61,0,"checkmark"),l(n,68,0,"12"),l(n,80,0,"danger"),l(n,87,0,"primary","block","solid"),l(n,89,0,"chatbubbles")}),null)}var h=e.wb("app-chat-web-app",d,(function(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,1,"app-chat-web-app",[],null,null,null,g,p)),e.zb(1,114688,null,0,d,[a.a,a.Hb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),m=u("s7LF"),f=u("SVse"),z=e.yb({encapsulation:0,styles:[[""]],data:{}});function v(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,7,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(1,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,5,"ion-label",[],null,null,null,r.gb,r.u)),e.zb(3,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,r.ub,r.I)),e.zb(5,49152,null,0,a.xb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Ab(6,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Please enter a valid username"]))],(function(l,n){l(n,5,0,"danger")}),null)}function A(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,7,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(1,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,5,"ion-label",[],null,null,null,r.gb,r.u)),e.zb(3,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,r.ub,r.I)),e.zb(5,49152,null,0,a.xb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Ab(6,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Please enter your password"]))],(function(l,n){l(n,5,0,"danger")}),null)}function j(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,17,"ion-header",[],null,null,null,r.bb,r.p)),e.zb(1,49152,null,0,a.B,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,15,"ion-toolbar",[],null,null,null,r.xb,r.L)),e.zb(3,49152,null,0,a.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,10,"ion-buttons",[["slot","end"]],null,null,null,r.Q,r.e)),e.zb(5,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(6,0,null,0,4,"ion-button",[["color","primary"],["expand","block"],["fill","solid"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.gotoSignUpPage()&&e),e}),r.P,r.d)),e.zb(7,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.Ab(8,0,null,0,1,"ion-icon",[["name","create"],["slot","start"]],null,null,null,r.cb,r.q)),e.zb(9,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Pb(-1,0,["Sign up"])),(l()(),e.Ab(11,0,null,0,3,"ion-button",[["color","danger"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.closeUsernameModal()&&e),e}),r.P,r.d)),e.zb(12,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Ab(13,0,null,0,1,"ion-icon",[["name","close-circle-outline"],["slot","icon-only"]],null,null,null,r.cb,r.q)),e.zb(14,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(15,0,null,0,2,"ion-title",[],null,null,null,r.wb,r.K)),e.zb(16,49152,null,0,a.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Login"])),(l()(),e.Ab(18,0,null,null,86,"ion-content",[],null,null,null,r.Y,r.m)),e.zb(19,49152,null,0,a.u,[e.j,e.p,e.F],null,null),(l()(),e.Ab(20,0,null,0,84,"ion-grid",[],null,null,null,r.ab,r.o)),e.zb(21,49152,null,0,a.A,[e.j,e.p,e.F],null,null),(l()(),e.Ab(22,0,null,0,51,"ion-row",[],null,null,null,r.nb,r.B)),e.zb(23,49152,null,0,a.jb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(24,0,null,0,49,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,r.X,r.l)),e.zb(25,49152,null,0,a.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(26,0,null,0,47,"ion-card",[["class","ion-padding-start"]],null,null,null,r.V,r.f)),e.zb(27,49152,null,0,a.m,[e.j,e.p,e.F],null,null),(l()(),e.Ab(28,0,null,0,45,"ion-card-content",[],null,null,null,r.R,r.g)),e.zb(29,49152,null,0,a.n,[e.j,e.p,e.F],null,null),(l()(),e.Ab(30,0,null,0,43,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Lb(l,32).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Lb(l,32).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.usernameFormProcessor(e.Lb(l,32))&&t),t}),null,null)),e.zb(31,16384,null,0,m.n,[],null,null),e.zb(32,4210688,[["usernameForm",4]],0,m.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Mb(2048,null,m.a,null,[m.i]),e.zb(34,16384,null,0,m.h,[[4,m.a]],null,null),(l()(),e.Ab(35,0,null,null,38,"ion-list",[["lines","none"]],null,null,null,r.ib,r.v)),e.zb(36,49152,null,0,a.O,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Ab(37,0,null,0,14,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(38,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(39,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.gb,r.u)),e.zb(40,49152,null,0,a.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Pb(-1,0,["Enter your username"])),(l()(),e.Ab(42,0,null,0,9,"ion-input",[["clearInput",""],["minlength","4"],["name","username"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Lb(l,46)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Lb(l,46)._handleInputEvent(u.target)&&t),t}),r.eb,r.s)),e.zb(43,16384,null,0,m.k,[],{required:[0,"required"]},null),e.zb(44,540672,null,0,m.c,[],{minlength:[0,"minlength"]},null),e.Mb(1024,null,m.d,(function(l,n){return[l,n]}),[m.k,m.c]),e.zb(46,16384,null,0,a.Nb,[e.p],null,null),e.Mb(1024,null,m.e,(function(l){return[l]}),[a.Nb]),e.zb(48,671744,[["username",4]],0,m.j,[[2,m.a],[6,m.d],[8,null],[6,m.e]],{name:[0,"name"],model:[1,"model"]},null),e.Mb(2048,null,m.f,null,[m.j]),e.zb(50,16384,null,0,m.g,[[4,m.f]],null,null),e.zb(51,49152,null,0,a.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],minlength:[1,"minlength"],name:[2,"name"],required:[3,"required"],type:[4,"type"]},null),(l()(),e.pb(16777216,null,0,1,null,v)),e.zb(53,16384,null,0,f.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ab(54,0,null,0,14,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(55,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(56,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.gb,r.u)),e.zb(57,49152,null,0,a.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Pb(-1,0,["Enter your password"])),(l()(),e.Ab(59,0,null,0,9,"ion-input",[["clearInput",""],["minlength","4"],["name","password"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Lb(l,63)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Lb(l,63)._handleInputEvent(u.target)&&t),t}),r.eb,r.s)),e.zb(60,16384,null,0,m.k,[],{required:[0,"required"]},null),e.zb(61,540672,null,0,m.c,[],{minlength:[0,"minlength"]},null),e.Mb(1024,null,m.d,(function(l,n){return[l,n]}),[m.k,m.c]),e.zb(63,16384,null,0,a.Nb,[e.p],null,null),e.Mb(1024,null,m.e,(function(l){return[l]}),[a.Nb]),e.zb(65,671744,[["password",4]],0,m.j,[[2,m.a],[6,m.d],[8,null],[6,m.e]],{name:[0,"name"],model:[1,"model"]},null),e.Mb(2048,null,m.f,null,[m.j]),e.zb(67,16384,null,0,m.g,[[4,m.f]],null,null),e.zb(68,49152,null,0,a.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],minlength:[1,"minlength"],name:[2,"name"],required:[3,"required"],type:[4,"type"]},null),(l()(),e.pb(16777216,null,0,1,null,A)),e.zb(70,16384,null,0,f.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ab(71,0,null,0,2,"ion-button",[["color","primary"],["expand","block"],["fill","solid"],["type","submit"]],null,null,null,r.P,r.d)),e.zb(72,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],type:[3,"type"]},null),(l()(),e.Pb(-1,0,["Done"])),(l()(),e.Ab(74,0,null,0,30,"ion-row",[],null,null,null,r.nb,r.B)),e.zb(75,49152,null,0,a.jb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(76,0,null,0,28,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,r.X,r.l)),e.zb(77,49152,null,0,a.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(78,0,null,0,26,"ion-card",[["class","ion-padding"]],null,null,null,r.V,r.f)),e.zb(79,49152,null,0,a.m,[e.j,e.p,e.F],null,null),(l()(),e.Ab(80,0,null,0,24,"ion-card-header",[],null,null,null,r.S,r.h)),e.zb(81,49152,null,0,a.o,[e.j,e.p,e.F],null,null),(l()(),e.Ab(82,0,null,0,3,"ion-card-title",[["class","ion-padding-start"]],null,null,null,r.U,r.j)),e.zb(83,49152,null,0,a.q,[e.j,e.p,e.F],null,null),(l()(),e.Ab(84,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,[" What is this? "])),(l()(),e.Ab(86,0,null,0,2,"ion-card-subtitle",[["class","ion-padding-start"]],null,null,null,r.T,r.i)),e.zb(87,49152,null,0,a.p,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,[" To start chatting you need to have a username so that others can find you online "])),(l()(),e.Ab(89,0,null,0,15,"ion-card-content",[],null,null,null,r.R,r.g)),e.zb(90,49152,null,0,a.n,[e.j,e.p,e.F],null,null),(l()(),e.Ab(91,0,null,0,13,"ion-list",[["lines","none"]],null,null,null,r.ib,r.v)),e.zb(92,49152,null,0,a.O,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Ab(93,0,null,0,3,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(94,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(95,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Length of username must be qual to or greater than 4"])),(l()(),e.Ab(97,0,null,0,3,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(98,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(99,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Can be alphanumeric"])),(l()(),e.Ab(101,0,null,0,3,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(102,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(103,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["For now the usernames are not restricted i.e one could take an already existing username. This will be patched once the app leaves beta phase."]))],(function(l,n){l(n,7,0,"primary","block","solid"),l(n,9,0,"create"),l(n,12,0,"danger"),l(n,14,0,"close-circle-outline"),l(n,25,0,"12"),l(n,36,0,"none"),l(n,40,0,"floating"),l(n,43,0,""),l(n,44,0,"4"),l(n,48,0,"username",""),l(n,51,0,"","4","username","","text"),l(n,53,0,e.Lb(n,48).invalid&&e.Lb(n,48).touched),l(n,57,0,"floating"),l(n,60,0,""),l(n,61,0,"4"),l(n,65,0,"password",""),l(n,68,0,"","4","password","","password"),l(n,70,0,e.Lb(n,65).invalid&&e.Lb(n,65).touched),l(n,72,0,"primary","block","solid","submit"),l(n,77,0,"12"),l(n,92,0,"none")}),(function(l,n){l(n,30,0,e.Lb(n,34).ngClassUntouched,e.Lb(n,34).ngClassTouched,e.Lb(n,34).ngClassPristine,e.Lb(n,34).ngClassDirty,e.Lb(n,34).ngClassValid,e.Lb(n,34).ngClassInvalid,e.Lb(n,34).ngClassPending),l(n,42,0,e.Lb(n,43).required?"":null,e.Lb(n,44).minlength?e.Lb(n,44).minlength:null,e.Lb(n,50).ngClassUntouched,e.Lb(n,50).ngClassTouched,e.Lb(n,50).ngClassPristine,e.Lb(n,50).ngClassDirty,e.Lb(n,50).ngClassValid,e.Lb(n,50).ngClassInvalid,e.Lb(n,50).ngClassPending),l(n,59,0,e.Lb(n,60).required?"":null,e.Lb(n,61).minlength?e.Lb(n,61).minlength:null,e.Lb(n,67).ngClassUntouched,e.Lb(n,67).ngClassTouched,e.Lb(n,67).ngClassPristine,e.Lb(n,67).ngClassDirty,e.Lb(n,67).ngClassValid,e.Lb(n,67).ngClassInvalid,e.Lb(n,67).ngClassPending)}))}var C=e.wb("app-username",c,(function(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,1,"app-username",[],null,null,null,j,z)),e.zb(1,114688,null,0,c,[a.Hb,a.Ib,s.a,a.Ob],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),F=e.yb({encapsulation:0,styles:[[""]],data:{}});function k(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,7,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(1,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,5,"ion-label",[],null,null,null,r.gb,r.u)),e.zb(3,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,r.ub,r.I)),e.zb(5,49152,null,0,a.xb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Ab(6,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Please check your username"]))],(function(l,n){l(n,5,0,"danger")}),null)}function y(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,7,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(1,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,5,"ion-label",[],null,null,null,r.gb,r.u)),e.zb(3,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,r.ub,r.I)),e.zb(5,49152,null,0,a.xb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Ab(6,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Please enter password"]))],(function(l,n){l(n,5,0,"danger")}),null)}function L(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,7,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(1,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,5,"ion-label",[],null,null,null,r.gb,r.u)),e.zb(3,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,r.ub,r.I)),e.zb(5,49152,null,0,a.xb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Ab(6,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Please re-enter your password"]))],(function(l,n){l(n,5,0,"danger")}),null)}function w(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,7,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(1,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,5,"ion-label",[],null,null,null,r.gb,r.u)),e.zb(3,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,r.ub,r.I)),e.zb(5,49152,null,0,a.xb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Ab(6,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["The entered password do not match"]))],(function(l,n){l(n,5,0,"danger")}),null)}function P(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,12,"ion-header",[],null,null,null,r.bb,r.p)),e.zb(1,49152,null,0,a.B,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,10,"ion-toolbar",[],null,null,null,r.xb,r.L)),e.zb(3,49152,null,0,a.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,2,"ion-title",[],null,null,null,r.wb,r.K)),e.zb(5,49152,null,0,a.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Sign up"])),(l()(),e.Ab(7,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,r.Q,r.e)),e.zb(8,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(9,0,null,0,3,"ion-button",[["color","danger"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.closeSignUpModal()&&e),e}),r.P,r.d)),e.zb(10,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Ab(11,0,null,0,1,"ion-icon",[["name","close-circle-outline"],["slot","icon-only"]],null,null,null,r.cb,r.q)),e.zb(12,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(13,0,null,null,84,"ion-content",[],null,null,null,r.Y,r.m)),e.zb(14,49152,null,0,a.u,[e.j,e.p,e.F],null,null),(l()(),e.Ab(15,0,null,0,82,"ion-grid",[],null,null,null,r.ab,r.o)),e.zb(16,49152,null,0,a.A,[e.j,e.p,e.F],null,null),(l()(),e.Ab(17,0,null,0,80,"ion-row",[],null,null,null,r.nb,r.B)),e.zb(18,49152,null,0,a.jb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(19,0,null,0,78,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,r.X,r.l)),e.zb(20,49152,null,0,a.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(21,0,null,0,76,"ion-card",[["class","ion-padding"]],null,null,null,r.V,r.f)),e.zb(22,49152,null,0,a.m,[e.j,e.p,e.F],null,null),(l()(),e.Ab(23,0,null,0,7,"ion-card-header",[],null,null,null,r.S,r.h)),e.zb(24,49152,null,0,a.o,[e.j,e.p,e.F],null,null),(l()(),e.Ab(25,0,null,0,2,"ion-card-title",[["class","ion-padding-start"]],null,null,null,r.U,r.j)),e.zb(26,49152,null,0,a.q,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["User credentials"])),(l()(),e.Ab(28,0,null,0,2,"ion-card-subtitle",[["class","ion-padding-start"]],null,null,null,r.T,r.i)),e.zb(29,49152,null,0,a.p,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Please fill out the following credentials to start chatting"])),(l()(),e.Ab(31,0,null,0,66,"ion-card-content",[],null,null,null,r.R,r.g)),e.zb(32,49152,null,0,a.n,[e.j,e.p,e.F],null,null),(l()(),e.Ab(33,0,null,0,64,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Lb(l,35).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Lb(l,35).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.signUpUser(e.Lb(l,35))&&t),t}),null,null)),e.zb(34,16384,null,0,m.n,[],null,null),e.zb(35,4210688,[["userCred",4]],0,m.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Mb(2048,null,m.a,null,[m.i]),e.zb(37,16384,null,0,m.h,[[4,m.a]],null,null),(l()(),e.Ab(38,0,null,null,54,"ion-list",[["lines","none"]],null,null,null,r.ib,r.v)),e.zb(39,49152,null,0,a.O,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Ab(40,0,null,0,14,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(41,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(42,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.gb,r.u)),e.zb(43,49152,null,0,a.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Pb(-1,0,["Enter username"])),(l()(),e.Ab(45,0,null,0,9,"ion-input",[["clearInput",""],["minlength","4"],["name","username"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Lb(l,49)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Lb(l,49)._handleInputEvent(u.target)&&t),t}),r.eb,r.s)),e.zb(46,16384,null,0,m.k,[],{required:[0,"required"]},null),e.zb(47,540672,null,0,m.c,[],{minlength:[0,"minlength"]},null),e.Mb(1024,null,m.d,(function(l,n){return[l,n]}),[m.k,m.c]),e.zb(49,16384,null,0,a.Nb,[e.p],null,null),e.Mb(1024,null,m.e,(function(l){return[l]}),[a.Nb]),e.zb(51,671744,[["username",4]],0,m.j,[[2,m.a],[6,m.d],[8,null],[6,m.e]],{name:[0,"name"],model:[1,"model"]},null),e.Mb(2048,null,m.f,null,[m.j]),e.zb(53,16384,null,0,m.g,[[4,m.f]],null,null),e.zb(54,49152,null,0,a.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],minlength:[1,"minlength"],name:[2,"name"],required:[3,"required"],type:[4,"type"]},null),(l()(),e.pb(16777216,null,0,1,null,k)),e.zb(56,16384,null,0,f.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ab(57,0,null,0,14,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(58,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(59,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.gb,r.u)),e.zb(60,49152,null,0,a.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Pb(-1,0,["Enter password"])),(l()(),e.Ab(62,0,null,0,9,"ion-input",[["clearInput",""],["minlength","4"],["name","password1"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Lb(l,66)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Lb(l,66)._handleInputEvent(u.target)&&t),t}),r.eb,r.s)),e.zb(63,16384,null,0,m.k,[],{required:[0,"required"]},null),e.zb(64,540672,null,0,m.c,[],{minlength:[0,"minlength"]},null),e.Mb(1024,null,m.d,(function(l,n){return[l,n]}),[m.k,m.c]),e.zb(66,16384,null,0,a.Nb,[e.p],null,null),e.Mb(1024,null,m.e,(function(l){return[l]}),[a.Nb]),e.zb(68,671744,[["password1",4]],0,m.j,[[2,m.a],[6,m.d],[8,null],[6,m.e]],{name:[0,"name"],model:[1,"model"]},null),e.Mb(2048,null,m.f,null,[m.j]),e.zb(70,16384,null,0,m.g,[[4,m.f]],null,null),e.zb(71,49152,null,0,a.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],minlength:[1,"minlength"],name:[2,"name"],required:[3,"required"],type:[4,"type"]},null),(l()(),e.pb(16777216,null,0,1,null,y)),e.zb(73,16384,null,0,f.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ab(74,0,null,0,14,"ion-item",[],null,null,null,r.fb,r.t)),e.zb(75,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(76,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.gb,r.u)),e.zb(77,49152,null,0,a.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Pb(-1,0,["Re-enter password"])),(l()(),e.Ab(79,0,null,0,9,"ion-input",[["clearInput",""],["minlength","4"],["name","password2"],["ngModel",""],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Lb(l,83)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Lb(l,83)._handleInputEvent(u.target)&&t),t}),r.eb,r.s)),e.zb(80,16384,null,0,m.k,[],{required:[0,"required"]},null),e.zb(81,540672,null,0,m.c,[],{minlength:[0,"minlength"]},null),e.Mb(1024,null,m.d,(function(l,n){return[l,n]}),[m.k,m.c]),e.zb(83,16384,null,0,a.Nb,[e.p],null,null),e.Mb(1024,null,m.e,(function(l){return[l]}),[a.Nb]),e.zb(85,671744,[["password2",4]],0,m.j,[[2,m.a],[6,m.d],[8,null],[6,m.e]],{name:[0,"name"],model:[1,"model"]},null),e.Mb(2048,null,m.f,null,[m.j]),e.zb(87,16384,null,0,m.g,[[4,m.f]],null,null),e.zb(88,49152,null,0,a.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],minlength:[1,"minlength"],name:[2,"name"],required:[3,"required"],type:[4,"type"]},null),(l()(),e.pb(16777216,null,0,1,null,L)),e.zb(90,16384,null,0,f.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(16777216,null,0,1,null,w)),e.zb(92,16384,null,0,f.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ab(93,0,null,null,4,"ion-button",[["color","primary"],["expand","block"],["fill","solid"],["type","submit"]],null,null,null,r.P,r.d)),e.zb(94,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],type:[3,"type"]},null),(l()(),e.Ab(95,0,null,0,1,"ion-icon",[["name","create"],["slot","start"]],null,null,null,r.cb,r.q)),e.zb(96,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Pb(-1,0,["Sign Up"]))],(function(l,n){l(n,10,0,"danger"),l(n,12,0,"close-circle-outline"),l(n,20,0,"12"),l(n,39,0,"none"),l(n,43,0,"floating"),l(n,46,0,""),l(n,47,0,"4"),l(n,51,0,"username",""),l(n,54,0,"","4","username","","text"),l(n,56,0,e.Lb(n,51).invalid&&e.Lb(n,51).touched),l(n,60,0,"floating"),l(n,63,0,""),l(n,64,0,"4"),l(n,68,0,"password1",""),l(n,71,0,"","4","password1","","password"),l(n,73,0,e.Lb(n,68).invalid&&e.Lb(n,68).touched),l(n,77,0,"floating"),l(n,80,0,""),l(n,81,0,"4"),l(n,85,0,"password2",""),l(n,88,0,"","4","password2","","password"),l(n,90,0,e.Lb(n,85).invalid&&e.Lb(n,85).touched),l(n,92,0,e.Lb(n,68).value!==e.Lb(n,85).value),l(n,94,0,"primary","block","solid","submit"),l(n,96,0,"create")}),(function(l,n){l(n,33,0,e.Lb(n,37).ngClassUntouched,e.Lb(n,37).ngClassTouched,e.Lb(n,37).ngClassPristine,e.Lb(n,37).ngClassDirty,e.Lb(n,37).ngClassValid,e.Lb(n,37).ngClassInvalid,e.Lb(n,37).ngClassPending),l(n,45,0,e.Lb(n,46).required?"":null,e.Lb(n,47).minlength?e.Lb(n,47).minlength:null,e.Lb(n,53).ngClassUntouched,e.Lb(n,53).ngClassTouched,e.Lb(n,53).ngClassPristine,e.Lb(n,53).ngClassDirty,e.Lb(n,53).ngClassValid,e.Lb(n,53).ngClassInvalid,e.Lb(n,53).ngClassPending),l(n,62,0,e.Lb(n,63).required?"":null,e.Lb(n,64).minlength?e.Lb(n,64).minlength:null,e.Lb(n,70).ngClassUntouched,e.Lb(n,70).ngClassTouched,e.Lb(n,70).ngClassPristine,e.Lb(n,70).ngClassDirty,e.Lb(n,70).ngClassValid,e.Lb(n,70).ngClassInvalid,e.Lb(n,70).ngClassPending),l(n,79,0,e.Lb(n,80).required?"":null,e.Lb(n,81).minlength?e.Lb(n,81).minlength:null,e.Lb(n,87).ngClassUntouched,e.Lb(n,87).ngClassTouched,e.Lb(n,87).ngClassPristine,e.Lb(n,87).ngClassDirty,e.Lb(n,87).ngClassValid,e.Lb(n,87).ngClassInvalid,e.Lb(n,87).ngClassPending)}))}var I,x=e.wb("app-sign-up",b,(function(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,1,"app-sign-up",[],null,null,null,P,F)),e.zb(1,114688,null,0,b,[a.Hb,a.a,a.Ob,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),U=u("iInd"),q=((I=function(){function l(n,u){_classCallCheck(this,l),this.us=n,this.router=u}return _createClass(l,[{key:"canLoad",value:function(l,n){return this.us.isUserSet()||this.router.navigateByUrl("/applications/chat-web-app"),this.us.isUserSet()}}]),l}()).ngInjectableDef=e.Tb({factory:function(){return new I(e.Ub(s.a),e.Ub(U.m))},token:I,providedIn:"root"}),I),S=function(){return u.e(14).then(u.bind(null,"sGR4")).then((function(l){return l.ChatPagePageModuleNgFactory}))},M=function l(){_classCallCheck(this,l)};u.d(n,"ChatWebAppPageModuleNgFactory",(function(){return T}));var T=e.xb(t,[],(function(l){return e.Ib([e.Jb(512,e.m,e.ib,[[8,[i.a,h,C,x]],[3,e.m],e.D]),e.Jb(4608,f.k,f.j,[e.z,[2,f.q]]),e.Jb(4608,m.m,m.m,[]),e.Jb(4608,a.b,a.b,[e.F,e.g]),e.Jb(4608,a.Hb,a.Hb,[a.b,e.m,e.w]),e.Jb(4608,a.Lb,a.Lb,[a.b,e.m,e.w]),e.Jb(1073742336,f.b,f.b,[]),e.Jb(1073742336,m.l,m.l,[]),e.Jb(1073742336,m.b,m.b,[]),e.Jb(1073742336,a.Eb,a.Eb,[]),e.Jb(1073742336,U.o,U.o,[[2,U.t],[2,U.m]]),e.Jb(1073742336,M,M,[]),e.Jb(1073742336,t,t,[]),e.Jb(1024,U.k,(function(){return[[{path:"",component:d},{path:"chat-page",loadChildren:S,canLoad:[q]}]]}),[])])}))}}]);