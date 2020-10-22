(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["backstab319-backstab319-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/backstab319.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/backstab319.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>backstab319</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='3' offset-sm='2'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class='ion-text-center'><h1>Hello there!</h1></ion-card-title>\n          </ion-card-header>\n          <ion-img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSeWY6nfNDnIGOLhL3K8_9gpEMK9KvEBeK5z67CO1eoL3SyrD3'></ion-img>\n          <ion-card-content class='ion-text-center'>\n            <p class=\"ion-text\">Welcome to siddhartha's personal page!</p>\n            <p class='ion-text'>Check out my new video chatting application! </p>\n            <ion-button fill='outline' color='primary'\n              href='https://backstab-7d143.web.app/'>\n              <ion-icon slot=\"start\" name=\"videocam\"></ion-icon>\n                Let's connect\n              </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size='12' size-sm='5'>\n        <ion-row>\n          <ion-col>\n            <ion-card>\n              <ion-card-header>\n                <ion-card-title class='ion-text-center'>\n                  <h1>Let's get to the point</h1>\n                </ion-card-title>\n              </ion-card-header>\n              <ion-card-content class='ion-text-center'>\n                <p class=\"ion-text\">\n                  I can make progressive single page web apps using Ionic angular framework. You can view my \n                  <ion-button fill='outline' color='dark'\n                  href='https://github.com/backstab319'\n                  >\n                    <ion-icon slot='start' name='logo-github'></ion-icon>\n                    github\n                  </ion-button> page for my previous projects.\n                </p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size='12'>\n            <ion-card>\n              <ion-card-header>\n                <ion-card-title class='ion-text-center'>\n                  <h1>Beautiful web apps!</h1>\n                </ion-card-title>\n              </ion-card-header>\n              <ion-card-content class='ion-text-center'>\n                <p class=\"ion-text\">\n                  I can make beautiful looking web apps that are dynamic and work like a charm! Using ionic framework\n                  i can make a native looking web page that works and feels like an app.\n                </p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              <h1>More about me</h1>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines='none'>\n              <ion-item>\n                <ion-icon slot='end' name='search'></ion-icon>\n                <ion-label><p class=\"ion-text\">Quick learner</p></ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon slot='end' name='hammer'></ion-icon>\n                <ion-label><p class=\"ion-text\">A teamplayer</p></ion-label>\n              </ion-item>\n              <ion-row>\n                <ion-col size='12' size-sm='6'>\n                    <ion-button fill='outline' expand='block' color='dark'\n                    (click)=\"gotoPage('skills')\"\n                    >\n                    Skills\n                    <ion-icon slot='end' name='star-outline'></ion-icon>\n                  </ion-button>\n                </ion-col>\n                <ion-col size='12' size-sm='6'>\n                  <ion-button\n                    fill='outline'\n                    color='dark'\n                    expand='block'\n                    (click)=\"gotoPage('projects')\"\n                    >\n                    Projects\n                    <ion-icon name=\"git-branch\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/backstab319/backstab319-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/backstab319/backstab319-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: Backstab319PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backstab319PageRoutingModule", function() { return Backstab319PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _backstab319_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backstab319.page */ "./src/app/backstab319/backstab319.page.ts");




const routes = [
    {
        path: '',
        component: _backstab319_page__WEBPACK_IMPORTED_MODULE_3__["Backstab319Page"]
    },
    {
        path: 'skills',
        loadChildren: () => __webpack_require__.e(/*! import() | skills-skills-module */ "skills-skills-module").then(__webpack_require__.bind(null, /*! ./skills/skills.module */ "./src/app/backstab319/skills/skills.module.ts")).then(m => m.SkillsPageModule)
    },
    {
        path: 'projects',
        loadChildren: () => __webpack_require__.e(/*! import() | projects-projects-module */ "projects-projects-module").then(__webpack_require__.bind(null, /*! ./projects/projects.module */ "./src/app/backstab319/projects/projects.module.ts")).then(m => m.ProjectsPageModule)
    },
    {
        path: 'current-projects',
        loadChildren: () => __webpack_require__.e(/*! import() | current-projects-current-projects-module */ "current-projects-current-projects-module").then(__webpack_require__.bind(null, /*! ./current-projects/current-projects.module */ "./src/app/backstab319/current-projects/current-projects.module.ts")).then(m => m.CurrentProjectsPageModule)
    }
];
let Backstab319PageRoutingModule = class Backstab319PageRoutingModule {
};
Backstab319PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Backstab319PageRoutingModule);



/***/ }),

/***/ "./src/app/backstab319/backstab319.module.ts":
/*!***************************************************!*\
  !*** ./src/app/backstab319/backstab319.module.ts ***!
  \***************************************************/
/*! exports provided: Backstab319PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backstab319PageModule", function() { return Backstab319PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _backstab319_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backstab319-routing.module */ "./src/app/backstab319/backstab319-routing.module.ts");
/* harmony import */ var _backstab319_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backstab319.page */ "./src/app/backstab319/backstab319.page.ts");







let Backstab319PageModule = class Backstab319PageModule {
};
Backstab319PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _backstab319_routing_module__WEBPACK_IMPORTED_MODULE_5__["Backstab319PageRoutingModule"]
        ],
        declarations: [_backstab319_page__WEBPACK_IMPORTED_MODULE_6__["Backstab319Page"]]
    })
], Backstab319PageModule);



/***/ }),

/***/ "./src/app/backstab319/backstab319.page.scss":
/*!***************************************************!*\
  !*** ./src/app/backstab319/backstab319.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tzdGFiMzE5L2JhY2tzdGFiMzE5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/backstab319/backstab319.page.ts":
/*!*************************************************!*\
  !*** ./src/app/backstab319/backstab319.page.ts ***!
  \*************************************************/
/*! exports provided: Backstab319Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backstab319Page", function() { return Backstab319Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let Backstab319Page = class Backstab319Page {
    constructor(menuCtl, navCtl) {
        this.menuCtl = menuCtl;
        this.navCtl = navCtl;
    }
    ngOnInit() {
    }
    gotoPage(pageName) {
        this.menuCtl.close();
        this.navCtl.navigateForward(['/', 'backstab319', pageName]);
    }
};
Backstab319Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
Backstab319Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backstab319',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./backstab319.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/backstab319.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./backstab319.page.scss */ "./src/app/backstab319/backstab319.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], Backstab319Page);



/***/ })

}]);
//# sourceMappingURL=backstab319-backstab319-module-es2015.js.map