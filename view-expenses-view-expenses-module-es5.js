function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-expenses-view-expenses-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/view-expenses/view-expenses.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/view-expenses/view-expenses.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsExpensesViewExpensesViewExpensesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding'>\n          <ion-card-header>\n            <ion-card-title><h1>View expenses</h1></ion-card-title>\n            <ion-card-subtitle>View your expenses here</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card *ngFor='let i of boards; let j = index' class='ion-padding'>\n          <ion-card-header>\n            <ion-card-title>\n              <ion-item lines='none'>\n                <ion-label class='ion-text-wrap'><ion-text [color]='i.boardNameColor'><h1>{{i.boardName}}</h1></ion-text></ion-label>\n              </ion-item>\n            </ion-card-title>\n            <ion-card-subtitle class='ion-padding-start' [color]='i.boardSubtitleColor'>{{i.boardSubtitle}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines='none' *ngIf='i.boardExpenses.length > 0'>\n              <ion-item *ngFor='let j of i.boardExpenses'>\n                <ion-label slot='start' [color]='j.expensesColor'> {{j.expensesName}} </ion-label>\n                <ion-chip slot='end'>\n                  <ion-label> {{j.expensesValue}} </ion-label>\n                </ion-chip>\n              </ion-item>\n            </ion-list>\n            <ion-item lines='none'>\n              <ion-buttons>\n                <ion-button (click)='boardTotal(j,i.boardExpenses)' *ngIf='i.boardExpenses.length > 0'><ion-icon name=\"eye\" slot='icon-only'></ion-icon></ion-button>\n                <ion-button (click)='boardEdit(j)'><ion-icon name=\"create\" slot='icon-only'></ion-icon></ion-button>\n                <ion-button (click)='boardDelete(j)'><ion-icon name=\"trash\" slot='icon-only'></ion-icon></ion-button>\n              </ion-buttons>\n              <ion-chip slot='end' [id]='j' hidden='true' *ngIf='i.boardExpenses.length > 0'>\n                <ion-label [id]='j+\"total\"'></ion-label>\n              </ion-chip>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/applications/expenses/view-expenses/view-expenses-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/applications/expenses/view-expenses/view-expenses-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ViewExpensesPageRoutingModule */

  /***/
  function srcAppApplicationsExpensesViewExpensesViewExpensesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewExpensesPageRoutingModule", function () {
      return ViewExpensesPageRoutingModule;
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


    var _view_expenses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-expenses.page */
    "./src/app/applications/expenses/view-expenses/view-expenses.page.ts");

    var routes = [{
      path: '',
      component: _view_expenses_page__WEBPACK_IMPORTED_MODULE_3__["ViewExpensesPage"]
    }];

    var ViewExpensesPageRoutingModule = function ViewExpensesPageRoutingModule() {
      _classCallCheck(this, ViewExpensesPageRoutingModule);
    };

    ViewExpensesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewExpensesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/applications/expenses/view-expenses/view-expenses.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/applications/expenses/view-expenses/view-expenses.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ViewExpensesPageModule */

  /***/
  function srcAppApplicationsExpensesViewExpensesViewExpensesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewExpensesPageModule", function () {
      return ViewExpensesPageModule;
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


    var _view_expenses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-expenses-routing.module */
    "./src/app/applications/expenses/view-expenses/view-expenses-routing.module.ts");
    /* harmony import */


    var _view_expenses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-expenses.page */
    "./src/app/applications/expenses/view-expenses/view-expenses.page.ts");

    var ViewExpensesPageModule = function ViewExpensesPageModule() {
      _classCallCheck(this, ViewExpensesPageModule);
    };

    ViewExpensesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_expenses_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewExpensesPageRoutingModule"]],
      declarations: [_view_expenses_page__WEBPACK_IMPORTED_MODULE_6__["ViewExpensesPage"]]
    })], ViewExpensesPageModule);
    /***/
  },

  /***/
  "./src/app/applications/expenses/view-expenses/view-expenses.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/applications/expenses/view-expenses/view-expenses.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsExpensesViewExpensesViewExpensesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9leHBlbnNlcy92aWV3LWV4cGVuc2VzL3ZpZXctZXhwZW5zZXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/applications/expenses/view-expenses/view-expenses.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/applications/expenses/view-expenses/view-expenses.page.ts ***!
    \***************************************************************************/

  /*! exports provided: ViewExpensesPage */

  /***/
  function srcAppApplicationsExpensesViewExpensesViewExpensesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewExpensesPage", function () {
      return ViewExpensesPage;
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


    var _expenses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../expenses.service */
    "./src/app/applications/expenses/expenses.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ViewExpensesPage =
    /*#__PURE__*/
    function () {
      function ViewExpensesPage(es, router) {
        var _this = this;

        _classCallCheck(this, ViewExpensesPage);

        this.es = es;
        this.router = router;
        this.boards = [];
        this.total = 0;

        this.boardEdit = function (itemIndex) {
          _this.es.putCurrentBoard(_this.boards[itemIndex]);

          _this.es.deleteFromExpensesBoards(itemIndex);

          _this.router.navigateByUrl('applications/expenses/expenses-board');
        };

        this.boardDelete = function (itemIndex) {
          return _this.es.deleteFromExpensesBoards(itemIndex);
        };

        this.boardTotal = function (itemIndex, data) {
          document.getElementById(itemIndex.toString()).hidden = !document.getElementById(itemIndex.toString()).hidden;
          data.map(function (val) {
            return _this.total += val.expensesValue;
          });
          document.getElementById(itemIndex.toString() + 'total').innerHTML = _this.total.toString();
          _this.total = 0;
        };
      }

      _createClass(ViewExpensesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.es.getUpdatedExpensesBoards().subscribe(function (res) {
            return _this2.boards = res;
          });
          this.es.getUpdatedCurrentBoard().subscribe(function (res) {
            return _this2.currentBoard = res;
          });
        }
      }]);

      return ViewExpensesPage;
    }();

    ViewExpensesPage.ctorParameters = function () {
      return [{
        type: _expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ViewExpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-expenses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-expenses.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/view-expenses/view-expenses.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-expenses.page.scss */
      "./src/app/applications/expenses/view-expenses/view-expenses.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ViewExpensesPage);
    /***/
  }
}]);
//# sourceMappingURL=view-expenses-view-expenses-module-es5.js.map