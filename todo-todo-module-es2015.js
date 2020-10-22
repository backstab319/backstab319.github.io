(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-todo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/completed/completed.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/completed/completed.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled='false'>\n  <ion-item *ngFor='let i of completed; let j = index' lines='none'>\n    <ion-label [color]='i.todoColor' [id]='i.todoText' style=\"text-decoration: line-through;\">\n      {{ i.todoText }}\n    </ion-label>\n    <ion-buttons slot='end'>\n      <ion-reorder></ion-reorder>\n      <ion-button (click)='undoCompleted(j)'>\n        <ion-icon name=\"undo\" slot='icon-only'></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"deleteCompleted(j)\">\n        <ion-icon name=\"trash\" slot='icon-only'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n</ion-reorder-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo-list/todo-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo-list/todo-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled='false'>\n  <ion-item *ngFor='let i of myList; let j = index' lines='none'>\n    <ion-label [color]='i.todoColor' [id]='i.todoText'>\n      {{ i.todoText }}\n    </ion-label>\n    <ion-buttons slot='end'>\n      <ion-reorder></ion-reorder>\n      <ion-button (click)='markDone(i.todoText,j)'>\n        <ion-icon name=\"done-all\" slot='icon-only'></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"delete(j)\">\n        <ion-icon name=\"trash\" slot='icon-only'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n</ion-reorder-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/applications'></ion-back-button>\n    </ion-buttons>\n    <ion-title>To Do</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'><h1>Make a note</h1></ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines='none'>\n              <form #formData='ngForm' (ngSubmit)='processForm(formData)'>\n                <ion-item>\n                  <ion-label position='floating'>To Do</ion-label>\n                  <ion-input type='text'\n                    clearInput\n                    ngModel\n                    name='todo'\n                    #todo='ngModel'\n                    minlength='5'\n                    required\n                  ></ion-input>\n                </ion-item>\n                <ion-item *ngIf='todo.invalid && todo.touched'>\n                  <ion-label color='danger'>Please fill the input</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-buttons slot='start'>\n                    <ion-button type='submit' [disabled]='todo.invalid'>\n                      <ion-icon name=\"add\" slot='icon-only'></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                  <ion-item>\n                    <ion-icon name=\"color-palette\"></ion-icon>\n                    <ion-select \n                    [interfaceOptions]='myInterface' \n                    interface='popover' \n                    [disabled]='todo.invalid'\n                    ngModel\n                    #color='ngModel'\n                    name='color'\n                    value='none'\n                    cancelText='Cancel'\n                    >\n                      <ion-select-option value='primary'>Primary</ion-select-option>\n                      <ion-select-option value='secondary'>Secondary</ion-select-option>\n                      <ion-select-option value='tertiary'>Tertiary</ion-select-option>\n                      <ion-select-option value='success'>Success</ion-select-option>\n                      <ion-select-option value='warning'>Warning</ion-select-option>\n                      <ion-select-option value='danger'>Danger</ion-select-option>\n                      <ion-select-option value='light'>Light</ion-select-option>\n                      <ion-select-option value='medium'>Medium</ion-select-option>\n                      <ion-select-option value='dark'>Dark</ion-select-option>\n                      <ion-select-option value='none' selected='none'>None</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-item>\n              </form>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12' size-sm='4' offset-sm='2'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>\n              <h3 *ngIf='myNote.length > 0'>My todo list</h3>\n              <h3 *ngIf='myNote.length < 1'>Nothing to see here</h3>\n            </ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>Keep your important notes here</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <app-todo-list></app-todo-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size='12' size-sm='4'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>\n              <h3 *ngIf='completedNote.length > 0'>Completed</h3>\n              <h3 *ngIf='completedNote.length < 1'>Nothing completed yet</h3>\n            </ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>Keep your completed notes here</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <app-completed></app-completed>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/applications/todo/completed/completed.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/applications/todo/completed/completed.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy90b2RvL2NvbXBsZXRlZC9jb21wbGV0ZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/applications/todo/completed/completed.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/applications/todo/completed/completed.component.ts ***!
  \********************************************************************/
/*! exports provided: CompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedComponent", function() { return CompletedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/applications/todo/todo.service.ts");



let CompletedComponent = class CompletedComponent {
    constructor(td) {
        this.td = td;
        this.completed = [];
    }
    ngOnInit() {
        this.td.getUpdatedCompleted().subscribe(res => {
            this.completed = res;
        });
    }
    doReorder(ev) {
        this.td.reorderCompleted(ev.detail.complete(this.completed));
    }
    deleteCompleted(listIndex) {
        this.td.popCompleted(listIndex);
    }
    undoCompleted(indexNumber) {
        this.td.undoCompleted(indexNumber);
    }
};
CompletedComponent.ctorParameters = () => [
    { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
];
CompletedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-completed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./completed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/completed/completed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./completed.component.scss */ "./src/app/applications/todo/completed/completed.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
], CompletedComponent);



/***/ }),

/***/ "./src/app/applications/todo/todo-list/todo-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/applications/todo/todo-list/todo-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy90b2RvL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/applications/todo/todo-list/todo-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/applications/todo/todo-list/todo-list.component.ts ***!
  \********************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo.service */ "./src/app/applications/todo/todo.service.ts");




let TodoListComponent = class TodoListComponent {
    constructor(td) {
        this.td = td;
    }
    ngOnInit() {
        this.td.getUpdatedList().subscribe(res => {
            this.myList = res;
        }, err => {
            console.log(err);
        });
    }
    doReorder(ev) {
        this.td.reorderItem(ev.detail.complete(this.myList));
    }
    delete(listIndex) {
        this.td.popItem(listIndex);
    }
    markDone(noteId, itemIndex) {
        document.getElementById(noteId).style.textDecoration = 'line-through';
        this.td.putCompleted(itemIndex);
    }
};
TodoListComponent.ctorParameters = () => [
    { type: _todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"])
], TodoListComponent.prototype, "reorderGroup", void 0);
TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo-list/todo-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/applications/todo/todo-list/todo-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
], TodoListComponent);



/***/ }),

/***/ "./src/app/applications/todo/todo-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/applications/todo/todo-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: TodoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageRoutingModule", function() { return TodoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.page */ "./src/app/applications/todo/todo.page.ts");




const routes = [
    {
        path: '',
        component: _todo_page__WEBPACK_IMPORTED_MODULE_3__["TodoPage"]
    }
];
let TodoPageRoutingModule = class TodoPageRoutingModule {
};
TodoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TodoPageRoutingModule);



/***/ }),

/***/ "./src/app/applications/todo/todo.module.ts":
/*!**************************************************!*\
  !*** ./src/app/applications/todo/todo.module.ts ***!
  \**************************************************/
/*! exports provided: TodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageModule", function() { return TodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/applications/todo/todo-routing.module.ts");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo.page */ "./src/app/applications/todo/todo.page.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/applications/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _completed_completed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./completed/completed.component */ "./src/app/applications/todo/completed/completed.component.ts");









let TodoPageModule = class TodoPageModule {
};
TodoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TodoPageRoutingModule"]
        ],
        declarations: [_todo_page__WEBPACK_IMPORTED_MODULE_6__["TodoPage"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"], _completed_completed_component__WEBPACK_IMPORTED_MODULE_8__["CompletedComponent"]]
    })
], TodoPageModule);



/***/ }),

/***/ "./src/app/applications/todo/todo.page.scss":
/*!**************************************************!*\
  !*** ./src/app/applications/todo/todo.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy90b2RvL3RvZG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/applications/todo/todo.page.ts":
/*!************************************************!*\
  !*** ./src/app/applications/todo/todo.page.ts ***!
  \************************************************/
/*! exports provided: TodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPage", function() { return TodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.service */ "./src/app/applications/todo/todo.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let TodoPage = class TodoPage {
    constructor(td, alCtl) {
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
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myAlert = yield this.alCtl.create({
                header: 'Exists',
                message: 'Note already exists',
                buttons: ['OK']
            });
            yield myAlert.present();
        });
    }
    ngOnInit() {
        this.td.getUpdatedList().subscribe(res => {
            this.myNote = res;
        });
        this.td.getUpdatedCompleted().subscribe(res => {
            this.completedNote = res;
        });
    }
    processForm(formData) {
        const localNotes = [];
        if (this.myNote.length > 0) {
            this.myNote.forEach(val => {
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
};
TodoPage.ctorParameters = () => [
    { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
TodoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/todo/todo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo.page.scss */ "./src/app/applications/todo/todo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], TodoPage);



/***/ }),

/***/ "./src/app/applications/todo/todo.service.ts":
/*!***************************************************!*\
  !*** ./src/app/applications/todo/todo.service.ts ***!
  \***************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TodoService = class TodoService {
    constructor() {
        this.todoList = [];
        this.completedList = [];
        this.updatedList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updatedCompleted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    putList(item) {
        this.todoList.push(item);
        this.updatedList.next([...this.todoList]);
    }
    getUpdatedList() {
        return this.updatedList.asObservable();
    }
    getList() {
        return [...this.todoList];
    }
    popItem(itemIndex) {
        this.todoList.splice(itemIndex, 1);
        this.updatedList.next([...this.todoList]);
    }
    reorderItem(itemArray) {
        this.todoList = itemArray;
        this.updatedList.next([...this.todoList]);
    }
    reorderCompleted(itemArray) {
        this.completedList = itemArray;
        this.updatedCompleted.next([...this.completedList]);
    }
    putCompleted(itemIndex) {
        const cl = this.todoList[itemIndex];
        this.completedList.push(cl);
        this.updatedCompleted.next([...this.completedList]);
        this.delCompletedFromTodo(itemIndex);
    }
    getCompleted() {
        return [...this.completedList];
    }
    getUpdatedCompleted() {
        return this.updatedCompleted.asObservable();
    }
    delCompletedFromTodo(index) {
        this.todoList.splice(index, 1);
        this.updatedList.next([...this.todoList]);
    }
    popCompleted(itemIndex) {
        this.completedList.splice(itemIndex, 1);
        this.updatedCompleted.next([...this.completedList]);
    }
    deleteCompleted(index) {
        this.completedList.splice(index, 1);
        this.updatedCompleted.next([...this.completedList]);
    }
    undoCompleted(index) {
        const cl = this.completedList[index];
        this.putList(cl);
        this.deleteCompleted(index);
    }
};
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TodoService);



/***/ })

}]);
//# sourceMappingURL=todo-todo-module-es2015.js.map