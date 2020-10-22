(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["applications-applications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/applications.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/applications.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/backstab319'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Web Apps</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card *ngFor='let i of apps' class='ion-padding'>\n          <ion-card-header>\n            <ion-item lines='none'>\n              <ion-avatar slot='start'>\n                <ion-img [src]='i.appImage'></ion-img>\n              </ion-avatar>\n              <ion-card-title>\n                {{i.appName}}\n              </ion-card-title>\n              <ion-buttons slot='end'>\n                <ion-button [href]='i.appCode'><ion-icon name=\"code\" slot='icon-only'></ion-icon></ion-button>\n              </ion-buttons>\n            </ion-item>\n            <ion-card-subtitle padding-start>\n              {{i.appDescription}}\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-chip *ngFor='let j of i.appFeatures'>\n              {{j}}\n            </ion-chip>\n            <ion-row>\n              <ion-col size='12' size-sm='2'>\n                <ion-button\n                (click)=\"openApp(i.appOpenLink)\"\n                fill='outline'\n                expand='block'\n                color='dark'\n                >\n                Open\n                <ion-icon name=\"play\" slot='end'></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/applications/applications-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/applications/applications-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsPageRoutingModule", function() { return ApplicationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _applications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applications.page */ "./src/app/applications/applications.page.ts");




const routes = [
    {
        path: '',
        component: _applications_page__WEBPACK_IMPORTED_MODULE_3__["ApplicationsPage"]
    },
    {
        path: 'todo',
        loadChildren: () => __webpack_require__.e(/*! import() | todo-todo-module */ "todo-todo-module").then(__webpack_require__.bind(null, /*! ./todo/todo.module */ "./src/app/applications/todo/todo.module.ts")).then(m => m.TodoPageModule)
    },
    {
        path: 'expenses',
        loadChildren: () => __webpack_require__.e(/*! import() | expenses-expenses-module */ "expenses-expenses-module").then(__webpack_require__.bind(null, /*! ./expenses/expenses.module */ "./src/app/applications/expenses/expenses.module.ts")).then(m => m.ExpensesPageModule)
    },
    {
        path: 'chat-web-app',
        loadChildren: () => __webpack_require__.e(/*! import() | chat-web-app-chat-web-app-module */ "chat-web-app-chat-web-app-module").then(__webpack_require__.bind(null, /*! ./chat-web-app/chat-web-app.module */ "./src/app/applications/chat-web-app/chat-web-app.module.ts")).then(m => m.ChatWebAppPageModule)
    },
    {
        path: 'assignments',
        loadChildren: () => __webpack_require__.e(/*! import() | assignments-assignments-module */ "assignments-assignments-module").then(__webpack_require__.bind(null, /*! ./assignments/assignments.module */ "./src/app/applications/assignments/assignments.module.ts")).then(m => m.AssignmentsPageModule)
    }
];
let ApplicationsPageRoutingModule = class ApplicationsPageRoutingModule {
};
ApplicationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], ApplicationsPageRoutingModule);



/***/ }),

/***/ "./src/app/applications/applications.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/applications/applications.module.ts ***!
  \*****************************************************/
/*! exports provided: ApplicationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsPageModule", function() { return ApplicationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _applications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./applications-routing.module */ "./src/app/applications/applications-routing.module.ts");
/* harmony import */ var _applications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./applications.page */ "./src/app/applications/applications.page.ts");







let ApplicationsPageModule = class ApplicationsPageModule {
};
ApplicationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _applications_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplicationsPageRoutingModule"]
        ],
        declarations: [
            _applications_page__WEBPACK_IMPORTED_MODULE_6__["ApplicationsPage"]
        ],
        exports: []
    })
], ApplicationsPageModule);



/***/ }),

/***/ "./src/app/applications/applications.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/applications/applications.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/applications/applications.page.ts":
/*!***************************************************!*\
  !*** ./src/app/applications/applications.page.ts ***!
  \***************************************************/
/*! exports provided: ApplicationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsPage", function() { return ApplicationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/general.service */ "./src/app/shared/general.service.ts");



let ApplicationsPage = class ApplicationsPage {
    constructor(gs) {
        this.gs = gs;
        this.apps = [
            {
                appName: 'To Do',
                appDescription: 'List out your things to do so that you dont forget them',
                // tslint:disable-next-line: max-line-length
                appFeatures: ['Make a note', 'Edit notes', 'Delete notes', 'Reorder notes', 'Color notes', 'Strike complete notes', 'Completed notes section'],
                appImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxufq9XwZsW75qlbaSXqCf0NKmLSgxj4P-Iw7i_4p58wxA4AHc',
                appCode: 'https://github.com/backstab319/backstab319.github.io/tree/todo',
                appOpenLink: '/applications/todo'
            },
            {
                appName: 'Expenses',
                appDescription: 'List out your future of past expenses to keep track of them',
                // tslint:disable-next-line: max-line-length
                appFeatures: ['Categorize expenses', 'Label categories', 'Calculate different expenses', 'Customize boards with colors', 'Edit existing boards', 'Add to existing boards'],
                appImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn2xZCG7MxjxyYGPh9mlF_qp65ZM_amHJW-ZQG9ciCBfTntM0N',
                appCode: 'https://github.com/backstab319/backstab319.github.io/tree/expenses',
                appOpenLink: '/applications/expenses'
            },
            {
                appName: 'chat-web-app',
                appDescription: 'A simple chat web app made using angular and ionic framework',
                appFeatures: ['Easy to use', 'Beautiful interface', 'Cross platform', 'More features to come'],
                appImage: 'https://imgur.com/R3xZcWl.png',
                appCode: 'https://github.com/backstab319/chat-web-app',
                appOpenLink: '/applications/chat-web-app'
            }
        ];
    }
    ngOnInit() {
    }
    openApp(appLink) {
        this.gs.gotoAbs(appLink);
    }
};
ApplicationsPage.ctorParameters = () => [
    { type: _shared_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] }
];
ApplicationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-applications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./applications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/applications.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./applications.page.scss */ "./src/app/applications/applications.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]])
], ApplicationsPage);



/***/ })

}]);
//# sourceMappingURL=applications-applications-module-es2015.js.map