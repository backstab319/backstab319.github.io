(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{neOE:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),b=u("oBZk"),a=u("ZZ/e"),s=u("s7LF"),o=u("SVse"),r=u("mrSG"),g=u("wqe7"),c=u("7pt1");class p{constructor(l,n,u){this.writeSrv=l,this.usernameSrv=n,this.toastCtl=u,this.messageValidator=l=>l.length>1}ngOnInit(){}messageFormProcessor(l){if(this.messageValidator(l.value.message)){{const n=new Date;this.message={receiverName:this.writeSrv.getReceiverDetails().receiverName,senderName:this.usernameSrv.getUsername(),messageBody:l.value.message,messageDate:n.toLocaleDateString(),messageTime:n.toLocaleTimeString()},this.writeSrv.sendMessage(this.message),this.messageSent()}l.resetForm()}}messageSent(){return r.b(this,void 0,void 0,(function*(){(yield this.toastCtl.create({message:"Message sent successfully!",duration:1e3,color:"primary"})).present()}))}}var d=e.yb({encapsulation:0,styles:[[""]],data:{}});function m(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,7,"ion-item",[],null,null,null,b.eb,b.t)),e.zb(1,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,5,"ion-label",[],null,null,null,b.fb,b.u)),e.zb(3,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),e.Ab(5,0,null,null,2,"ion-text",[["color","danger"]],null,null,null,b.sb,b.H)),e.zb(6,49152,null,0,a.xb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Pb(-1,0,["You cannot leave an empty message"]))],(function(l,n){l(n,6,0,"danger")}),null)}function h(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,13,"ion-header",[],null,null,null,b.ab,b.p)),e.zb(1,49152,null,0,a.B,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,11,"ion-toolbar",[],null,null,null,b.vb,b.K)),e.zb(3,49152,null,0,a.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,b.P,b.e)),e.zb(5,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(6,0,null,0,1,"ion-menu-button",[],null,null,null,b.ib,b.y)),e.zb(7,49152,null,0,a.R,[e.j,e.p,e.F],null,null),(l()(),e.Ab(8,0,null,0,2,"ion-back-button",[["defaultHref","/applications/chat-web-app/chat-page"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Lb(l,10).onClick(u)&&t),t}),b.N,b.c)),e.zb(9,49152,null,0,a.g,[e.j,e.p,e.F],{defaultHref:[0,"defaultHref"]},null),e.zb(10,16384,null,0,a.h,[[2,a.ib],a.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),e.Ab(11,0,null,0,2,"ion-title",[],null,null,null,b.ub,b.J)),e.zb(12,49152,null,0,a.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["write-page"])),(l()(),e.Ab(14,0,null,null,48,"ion-content",[],null,null,null,b.X,b.m)),e.zb(15,49152,null,0,a.u,[e.j,e.p,e.F],null,null),(l()(),e.Ab(16,0,null,0,46,"ion-grid",[],null,null,null,b.Z,b.o)),e.zb(17,49152,null,0,a.A,[e.j,e.p,e.F],null,null),(l()(),e.Ab(18,0,null,0,44,"ion-row",[],null,null,null,b.mb,b.B)),e.zb(19,49152,null,0,a.jb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(20,0,null,0,42,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,b.W,b.l)),e.zb(21,49152,null,0,a.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(22,0,null,0,40,"ion-card",[["class","ion-padding"]],null,null,null,b.U,b.f)),e.zb(23,49152,null,0,a.m,[e.j,e.p,e.F],null,null),(l()(),e.Ab(24,0,null,0,7,"ion-card-header",[],null,null,null,b.R,b.h)),e.zb(25,49152,null,0,a.o,[e.j,e.p,e.F],null,null),(l()(),e.Ab(26,0,null,0,2,"ion-card-title",[["class","ion-padding-start"]],null,null,null,b.T,b.j)),e.zb(27,49152,null,0,a.q,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Compose Message"])),(l()(),e.Ab(29,0,null,0,2,"ion-card-subtitle",[["class","ion-padding-start"]],null,null,null,b.S,b.i)),e.zb(30,49152,null,0,a.p,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Please enter the message that you want to send to"])),(l()(),e.Ab(32,0,null,0,30,"ion-card-content",[],null,null,null,b.Q,b.g)),e.zb(33,49152,null,0,a.n,[e.j,e.p,e.F],null,null),(l()(),e.Ab(34,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Lb(l,36).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Lb(l,36).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.messageFormProcessor(e.Lb(l,36))&&t),t}),null,null)),e.zb(35,16384,null,0,s.n,[],null,null),e.zb(36,4210688,[["messageForm",4]],0,s.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Mb(2048,null,s.a,null,[s.i]),e.zb(38,16384,null,0,s.h,[[4,s.a]],null,null),(l()(),e.Ab(39,0,null,null,17,"ion-list",[["lines","none"]],null,null,null,b.hb,b.v)),e.zb(40,49152,null,0,a.O,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Ab(41,0,null,0,13,"ion-item",[],null,null,null,b.eb,b.t)),e.zb(42,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(43,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,b.fb,b.u)),e.zb(44,49152,null,0,a.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Pb(-1,0,["Write a message"])),(l()(),e.Ab(46,0,null,0,8,"ion-textarea",[["clearInput",""],["name","message"],["ngModel",""],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Lb(l,49)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Lb(l,49)._handleInputEvent(u.target)&&t),t}),b.tb,b.I)),e.zb(47,16384,null,0,s.k,[],{required:[0,"required"]},null),e.Mb(1024,null,s.d,(function(l){return[l]}),[s.k]),e.zb(49,16384,null,0,a.Nb,[e.p],null,null),e.Mb(1024,null,s.e,(function(l){return[l]}),[a.Nb]),e.zb(51,671744,[["message",4]],0,s.j,[[2,s.a],[6,s.d],[8,null],[6,s.e]],{name:[0,"name"],model:[1,"model"]},null),e.Mb(2048,null,s.f,null,[s.j]),e.zb(53,16384,null,0,s.g,[[4,s.f]],null,null),e.zb(54,49152,null,0,a.yb,[e.j,e.p,e.F],{name:[0,"name"],required:[1,"required"]},null),(l()(),e.pb(16777216,null,0,1,null,m)),e.zb(56,16384,null,0,o.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ab(57,0,null,null,5,"ion-buttons",[["slot","start"]],null,null,null,b.P,b.e)),e.zb(58,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(59,0,null,0,3,"ion-button",[["color","primary"],["type","submit"]],null,null,null,b.O,b.d)),e.zb(60,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"],type:[1,"type"]},null),(l()(),e.Ab(61,0,null,0,1,"ion-icon",[["name","send"],["slot","icon-only"]],null,null,null,b.bb,b.q)),e.zb(62,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,9,0,"/applications/chat-web-app/chat-page"),l(n,10,0,"/applications/chat-web-app/chat-page"),l(n,21,0,"12"),l(n,40,0,"none"),l(n,44,0,"floating"),l(n,47,0,""),l(n,51,0,"message",""),l(n,54,0,"message",""),l(n,56,0,e.Lb(n,51).invalid&&e.Lb(n,51).touched),l(n,60,0,"primary","submit"),l(n,62,0,"send")}),(function(l,n){l(n,34,0,e.Lb(n,38).ngClassUntouched,e.Lb(n,38).ngClassTouched,e.Lb(n,38).ngClassPristine,e.Lb(n,38).ngClassDirty,e.Lb(n,38).ngClassValid,e.Lb(n,38).ngClassInvalid,e.Lb(n,38).ngClassPending),l(n,46,0,e.Lb(n,47).required?"":null,e.Lb(n,53).ngClassUntouched,e.Lb(n,53).ngClassTouched,e.Lb(n,53).ngClassPristine,e.Lb(n,53).ngClassDirty,e.Lb(n,53).ngClassValid,e.Lb(n,53).ngClassInvalid,e.Lb(n,53).ngClassPending)}))}function f(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,1,"app-write-page",[],null,null,null,h,d)),e.zb(1,114688,null,0,p,[g.a,c.a,a.Ob],null,null)],(function(l,n){l(n,1,0)}),null)}var z=e.wb("app-write-page",p,f,{},{},[]),v=u("iInd");class F{}u.d(n,"WritePagePageModuleNgFactory",(function(){return j}));var j=e.xb(t,[],(function(l){return e.Ib([e.Jb(512,e.m,e.ib,[[8,[i.a,z]],[3,e.m],e.D]),e.Jb(4608,o.k,o.j,[e.z,[2,o.q]]),e.Jb(4608,s.m,s.m,[]),e.Jb(4608,a.b,a.b,[e.F,e.g]),e.Jb(4608,a.Hb,a.Hb,[a.b,e.m,e.w]),e.Jb(4608,a.Lb,a.Lb,[a.b,e.m,e.w]),e.Jb(1073742336,o.b,o.b,[]),e.Jb(1073742336,s.l,s.l,[]),e.Jb(1073742336,s.b,s.b,[]),e.Jb(1073742336,a.Eb,a.Eb,[]),e.Jb(1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),e.Jb(1073742336,F,F,[]),e.Jb(1073742336,t,t,[]),e.Jb(1024,v.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);