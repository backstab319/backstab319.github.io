function _toConsumableArray(l){return _arrayWithoutHoles(l)||_iterableToArray(l)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(l){if(Symbol.iterator in Object(l)||"[object Arguments]"===Object.prototype.toString.call(l))return Array.from(l)}function _arrayWithoutHoles(l){if(Array.isArray(l)){for(var n=0,u=new Array(l.length);n<l.length;n++)u[n]=l[n];return u}}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{iVvM:function(l,n,u){"use strict";u.d(n,"a",(function(){return a}));var e=u("7pt1"),t=u("XNiG"),o=u("8Y7J"),i=u("IheW"),a=function(){var l=function(){function l(n,u){var e=this;_classCallCheck(this,l),this.username=n,this.http=u,this.updatedMessages=new t.a,this.putMessages=function(l){e.messages.push(l),e.updatedMessages.next(_toConsumableArray(e.messages))},this.getUpdatedMessages=function(){return e.updatedMessages.asObservable()}}return _createClass(l,[{key:"getMessages",value:function(){var l=this;this.http.post("http://localhost:3000/pull/message",{username:this.username.getUsername()}).subscribe((function(n){l.messages=n.message,l.updatedMessages.next(l.messages)}))}}]),l}();return l.ngInjectableDef=o.Tb({factory:function(){return new l(o.Ub(e.a),o.Ub(i.c))},token:l,providedIn:"root"}),l}()},sGR4:function(l,n,u){"use strict";u.r(n);var e,t=u("8Y7J"),o=function l(){_classCallCheck(this,l)},i=u("pMnS"),a=u("oBZk"),r=u("ZZ/e"),s=u("mrSG"),b=u("7pt1"),c=u("XNiG"),p=u("IheW"),h=((e=function(){function l(n,u){_classCallCheck(this,l),this.http=n,this.userSrv=u,this.updatedUsers=new c.a}return _createClass(l,[{key:"getUsers",value:function(){var l=this;this.http.post("https://backstab319.herokuapp.com/get/usersandid",{username:this.userSrv.getUsername()}).subscribe((function(n){console.log(n),l.usersData=n,l.updatedUsers.next(l.usersData)}))}},{key:"getUpdatedUsers",value:function(){return this.updatedUsers.asObservable()}}]),l}()).ngInjectableDef=t.Tb({factory:function(){return new e(t.Ub(p.c),t.Ub(b.a))},token:e,providedIn:"root"}),e),f=u("wqe7"),d=function(){function l(n,u,e,t,o){var i=this;_classCallCheck(this,l),this.chat=n,this.modal=u,this.navCtl=e,this.writeSrv=t,this.username=o,this.closePeopleModal=function(){i.modal.dismiss()}}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.chat.getUsers(),this.chat.getUpdatedUsers().subscribe((function(n){l.users=n,console.log(l.users)}))}},{key:"redirectToWriteMessage",value:function(l,n){this.closePeopleModal(),this.writeSrv.setReceiverDetails(l,n),this.navCtl.navigateForward("/applications/chat-web-app/chat-page/write-page")}}]),l}(),m=function(){function l(n,u,e,t,o,i){_classCallCheck(this,l),this.navCtl=n,this.modal=u,this.popover=e,this.userSrv=t,this.alertCtl=o,this.toastCtl=i}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"gotoPage",value:function(l){"people"===l&&(this.popover.dismiss(),this.showPeopleModal()),"inbox"===l&&(this.popover.dismiss(),this.navCtl.navigateForward("/applications/chat-web-app/chat-page/inbox-page"))}},{key:"logOut",value:function(){this.showLogoutAlert()}},{key:"showLogoutAlert",value:function(){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n,u=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return this.popover.dismiss(),l.next=3,this.alertCtl.create({header:"Logout",subHeader:"Are you sure?",buttons:[{text:"Yes",role:"yes",handler:function(){u.userSrv.setUsername(""),u.showLoggedOutToast(),setInterval((function(){u.navCtl.navigateBack("/applications")}),1e3)}},{text:"No",role:"no"}]});case 3:return n=l.sent,l.next=6,n.present();case 6:case"end":return l.stop()}}),l,this)})))}},{key:"showLoggedOutToast",value:function(){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toastCtl.create({message:"Successfully logged out! Please wait while we redirect you",color:"primary",duration:1e3});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}},{key:"showPeopleModal",value:function(){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.modal.create({component:d});case 2:return n=l.sent,l.next=5,n.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}}]),l}(),g=function(){function l(n,u,e,t){_classCallCheck(this,l),this.toastCtl=n,this.us=u,this.chat=e,this.popCtl=t}return _createClass(l,[{key:"ngOnInit",value:function(){this.username=this.us.getUsername(),this.welcomeToast()}},{key:"welcomeToast",value:function(){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toastCtl.create({message:"Welcome "+this.username,duration:2e3,color:"primary",buttons:[{icon:"close",role:"cancel"}]});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}},{key:"showOptions",value:function(l){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.popCtl.create({component:m,event:l,translucent:!0});case 2:return u=n.sent,n.next=5,u.present();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n,this)})))}}]),l}(),v=t.yb({encapsulation:0,styles:[[""]],data:{}});function A(l){return t.Qb(0,[(l()(),t.Ab(0,0,null,null,20,"ion-header",[],null,null,null,a.ab,a.p)),t.zb(1,49152,null,0,r.B,[t.j,t.p,t.F],null,null),(l()(),t.Ab(2,0,null,0,18,"ion-toolbar",[],null,null,null,a.vb,a.K)),t.zb(3,49152,null,0,r.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Ab(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,a.P,a.e)),t.zb(5,49152,null,0,r.l,[t.j,t.p,t.F],null,null),(l()(),t.Ab(6,0,null,0,1,"ion-menu-button",[],null,null,null,a.ib,a.y)),t.zb(7,49152,null,0,r.R,[t.j,t.p,t.F],null,null),(l()(),t.Ab(8,0,null,0,2,"ion-back-button",[["defaultHref","/applications/chat-web-app"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Lb(l,10).onClick(u)&&e),e}),a.N,a.c)),t.zb(9,49152,null,0,r.g,[t.j,t.p,t.F],{defaultHref:[0,"defaultHref"]},null),t.zb(10,16384,null,0,r.h,[[2,r.ib],r.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),t.Ab(11,0,null,0,2,"ion-title",[],null,null,null,a.ub,a.J)),t.zb(12,49152,null,0,r.Ab,[t.j,t.p,t.F],null,null),(l()(),t.Pb(-1,0,["Chat"])),(l()(),t.Ab(14,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,a.P,a.e)),t.zb(15,49152,null,0,r.l,[t.j,t.p,t.F],null,null),(l()(),t.Ab(16,0,null,0,4,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showOptions(u)&&e),e}),a.O,a.d)),t.zb(17,49152,null,0,r.k,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Ab(18,0,null,0,1,"ion-icon",[["name","settings"],["slot","start"]],null,null,null,a.bb,a.q)),t.zb(19,49152,null,0,r.C,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Pb(-1,0,["Options"])),(l()(),t.Ab(21,0,null,null,56,"ion-content",[],null,null,null,a.X,a.m)),t.zb(22,49152,null,0,r.u,[t.j,t.p,t.F],null,null),(l()(),t.Ab(23,0,null,0,54,"ion-grid",[],null,null,null,a.Z,a.o)),t.zb(24,49152,null,0,r.A,[t.j,t.p,t.F],null,null),(l()(),t.Ab(25,0,null,0,52,"ion-row",[],null,null,null,a.mb,a.B)),t.zb(26,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(l()(),t.Ab(27,0,null,0,50,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,a.W,a.l)),t.zb(28,49152,null,0,r.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Ab(29,0,null,0,48,"ion-card",[["class","ion-padding"]],null,null,null,a.U,a.f)),t.zb(30,49152,null,0,r.m,[t.j,t.p,t.F],null,null),(l()(),t.Ab(31,0,null,0,7,"ion-card-header",[],null,null,null,a.R,a.h)),t.zb(32,49152,null,0,r.o,[t.j,t.p,t.F],null,null),(l()(),t.Ab(33,0,null,0,2,"ion-card-title",[["class","ion-padding-start"]],null,null,null,a.T,a.j)),t.zb(34,49152,null,0,r.q,[t.j,t.p,t.F],null,null),(l()(),t.Pb(-1,0,["Feature being worked on"])),(l()(),t.Ab(36,0,null,0,2,"ion-card-subtitle",[["class","ion-padding-start"]],null,null,null,a.S,a.i)),t.zb(37,49152,null,0,r.p,[t.j,t.p,t.F],null,null),(l()(),t.Pb(-1,0,["This part of the application is being developed. More features are being added."])),(l()(),t.Ab(39,0,null,0,38,"ion-card-content",[],null,null,null,a.Q,a.g)),t.zb(40,49152,null,0,r.n,[t.j,t.p,t.F],null,null),(l()(),t.Ab(41,0,null,0,36,"ion-list",[["lines","none"]],null,null,null,a.hb,a.v)),t.zb(42,49152,null,0,r.O,[t.j,t.p,t.F],{lines:[0,"lines"]},null),(l()(),t.Ab(43,0,null,0,2,"ion-list-header",[],null,null,null,a.gb,a.w)),t.zb(44,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Pb(-1,0,["The following features are being added"])),(l()(),t.Ab(46,0,null,0,7,"ion-item",[],null,null,null,a.eb,a.t)),t.zb(47,49152,null,0,r.H,[t.j,t.p,t.F],null,null),(l()(),t.Ab(48,0,null,0,1,"ion-icon",[["name","eye"],["slot","start"]],null,null,null,a.bb,a.q)),t.zb(49,49152,null,0,r.C,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Ab(50,0,null,0,3,"ion-label",[],null,null,null,a.fb,a.u)),t.zb(51,49152,null,0,r.N,[t.j,t.p,t.F],null,null),(l()(),t.Ab(52,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Pb(-1,null,["Ability to find other people to connect to"])),(l()(),t.Ab(54,0,null,0,7,"ion-item",[],null,null,null,a.eb,a.t)),t.zb(55,49152,null,0,r.H,[t.j,t.p,t.F],null,null),(l()(),t.Ab(56,0,null,0,1,"ion-icon",[["name","person-add"],["slot","start"]],null,null,null,a.bb,a.q)),t.zb(57,49152,null,0,r.C,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Ab(58,0,null,0,3,"ion-label",[],null,null,null,a.fb,a.u)),t.zb(59,49152,null,0,r.N,[t.j,t.p,t.F],null,null),(l()(),t.Ab(60,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Pb(-1,null,["Being able to add friends"])),(l()(),t.Ab(62,0,null,0,7,"ion-item",[],null,null,null,a.eb,a.t)),t.zb(63,49152,null,0,r.H,[t.j,t.p,t.F],null,null),(l()(),t.Ab(64,0,null,0,1,"ion-icon",[["name","chatbubbles"],["slot","start"]],null,null,null,a.bb,a.q)),t.zb(65,49152,null,0,r.C,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Ab(66,0,null,0,3,"ion-label",[],null,null,null,a.fb,a.u)),t.zb(67,49152,null,0,r.N,[t.j,t.p,t.F],null,null),(l()(),t.Ab(68,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Pb(-1,null,["Being able to send message"])),(l()(),t.Ab(70,0,null,0,7,"ion-item",[],null,null,null,a.eb,a.t)),t.zb(71,49152,null,0,r.H,[t.j,t.p,t.F],null,null),(l()(),t.Ab(72,0,null,0,1,"ion-icon",[["name","chatbubbles"],["slot","start"]],null,null,null,a.bb,a.q)),t.zb(73,49152,null,0,r.C,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Ab(74,0,null,0,3,"ion-label",[],null,null,null,a.fb,a.u)),t.zb(75,49152,null,0,r.N,[t.j,t.p,t.F],null,null),(l()(),t.Ab(76,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Pb(-1,null,["Being able to chat in real time"]))],(function(l,n){l(n,9,0,"/applications/chat-web-app"),l(n,10,0,"/applications/chat-web-app"),l(n,17,0,"primary"),l(n,19,0,"settings"),l(n,28,0,"12"),l(n,42,0,"none"),l(n,49,0,"eye"),l(n,57,0,"person-add"),l(n,65,0,"chatbubbles"),l(n,73,0,"chatbubbles")}),null)}var z=t.wb("app-chat-page",g,(function(l){return t.Qb(0,[(l()(),t.Ab(0,0,null,null,1,"app-chat-page",[],null,null,null,A,v)),t.zb(1,114688,null,0,g,[r.Ob,b.a,h,r.Lb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),j=u("SVse"),F=u("iVvM"),k=function(){function l(n){_classCallCheck(this,l),this.inboxSrv=n}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.inboxSrv.getMessages(),this.inboxSrv.getUpdatedMessages().subscribe((function(n){l.messages=n,console.log(l.messages)})),setInterval((function(){l.inboxSrv.getMessages()}),5e3)}}]),l}(),y=t.yb({encapsulation:0,styles:[[""]],data:{}});function w(l){return t.Qb(0,[(l()(),t.Ab(0,0,null,null,13,"ion-card",[["class","ion-padding"]],null,null,null,a.U,a.f)),t.zb(1,49152,null,0,r.m,[t.j,t.p,t.F],null,null),(l()(),t.Ab(2,0,null,0,7,"ion-card-header",[],null,null,null,a.R,a.h)),t.zb(3,49152,null,0,r.o,[t.j,t.p,t.F],null,null),(l()(),t.Ab(4,0,null,0,2,"ion-card-title",[["class","ion-padding-start"]],null,null,null,a.T,a.j)),t.zb(5,49152,null,0,r.q,[t.j,t.p,t.F],null,null),(l()(),t.Pb(6,0,["Sender: ",""])),(l()(),t.Ab(7,0,null,0,2,"ion-card-subtitle",[["class","ion-padding-start"]],null,null,null,a.S,a.i)),t.zb(8,49152,null,0,r.p,[t.j,t.p,t.F],null,null),(l()(),t.Pb(9,0,["Sent on "," at "," "])),(l()(),t.Ab(10,0,null,0,3,"ion-card-content",[],null,null,null,a.Q,a.g)),t.zb(11,49152,null,0,r.n,[t.j,t.p,t.F],null,null),(l()(),t.Ab(12,0,null,0,1,"p",[["class","ion-padding-start"]],null,null,null,null,null)),(l()(),t.Pb(13,null,["",""]))],null,(function(l,n){l(n,6,0,n.context.$implicit.senderName),l(n,9,0,n.context.$implicit.messageDate,n.context.$implicit.messageTime),l(n,13,0,n.context.$implicit.messageBody)}))}function C(l){return t.Qb(0,[(l()(),t.Ab(0,0,null,null,13,"ion-header",[],null,null,null,a.ab,a.p)),t.zb(1,49152,null,0,r.B,[t.j,t.p,t.F],null,null),(l()(),t.Ab(2,0,null,0,11,"ion-toolbar",[],null,null,null,a.vb,a.K)),t.zb(3,49152,null,0,r.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Ab(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,a.P,a.e)),t.zb(5,49152,null,0,r.l,[t.j,t.p,t.F],null,null),(l()(),t.Ab(6,0,null,0,1,"ion-menu-button",[],null,null,null,a.ib,a.y)),t.zb(7,49152,null,0,r.R,[t.j,t.p,t.F],null,null),(l()(),t.Ab(8,0,null,0,2,"ion-back-button",[["defaultHref","/applications/chat-web-app/chat-page"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Lb(l,10).onClick(u)&&e),e}),a.N,a.c)),t.zb(9,49152,null,0,r.g,[t.j,t.p,t.F],{defaultHref:[0,"defaultHref"]},null),t.zb(10,16384,null,0,r.h,[[2,r.ib],r.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),t.Ab(11,0,null,0,2,"ion-title",[],null,null,null,a.ub,a.J)),t.zb(12,49152,null,0,r.Ab,[t.j,t.p,t.F],null,null),(l()(),t.Pb(-1,0,["Inbox"])),(l()(),t.Ab(14,0,null,null,9,"ion-content",[],null,null,null,a.X,a.m)),t.zb(15,49152,null,0,r.u,[t.j,t.p,t.F],null,null),(l()(),t.Ab(16,0,null,0,7,"ion-grid",[],null,null,null,a.Z,a.o)),t.zb(17,49152,null,0,r.A,[t.j,t.p,t.F],null,null),(l()(),t.Ab(18,0,null,0,5,"ion-row",[],null,null,null,a.mb,a.B)),t.zb(19,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(l()(),t.Ab(20,0,null,0,3,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,a.W,a.l)),t.zb(21,49152,null,0,r.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.pb(16777216,null,0,1,null,w)),t.zb(23,278528,null,0,j.h,[t.V,t.R,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,9,0,"/applications/chat-web-app/chat-page"),l(n,10,0,"/applications/chat-web-app/chat-page"),l(n,21,0,"12"),l(n,23,0,u.messages)}),null)}var P=t.wb("app-inbox",k,(function(l){return t.Qb(0,[(l()(),t.Ab(0,0,null,null,1,"app-inbox",[],null,null,null,C,y)),t.zb(1,114688,null,0,k,[F.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),x=t.yb({encapsulation:0,styles:[[""]],data:{}});function J(l){return t.Qb(0,[(l()(),t.Ab(0,0,null,null,12,"ion-list",[["lines","none"]],null,null,null,a.hb,a.v)),t.zb(1,49152,null,0,r.O,[t.j,t.p,t.F],{lines:[0,"lines"]},null),(l()(),t.Ab(2,0,null,0,10,"ion-item",[],null,null,null,a.eb,a.t)),t.zb(3,49152,null,0,r.H,[t.j,t.p,t.F],null,null),(l()(),t.Ab(4,0,null,0,2,"ion-label",[],null,null,null,a.fb,a.u)),t.zb(5,49152,null,0,r.N,[t.j,t.p,t.F],null,null),(l()(),t.Pb(6,0,["",""])),(l()(),t.Ab(7,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,a.P,a.e)),t.zb(8,49152,null,0,r.l,[t.j,t.p,t.F],null,null),(l()(),t.Ab(9,0,null,0,3,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.redirectToWriteMessage(l.context.$implicit._id,l.context.$implicit.username)&&e),e}),a.O,a.d)),t.zb(10,49152,null,0,r.k,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Ab(11,0,null,0,1,"ion-icon",[["name","chatbubbles"],["slot","icon-only"]],null,null,null,a.bb,a.q)),t.zb(12,49152,null,0,r.C,[t.j,t.p,t.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"none"),l(n,10,0,"primary"),l(n,12,0,"chatbubbles")}),(function(l,n){l(n,6,0,n.context.$implicit.username)}))}function I(l){return t.Qb(0,[(l()(),t.Ab(0,0,null,null,12,"ion-header",[],null,null,null,a.ab,a.p)),t.zb(1,49152,null,0,r.B,[t.j,t.p,t.F],null,null),(l()(),t.Ab(2,0,null,0,10,"ion-toolbar",[],null,null,null,a.vb,a.K)),t.zb(3,49152,null,0,r.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Ab(4,0,null,0,2,"ion-title",[],null,null,null,a.ub,a.J)),t.zb(5,49152,null,0,r.Ab,[t.j,t.p,t.F],null,null),(l()(),t.Pb(-1,0,["People"])),(l()(),t.Ab(7,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,a.P,a.e)),t.zb(8,49152,null,0,r.l,[t.j,t.p,t.F],null,null),(l()(),t.Ab(9,0,null,0,3,"ion-button",[["color","danger"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.closePeopleModal()&&e),e}),a.O,a.d)),t.zb(10,49152,null,0,r.k,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Ab(11,0,null,0,1,"ion-icon",[["name","close-circle-outline"],["slot","icon-only"]],null,null,null,a.bb,a.q)),t.zb(12,49152,null,0,r.C,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Ab(13,0,null,null,13,"ion-content",[],null,null,null,a.X,a.m)),t.zb(14,49152,null,0,r.u,[t.j,t.p,t.F],null,null),(l()(),t.Ab(15,0,null,0,11,"ion-grid",[],null,null,null,a.Z,a.o)),t.zb(16,49152,null,0,r.A,[t.j,t.p,t.F],null,null),(l()(),t.Ab(17,0,null,0,9,"ion-row",[],null,null,null,a.mb,a.B)),t.zb(18,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(l()(),t.Ab(19,0,null,0,7,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,a.W,a.l)),t.zb(20,49152,null,0,r.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Ab(21,0,null,0,5,"ion-card",[["class","ion-padding"]],null,null,null,a.U,a.f)),t.zb(22,49152,null,0,r.m,[t.j,t.p,t.F],null,null),(l()(),t.Ab(23,0,null,0,3,"ion-card-content",[],null,null,null,a.Q,a.g)),t.zb(24,49152,null,0,r.n,[t.j,t.p,t.F],null,null),(l()(),t.pb(16777216,null,0,1,null,J)),t.zb(26,278528,null,0,j.h,[t.V,t.R,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,10,0,"danger"),l(n,12,0,"close-circle-outline"),l(n,20,0,"12"),l(n,26,0,u.users)}),null)}var S=t.wb("app-people",d,(function(l){return t.Qb(0,[(l()(),t.Ab(0,0,null,null,1,"app-people",[],null,null,null,I,x)),t.zb(1,114688,null,0,d,[h,r.Hb,r.Ib,f.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),_=t.yb({encapsulation:0,styles:[[""]],data:{}});function O(l){return t.Qb(0,[(l()(),t.Ab(0,0,null,null,22,"ion-list",[["lines","none"]],null,null,null,a.hb,a.v)),t.zb(1,49152,null,0,r.O,[t.j,t.p,t.F],{lines:[0,"lines"]},null),(l()(),t.Ab(2,0,null,0,6,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.gotoPage("inbox")&&e),e}),a.eb,a.t)),t.zb(3,49152,null,0,r.H,[t.j,t.p,t.F],{button:[0,"button"]},null),(l()(),t.Ab(4,0,null,0,1,"ion-icon",[["color","primary"],["name","mail"],["slot","start"]],null,null,null,a.bb,a.q)),t.zb(5,49152,null,0,r.C,[t.j,t.p,t.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Ab(6,0,null,0,2,"ion-label",[],null,null,null,a.fb,a.u)),t.zb(7,49152,null,0,r.N,[t.j,t.p,t.F],null,null),(l()(),t.Pb(-1,0,["Inbox"])),(l()(),t.Ab(9,0,null,0,6,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.gotoPage("people")&&e),e}),a.eb,a.t)),t.zb(10,49152,null,0,r.H,[t.j,t.p,t.F],{button:[0,"button"]},null),(l()(),t.Ab(11,0,null,0,1,"ion-icon",[["color","primary"],["name","people"],["slot","start"]],null,null,null,a.bb,a.q)),t.zb(12,49152,null,0,r.C,[t.j,t.p,t.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Ab(13,0,null,0,2,"ion-label",[],null,null,null,a.fb,a.u)),t.zb(14,49152,null,0,r.N,[t.j,t.p,t.F],null,null),(l()(),t.Pb(-1,0,["People"])),(l()(),t.Ab(16,0,null,0,6,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.logOut()&&e),e}),a.eb,a.t)),t.zb(17,49152,null,0,r.H,[t.j,t.p,t.F],{button:[0,"button"]},null),(l()(),t.Ab(18,0,null,0,1,"ion-icon",[["color","primary"],["name","log-out"],["slot","start"]],null,null,null,a.bb,a.q)),t.zb(19,49152,null,0,r.C,[t.j,t.p,t.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Ab(20,0,null,0,2,"ion-label",[],null,null,null,a.fb,a.u)),t.zb(21,49152,null,0,r.N,[t.j,t.p,t.F],null,null),(l()(),t.Pb(-1,0,["Logout"]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,""),l(n,5,0,"primary","mail"),l(n,10,0,""),l(n,12,0,"primary","people"),l(n,17,0,""),l(n,19,0,"primary","log-out")}),null)}var U,M,H=t.wb("app-options",m,(function(l){return t.Qb(0,[(l()(),t.Ab(0,0,null,null,1,"app-options",[],null,null,null,O,_)),t.zb(1,114688,null,0,m,[r.Ib,r.Hb,r.Lb,b.a,r.a,r.Ob],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),R=u("s7LF"),T=u("iInd"),N=((M=function(){function l(n,u){_classCallCheck(this,l),this.writeSrv=n,this.navCtl=u}return _createClass(l,[{key:"canLoad",value:function(l,n){return this.writeSrv.isReceiverSet()||this.navCtl.navigateBack("/applications/chat-web-app"),this.writeSrv.isReceiverSet()}}]),l}()).ngInjectableDef=t.Tb({factory:function(){return new M(t.Ub(f.a),t.Ub(r.Ib))},token:M,providedIn:"root"}),M),L=((U=function(){function l(n,u){_classCallCheck(this,l),this.username=n,this.navCtl=u}return _createClass(l,[{key:"canLoad",value:function(l,n){return this.username.isUserSet()||this.navCtl.navigateBack("/applications/chat-web-app"),this.username.isUserSet()}}]),l}()).ngInjectableDef=t.Tb({factory:function(){return new U(t.Ub(b.a),t.Ub(r.Ib))},token:U,providedIn:"root"}),U),q=function(){return u.e(17).then(u.bind(null,"neOE")).then((function(l){return l.WritePagePageModuleNgFactory}))},D=function l(){_classCallCheck(this,l)};u.d(n,"ChatPagePageModuleNgFactory",(function(){return B}));var B=t.xb(o,[],(function(l){return t.Ib([t.Jb(512,t.m,t.ib,[[8,[i.a,z,P,S,H]],[3,t.m],t.D]),t.Jb(4608,j.k,j.j,[t.z,[2,j.q]]),t.Jb(4608,R.m,R.m,[]),t.Jb(4608,r.b,r.b,[t.F,t.g]),t.Jb(4608,r.Hb,r.Hb,[r.b,t.m,t.w]),t.Jb(4608,r.Lb,r.Lb,[r.b,t.m,t.w]),t.Jb(4608,p.h,p.n,[j.c,t.I,p.l]),t.Jb(4608,p.o,p.o,[p.h,p.m]),t.Jb(5120,p.a,(function(l){return[l]}),[p.o]),t.Jb(4608,p.k,p.k,[]),t.Jb(6144,p.i,null,[p.k]),t.Jb(4608,p.g,p.g,[p.i]),t.Jb(6144,p.b,null,[p.g]),t.Jb(4608,p.f,p.j,[p.b,t.w]),t.Jb(4608,p.c,p.c,[p.f]),t.Jb(1073742336,j.b,j.b,[]),t.Jb(1073742336,R.l,R.l,[]),t.Jb(1073742336,R.b,R.b,[]),t.Jb(1073742336,r.Eb,r.Eb,[]),t.Jb(1073742336,T.o,T.o,[[2,T.t],[2,T.m]]),t.Jb(1073742336,D,D,[]),t.Jb(1073742336,p.e,p.e,[]),t.Jb(1073742336,p.d,p.d,[]),t.Jb(1073742336,o,o,[]),t.Jb(1024,T.k,(function(){return[[{path:"",component:g},{path:"write-page",loadChildren:q,canLoad:[N]},{path:"inbox-page",component:k,canLoad:[L]}]]}),[]),t.Jb(256,p.l,"XSRF-TOKEN",[]),t.Jb(256,p.m,"X-XSRF-TOKEN",[])])}))},wqe7:function(l,n,u){"use strict";u.d(n,"a",(function(){return i}));var e=u("iVvM"),t=u("8Y7J"),o=u("IheW"),i=function(){var l=function(){function l(n,u){_classCallCheck(this,l),this.http=n,this.inboxSrv=u}return _createClass(l,[{key:"setReceiverDetails",value:function(l,n){this.receiverDetails={receiverId:l,receiverName:n}}},{key:"getReceiverDetails",value:function(){return this.receiverDetails}},{key:"isReceiverSet",value:function(){return this.receiverDetails.receiverName.length>0}},{key:"sendMessage",value:function(l){this.http.post("https://backstab319.herokuapp.com/push/message",l).subscribe((function(l){console.log(l.res)})),this.inboxSrv.getMessages()}}]),l}();return l.ngInjectableDef=t.Tb({factory:function(){return new l(t.Ub(o.c),t.Ub(e.a))},token:l,providedIn:"root"}),l}()}}]);