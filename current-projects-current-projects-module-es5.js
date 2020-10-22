function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["current-projects-current-projects-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/current-projects/current-projects.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/current-projects/current-projects.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBackstab319CurrentProjectsCurrentProjectsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/backstab319'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Currently working on</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card *ngFor='let i of projects' class='ion-padding'>\n          <ion-item lines='none'>\n            <ion-buttons slot='end'>\n              <ion-button [href]=\"i.projectRepo\">\n                <ion-icon slot='icon-only' name=\"logo-github\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-card-title>\n              {{ i.projectName }}\n            </ion-card-title>\n            <ion-avatar slot='start'>\n              <ion-img [src]=\"i.projectThumbnail\"></ion-img>\n            </ion-avatar>\n          </ion-item>\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-chip *ngFor='let j of i.projectLangs' outline>\n                <ion-label>\n                  {{ j }}\n                </ion-label>\n              </ion-chip>\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            {{ i.projectDescription }}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/backstab319/current-projects/current-projects-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/backstab319/current-projects/current-projects-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: CurrentProjectsPageRoutingModule */

  /***/
  function srcAppBackstab319CurrentProjectsCurrentProjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentProjectsPageRoutingModule", function () {
      return CurrentProjectsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _current_projects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./current-projects.page */
    "./src/app/backstab319/current-projects/current-projects.page.ts");

    var routes = [{
      path: '',
      component: _current_projects_page__WEBPACK_IMPORTED_MODULE_3__["CurrentProjectsPage"]
    }];

    var CurrentProjectsPageRoutingModule = function CurrentProjectsPageRoutingModule() {
      _classCallCheck(this, CurrentProjectsPageRoutingModule);
    };

    CurrentProjectsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CurrentProjectsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/backstab319/current-projects/current-projects.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/backstab319/current-projects/current-projects.module.ts ***!
    \*************************************************************************/

  /*! exports provided: CurrentProjectsPageModule */

  /***/
  function srcAppBackstab319CurrentProjectsCurrentProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentProjectsPageModule", function () {
      return CurrentProjectsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _current_projects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./current-projects-routing.module */
    "./src/app/backstab319/current-projects/current-projects-routing.module.ts");
    /* harmony import */


    var _current_projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./current-projects.page */
    "./src/app/backstab319/current-projects/current-projects.page.ts");

    var CurrentProjectsPageModule = function CurrentProjectsPageModule() {
      _classCallCheck(this, CurrentProjectsPageModule);
    };

    CurrentProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _current_projects_routing_module__WEBPACK_IMPORTED_MODULE_5__["CurrentProjectsPageRoutingModule"]],
      declarations: [_current_projects_page__WEBPACK_IMPORTED_MODULE_6__["CurrentProjectsPage"]]
    })], CurrentProjectsPageModule);
    /***/
  },

  /***/
  "./src/app/backstab319/current-projects/current-projects.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/backstab319/current-projects/current-projects.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBackstab319CurrentProjectsCurrentProjectsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tzdGFiMzE5L2N1cnJlbnQtcHJvamVjdHMvY3VycmVudC1wcm9qZWN0cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/backstab319/current-projects/current-projects.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/backstab319/current-projects/current-projects.page.ts ***!
    \***********************************************************************/

  /*! exports provided: CurrentProjectsPage */

  /***/
  function srcAppBackstab319CurrentProjectsCurrentProjectsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentProjectsPage", function () {
      return CurrentProjectsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CurrentProjectsPage =
    /*#__PURE__*/
    function () {
      function CurrentProjectsPage() {
        _classCallCheck(this, CurrentProjectsPage);

        this.projects = [{
          projectName: 'backstab319.github.io',
          projectDescription: 'My progressive web app to display my personal projects and interest',
          projectRepo: 'https://github.com/backstab319/backstab319.github.io',
          projectLangs: ['Ionic Framework', 'Angular'],
          projectThumbnail: 'https://i.imgur.com/t5HqN3P.png'
        }];
      }

      _createClass(CurrentProjectsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CurrentProjectsPage;
    }();

    CurrentProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-current-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./current-projects.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backstab319/current-projects/current-projects.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./current-projects.page.scss */
      "./src/app/backstab319/current-projects/current-projects.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CurrentProjectsPage);
    /***/
  }
}]);
//# sourceMappingURL=current-projects-current-projects-module-es5.js.map