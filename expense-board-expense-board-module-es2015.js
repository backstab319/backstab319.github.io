(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-board-expense-board-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/expense-board/expense-board-preview/expense-board-preview.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/expense-board/expense-board-preview/expense-board-preview.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card class='ion-padding'>\n  <ion-card-header>\n    <ion-card-title>\n      <ion-item *ngIf='board.boardName != \"\"' lines='none'>\n        <h2><ion-text [color]='board.boardNameColor'>Preview of '{{board.boardName}}' expense board</ion-text></h2>\n        <app-color-selector (color)=\"selectColor($event,'title')\"></app-color-selector>\n      </ion-item>\n      <h2 *ngIf='board.boardName == \"\"'>\n        No preview available yet\n      </h2>\n    </ion-card-title>\n    <ion-card-subtitle>\n      <ion-item lines='none' *ngIf='board.boardName != \"\"'>\n        <ion-text [color]='board.boardSubtitleColor'>{{board.boardSubtitle}}</ion-text>\n        <app-color-selector (color)=\"selectColor($event,'subtitle')\"></app-color-selector>\n      </ion-item>\n      <div *ngIf='board.boardName == \"\"'>Preview of the board will be shown here to make some final changes before adding it to your expenses board</div>\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-list lines='none' *ngIf=\"board.boardName != ''\">\n      <ion-item *ngFor='let j of board.boardExpenses; let k = index'>\n        <ion-label [color]='j.expensesColor'> {{j.expensesName}} </ion-label>\n        <ion-buttons slot='end'>\n          <ion-chip>\n            <ion-label> {{j.expensesValue}} </ion-label>\n          </ion-chip>\n          <app-color-selector (color)=\"selectColor($event,k)\"></app-color-selector>\n          <ion-button color='dark' (click)='deleteExpense(j)'>\n            <ion-icon name=\"close\" slot='icon-only'></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n    <ion-row *ngIf='board.boardName != \"\"'>\n      <ion-col size='12' size-sm='6'>\n        <ion-button\n        fill='outline'\n        expand='block'\n        color='dark'\n        (click)='raiseAddBoard()'\n        >Add\n        <ion-icon name=\"add\" slot='end'></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size='12' size-sm='6'>\n        <ion-button\n        fill='outline'\n        expand='block'\n        color='dark'\n        (click)='raiseDelBoard()'\n        >Delete\n        <ion-icon name=\"trash\" slot='end'></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/expense-board/expense-board.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/expense-board/expense-board.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <app-expense-board-preview></app-expense-board-preview>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12' size-sm='4' offset-sm='2'>\n        <ion-card class='ion-padding'>\n          <ion-card-header>\n            <ion-card-title><h1>\n              New expenses board detail\n            </h1></ion-card-title>\n            <ion-card-subtitle>Enter the details of new expenses board</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <form #boardForm='ngForm' (ngSubmit)='onSubmitBoardForm(boardForm)'>\n              <ion-list lines='none'>\n                <ion-item>\n                  <ion-label position='floating'>Board Title</ion-label>\n                  <ion-input type='text' clearInput\n                  ngModel\n                  name='boardTitle'\n                  #boardTitle='ngModel'\n                  required\n                  ></ion-input>\n                </ion-item>\n                <ion-item *ngIf='boardTitle.touched && boardTitle.invalid'><ion-label color='danger'>Please enter board title</ion-label></ion-item>\n                <ion-item>\n                  <ion-label position='floating'>Board Subtitle</ion-label>\n                  <ion-input type='text' clearInput\n                  ngModel\n                  name='boardSubtitle'\n                  #boardSubtitle='ngModel'\n                  required\n                  ></ion-input>\n                </ion-item>\n                <ion-item *ngIf='boardSubtitle.touched && boardSubtitle.invalid'><ion-label color='danger'>Please enter board subtitle</ion-label></ion-item>\n              </ion-list>\n              <ion-row>\n                <ion-col size='12'>\n                  <ion-button type='submit'\n                    expand='block'\n                    fill='outline'\n                    color='dark'\n                    [disabled]='!(boardTitle.valid && boardSubtitle.valid)'\n                    >\n                    Create\n                    <ion-icon name=\"create\" slot='end'></ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size='12' size-sm='4'>\n        <ion-card class='ion-padding'>\n          <ion-card-header>\n            <ion-card-title><h1>\n              Add expenses to the board\n            </h1></ion-card-title>\n            <ion-card-subtitle>\n              Add details of expenses to the board\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <form #expensesForm='ngForm' (ngSubmit)='ongSubmitExpensesForm(expensesForm)'>\n              <ion-list lines='none'>\n                <ion-item>\n                  <ion-label position='floating'>Expense Name</ion-label>\n                  <ion-input type='text'\n                  ngModel\n                  #expenseName='ngModel'\n                  name='expenseName'\n                  clearInput\n                  required\n                  ></ion-input>\n                </ion-item>\n                <ion-item *ngIf='expenseName.invalid && expenseName.touched'><ion-label color='danger'>Expense name required</ion-label></ion-item>\n              <ion-item>\n                <ion-label position='floating'>Expense amount</ion-label>\n                <ion-input\n                type='number'\n                ngModel\n                #expenseAmount='ngModel'\n                name='expenseAmount'\n                clearInput\n                required\n                ></ion-input>\n              </ion-item>\n              <ion-item *ngIf='expenseAmount.invalid && expenseAmount.touched'><ion-label color='danger'>Expense amount required</ion-label></ion-item>\n              </ion-list>\n              <ion-row>\n                <ion-col size='12'>\n                  <ion-button\n                  type='submit'\n                  expand='block'\n                  fill='outline'\n                  color='dark'\n                  [disabled]='!(expenseName.valid && expenseAmount.valid)'\n                  >\n                  Add\n                  <ion-icon name=\"add-circle-outline\" slot='end'></ion-icon></ion-button>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/tools/color-selector/color-selector.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/tools/color-selector/color-selector.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item lines='none'>\n  <ion-label><ion-icon name=\"color-palette\"></ion-icon></ion-label>\n  <ion-select\n  [interfaceOptions]='myPopOver' interface='popover' (ionChange)='dispColor(color.value)' #color\n  >\n    <ion-select-option value='primary'>Primary</ion-select-option>\n    <ion-select-option value='secondary'>Secondary</ion-select-option>\n    <ion-select-option value='tertiary'>Tertiary</ion-select-option>\n    <ion-select-option value='success'>Success</ion-select-option>\n    <ion-select-option value='warning'>Warning</ion-select-option>\n    <ion-select-option value='danger'>Danger</ion-select-option>\n    <ion-select-option value='light'>Light</ion-select-option>\n    <ion-select-option value='medium'>Medium</ion-select-option>\n    <ion-select-option value='dark'>Dark</ion-select-option>\n    <ion-select-option value='none'>None</ion-select-option>\n  </ion-select>\n</ion-item>");

/***/ }),

/***/ "./src/app/applications/expenses/expense-board/expense-board-preview/expense-board-preview.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/applications/expenses/expense-board/expense-board-preview/expense-board-preview.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9leHBlbnNlcy9leHBlbnNlLWJvYXJkL2V4cGVuc2UtYm9hcmQtcHJldmlldy9leHBlbnNlLWJvYXJkLXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/applications/expenses/expense-board/expense-board-preview/expense-board-preview.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/applications/expenses/expense-board/expense-board-preview/expense-board-preview.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ExpenseBoardPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseBoardPreviewComponent", function() { return ExpenseBoardPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _expenses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../expenses.service */ "./src/app/applications/expenses/expenses.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ExpenseBoardPreviewComponent = class ExpenseBoardPreviewComponent {
    constructor(eb, alertController, router) {
        this.eb = eb;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
        this.board = {
            boardName: '',
            boardSubtitle: '',
            boardExpenses: [],
            boardNameColor: '',
            boardSubtitleColor: ''
        };
        this.eb.getUpdatedCurrentBoard().subscribe(res => {
            this.board = res;
        });
    }
    raiseAddBoard() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myAddAlert = yield this.alertController.create({
                header: 'Are you sure?',
                subHeader: 'Add this board?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Yes',
                        role: 'ok',
                        handler: () => {
                            this.addBoard();
                        }
                    }
                ]
            });
            yield myAddAlert.present();
        });
    }
    raiseDelBoard() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myDelAlert = yield this.alertController.create({
                header: 'Are you sure?',
                subHeader: 'Delete this board?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Yes',
                        role: 'ok',
                        handler: () => {
                            this.delBoard();
                        }
                    }
                ]
            });
            yield myDelAlert.present();
        });
    }
    addBoard() {
        this.eb.putIntoExpensesBoards(this.board);
        this.eb.deleteCurrentBoard();
        this.router.navigateByUrl('/applications/expenses/view-expenses');
    }
    delBoard() {
        this.board = {
            boardName: '',
            boardSubtitle: '',
            boardExpenses: [],
            boardNameColor: '',
            boardSubtitleColor: ''
        };
        this.eb.deleteCurrentBoard();
    }
    deleteExpense(index) {
        this.board.boardExpenses.splice(index, 1);
    }
    selectColor(color, element) {
        if (element == 'title') {
            this.board.boardNameColor = color;
        }
        else if (element == 'subtitle') {
            this.board.boardSubtitleColor = color;
        }
        else {
            this.board.boardExpenses[Number(element)].expensesColor = color;
        }
    }
};
ExpenseBoardPreviewComponent.ctorParameters = () => [
    { type: _expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ExpenseBoardPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-board-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expense-board-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/expense-board/expense-board-preview/expense-board-preview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expense-board-preview.component.scss */ "./src/app/applications/expenses/expense-board/expense-board-preview/expense-board-preview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ExpenseBoardPreviewComponent);



/***/ }),

/***/ "./src/app/applications/expenses/expense-board/expense-board-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/applications/expenses/expense-board/expense-board-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ExpenseBoardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseBoardPageRoutingModule", function() { return ExpenseBoardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _expense_board_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-board.page */ "./src/app/applications/expenses/expense-board/expense-board.page.ts");




const routes = [
    {
        path: '',
        component: _expense_board_page__WEBPACK_IMPORTED_MODULE_3__["ExpenseBoardPage"]
    }
];
let ExpenseBoardPageRoutingModule = class ExpenseBoardPageRoutingModule {
};
ExpenseBoardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpenseBoardPageRoutingModule);



/***/ }),

/***/ "./src/app/applications/expenses/expense-board/expense-board.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/applications/expenses/expense-board/expense-board.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ExpenseBoardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseBoardPageModule", function() { return ExpenseBoardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expense_board_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expense-board-routing.module */ "./src/app/applications/expenses/expense-board/expense-board-routing.module.ts");
/* harmony import */ var _expense_board_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expense-board.page */ "./src/app/applications/expenses/expense-board/expense-board.page.ts");
/* harmony import */ var _expense_board_preview_expense_board_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expense-board-preview/expense-board-preview.component */ "./src/app/applications/expenses/expense-board/expense-board-preview/expense-board-preview.component.ts");
/* harmony import */ var _tools_tools_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/tools.module */ "./src/app/applications/expenses/tools/tools.module.ts");









let ExpenseBoardPageModule = class ExpenseBoardPageModule {
};
ExpenseBoardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _expense_board_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpenseBoardPageRoutingModule"],
            _tools_tools_module__WEBPACK_IMPORTED_MODULE_8__["ToolsModule"]
        ],
        declarations: [_expense_board_page__WEBPACK_IMPORTED_MODULE_6__["ExpenseBoardPage"], _expense_board_preview_expense_board_preview_component__WEBPACK_IMPORTED_MODULE_7__["ExpenseBoardPreviewComponent"]]
    })
], ExpenseBoardPageModule);



/***/ }),

/***/ "./src/app/applications/expenses/expense-board/expense-board.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/applications/expenses/expense-board/expense-board.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9leHBlbnNlcy9leHBlbnNlLWJvYXJkL2V4cGVuc2UtYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/applications/expenses/expense-board/expense-board.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/applications/expenses/expense-board/expense-board.page.ts ***!
  \***************************************************************************/
/*! exports provided: ExpenseBoardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseBoardPage", function() { return ExpenseBoardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _expenses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expenses.service */ "./src/app/applications/expenses/expenses.service.ts");



let ExpenseBoardPage = class ExpenseBoardPage {
    constructor(eb) {
        this.eb = eb;
        this.boards = [];
        this.expenses = [];
    }
    ngOnInit() {
        this.currentBoard = {
            boardName: '',
            boardSubtitle: '',
            boardExpenses: [],
            boardNameColor: '',
            boardSubtitleColor: ''
        };
        this.eb.getUpdatedExpensesBoards().subscribe(res => {
            this.boards = res;
        });
        this.eb.getUpdatedCurrentBoard().subscribe(res => {
            this.currentBoard = res;
            this.expenses = res.boardExpenses;
        });
    }
    onSubmitBoardForm(boardData) {
        this.eb.putCurrentBoard({
            boardName: boardData.value.boardTitle,
            boardSubtitle: boardData.value.boardSubtitle,
            boardExpenses: this.expenses,
            boardNameColor: '',
            boardSubtitleColor: ''
        });
        boardData.resetForm();
    }
    ongSubmitExpensesForm(expensesData) {
        this.expenses.push({
            expensesName: expensesData.value.expenseName,
            expensesValue: expensesData.value.expenseAmount,
            expensesColor: ''
        });
        if (this.currentBoard) {
            this.eb.putCurrentBoard(this.currentBoard = {
                boardName: this.currentBoard.boardName,
                boardSubtitle: this.currentBoard.boardSubtitle,
                boardExpenses: this.expenses,
                boardNameColor: '',
                boardSubtitleColor: ''
            });
        }
        expensesData.resetForm();
    }
};
ExpenseBoardPage.ctorParameters = () => [
    { type: _expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"] }
];
ExpenseBoardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expense-board.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/expense-board/expense-board.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expense-board.page.scss */ "./src/app/applications/expenses/expense-board/expense-board.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"]])
], ExpenseBoardPage);



/***/ }),

/***/ "./src/app/applications/expenses/tools/color-selector/color-selector.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/applications/expenses/tools/color-selector/color-selector.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9leHBlbnNlcy90b29scy9jb2xvci1zZWxlY3Rvci9jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/applications/expenses/tools/color-selector/color-selector.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/applications/expenses/tools/color-selector/color-selector.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ColorSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSelectorComponent", function() { return ColorSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ColorSelectorComponent = class ColorSelectorComponent {
    constructor() {
        this.color = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.myPopOver = {
            header: 'Color',
            subheader: 'Pick one',
            message: 'Please pick a color'
        };
    }
    ngOnInit() { }
    dispColor(color) {
        this.color.emit(color);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ColorSelectorComponent.prototype, "color", void 0);
ColorSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-color-selector',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./color-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/expenses/tools/color-selector/color-selector.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./color-selector.component.scss */ "./src/app/applications/expenses/tools/color-selector/color-selector.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ColorSelectorComponent);



/***/ }),

/***/ "./src/app/applications/expenses/tools/tools.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/applications/expenses/tools/tools.module.ts ***!
  \*************************************************************/
/*! exports provided: ToolsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsModule", function() { return ToolsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _color_selector_color_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-selector/color-selector.component */ "./src/app/applications/expenses/tools/color-selector/color-selector.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ToolsModule = class ToolsModule {
};
ToolsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_color_selector_color_selector_component__WEBPACK_IMPORTED_MODULE_3__["ColorSelectorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        exports: [
            _color_selector_color_selector_component__WEBPACK_IMPORTED_MODULE_3__["ColorSelectorComponent"]
        ]
    })
], ToolsModule);



/***/ })

}]);
//# sourceMappingURL=expense-board-expense-board-module-es2015.js.map