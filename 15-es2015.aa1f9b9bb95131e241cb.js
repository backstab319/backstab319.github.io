(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{WRhH:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("oBZk"),b=u("ZZ/e");class a{constructor(){}ngOnInit(){}}var s=e.yb({encapsulation:0,styles:[[""]],data:{}});function r(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,6,"ion-buttons",[],null,null,null,i.J,i.e)),e.zb(1,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,1,"ion-menu-button",[],null,null,null,i.bb,i.x)),e.zb(3,49152,null,0,b.R,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Lb(l,6).onClick(u)&&t),t}),i.H,i.c)),e.zb(5,49152,null,0,b.g,[e.j,e.p,e.F],{defaultHref:[0,"defaultHref"]},null),e.zb(6,16384,null,0,b.h,[[2,b.ib],b.Ib],{defaultHref:[0,"defaultHref"]},null)],(function(l,n){var u=n.component;l(n,5,0,u.back),l(n,6,0,u.back)}),null)}var d=u("s7LF"),c=u("SVse"),p=u("XNiG");let g=(()=>{class l{constructor(){this.todoList=[],this.updatedList=new p.a}putList(l){this.todoList.push(l),this.updatedList.next([...this.todoList])}getUpdatedList(){return this.updatedList.asObservable()}getList(){return[...this.todoList]}popItem(l){this.todoList.splice(l,1),this.updatedList.next([...this.todoList])}reorderItem(l){this.todoList=l,this.updatedList.next([...this.todoList])}}return l.ngInjectableDef=e.Tb({factory:function(){return new l},token:l,providedIn:"root"}),l})();class m{constructor(l){this.td=l}ngOnInit(){this.td.getUpdatedList().subscribe(l=>{this.myList=l},l=>{console.log(l)})}delete(l){this.td.popItem(l)}doReorder(l){this.td.reorderItem(l.detail.complete(this.myList))}markDone(l){document.getElementById(l).style.textDecoration="line-through"}}var h=e.yb({encapsulation:0,styles:[[""]],data:{}});function v(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,16,"ion-item",[["lines","none"]],null,null,null,i.Y,i.t)),e.zb(1,49152,null,0,b.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Ab(2,0,null,0,2,"ion-label",[["class","ion-padding-start"]],[[8,"id",0]],null,null,i.Z,i.u)),e.zb(3,49152,null,0,b.N,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Pb(4,0,[" "," "])),(l()(),e.Ab(5,0,null,0,11,"ion-buttons",[["slot","end"]],null,null,null,i.J,i.e)),e.zb(6,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(7,0,null,0,1,"ion-reorder",[],null,null,null,i.eb,i.y)),e.zb(8,49152,null,0,b.fb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(9,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.markDone(l.context.$implicit.todoText)&&e),e}),i.I,i.d)),e.zb(10,49152,null,0,b.k,[e.j,e.p,e.F],null,null),(l()(),e.Ab(11,0,null,0,1,"ion-icon",[["name","done-all"],["slot","icon-only"]],null,null,null,i.V,i.q)),e.zb(12,49152,null,0,b.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(13,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.delete(l.context.index)&&e),e}),i.I,i.d)),e.zb(14,49152,null,0,b.k,[e.j,e.p,e.F],null,null),(l()(),e.Ab(15,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,i.V,i.q)),e.zb(16,49152,null,0,b.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"none"),l(n,3,0,n.context.$implicit.todoColor),l(n,12,0,"done-all"),l(n,16,0,"trash")}),(function(l,n){l(n,2,0,n.context.$implicit.todoText),l(n,4,0,n.context.$implicit.todoText)}))}function z(l){return e.Qb(0,[e.Nb(671088640,1,{reorderGroup:0}),(l()(),e.Ab(1,0,null,null,3,"ion-reorder-group",[["disabled","false"]],null,[[null,"ionItemReorder"]],(function(l,n,u){var e=!0;return"ionItemReorder"===n&&(e=!1!==l.component.doReorder(u)&&e),e}),i.db,i.z)),e.zb(2,49152,[[1,4]],0,b.gb,[e.j,e.p,e.F],{disabled:[0,"disabled"]},null),(l()(),e.pb(16777216,null,0,1,null,v)),e.zb(4,278528,null,0,c.h,[e.V,e.R,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"false"),l(n,4,0,u.myList)}),null)}var f=u("mrSG");class L{constructor(l,n){this.td=l,this.alCtl=n,this.pageLink="/applications",this.myNote=[],this.myInterface={header:"Color",subheader:"Select a color",message:"Select a color for your note"}}presentAlert(){return f.b(this,void 0,void 0,(function*(){const l=yield this.alCtl.create({header:"Exists",message:"Note already exists",buttons:["OK"]});yield l.present()}))}ngOnInit(){this.td.getUpdatedList().subscribe(l=>{this.myNote=l})}processForm(l){const n=[];if(this.myNote.length>0&&this.myNote.forEach(l=>{n.push(l.todoText)}),n.includes(l.value.todo))return this.presentAlert(),void l.resetForm();this.td.putList({todoText:l.value.todo,todoColor:l.value.color}),l.resetForm()}}var j=e.yb({encapsulation:0,styles:[[""]],data:{}});function A(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,4,"ion-item",[],null,null,null,i.Y,i.t)),e.zb(1,49152,null,0,b.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,2,"ion-label",[["color","danger"]],null,null,null,i.Z,i.u)),e.zb(3,49152,null,0,b.N,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Pb(-1,0,["Please fill the input"]))],(function(l,n){l(n,3,0,"danger")}),null)}function F(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,8,"ion-header",[],null,null,null,i.U,i.p)),e.zb(1,49152,null,0,b.B,[e.j,e.p,e.F],null,null),(l()(),e.Ab(2,0,null,0,6,"ion-toolbar",[],null,null,null,i.jb,i.E)),e.zb(3,49152,null,0,b.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(4,0,null,0,1,"app-toolbar-buttons",[["slot","start"]],null,null,null,r,s)),e.zb(5,114688,null,0,a,[],{back:[0,"back"]},null),(l()(),e.Ab(6,0,null,0,2,"ion-title",[],null,null,null,i.ib,i.D)),e.zb(7,49152,null,0,b.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["To Do"])),(l()(),e.Ab(9,0,null,null,95,"ion-content",[],null,null,null,i.R,i.m)),e.zb(10,49152,null,0,b.u,[e.j,e.p,e.F],null,null),(l()(),e.Ab(11,0,null,0,93,"ion-grid",[],null,null,null,i.T,i.o)),e.zb(12,49152,null,0,b.A,[e.j,e.p,e.F],null,null),(l()(),e.Ab(13,0,null,0,85,"ion-row",[],null,null,null,i.fb,i.A)),e.zb(14,49152,null,0,b.jb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(15,0,null,0,83,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,i.Q,i.l)),e.zb(16,49152,null,0,b.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(17,0,null,0,81,"ion-card",[],null,null,null,i.O,i.f)),e.zb(18,49152,null,0,b.m,[e.j,e.p,e.F],null,null),(l()(),e.Ab(19,0,null,0,4,"ion-card-header",[],null,null,null,i.L,i.h)),e.zb(20,49152,null,0,b.o,[e.j,e.p,e.F],null,null),(l()(),e.Ab(21,0,null,0,2,"ion-card-title",[["class","ion-padding-start"]],null,null,null,i.N,i.j)),e.zb(22,49152,null,0,b.q,[e.j,e.p,e.F],null,null),(l()(),e.Pb(-1,0,["Make a note"])),(l()(),e.Ab(24,0,null,0,74,"ion-card-content",[],null,null,null,i.K,i.g)),e.zb(25,49152,null,0,b.n,[e.j,e.p,e.F],null,null),(l()(),e.Ab(26,0,null,0,72,"ion-list",[["lines","none"]],null,null,null,i.ab,i.v)),e.zb(27,49152,null,0,b.O,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Ab(28,0,null,0,70,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e.Lb(l,30).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Lb(l,30).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.processForm(e.Lb(l,30))&&t),t}),null,null)),e.zb(29,16384,null,0,d.n,[],null,null),e.zb(30,4210688,[["formData",4]],0,d.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Mb(2048,null,d.a,null,[d.i]),e.zb(32,16384,null,0,d.h,[[4,d.a]],null,null),(l()(),e.Ab(33,0,null,null,14,"ion-item",[],null,null,null,i.Y,i.t)),e.zb(34,49152,null,0,b.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(35,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.Z,i.u)),e.zb(36,49152,null,0,b.N,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Pb(-1,0,["To Do"])),(l()(),e.Ab(38,0,null,0,9,"ion-input",[["clearInput",""],["minlength","5"],["name","todo"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Lb(l,42)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Lb(l,42)._handleInputEvent(u.target)&&t),t}),i.X,i.s)),e.zb(39,16384,null,0,d.k,[],{required:[0,"required"]},null),e.zb(40,540672,null,0,d.c,[],{minlength:[0,"minlength"]},null),e.Mb(1024,null,d.d,(function(l,n){return[l,n]}),[d.k,d.c]),e.zb(42,16384,null,0,b.Mb,[e.p],null,null),e.Mb(1024,null,d.e,(function(l){return[l]}),[b.Mb]),e.zb(44,671744,[["todo",4]],0,d.j,[[2,d.a],[6,d.d],[8,null],[6,d.e]],{name:[0,"name"],model:[1,"model"]},null),e.Mb(2048,null,d.f,null,[d.j]),e.zb(46,16384,null,0,d.g,[[4,d.f]],null,null),e.zb(47,49152,null,0,b.G,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],minlength:[1,"minlength"],name:[2,"name"],required:[3,"required"],type:[4,"type"]},null),(l()(),e.pb(16777216,null,null,1,null,A)),e.zb(49,16384,null,0,c.i,[e.V,e.R],{ngIf:[0,"ngIf"]},null),(l()(),e.Ab(50,0,null,null,48,"ion-item",[],null,null,null,i.Y,i.t)),e.zb(51,49152,null,0,b.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(52,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,i.J,i.e)),e.zb(53,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Ab(54,0,null,0,3,"ion-button",[["type","submit"]],null,null,null,i.I,i.d)),e.zb(55,49152,null,0,b.k,[e.j,e.p,e.F],{disabled:[0,"disabled"],type:[1,"type"]},null),(l()(),e.Ab(56,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,i.V,i.q)),e.zb(57,49152,null,0,b.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(58,0,null,0,40,"ion-item",[],null,null,null,i.Y,i.t)),e.zb(59,49152,null,0,b.H,[e.j,e.p,e.F],null,null),(l()(),e.Ab(60,0,null,0,1,"ion-icon",[["name","color-palette"]],null,null,null,i.V,i.q)),e.zb(61,49152,null,0,b.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Ab(62,0,null,0,36,"ion-select",[["cancelText","Cancel"],["interface","popover"],["name","color"],["ngModel",""],["value","none"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Lb(l,63)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Lb(l,63)._handleChangeEvent(u.target)&&t),t}),i.hb,i.B)),e.zb(63,16384,null,0,b.Lb,[e.p],null,null),e.Mb(1024,null,d.e,(function(l){return[l]}),[b.Lb]),e.zb(65,671744,[["color",4]],0,d.j,[[2,d.a],[8,null],[8,null],[6,d.e]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},null),e.Mb(2048,null,d.f,null,[d.j]),e.zb(67,16384,null,0,d.g,[[4,d.f]],null,null),e.zb(68,49152,null,0,b.nb,[e.j,e.p,e.F],{cancelText:[0,"cancelText"],disabled:[1,"disabled"],interface:[2,"interface"],interfaceOptions:[3,"interfaceOptions"],name:[4,"name"],value:[5,"value"]},null),(l()(),e.Ab(69,0,null,0,2,"ion-select-option",[["value","primary"]],null,null,null,i.gb,i.C)),e.zb(70,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Primary"])),(l()(),e.Ab(72,0,null,0,2,"ion-select-option",[["value","secondary"]],null,null,null,i.gb,i.C)),e.zb(73,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Secondary"])),(l()(),e.Ab(75,0,null,0,2,"ion-select-option",[["value","tertiary"]],null,null,null,i.gb,i.C)),e.zb(76,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Tertiary"])),(l()(),e.Ab(78,0,null,0,2,"ion-select-option",[["value","success"]],null,null,null,i.gb,i.C)),e.zb(79,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Success"])),(l()(),e.Ab(81,0,null,0,2,"ion-select-option",[["value","warning"]],null,null,null,i.gb,i.C)),e.zb(82,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Warning"])),(l()(),e.Ab(84,0,null,0,2,"ion-select-option",[["value","danger"]],null,null,null,i.gb,i.C)),e.zb(85,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Danger"])),(l()(),e.Ab(87,0,null,0,2,"ion-select-option",[["value","light"]],null,null,null,i.gb,i.C)),e.zb(88,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Light"])),(l()(),e.Ab(90,0,null,0,2,"ion-select-option",[["value","medium"]],null,null,null,i.gb,i.C)),e.zb(91,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Medium"])),(l()(),e.Ab(93,0,null,0,2,"ion-select-option",[["value","dark"]],null,null,null,i.gb,i.C)),e.zb(94,49152,null,0,b.ob,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Pb(-1,0,["Dark"])),(l()(),e.Ab(96,0,null,0,2,"ion-select-option",[["selected","none"],["value","none"]],null,null,null,i.gb,i.C)),e.zb(97,49152,null,0,b.ob,[e.j,e.p,e.F],{selected:[0,"selected"],value:[1,"value"]},null),(l()(),e.Pb(-1,0,["None"])),(l()(),e.Ab(99,0,null,0,5,"ion-row",[],null,null,null,i.fb,i.A)),e.zb(100,49152,null,0,b.jb,[e.j,e.p,e.F],null,null),(l()(),e.Ab(101,0,null,0,3,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,i.Q,i.l)),e.zb(102,49152,null,0,b.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ab(103,0,null,0,1,"app-todo-list",[],null,null,null,z,h)),e.zb(104,114688,null,0,m,[g],null,null)],(function(l,n){var u=n.component;l(n,5,0,u.pageLink),l(n,16,0,"12"),l(n,27,0,"none"),l(n,36,0,"floating"),l(n,39,0,""),l(n,40,0,"5"),l(n,44,0,"todo",""),l(n,47,0,"","5","todo","","text"),l(n,49,0,e.Lb(n,44).invalid&&e.Lb(n,44).touched),l(n,55,0,e.Lb(n,44).invalid,"submit"),l(n,57,0,"add"),l(n,61,0,"color-palette"),l(n,65,0,"color",e.Lb(n,44).invalid,""),l(n,68,0,"Cancel",e.Lb(n,44).invalid,"popover",u.myInterface,"color","none"),l(n,70,0,"primary"),l(n,73,0,"secondary"),l(n,76,0,"tertiary"),l(n,79,0,"success"),l(n,82,0,"warning"),l(n,85,0,"danger"),l(n,88,0,"light"),l(n,91,0,"medium"),l(n,94,0,"dark"),l(n,97,0,"none","none"),l(n,102,0,"12"),l(n,104,0)}),(function(l,n){l(n,28,0,e.Lb(n,32).ngClassUntouched,e.Lb(n,32).ngClassTouched,e.Lb(n,32).ngClassPristine,e.Lb(n,32).ngClassDirty,e.Lb(n,32).ngClassValid,e.Lb(n,32).ngClassInvalid,e.Lb(n,32).ngClassPending),l(n,38,0,e.Lb(n,39).required?"":null,e.Lb(n,40).minlength?e.Lb(n,40).minlength:null,e.Lb(n,46).ngClassUntouched,e.Lb(n,46).ngClassTouched,e.Lb(n,46).ngClassPristine,e.Lb(n,46).ngClassDirty,e.Lb(n,46).ngClassValid,e.Lb(n,46).ngClassInvalid,e.Lb(n,46).ngClassPending),l(n,62,0,e.Lb(n,67).ngClassUntouched,e.Lb(n,67).ngClassTouched,e.Lb(n,67).ngClassPristine,e.Lb(n,67).ngClassDirty,e.Lb(n,67).ngClassValid,e.Lb(n,67).ngClassInvalid,e.Lb(n,67).ngClassPending)}))}function C(l){return e.Qb(0,[(l()(),e.Ab(0,0,null,null,1,"app-todo",[],null,null,null,F,j)),e.zb(1,114688,null,0,L,[g,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var y=e.wb("app-todo",L,C,{},{},[]),k=u("iInd");class I{}u.d(n,"TodoPageModuleNgFactory",(function(){return x}));var x=e.xb(t,[],(function(l){return e.Ib([e.Jb(512,e.m,e.ib,[[8,[o.a,y]],[3,e.m],e.D]),e.Jb(4608,c.k,c.j,[e.z,[2,c.q]]),e.Jb(4608,d.m,d.m,[]),e.Jb(4608,b.b,b.b,[e.F,e.g]),e.Jb(4608,b.Hb,b.Hb,[b.b,e.m,e.w]),e.Jb(4608,b.Kb,b.Kb,[b.b,e.m,e.w]),e.Jb(1073742336,c.b,c.b,[]),e.Jb(1073742336,d.l,d.l,[]),e.Jb(1073742336,d.b,d.b,[]),e.Jb(1073742336,b.Eb,b.Eb,[]),e.Jb(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),e.Jb(1073742336,I,I,[]),e.Jb(1073742336,t,t,[]),e.Jb(1024,k.k,(function(){return[[{path:"",component:L}]]}),[])])}))}}]);