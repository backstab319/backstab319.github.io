function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-todo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/completed/completed.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/completed/completed.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsTodoCompletedCompletedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled='false'>\n  <ion-item *ngFor='let i of completed; let j = index' lines='none'>\n    <ion-label [color]='i.todoColor' [id]='i.todoText' style=\"text-decoration: line-through;\">\n      {{ i.todoText }}\n    </ion-label>\n    <ion-buttons slot='end'>\n      <ion-reorder></ion-reorder>\n      <ion-button (click)='undoCompleted(j)'>\n        <ion-icon name=\"undo\" slot='icon-only'></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"deleteCompleted(j)\">\n        <ion-icon name=\"trash\" slot='icon-only'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n</ion-reorder-group>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo-list/todo-list.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo-list/todo-list.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsTodoTodoListTodoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled='false'>\n  <ion-item *ngFor='let i of myList; let j = index' lines='none'>\n    <ion-label [color]='i.todoColor' [id]='i.todoText'>\n      {{ i.todoText }}\n    </ion-label>\n    <ion-buttons slot='end'>\n      <ion-reorder></ion-reorder>\n      <ion-button (click)='markDone(i.todoText,j)'>\n        <ion-icon name=\"done-all\" slot='icon-only'></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"delete(j)\">\n        <ion-icon name=\"trash\" slot='icon-only'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n</ion-reorder-group>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsTodoTodoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/applications'></ion-back-button>\n    </ion-buttons>\n    <ion-title>To Do</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'><h1>Make a note</h1></ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines='none'>\n              <form #formData='ngForm' (ngSubmit)='processForm(formData)'>\n                <ion-item>\n                  <ion-label position='floating'>To Do</ion-label>\n                  <ion-input type='text'\n                    clearInput\n                    ngModel\n                    name='todo'\n                    #todo='ngModel'\n                    minlength='5'\n                    required\n                  ></ion-input>\n                </ion-item>\n                <ion-item *ngIf='todo.invalid && todo.touched'>\n                  <ion-label color='danger'>Please fill the input</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-buttons slot='start'>\n                    <ion-button type='submit' [disabled]='todo.invalid'>\n                      <ion-icon name=\"add\" slot='icon-only'></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                  <ion-item>\n                    <ion-icon name=\"color-palette\"></ion-icon>\n                    <ion-select \n                    [interfaceOptions]='myInterface' \n                    interface='popover' \n                    [disabled]='todo.invalid'\n                    ngModel\n                    #color='ngModel'\n                    name='color'\n                    value='none'\n                    cancelText='Cancel'\n                    >\n                      <ion-select-option value='primary'>Primary</ion-select-option>\n                      <ion-select-option value='secondary'>Secondary</ion-select-option>\n                      <ion-select-option value='tertiary'>Tertiary</ion-select-option>\n                      <ion-select-option value='success'>Success</ion-select-option>\n                      <ion-select-option value='warning'>Warning</ion-select-option>\n                      <ion-select-option value='danger'>Danger</ion-select-option>\n                      <ion-select-option value='light'>Light</ion-select-option>\n                      <ion-select-option value='medium'>Medium</ion-select-option>\n                      <ion-select-option value='dark'>Dark</ion-select-option>\n                      <ion-select-option value='none' selected='none'>None</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-item>\n              </form>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12' size-sm='4' offset-sm='2'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>\n              <h3 *ngIf='myNote.length > 0'>My todo list</h3>\n              <h3 *ngIf='myNote.length < 1'>Nothing to see here</h3>\n            </ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>Keep your important notes here</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <app-todo-list></app-todo-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size='12' size-sm='4'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>\n              <h3 *ngIf='completedNote.length > 0'>Completed</h3>\n              <h3 *ngIf='completedNote.length < 1'>Nothing completed yet</h3>\n            </ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>Keep your completed notes here</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <app-completed></app-completed>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/applications/todo/completed/completed.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/applications/todo/completed/completed.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsTodoCompletedCompletedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy90b2RvL2NvbXBsZXRlZC9jb21wbGV0ZWQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/applications/todo/completed/completed.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/applications/todo/completed/completed.component.ts ***!
    \********************************************************************/

  /*! exports provided: CompletedComponent */

  /***/
  function srcAppApplicationsTodoCompletedCompletedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompletedComponent", function () {
      return CompletedComponent;
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


    var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../todo.service */
    "./src/app/applications/todo/todo.service.ts");

    var CompletedComponent =
    /*#__PURE__*/
    function () {
      function CompletedComponent(td) {
        _classCallCheck(this, CompletedComponent);

        this.td = td;
        this.completed = [];
      }

      _createClass(CompletedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.td.getUpdatedCompleted().subscribe(function (res) {
            _this.completed = res;
          });
        }
      }, {
        key: "doReorder",
        value: function doReorder(ev) {
          this.td.reorderCompleted(ev.detail.complete(this.completed));
        }
      }, {
        key: "deleteCompleted",
        value: function deleteCompleted(listIndex) {
          this.td.popCompleted(listIndex);
        }
      }, {
        key: "undoCompleted",
        value: function undoCompleted(indexNumber) {
          this.td.undoCompleted(indexNumber);
        }
      }]);

      return CompletedComponent;
    }();

    CompletedComponent.ctorParameters = function () {
      return [{
        type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }];
    };

    CompletedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-completed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./completed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/completed/completed.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./completed.component.scss */
      "./src/app/applications/todo/completed/completed.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])], CompletedComponent);
    /***/
  },

  /***/
  "./src/app/applications/todo/todo-list/todo-list.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/applications/todo/todo-list/todo-list.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsTodoTodoListTodoListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy90b2RvL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/applications/todo/todo-list/todo-list.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/applications/todo/todo-list/todo-list.component.ts ***!
    \********************************************************************/

  /*! exports provided: TodoListComponent */

  /***/
  function srcAppApplicationsTodoTodoListTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
      return TodoListComponent;
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
    /* harmony import */


    var _todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../todo.service */
    "./src/app/applications/todo/todo.service.ts");

    var TodoListComponent =
    /*#__PURE__*/
    function () {
      function TodoListComponent(td) {
        _classCallCheck(this, TodoListComponent);

        this.td = td;
      }

      _createClass(TodoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.td.getUpdatedList().subscribe(function (res) {
            _this2.myList = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "doReorder",
        value: function doReorder(ev) {
          this.td.reorderItem(ev.detail.complete(this.myList));
        }
      }, {
        key: "delete",
        value: function _delete(listIndex) {
          this.td.popItem(listIndex);
        }
      }, {
        key: "markDone",
        value: function markDone(noteId, itemIndex) {
          document.getElementById(noteId).style.textDecoration = 'line-through';
          this.td.putCompleted(itemIndex);
        }
      }]);

      return TodoListComponent;
    }();

    TodoListComponent.ctorParameters = function () {
      return [{
        type: _todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"])], TodoListComponent.prototype, "reorderGroup", void 0);
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo-list/todo-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo-list.component.scss */
      "./src/app/applications/todo/todo-list/todo-list.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])], TodoListComponent);
    /***/
  },

  /***/
  "./src/app/applications/todo/todo-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/applications/todo/todo-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: TodoPageRoutingModule */

  /***/
  function srcAppApplicationsTodoTodoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoPageRoutingModule", function () {
      return TodoPageRoutingModule;
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


    var _todo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./todo.page */
    "./src/app/applications/todo/todo.page.ts");

    var routes = [{
      path: '',
      component: _todo_page__WEBPACK_IMPORTED_MODULE_3__["TodoPage"]
    }];

    var TodoPageRoutingModule = function TodoPageRoutingModule() {
      _classCallCheck(this, TodoPageRoutingModule);
    };

    TodoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TodoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/applications/todo/todo.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/applications/todo/todo.module.ts ***!
    \**************************************************/

  /*! exports provided: TodoPageModule */

  /***/
  function srcAppApplicationsTodoTodoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoPageModule", function () {
      return TodoPageModule;
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


    var _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todo-routing.module */
    "./src/app/applications/todo/todo-routing.module.ts");
    /* harmony import */


    var _todo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./todo.page */
    "./src/app/applications/todo/todo.page.ts");
    /* harmony import */


    var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./todo-list/todo-list.component */
    "./src/app/applications/todo/todo-list/todo-list.component.ts");
    /* harmony import */


    var _completed_completed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./completed/completed.component */
    "./src/app/applications/todo/completed/completed.component.ts");

    var TodoPageModule = function TodoPageModule() {
      _classCallCheck(this, TodoPageModule);
    };

    TodoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TodoPageRoutingModule"]],
      declarations: [_todo_page__WEBPACK_IMPORTED_MODULE_6__["TodoPage"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"], _completed_completed_component__WEBPACK_IMPORTED_MODULE_8__["CompletedComponent"]]
    })], TodoPageModule);
    /***/
  },

  /***/
  "./src/app/applications/todo/todo.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/applications/todo/todo.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsTodoTodoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy90b2RvL3RvZG8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/applications/todo/todo.page.ts":
  /*!************************************************!*\
    !*** ./src/app/applications/todo/todo.page.ts ***!
    \************************************************/

  /*! exports provided: TodoPage */

  /***/
  function srcAppApplicationsTodoTodoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoPage", function () {
      return TodoPage;
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


    var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./todo.service */
    "./src/app/applications/todo/todo.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var TodoPage =
    /*#__PURE__*/
    function () {
      function TodoPage(td, alCtl) {
        _classCallCheck(this, TodoPage);

        this.td = td;
        this.alCtl = alCtl;
        this.pageLink = '/applications';
        this.myNote = [];
        this.completedNote = [];
        this.myInterface = {
          header: 'Color',
          subheader: 'Select a color',
          message: 'Select a color for your note'
        };
      }

      _createClass(TodoPage, [{
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var myAlert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alCtl.create({
                      header: 'Exists',
                      message: 'Note already exists',
                      buttons: ['OK']
                    });

                  case 2:
                    myAlert = _context.sent;
                    _context.next = 5;
                    return myAlert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.td.getUpdatedList().subscribe(function (res) {
            _this3.myNote = res;
          });
          this.td.getUpdatedCompleted().subscribe(function (res) {
            _this3.completedNote = res;
          });
        }
      }, {
        key: "processForm",
        value: function processForm(formData) {
          var localNotes = [];

          if (this.myNote.length > 0) {
            this.myNote.forEach(function (val) {
              localNotes.push(val.todoText);
            });
          }

          if (localNotes.includes(formData.value.todo)) {
            this.presentAlert();
            formData.resetForm();
            return;
          }

          this.td.putList({
            todoText: formData.value.todo,
            todoColor: formData.value.color
          });
          formData.resetForm();
        }
      }]);

      return TodoPage;
    }();

    TodoPage.ctorParameters = function () {
      return [{
        type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    TodoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo.page.scss */
      "./src/app/applications/todo/todo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], TodoPage);
    /***/
  },

  /***/
  "./src/app/applications/todo/todo.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/applications/todo/todo.service.ts ***!
    \***************************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppApplicationsTodoTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TodoService =
    /*#__PURE__*/
    function () {
      function TodoService() {
        _classCallCheck(this, TodoService);

        this.todoList = [];
        this.completedList = [];
        this.updatedList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updatedCompleted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(TodoService, [{
        key: "putList",
        value: function putList(item) {
          this.todoList.push(item);
          this.updatedList.next(_toConsumableArray(this.todoList));
        }
      }, {
        key: "getUpdatedList",
        value: function getUpdatedList() {
          return this.updatedList.asObservable();
        }
      }, {
        key: "getList",
        value: function getList() {
          return _toConsumableArray(this.todoList);
        }
      }, {
        key: "popItem",
        value: function popItem(itemIndex) {
          this.todoList.splice(itemIndex, 1);
          this.updatedList.next(_toConsumableArray(this.todoList));
        }
      }, {
        key: "reorderItem",
        value: function reorderItem(itemArray) {
          this.todoList = itemArray;
          this.updatedList.next(_toConsumableArray(this.todoList));
        }
      }, {
        key: "reorderCompleted",
        value: function reorderCompleted(itemArray) {
          this.completedList = itemArray;
          this.updatedCompleted.next(_toConsumableArray(this.completedList));
        }
      }, {
        key: "putCompleted",
        value: function putCompleted(itemIndex) {
          var cl = this.todoList[itemIndex];
          this.completedList.push(cl);
          this.updatedCompleted.next(_toConsumableArray(this.completedList));
          this.delCompletedFromTodo(itemIndex);
        }
      }, {
        key: "getCompleted",
        value: function getCompleted() {
          return _toConsumableArray(this.completedList);
        }
      }, {
        key: "getUpdatedCompleted",
        value: function getUpdatedCompleted() {
          return this.updatedCompleted.asObservable();
        }
      }, {
        key: "delCompletedFromTodo",
        value: function delCompletedFromTodo(index) {
          this.todoList.splice(index, 1);
          this.updatedList.next(_toConsumableArray(this.todoList));
        }
      }, {
        key: "popCompleted",
        value: function popCompleted(itemIndex) {
          this.completedList.splice(itemIndex, 1);
          this.updatedCompleted.next(_toConsumableArray(this.completedList));
        }
      }, {
        key: "deleteCompleted",
        value: function deleteCompleted(index) {
          this.completedList.splice(index, 1);
          this.updatedCompleted.next(_toConsumableArray(this.completedList));
        }
      }, {
        key: "undoCompleted",
        value: function undoCompleted(index) {
          var cl = this.completedList[index];
          this.putList(cl);
          this.deleteCompleted(index);
        }
      }]);

      return TodoService;
    }();

    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TodoService);
    /***/
  }
}]);
//# sourceMappingURL=todo-todo-module-es5.js.map