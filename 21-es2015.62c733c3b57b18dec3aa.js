(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{WRhH:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("oBZk"),b=u("ZZ/e"),s=u("s7LF"),d=u("SVse"),a=u("XNiG");let r=(()=>{class l{constructor(){this.todoList=[],this.completedList=[],this.updatedList=new a.a,this.updatedCompleted=new a.a}putList(l){this.todoList.push(l),this.updatedList.next([...this.todoList])}getUpdatedList(){return this.updatedList.asObservable()}getList(){return[...this.todoList]}popItem(l){this.todoList.splice(l,1),this.updatedList.next([...this.todoList])}reorderItem(l){this.todoList=l,this.updatedList.next([...this.todoList])}reorderCompleted(l){this.completedList=l,this.updatedCompleted.next([...this.completedList])}putCompleted(l){this.completedList.push(this.todoList[l]),this.updatedCompleted.next([...this.completedList]),this.delCompletedFromTodo(l)}getCompleted(){return[...this.completedList]}getUpdatedCompleted(){return this.updatedCompleted.asObservable()}delCompletedFromTodo(l){this.todoList.splice(l,1),this.updatedList.next([...this.todoList])}popCompleted(l){this.completedList.splice(l,1),this.updatedCompleted.next([...this.completedList])}deleteCompleted(l){this.completedList.splice(l,1),this.updatedCompleted.next([...this.completedList])}undoCompleted(l){this.putList(this.completedList[l]),this.deleteCompleted(l)}}return l.ngInjectableDef=e.Tb({factory:function(){return new l},token:l,providedIn:"root"}),l})();class c{constructor(l){this.td=l}ngOnInit(){this.td.getUpdatedList().subscribe(l=>{this.myList=l},l=>{console.log(l)})}doReorder(l){this.td.reorderItem(l.detail.complete(this.myList))}delete(l){this.td.popItem(l)}markDone(l,n){document.getElementById(l).style.textDecoration="line-through",this.td.putCompleted(n)}}var p=e.yb({encapsulation:0,styles:[[""]],data:{}});function m(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,16,"ion-item",[["lines","none"]],null,null,null,i.eb,i.t)),e.zb(1,49152,null,0,b.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Ab(2,0,null,0,2,"ion-label",[],[[8,"id",0]],null,null,i.fb,i.u)),e.zb(3,49152,null,0,b.N,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Pb(4,0,[" "," "])),(l()(),e.Ab(5,0,null,0,11,"ion-buttons",[["slot","end"]],null,null,null,i.P,i.e)),e.zb(6,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(7,0,null,0,1,"ion-reorder",[],null,null,null,i.lb,i.z)),e.zb(8,49152,null,0,b.fb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(9,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.markDone(l.context.$implicit.todoText,l.context.index)&&e),e}),i.O,i.d)),e.zb(10,49152,null,0,b.k,[e.j,e.p,e.F],null,null),(l()(),e.Ab(11,0,null,0,1,"ion-icon",[["name","done-all"],["slot","icon-only"]],null,null,null,i.bb,i.q)),e.zb(12,49152,null,0,b.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(13,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.delete(l.context.index)&&e),e}),i.O,i.d)),e.zb(14,49152,null,0,b.k,[e.j,e.p,e.F],null,null),(l()(),e.Ab(15,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,i.bb,i.q)),e.zb(16,49152,null,0,b.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"none"),l(n,3,0,n.context.$implicit.todoColor),l(n,12,0,"done-all"),l(n,16,0,"trash")}),(function(l,n){l(n,2,0,n.context.$implicit.todoText),l(n,4,0,n.context.$implicit.todoText)}))}function h(l){return e.Qb(0,[e.Nb(671088640,1,{reorderGroup:0}),(l()(),e.Ab(1,0,null,null,3,"ion-reorder-group",[["disabled","false"]],null,[[null,"ionItemReorder"]],(function(l,n,u){var e=!0;return"ionItemReorder"===n&&(e=!1!==l.component.doReorder(u)&&e),e}),i.kb,i.A)),e.zb(2,49152,[[1,4]],0,b.gb,[e.j,e.p,e.F],{disabled:[0,"disabled"]},null),(l()(),e.pb(16777216,null,0,1,null,m)),e.zb(4,278528,null,0,d.h,[e.V,e.R,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"false"),l(n,4,0,u.myList)}),null)}class g{constructor(l){this.td=l,this.completed=[]}ngOnInit(){this.td.getUpdatedCompleted().subscribe(l=>{this.completed=l})}doReorder(l){this.td.reorderCompleted(l.detail.complete(this.completed))}deleteCompleted(l){this.td.popCompleted(l)}undoCompleted(l){this.td.undoCompleted(l)}}var z=e.yb({encapsulation:0,styles:[[""]],data:{}});function f(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,16,"ion-item",[["lines","none"]],null,null,null,i.eb,i.t)),e.zb(1,49152,null,0,b.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Ab(2,0,null,0,2,"ion-label",[["style","text-decoration: line-through;"]],[[8,"id",0]],null,null,i.fb,i.u)),e.zb(3,49152,null,0,b.N,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Pb(4,0,[" "," "])),(l()(),e.Ab(5,0,null,0,11,"ion-buttons",[["slot","end"]],null,null,null,i.P,i.e)),e.zb(6,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(7,0,null,0,1,"ion-reorder",[],null,null,null,i.lb,i.z)),e.zb(8,49152,null,0,b.fb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(9,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.undoCompleted(l.context.index)&&e),e}),i.O,i.d)),e.zb(10,49152,null,0,b.k,[e.j,e.p,e.F],null,null),(l()(),e.Ab(11,0,null,0,1,"ion-icon",[["name","undo"],["slot","icon-only"]],null,null,null,i.bb,i.q)),e.zb(12,49152,null,0,b.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(13,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.deleteCompleted(l.context.index)&&e),e}),i.O,i.d)),e.zb(14,49152,null,0,b.k,[e.j,e.p,e.F],null,null),(l()(),e.Ab(15,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,i.bb,i.q)),e.zb(16,49152,null,0,b.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"none"),l(n,3,0,n.context.$implicit.todoColor),l(n,12,0,"undo"),l(n,16,0,"trash")}),(function(l,n){l(n,2,0,n.context.$implicit.todoText),l(n,4,0,n.context.$implicit.todoText)}))}function v(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,3,"ion-reorder-group",[["disabled","false"]],null,[[null,"ionItemReorder"]],(function(l,n,u){var e=!0;return"ionItemReorder"===n&&(e=!1!==l.component.doReorder(u)&&e),e}),i.kb,i.A)),e.zb(1,49152,null,0,b.gb,[e.j,e.p,e.F],{disabled:[0,"disabled"]},null),(l()(),e.pb(16777216,null,0,1,null,f)),e.zb(3,278528,null,0,d.h,[e.V,e.R,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"false"),l(n,3,0,u.completed)}),null)}var A=u("mrSG");class F{constructor(l,n){this.td=l,this.alCtl=n,this.pageLink="/applications",this.myNote=[],this.completedNote=[],this.myInterface={header:"Color",subheader:"Select a color",message:"Select a color for your note"}}presentAlert(){return A.b(this,void 0,void 0,(function*(){const l=yield this.alCtl.create({header:"Exists",message:"Note already exists",buttons:["OK"]});yield l.present()}))}ngOnInit(){this.td.getUpdatedList().subscribe(l=>{this.myNote=l}),this.td.getUpdatedCompleted().subscribe(l=>{this.completedNote=l})}processForm(l){const n=[];if(this.myNote.length>0&&this.myNote.forEach(l=>{n.push(l.todoText)}),n.includes(l.value.todo))return this.presentAlert(),void l.resetForm();this.td.putList({todoText:l.value.todo,todoColor:l.value.color}),l.resetForm()}}var L=e.yb({encapsulation:0,styles:[[""]],data:{}});function j(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,4,"ion-item",[],null,null,null,i.eb,i.t)),e.zb(1,49152,null,0,b.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,2,"ion-label",[["color","danger"]],null,null,null,i.fb,i.u)),e.zb(3,49152,null,0,b.N,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Pb(-1,0,["Please fill the input"]))],(function(l,n){l(n,3,0,"danger")}),null)}function C(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["My todo list"]))],null,null)}function y(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Nothing to see here"]))],null,null)}function x(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Completed"]))],null,null)}function I(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Nothing completed yet"]))],null,null)}function P(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,13,"ion-header",[],null,null,null,i.ab,i.p)),e.zb(1,49152,null,0,b.B,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,11,"ion-toolbar",[],null,null,null,i.vb,i.K)),e.zb(3,49152,null,0,b.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,i.P,i.e)),e.zb(5,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.ib,i.y)),e.zb(7,49152,null,0,b.R,[e.j,e.p,e.F],null,null),(l()(),e.Ab(8,0,null,0,2,"ion-back-button",[["defaultHref","/applications"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Lb(l,10).onClick(u)&&t),t}),i.N,i.c)),e.zb(9,49152,null,0,b.g,[e.j,e.p,e.F],{defaultHref:[0,"defaultHref"]},null),e.zb(10,16384,null,0,b.h,[[2,b.ib],b.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),e.Ab(11,0,null,0,2,"ion-title",[],null,null,null,i.ub,i.J)),e.zb(12,49152,null,0,b.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["To Do"])),(l()(),e.Ab(14,0,null,null,130,"ion-content",[],null,null,null,i.X,i.m)),e.zb(15,49152,null,0,b.u,[e.j,e.p,e.F],null,null),(l()(),e.Ab(16,0,null,0,128,"ion-grid",[],null,null,null,i.Z,i.o)),e.zb(17,49152,null,0,b.A,[e.j,e.p,e.F],null,null),(l()(),e.Ab(18,0,null,0,86,"ion-row",[],null,null,null,i.mb,i.B)),e.zb(19,49152,null,0,b.jb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(20,0,null,0,84,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,i.W,i.l)),e.zb(21,49152,null,0,b.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(22,0,null,0,82,"ion-card",[],null,null,null,i.U,i.f)),e.zb(23,49152,null,0,b.m,[e.j,e.p,e.F],null,null),(l()(),e.Ab(24,0,null,0,5,"ion-card-header",[],null,null,null,i.R,i.h)),e.zb(25,49152,null,0,b.o,[e.j,e.p,e.F],null,null),(l()(),e.Ab(26,0,null,0,3,"ion-card-title",[["class","ion-padding-start"]],null,null,null,i.T,i.j)),e.zb(27,49152,null,0,b.q,[e.j,e.p,e.F],null,null),(l()(),e.Ab(28,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Make a note"])),(l()(),e.Ab(30,0,null,0,74,"ion-card-content",[],null,null,null,i.Q,i.g)),e.zb(31,49152,null,0,b.n,[e.j,e.p,e.F],null,null),(l()(),e.Ab(32,0,null,0,72,"ion-list",[["lines","none"]],null,null,null,i.hb,i.v)),e.zb(33,49152,null,0,b.O,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Ab(34,0,null,0,70,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e.Lb(l,36).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Lb(l,36).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.processForm(e.Lb(l,36))&&t),t}),null,null)),e.zb(35,16384,null,0,s.n,[],null,null),e.zb(36,4210688,[["formData",4]],0,s.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Mb(2048,null,s.a,null,[s.i]),e.zb(38,16384,null,0,s.h,[[4,s.a]],null,null),(l()(),e.Ab(39,0,null,null,14,"ion-item",[],null,null,null,i.eb,i.t)),e.zb(40,49152,null,0,b.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(41,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.fb,i.u)),e.zb(42,49152,null,0,b.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Pb(-1,0,["To Do"])),(l()(),e.Ab(44,0,null,0,9,"ion-input",[["clearInput",""],["minlength","5"],["name","todo"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Lb(l,48)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Lb(l,48)._handleInputEvent(u.target)&&t),t}),i.db,i.s)),e.zb(45,16384,null,0,s.k,[],{required:[0,"required"]},null),e.zb(46,540672,null,0,s.c,[],{minlength:[0,"minlength"]},null),e.Mb(1024,null,s.d,(function(l,n){return[l,n]}),[s.k,s.c]),e.zb(48,16384,null,0,b.Nb,[e.p],null,null),e.Mb(1024,null,s.e,(function(l){return[l]}),[b.Nb]),e.zb(50,671744,[["todo",4]],0,s.j,[[2,s.a],[6,s.d],[8,null],[6,s.e]],{name:[0,"name"],model:[1,"model"]},null),e.Mb(2048,null,s.f,null,[s.j]),e.zb(52,16384,null,0,s.g,[[4,s.f]],null,null),e.zb(53,49152,null,0,b.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],minlength:[1,"minlength"],name:[2,"name"],required:[3,"required"],type:[4,"type"]},null),(l()(),e.pb(16777216,null,null,1,null,j)),e.zb(55,16384,null,0,d.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ab(56,0,null,null,48,"ion-item",[],null,null,null,i.eb,i.t)),e.zb(57,49152,null,0,b.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(58,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,i.P,i.e)),e.zb(59,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(60,0,null,0,3,"ion-button",[["type","submit"]],null,null,null,i.O,i.d)),e.zb(61,49152,null,0,b.k,[e.j,e.p,e.F],{disabled:[0,"disabled"],type:[1,"type"]},null),(l()(),e.Ab(62,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,i.bb,i.q)),e.zb(63,49152,null,0,b.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(64,0,null,0,40,"ion-item",[],null,null,null,i.eb,i.t)),e.zb(65,49152,null,0,b.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(66,0,null,0,1,"ion-icon",[["name","color-palette"]],null,null,null,i.bb,i.q)),e.zb(67,49152,null,0,b.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(68,0,null,0,36,"ion-select",[["cancelText","Cancel"],["interface","popover"],["name","color"],["ngModel",""],["value","none"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Lb(l,69)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Lb(l,69)._handleChangeEvent(u.target)&&t),t}),i.ob,i.C)),e.zb(69,16384,null,0,b.Mb,[e.p],null,null),e.Mb(1024,null,s.e,(function(l){return[l]}),[b.Mb]),e.zb(71,671744,[["color",4]],0,s.j,[[2,s.a],[8,null],[8,null],[6,s.e]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},null),e.Mb(2048,null,s.f,null,[s.j]),e.zb(73,16384,null,0,s.g,[[4,s.f]],null,null),e.zb(74,49152,null,0,b.nb,[e.j,e.p,e.F],{cancelText:[0,"cancelText"],disabled:[1,"disabled"],interface:[2,"interface"],interfaceOptions:[3,"interfaceOptions"],name:[4,"name"],value:[5,"value"]},null),(l()(),e.Ab(75,0,null,0,2,"ion-select-option",[["value","primary"]],null,null,null,i.nb,i.D)),e.zb(76,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Primary"])),(l()(),e.Ab(78,0,null,0,2,"ion-select-option",[["value","secondary"]],null,null,null,i.nb,i.D)),e.zb(79,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Secondary"])),(l()(),e.Ab(81,0,null,0,2,"ion-select-option",[["value","tertiary"]],null,null,null,i.nb,i.D)),e.zb(82,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Tertiary"])),(l()(),e.Ab(84,0,null,0,2,"ion-select-option",[["value","success"]],null,null,null,i.nb,i.D)),e.zb(85,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Success"])),(l()(),e.Ab(87,0,null,0,2,"ion-select-option",[["value","warning"]],null,null,null,i.nb,i.D)),e.zb(88,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Warning"])),(l()(),e.Ab(90,0,null,0,2,"ion-select-option",[["value","danger"]],null,null,null,i.nb,i.D)),e.zb(91,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Danger"])),(l()(),e.Ab(93,0,null,0,2,"ion-select-option",[["value","light"]],null,null,null,i.nb,i.D)),e.zb(94,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Light"])),(l()(),e.Ab(96,0,null,0,2,"ion-select-option",[["value","medium"]],null,null,null,i.nb,i.D)),e.zb(97,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Medium"])),(l()(),e.Ab(99,0,null,0,2,"ion-select-option",[["value","dark"]],null,null,null,i.nb,i.D)),e.zb(100,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Dark"])),(l()(),e.Ab(102,0,null,0,2,"ion-select-option",[["selected","none"],["value","none"]],null,null,null,i.nb,i.D)),e.zb(103,49152,null,0,b.ob,[e.j,e.p,e.F],{selected:[0,"selected"],value:[1,"value"]},null),(l()(),e.Pb(-1,0,["None"])),(l()(),e.Ab(105,0,null,0,39,"ion-row",[],null,null,null,i.mb,i.B)),e.zb(106,49152,null,0,b.jb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(107,0,null,0,18,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","4"]],null,null,null,i.W,i.l)),e.zb(108,49152,null,0,b.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(109,0,null,0,16,"ion-card",[],null,null,null,i.U,i.f)),e.zb(110,49152,null,0,b.m,[e.j,e.p,e.F],null,null),(l()(),e.Ab(111,0,null,0,10,"ion-card-header",[],null,null,null,i.R,i.h)),e.zb(112,49152,null,0,b.o,[e.j,e.p,e.F],null,null),(l()(),e.Ab(113,0,null,0,5,"ion-card-title",[["class","ion-padding-start"]],null,null,null,i.T,i.j)),e.zb(114,49152,null,0,b.q,[e.j,e.p,e.F],null,null),(l()(),e.pb(16777216,null,0,1,null,C)),e.zb(116,16384,null,0,d.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(16777216,null,0,1,null,y)),e.zb(118,16384,null,0,d.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ab(119,0,null,0,2,"ion-card-subtitle",[["class","ion-padding-start"]],null,null,null,i.S,i.i)),e.zb(120,49152,null,0,b.p,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Keep your important notes here"])),(l()(),e.Ab(122,0,null,0,3,"ion-card-content",[],null,null,null,i.Q,i.g)),e.zb(123,49152,null,0,b.n,[e.j,e.p,e.F],null,null),(l()(),e.Ab(124,0,null,0,1,"app-todo-list",[],null,null,null,h,p)),e.zb(125,114688,null,0,c,[r],null,null),(l()(),e.Ab(126,0,null,0,18,"ion-col",[["size","12"],["size-sm","4"]],null,null,null,i.W,i.l)),e.zb(127,49152,null,0,b.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(128,0,null,0,16,"ion-card",[],null,null,null,i.U,i.f)),e.zb(129,49152,null,0,b.m,[e.j,e.p,e.F],null,null),(l()(),e.Ab(130,0,null,0,10,"ion-card-header",[],null,null,null,i.R,i.h)),e.zb(131,49152,null,0,b.o,[e.j,e.p,e.F],null,null),(l()(),e.Ab(132,0,null,0,5,"ion-card-title",[["class","ion-padding-start"]],null,null,null,i.T,i.j)),e.zb(133,49152,null,0,b.q,[e.j,e.p,e.F],null,null),(l()(),e.pb(16777216,null,0,1,null,x)),e.zb(135,16384,null,0,d.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(16777216,null,0,1,null,I)),e.zb(137,16384,null,0,d.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ab(138,0,null,0,2,"ion-card-subtitle",[["class","ion-padding-start"]],null,null,null,i.S,i.i)),e.zb(139,49152,null,0,b.p,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Keep your completed notes here"])),(l()(),e.Ab(141,0,null,0,3,"ion-card-content",[],null,null,null,i.Q,i.g)),e.zb(142,49152,null,0,b.n,[e.j,e.p,e.F],null,null),(l()(),e.Ab(143,0,null,0,1,"app-completed",[],null,null,null,v,z)),e.zb(144,114688,null,0,g,[r],null,null)],(function(l,n){var u=n.component;l(n,9,0,"/applications"),l(n,10,0,"/applications"),l(n,21,0,"12"),l(n,33,0,"none"),l(n,42,0,"floating"),l(n,45,0,""),l(n,46,0,"5"),l(n,50,0,"todo",""),l(n,53,0,"","5","todo","","text"),l(n,55,0,e.Lb(n,50).invalid&&e.Lb(n,50).touched),l(n,61,0,e.Lb(n,50).invalid,"submit"),l(n,63,0,"add"),l(n,67,0,"color-palette"),l(n,71,0,"color",e.Lb(n,50).invalid,""),l(n,74,0,"Cancel",e.Lb(n,50).invalid,"popover",u.myInterface,"color","none"),l(n,76,0,"primary"),l(n,79,0,"secondary"),l(n,82,0,"tertiary"),l(n,85,0,"success"),l(n,88,0,"warning"),l(n,91,0,"danger"),l(n,94,0,"light"),l(n,97,0,"medium"),l(n,100,0,"dark"),l(n,103,0,"none","none"),l(n,108,0,"12"),l(n,116,0,u.myNote.length>0),l(n,118,0,u.myNote.length<1),l(n,125,0),l(n,127,0,"12"),l(n,135,0,u.completedNote.length>0),l(n,137,0,u.completedNote.length<1),l(n,144,0)}),(function(l,n){l(n,34,0,e.Lb(n,38).ngClassUntouched,e.Lb(n,38).ngClassTouched,e.Lb(n,38).ngClassPristine,e.Lb(n,38).ngClassDirty,e.Lb(n,38).ngClassValid,e.Lb(n,38).ngClassInvalid,e.Lb(n,38).ngClassPending),l(n,44,0,e.Lb(n,45).required?"":null,e.Lb(n,46).minlength?e.Lb(n,46).minlength:null,e.Lb(n,52).ngClassUntouched,e.Lb(n,52).ngClassTouched,e.Lb(n,52).ngClassPristine,e.Lb(n,52).ngClassDirty,e.Lb(n,52).ngClassValid,e.Lb(n,52).ngClassInvalid,e.Lb(n,52).ngClassPending),l(n,68,0,e.Lb(n,73).ngClassUntouched,e.Lb(n,73).ngClassTouched,e.Lb(n,73).ngClassPristine,e.Lb(n,73).ngClassDirty,e.Lb(n,73).ngClassValid,e.Lb(n,73).ngClassInvalid,e.Lb(n,73).ngClassPending)}))}function k(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,1,"app-todo",[],null,null,null,P,L)),e.zb(1,114688,null,0,F,[r,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var D=e.wb("app-todo",F,k,{},{},[]),N=u("iInd");class T{}u.d(n,"TodoPageModuleNgFactory",(function(){return R}));var R=e.xb(t,[],(function(l){return e.Ib([e.Jb(512,e.m,e.ib,[[8,[o.a,D]],[3,e.m],e.D]),e.Jb(4608,d.k,d.j,[e.z,[2,d.q]]),e.Jb(4608,s.m,s.m,[]),e.Jb(4608,b.b,b.b,[e.F,e.g]),e.Jb(4608,b.Hb,b.Hb,[b.b,e.m,e.w]),e.Jb(4608,b.Lb,b.Lb,[b.b,e.m,e.w]),e.Jb(1073742336,d.b,d.b,[]),e.Jb(1073742336,s.l,s.l,[]),e.Jb(1073742336,s.b,s.b,[]),e.Jb(1073742336,b.Eb,b.Eb,[]),e.Jb(1073742336,N.o,N.o,[[2,N.t],[2,N.m]]),e.Jb(1073742336,T,T,[]),e.Jb(1073742336,t,t,[]),e.Jb(1024,N.k,(function(){return[[{path:"",component:F}]]}),[])])}))}}]);