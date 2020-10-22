function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assignments-assignments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/assignments.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/assignments.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsAssignmentsAssignmentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/backstab319'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Assignments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding'>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>Assignments Section</ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>This page contains all the assignments that i have done as a test or challenge by a person or a company</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-list lines='none'>\n              <ion-item button (click)=\"gotoAssignment('as1')\">\n                <ion-label>\n                  <h2>Edufied</h2>\n                  <p>Management module to manage articles. View, add, edit articles.</p>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/applications/assignments/assignments-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/applications/assignments/assignments-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: AssignmentsPageRoutingModule */

  /***/
  function srcAppApplicationsAssignmentsAssignmentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentsPageRoutingModule", function () {
      return AssignmentsPageRoutingModule;
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


    var _assignments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./assignments.page */
    "./src/app/applications/assignments/assignments.page.ts");

    var routes = [{
      path: '',
      component: _assignments_page__WEBPACK_IMPORTED_MODULE_3__["AssignmentsPage"]
    }, {
      path: 'as1',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | as1-as1-module */
        "as1-as1-module").then(__webpack_require__.bind(null,
        /*! ./as1/as1.module */
        "./src/app/applications/assignments/as1/as1.module.ts")).then(function (m) {
          return m.As1PageModule;
        });
      }
    }];

    var AssignmentsPageRoutingModule = function AssignmentsPageRoutingModule() {
      _classCallCheck(this, AssignmentsPageRoutingModule);
    };

    AssignmentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssignmentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/applications/assignments/assignments.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/applications/assignments/assignments.module.ts ***!
    \****************************************************************/

  /*! exports provided: AssignmentsPageModule */

  /***/
  function srcAppApplicationsAssignmentsAssignmentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentsPageModule", function () {
      return AssignmentsPageModule;
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


    var _assignments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./assignments-routing.module */
    "./src/app/applications/assignments/assignments-routing.module.ts");
    /* harmony import */


    var _assignments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./assignments.page */
    "./src/app/applications/assignments/assignments.page.ts");

    var AssignmentsPageModule = function AssignmentsPageModule() {
      _classCallCheck(this, AssignmentsPageModule);
    };

    AssignmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _assignments_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssignmentsPageRoutingModule"]],
      declarations: [_assignments_page__WEBPACK_IMPORTED_MODULE_6__["AssignmentsPage"]]
    })], AssignmentsPageModule);
    /***/
  },

  /***/
  "./src/app/applications/assignments/assignments.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/applications/assignments/assignments.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsAssignmentsAssignmentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9hc3NpZ25tZW50cy9hc3NpZ25tZW50cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/applications/assignments/assignments.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/applications/assignments/assignments.page.ts ***!
    \**************************************************************/

  /*! exports provided: AssignmentsPage */

  /***/
  function srcAppApplicationsAssignmentsAssignmentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentsPage", function () {
      return AssignmentsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var AssignmentsPage =
    /*#__PURE__*/
    function () {
      function AssignmentsPage(navCtl) {
        _classCallCheck(this, AssignmentsPage);

        this.navCtl = navCtl;
      }

      _createClass(AssignmentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gotoAssignment",
        value: function gotoAssignment(pageName) {
          if (pageName === 'as1') {
            this.navCtl.navigateForward('/applications/assignments/as1/view-article');
          }
        }
      }]);

      return AssignmentsPage;
    }();

    AssignmentsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    AssignmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assignments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./assignments.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/assignments/assignments.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./assignments.page.scss */
      "./src/app/applications/assignments/assignments.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], AssignmentsPage);
    /***/
  }
}]);
//# sourceMappingURL=assignments-assignments-module-es5.js.map