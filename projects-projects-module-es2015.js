(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/projects/projects.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/projects/projects.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"/backstab319\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Some of my previous projects</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card *ngFor='let i of projects' class='ion-padding'>\n          <ion-item lines='none'>\n            <ion-buttons slot='end'>\n              <ion-button [href]=\"i.projectRepo\">\n                <ion-icon slot='icon-only' name=\"logo-github\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-card-title>\n              {{ i.projectName }}\n            </ion-card-title>\n            <ion-avatar slot='start'>\n              <ion-img [src]=\"i.projectThumbnail\"></ion-img>\n            </ion-avatar>\n          </ion-item>\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-chip *ngFor='let j of i.projectLangs' outline>\n                <ion-label>\n                  {{ j }}\n                </ion-label>\n              </ion-chip>\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            {{ i.projectDescription }}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/backstab319/projects/projects-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/backstab319/projects/projects-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageRoutingModule", function() { return ProjectsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.page */ "./src/app/backstab319/projects/projects.page.ts");




const routes = [
    {
        path: '',
        component: _projects_page__WEBPACK_IMPORTED_MODULE_3__["ProjectsPage"]
    }
];
let ProjectsPageRoutingModule = class ProjectsPageRoutingModule {
};
ProjectsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjectsPageRoutingModule);



/***/ }),

/***/ "./src/app/backstab319/projects/projects.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/backstab319/projects/projects.module.ts ***!
  \*********************************************************/
/*! exports provided: ProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function() { return ProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/backstab319/projects/projects-routing.module.ts");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects.page */ "./src/app/backstab319/projects/projects.page.ts");







let ProjectsPageModule = class ProjectsPageModule {
};
ProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageRoutingModule"]
        ],
        declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]]
    })
], ProjectsPageModule);



/***/ }),

/***/ "./src/app/backstab319/projects/projects.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/backstab319/projects/projects.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tzdGFiMzE5L3Byb2plY3RzL3Byb2plY3RzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/backstab319/projects/projects.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/backstab319/projects/projects.page.ts ***!
  \*******************************************************/
/*! exports provided: ProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPage", function() { return ProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsPage = class ProjectsPage {
    constructor() {
        this.projects = [
            {
                projectRepo: 'https://github.com/backstab319/chat-web-app',
                projectName: 'Chat web app',
                projectDescription: 'A simple chat web app made using angular and ionic framework',
                projectLangs: ['Ionic Framework', 'Angular', 'Node JS', 'Express JS', 'Mongo DB'],
                projectThumbnail: 'https://imgur.com/R3xZcWl.png'
            },
            {
                projectRepo: 'https://github.com/backstab319/backstab319.github.io/tree/todo',
                projectName: 'To Do',
                projectDescription: 'List out your things to do so that you dont forget them',
                projectLangs: ['Ionic Framework', 'Angular'],
                projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxufq9XwZsW75qlbaSXqCf0NKmLSgxj4P-Iw7i_4p58wxA4AHc'
            },
            {
                projectRepo: 'https://github.com/backstab319/backstab319.github.io/tree/expenses',
                projectName: 'Expenses',
                projectDescription: 'List out your future of past expenses to keep track of them',
                projectLangs: ['Ionic Framework', 'Angular'],
                projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn2xZCG7MxjxyYGPh9mlF_qp65ZM_amHJW-ZQG9ciCBfTntM0N'
            },
            {
                projectRepo: 'https://github.com/backstab319/Client-Management-System',
                projectName: 'Client Management System',
                projectDescription: 'Used to manage the clients and employees of an organisation',
                projectLangs: ['Php', 'html', 'css', 'js', 'bootstrap', 'sql'],
                projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5aPgYPuknkvKugUQy4gj_gWWxosKosRB0tEAV3WPp5osTc4Nc'
            },
            {
                projectRepo: 'https://github.com/backstab319/Residency-Exchange-Collaberation-System',
                projectName: 'Residency Exchange Collaboration System',
                // tslint:disable-next-line: max-line-length
                projectDescription: 'Used to enable interaction between people staying in recidency areas. And by the local market to connect with people in residency for better understanding of their needs.',
                projectLangs: ['Php', 'html', 'css', 'js', 'bootstrap', 'sql'],
                projectThumbnail: 'https://www.theresidency.com/theme/frontend/images/the-residency-towers-puducherry.jpg'
            },
            {
                projectRepo: 'https://github.com/backstab319/Python-Translator-and-TTS',
                projectName: 'Python-Translator-and-TTS',
                projectDescription: 'A command line translator to and fro multiple languages with text to speech support written in python',
                projectLangs: ['python 3.6'],
                projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpL9GcjB1VG-Gc39MGTX20qGNmIuu9J2MWkm_ozeIoPtMGbtK_'
            },
            {
                projectRepo: 'https://github.com/backstab319/Python-Learning-Process/tree/master/Python_datatypes_tutorial_project',
                projectName: 'Python datatypes methods tutorial',
                projectDescription: 'A simple python program made to demonstrate various builtin methods in python',
                projectLangs: ['python 3.6'],
                projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxCfUVZVMhh7f0oooBYTQFEFpQfolU-GfDntsOVSEB0Ty3Fw6y'
            },
            {
                projectRepo: 'https://github.com/backstab319/Pharmacy-Management-System',
                projectName: 'Pharmacy Management System',
                // tslint:disable-next-line: max-line-length
                projectDescription: 'Tool for the pharmacy to have much better control over their inventory and provide various tools to make their job easier. Includes 3 different frontends for various hierarchy',
                projectLangs: ['Php', 'html', 'css', 'js', 'bootstrap', 'sql'],
                projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6EzHZs2ymAIlU7XkAvfQY2HMK1NcrDDSEm3v4rrex5MOedKnv'
            },
            {
                projectRepo: 'https://github.com/backstab319/Hospital-Management-System',
                projectName: 'Hospital Management System',
                // tslint:disable-next-line: max-line-length
                projectDescription: 'Tool developed for hospitals to keep the large amount of data in a much more organised manner. Provide online presence for the hospital and doctor and patients. Allowing making online appointments, test results and much more',
                projectLangs: ['Php', 'html', 'css', 'js', 'bootstrap', 'sql'],
                projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQa2q-zOo99oUE_-vG6d9aDOD5h-r3Ptn0I2hwkh_qJpQqiuOM'
            },
            {
                projectRepo: 'https://github.com/backstab319/Crime-Reporting-System',
                projectName: 'Crime Reporting System',
                // tslint:disable-next-line: max-line-length
                projectDescription: 'Giving local police stations online presence hence citizens can be alerted or notified in emergency or people can report anything suspicious online. Also provides police stations tools to maintain their large data using provided tools',
                projectLangs: ['Php', 'html', 'css', 'js', 'bootstrap', 'sql'],
                projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMu42zhgYEpJdZQGN-34LWVUcmGFXRIR1SSGTYVXA4YqUxenzc'
            }
        ];
    }
    ngOnInit() {
    }
};
ProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/projects/projects.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.page.scss */ "./src/app/backstab319/projects/projects.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjectsPage);



/***/ })

}]);
//# sourceMappingURL=projects-projects-module-es2015.js.map