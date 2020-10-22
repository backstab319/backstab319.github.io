function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenses-expenses-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/expenses.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/expenses.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsExpensesExpensesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n    <ion-back-button defaultHref='/applications'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Expenses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot='bottom'>\n      <ion-tab-button tab='view-expenses'>\n        <ion-icon name=\"eye\"></ion-icon>\n        <ion-label>View expenses</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab='expenses-board'>\n        <ion-icon name=\"clipboard\"></ion-icon>\n        <ion-label>Expense board</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/applications/expenses/expenses-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/applications/expenses/expenses-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: ExpensesPageRoutingModule */

  /***/
  function srcAppApplicationsExpensesExpensesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesPageRoutingModule", function () {
      return ExpensesPageRoutingModule;
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


    var _expenses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./expenses.page */
    "./src/app/applications/expenses/expenses.page.ts");

    var routes = [{
      path: '',
      component: _expenses_page__WEBPACK_IMPORTED_MODULE_3__["ExpensesPage"],
      children: [{
        path: 'view-expenses',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | view-expenses-view-expenses-module */
            [__webpack_require__.e("common"), __webpack_require__.e("view-expenses-view-expenses-module")]).then(__webpack_require__.bind(null,
            /*! ./view-expenses/view-expenses.module */
            "./src/app/applications/expenses/view-expenses/view-expenses.module.ts")).then(function (m) {
              return m.ViewExpensesPageModule;
            });
          }
        }]
      }, {
        path: 'expenses-board',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | expense-board-expense-board-module */
            [__webpack_require__.e("common"), __webpack_require__.e("expense-board-expense-board-module")]).then(__webpack_require__.bind(null,
            /*! ./expense-board/expense-board.module */
            "./src/app/applications/expenses/expense-board/expense-board.module.ts")).then(function (m) {
              return m.ExpenseBoardPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/applications/expenses/view-expenses',
        pathMatch: 'full'
      }]
    }];

    var ExpensesPageRoutingModule = function ExpensesPageRoutingModule() {
      _classCallCheck(this, ExpensesPageRoutingModule);
    };

    ExpensesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExpensesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/applications/expenses/expenses.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/applications/expenses/expenses.module.ts ***!
    \**********************************************************/

  /*! exports provided: ExpensesPageModule */

  /***/
  function srcAppApplicationsExpensesExpensesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesPageModule", function () {
      return ExpensesPageModule;
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


    var _expenses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./expenses-routing.module */
    "./src/app/applications/expenses/expenses-routing.module.ts");
    /* harmony import */


    var _expenses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./expenses.page */
    "./src/app/applications/expenses/expenses.page.ts");

    var ExpensesPageModule = function ExpensesPageModule() {
      _classCallCheck(this, ExpensesPageModule);
    };

    ExpensesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _expenses_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpensesPageRoutingModule"]],
      declarations: [_expenses_page__WEBPACK_IMPORTED_MODULE_6__["ExpensesPage"]],
      exports: []
    })], ExpensesPageModule);
    /***/
  },

  /***/
  "./src/app/applications/expenses/expenses.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/applications/expenses/expenses.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsExpensesExpensesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9leHBlbnNlcy9leHBlbnNlcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/applications/expenses/expenses.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/applications/expenses/expenses.page.ts ***!
    \********************************************************/

  /*! exports provided: ExpensesPage */

  /***/
  function srcAppApplicationsExpensesExpensesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesPage", function () {
      return ExpensesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExpensesPage =
    /*#__PURE__*/
    function () {
      function ExpensesPage() {
        _classCallCheck(this, ExpensesPage);

        this.back = '/applications';
      }

      _createClass(ExpensesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExpensesPage;
    }();

    ExpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expenses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expenses.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/expenses.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expenses.page.scss */
      "./src/app/applications/expenses/expenses.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ExpensesPage);
    /***/
  }
}]);
//# sourceMappingURL=expenses-expenses-module-es5.js.map