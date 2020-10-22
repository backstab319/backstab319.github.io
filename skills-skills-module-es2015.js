(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skills-skills-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/skills/skills.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/skills/skills.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/backstab319'></ion-back-button>\n    </ion-buttons>\n    <ion-title>skills</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>MEAN Stack</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines='none'>\n              <ion-item>\n                <ion-label>Angular</ion-label>\n                <ion-icon name=\"logo-angular\" slot='end'></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label>Ionic Framework</ion-label>\n                <ion-icon name=\"logo-ionic\" slot='end'></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label>Express JS</ion-label>\n                <ion-icon name=\"logo-javascript\" slot='end'></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label>Node JS</ion-label>\n                <ion-icon name=\"logo-nodejs\" slot=\"end\"></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label>Mongo DB</ion-label>\n                <ion-icon name=\"analytics\" slot='end'></ion-icon>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Full Stack</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines='none'>\n              <ion-item>\n                <ion-label>Php</ion-label>\n                <ion-icon name=\"logo-html5\" slot=\"end\"></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label>CSS</ion-label>\n                <ion-icon name=\"logo-css3\" slot=\"end\"></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label>Javascript</ion-label>\n                <ion-icon name=\"logo-css3\" slot=\"end\"></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label>Bootstrap</ion-label>\n                <ion-icon name=\"logo-css3\" slot=\"end\"></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label>Sql</ion-label>\n                <ion-icon name=\"analytics\" slot=\"end\"></ion-icon>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Other languages</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines='none'>\n              <ion-item>\n                <ion-label>Python</ion-label>\n                <ion-icon name=\"logo-python\" slot='end'></ion-icon>\n              </ion-item>\n              <ion-item>\n                <ion-label>Django</ion-label>\n                <ion-icon name=\"logo-python\" slot='end'></ion-icon>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/backstab319/skills/skills-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/backstab319/skills/skills-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SkillsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsPageRoutingModule", function() { return SkillsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _skills_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills.page */ "./src/app/backstab319/skills/skills.page.ts");




const routes = [
    {
        path: '',
        component: _skills_page__WEBPACK_IMPORTED_MODULE_3__["SkillsPage"]
    }
];
let SkillsPageRoutingModule = class SkillsPageRoutingModule {
};
SkillsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SkillsPageRoutingModule);



/***/ }),

/***/ "./src/app/backstab319/skills/skills.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/backstab319/skills/skills.module.ts ***!
  \*****************************************************/
/*! exports provided: SkillsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsPageModule", function() { return SkillsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _skills_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills-routing.module */ "./src/app/backstab319/skills/skills-routing.module.ts");
/* harmony import */ var _skills_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills.page */ "./src/app/backstab319/skills/skills.page.ts");







let SkillsPageModule = class SkillsPageModule {
};
SkillsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _skills_routing_module__WEBPACK_IMPORTED_MODULE_5__["SkillsPageRoutingModule"]
        ],
        declarations: [_skills_page__WEBPACK_IMPORTED_MODULE_6__["SkillsPage"]]
    })
], SkillsPageModule);



/***/ }),

/***/ "./src/app/backstab319/skills/skills.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/backstab319/skills/skills.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tzdGFiMzE5L3NraWxscy9za2lsbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/backstab319/skills/skills.page.ts":
/*!***************************************************!*\
  !*** ./src/app/backstab319/skills/skills.page.ts ***!
  \***************************************************/
/*! exports provided: SkillsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsPage", function() { return SkillsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsPage = class SkillsPage {
    constructor() { }
    ngOnInit() {
    }
};
SkillsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/skills/skills.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.page.scss */ "./src/app/backstab319/skills/skills.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SkillsPage);



/***/ })

}]);
//# sourceMappingURL=skills-skills-module-es2015.js.map