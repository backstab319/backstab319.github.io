(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["as1-as1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/as1/as1.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/as1/as1.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/applications/assignments'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Articles</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot='bottom'>\n      <ion-tab-button tab='view-article' color='primary'>\n        <ion-icon name=\"eye\"></ion-icon>\n        <ion-label>View Articles</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab='create-article' color='primary'>\n        <ion-icon name=\"create\"></ion-icon>\n        <ion-label>Create article</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/as1/create-article/create-article.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/as1/create-article/create-article.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card class='ion-padding'>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n\n        <ion-list lines='none'>\n          <form>\n            <ion-item>\n              <ion-label position='floating'>Title</ion-label>\n              <ion-input type='text'></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position='floating'>Image Link</ion-label>\n              <ion-input type='text'></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position='floating'>Description</ion-label>\n              <ion-textarea></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position='floating'></ion-label>\n              <ion-input></ion-input>\n            </ion-item>\n          </form>\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/as1/view-article/view-article.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/as1/view-article/view-article.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  view-article works!\n</p>\n");

/***/ }),

/***/ "./src/app/applications/assignments/as1/as1-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/applications/assignments/as1/as1-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: As1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As1PageRoutingModule", function() { return As1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _as1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./as1.page */ "./src/app/applications/assignments/as1/as1.page.ts");
/* harmony import */ var _view_article_view_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-article/view-article.component */ "./src/app/applications/assignments/as1/view-article/view-article.component.ts");
/* harmony import */ var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-article/create-article.component */ "./src/app/applications/assignments/as1/create-article/create-article.component.ts");






const routes = [
    {
        path: '',
        component: _as1_page__WEBPACK_IMPORTED_MODULE_3__["As1Page"],
        children: [
            {
                path: 'view-article',
                component: _view_article_view_article_component__WEBPACK_IMPORTED_MODULE_4__["ViewArticleComponent"]
            },
            {
                path: 'create-article',
                component: _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_5__["CreateArticleComponent"]
            }
        ]
    }
];
let As1PageRoutingModule = class As1PageRoutingModule {
};
As1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], As1PageRoutingModule);



/***/ }),

/***/ "./src/app/applications/assignments/as1/as1.module.ts":
/*!************************************************************!*\
  !*** ./src/app/applications/assignments/as1/as1.module.ts ***!
  \************************************************************/
/*! exports provided: As1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As1PageModule", function() { return As1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _as1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./as1-routing.module */ "./src/app/applications/assignments/as1/as1-routing.module.ts");
/* harmony import */ var _as1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./as1.page */ "./src/app/applications/assignments/as1/as1.page.ts");
/* harmony import */ var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-article/create-article.component */ "./src/app/applications/assignments/as1/create-article/create-article.component.ts");
/* harmony import */ var _view_article_view_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-article/view-article.component */ "./src/app/applications/assignments/as1/view-article/view-article.component.ts");









let As1PageModule = class As1PageModule {
};
As1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _as1_routing_module__WEBPACK_IMPORTED_MODULE_5__["As1PageRoutingModule"]
        ],
        declarations: [_as1_page__WEBPACK_IMPORTED_MODULE_6__["As1Page"], _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_7__["CreateArticleComponent"], _view_article_view_article_component__WEBPACK_IMPORTED_MODULE_8__["ViewArticleComponent"]]
    })
], As1PageModule);



/***/ }),

/***/ "./src/app/applications/assignments/as1/as1.page.scss":
/*!************************************************************!*\
  !*** ./src/app/applications/assignments/as1/as1.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9hc3NpZ25tZW50cy9hczEvYXMxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/applications/assignments/as1/as1.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/applications/assignments/as1/as1.page.ts ***!
  \**********************************************************/
/*! exports provided: As1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "As1Page", function() { return As1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let As1Page = class As1Page {
    constructor() { }
    ngOnInit() {
    }
};
As1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-as1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./as1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/as1/as1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./as1.page.scss */ "./src/app/applications/assignments/as1/as1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], As1Page);



/***/ }),

/***/ "./src/app/applications/assignments/as1/create-article/create-article.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/applications/assignments/as1/create-article/create-article.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9hc3NpZ25tZW50cy9hczEvY3JlYXRlLWFydGljbGUvY3JlYXRlLWFydGljbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/applications/assignments/as1/create-article/create-article.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/applications/assignments/as1/create-article/create-article.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreateArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArticleComponent", function() { return CreateArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateArticleComponent = class CreateArticleComponent {
    constructor() { }
    ngOnInit() { }
};
CreateArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-article',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/as1/create-article/create-article.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-article.component.scss */ "./src/app/applications/assignments/as1/create-article/create-article.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateArticleComponent);



/***/ }),

/***/ "./src/app/applications/assignments/as1/view-article/view-article.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/applications/assignments/as1/view-article/view-article.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9hc3NpZ25tZW50cy9hczEvdmlldy1hcnRpY2xlL3ZpZXctYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/applications/assignments/as1/view-article/view-article.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/applications/assignments/as1/view-article/view-article.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewArticleComponent", function() { return ViewArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewArticleComponent = class ViewArticleComponent {
    constructor() { }
    ngOnInit() { }
};
ViewArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-article',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/as1/view-article/view-article.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-article.component.scss */ "./src/app/applications/assignments/as1/view-article/view-article.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ViewArticleComponent);



/***/ })

}]);
//# sourceMappingURL=as1-as1-module-es2015.js.map