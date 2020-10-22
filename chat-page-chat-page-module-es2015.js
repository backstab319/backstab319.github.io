(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-page-chat-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/chat-page.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/chat-page.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/applications/chat-web-app'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Chat</ion-title>\n    <ion-buttons slot='end'>\n      <!-- <ion-button\n      expand='block'\n      color='primary'\n      fill='outline'\n      (click)='showPeopleModal()'>\n      <ion-icon name=\"person\" slot='start'></ion-icon>\n        People\n      </ion-button> -->\n      <ion-button\n      (click)='showOptions($event)'\n      color='primary'\n      ><ion-icon name=\"settings\" slot='start'></ion-icon>Options</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding'>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>Feature being worked on</ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>This part of the application is being developed. More features are being added.</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines='none'>\n              <ion-list-header>The following features are being added</ion-list-header>\n              <ion-item>\n                <ion-icon name=\"eye\" slot='start'></ion-icon>\n                <ion-label><p>Ability to find other people to connect to</p></ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"person-add\" slot='start'></ion-icon>\n                <ion-label><p>Being able to add friends</p></ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"chatbubbles\" slot='start'></ion-icon>\n                <ion-label><p>Being able to send message</p></ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"chatbubbles\" slot='start'></ion-icon>\n                <ion-label><p>Being able to chat in real time</p></ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/applications/chat-web-app/chat-page'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Inbox</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding' *ngFor='let i of messages'>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>Sender: {{ i.senderName }}</ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>Sent on {{i.messageDate}} at {{i.messageTime}} </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <p class='ion-padding-start'>{{ i.messageBody }}</p>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class='ion-padding' *ngIf='!this.messagesInInbox'>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>You dont have any messages</ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>If you have any messages then they will appear here</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/options/options.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/options/options.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list lines='none'>\n  <ion-item button (click)=\"gotoPage('inbox')\">\n    <ion-icon name=\"mail\" slot='start' color='primary'></ion-icon>\n    <ion-label>Inbox</ion-label>\n  </ion-item>\n  <ion-item button (click)=\"gotoPage('people')\">\n    <ion-icon name=\"people\" slot='start' color='primary'></ion-icon>\n    <ion-label>People</ion-label>\n  </ion-item>\n  <ion-item button (click)=\"logOut()\">\n    <ion-icon name=\"log-out\" slot='start' color='primary'></ion-icon>\n    <ion-label>Logout</ion-label>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/people/people.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/people/people.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>People</ion-title>\n    <ion-buttons slot='end'>\n      <ion-button (click)='closePeopleModal()' color='danger'><ion-icon name=\"close-circle-outline\" slot='icon-only'></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding'>\n          <ion-card-content>\n            <ion-list lines='none' *ngFor='let i of users'>\n              <ion-item>\n                <ion-label>{{ i.username }}</ion-label>\n                <ion-buttons slot='end'>\n                  <ion-button\n                  color='primary'\n                  (click)='redirectToWriteMessage(i._id, i.username)'\n                  ><ion-icon name=\"chatbubbles\" slot='icon-only'></ion-icon></ion-button>\n                </ion-buttons>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/chat-page-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/chat-page-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ChatPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPagePageRoutingModule", function() { return ChatPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-page.page */ "./src/app/applications/chat-web-app/chat-page/chat-page.page.ts");
/* harmony import */ var _write_page_write_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./write-page/write.guard */ "./src/app/applications/chat-web-app/chat-page/write-page/write.guard.ts");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.ts");
/* harmony import */ var _inbox_inbox_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox/inbox.guard */ "./src/app/applications/chat-web-app/chat-page/inbox/inbox.guard.ts");







const routes = [
    {
        path: '',
        component: _chat_page_page__WEBPACK_IMPORTED_MODULE_3__["ChatPagePage"]
    },
    {
        path: 'write-page',
        loadChildren: () => __webpack_require__.e(/*! import() | write-page-write-page-module */ "write-page-write-page-module").then(__webpack_require__.bind(null, /*! ./write-page/write-page.module */ "./src/app/applications/chat-web-app/chat-page/write-page/write-page.module.ts")).then(m => m.WritePagePageModule),
        canLoad: [_write_page_write_guard__WEBPACK_IMPORTED_MODULE_4__["WriteGuard"]]
    },
    {
        path: 'inbox-page',
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_5__["InboxComponent"],
        canLoad: [_inbox_inbox_guard__WEBPACK_IMPORTED_MODULE_6__["InboxGuard"]]
    }
];
let ChatPagePageRoutingModule = class ChatPagePageRoutingModule {
};
ChatPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPagePageRoutingModule);



/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/chat-page.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/chat-page.module.ts ***!
  \*************************************************************************/
/*! exports provided: ChatPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPagePageModule", function() { return ChatPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-page-routing.module */ "./src/app/applications/chat-web-app/chat-page/chat-page-routing.module.ts");
/* harmony import */ var _chat_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-page.page */ "./src/app/applications/chat-web-app/chat-page/chat-page.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./people/people.component */ "./src/app/applications/chat-web-app/chat-page/people/people.component.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./options/options.component */ "./src/app/applications/chat-web-app/chat-page/options/options.component.ts");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.ts");











let ChatPagePageModule = class ChatPagePageModule {
};
ChatPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPagePageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        declarations: [_chat_page_page__WEBPACK_IMPORTED_MODULE_6__["ChatPagePage"], _people_people_component__WEBPACK_IMPORTED_MODULE_8__["PeopleComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_9__["OptionsComponent"], _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_10__["InboxComponent"]],
        entryComponents: [_people_people_component__WEBPACK_IMPORTED_MODULE_8__["PeopleComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_9__["OptionsComponent"]]
    })
], ChatPagePageModule);



/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/chat-page.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/chat-page.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvY2hhdC1wYWdlL2NoYXQtcGFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/chat-page.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/chat-page.page.ts ***!
  \***********************************************************************/
/*! exports provided: ChatPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPagePage", function() { return ChatPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _username_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./username.service */ "./src/app/applications/chat-web-app/chat-page/username.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.service */ "./src/app/applications/chat-web-app/chat-page/chat.service.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options/options.component */ "./src/app/applications/chat-web-app/chat-page/options/options.component.ts");






let ChatPagePage = class ChatPagePage {
    constructor(toastCtl, us, chat, popCtl) {
        this.toastCtl = toastCtl;
        this.us = us;
        this.chat = chat;
        this.popCtl = popCtl;
    }
    ngOnInit() {
        // Getting the username before popping the toast
        this.username = this.us.getUsername();
        this.welcomeToast();
    }
    welcomeToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const welcomeToast = yield this.toastCtl.create({
                message: 'Welcome ' + this.username,
                duration: 2000,
                color: 'primary',
                buttons: [{
                        icon: 'close',
                        role: 'cancel'
                    }]
            });
            welcomeToast.present();
        });
    }
    showOptions(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = yield this.popCtl.create({
                component: _options_options_component__WEBPACK_IMPORTED_MODULE_5__["OptionsComponent"],
                event: ev,
                translucent: true
            });
            return yield options.present();
        });
    }
};
ChatPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"] },
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
ChatPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/chat-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-page.page.scss */ "./src/app/applications/chat-web-app/chat-page/chat-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"],
        _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], ChatPagePage);



/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/chat.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/chat.service.ts ***!
  \*********************************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _username_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./username.service */ "./src/app/applications/chat-web-app/chat-page/username.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../server.service */ "./src/app/applications/server.service.ts");






let ChatService = class ChatService {
    constructor(http, userSrv, serverAddress) {
        this.http = http;
        this.userSrv = userSrv;
        this.serverAddress = serverAddress;
        this.updatedUsers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getUsers() {
        this.http.post(this.serverAddress.getServerAddress() + '/get/usersandid', { username: this.userSrv.getUsername() })
            .subscribe(users => {
            console.log(users);
            this.usersData = users;
            this.updatedUsers.next(this.usersData);
        });
    }
    getUpdatedUsers() {
        return this.updatedUsers.asObservable();
    }
};
ChatService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _username_service__WEBPACK_IMPORTED_MODULE_4__["UsernameService"] },
    { type: _server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"] }
];
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _username_service__WEBPACK_IMPORTED_MODULE_4__["UsernameService"],
        _server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"]])
], ChatService);



/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvY2hhdC1wYWdlL2luYm94L2luYm94LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.ts ***!
  \******************************************************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.service */ "./src/app/applications/chat-web-app/chat-page/inbox/inbox.service.ts");



let InboxComponent = class InboxComponent {
    constructor(inboxSrv) {
        this.inboxSrv = inboxSrv;
        this.messagesInInbox = true;
    }
    ngOnInit() {
        // Subscription to update messages automatically
        this.inboxSrv.getMessages();
        this.inboxSrv.getUpdatedMessages()
            .subscribe(letter => {
            this.messages = letter;
            if (letter.length < 1) {
                this.messagesInInbox = false;
            }
        });
        // Get new messages if any every 5 seconds
        this.inboxServiceRunner = setInterval(() => {
            this.inboxSrv.getMessages();
        }, 5000);
    }
    ngOnDestroy() {
        if (this.inboxServiceRunner) {
            clearInterval(this.inboxServiceRunner);
        }
    }
};
InboxComponent.ctorParameters = () => [
    { type: _inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"] }
];
InboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inbox',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inbox.component.scss */ "./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"]])
], InboxComponent);



/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/inbox/inbox.guard.ts":
/*!**************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/inbox/inbox.guard.ts ***!
  \**************************************************************************/
/*! exports provided: InboxGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxGuard", function() { return InboxGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _username_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../username.service */ "./src/app/applications/chat-web-app/chat-page/username.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let InboxGuard = class InboxGuard {
    constructor(username, navCtl) {
        this.username = username;
        this.navCtl = navCtl;
    }
    canLoad(route, segments) {
        if (!this.username.isUserSet()) {
            this.navCtl.navigateBack('/applications/chat-web-app');
        }
        return this.username.isUserSet();
    }
};
InboxGuard.ctorParameters = () => [
    { type: _username_service__WEBPACK_IMPORTED_MODULE_2__["UsernameService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
InboxGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_username_service__WEBPACK_IMPORTED_MODULE_2__["UsernameService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], InboxGuard);



/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/inbox/inbox.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/inbox/inbox.service.ts ***!
  \****************************************************************************/
/*! exports provided: InboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxService", function() { return InboxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _username_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../username.service */ "./src/app/applications/chat-web-app/chat-page/username.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/applications/server.service */ "./src/app/applications/server.service.ts");






let InboxService = class InboxService {
    constructor(username, http, serverAddress) {
        this.username = username;
        this.http = http;
        this.serverAddress = serverAddress;
        this.updatedMessages = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Put message
        // A letter is a single message with the name of sender and receiver
        this.putMessages = (letter) => {
            this.messages.push(letter);
            // Call subject to update
            this.updatedMessages.next([...this.messages]);
        };
        this.getUpdatedMessages = () => this.updatedMessages.asObservable();
    }
    // Returns the messages
    getMessages() {
        // tslint:disable-next-line: max-line-length
        this.http.post(this.serverAddress.getServerAddress() + '/pull/message', { username: this.username.getUsername() })
            .subscribe(res => {
            this.messages = res.message;
            this.updatedMessages.next(this.messages);
        });
    }
};
InboxService.ctorParameters = () => [
    { type: _username_service__WEBPACK_IMPORTED_MODULE_2__["UsernameService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"] }
];
InboxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_username_service__WEBPACK_IMPORTED_MODULE_2__["UsernameService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"]])
], InboxService);



/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/options/options.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/options/options.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvY2hhdC1wYWdlL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/options/options.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/options/options.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../people/people.component */ "./src/app/applications/chat-web-app/chat-page/people/people.component.ts");
/* harmony import */ var _username_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../username.service */ "./src/app/applications/chat-web-app/chat-page/username.service.ts");





let OptionsComponent = class OptionsComponent {
    constructor(navCtl, modal, popover, userSrv, alertCtl, toastCtl) {
        this.navCtl = navCtl;
        this.modal = modal;
        this.popover = popover;
        this.userSrv = userSrv;
        this.alertCtl = alertCtl;
        this.toastCtl = toastCtl;
    }
    ngOnInit() { }
    gotoPage(pageName) {
        // Show people modal
        if (pageName === 'people') {
            this.popover.dismiss();
            this.showPeopleModal();
        }
        // Goto inbox page
        if (pageName === 'inbox') {
            this.popover.dismiss();
            this.navCtl.navigateForward('/applications/chat-web-app/chat-page/inbox-page');
        }
    }
    logOut() {
        this.showLogoutAlert();
    }
    showLogoutAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.popover.dismiss();
            const logoutAlert = yield this.alertCtl.create({
                header: 'Logout',
                subHeader: 'Are you sure?',
                buttons: [
                    {
                        text: 'Yes',
                        role: 'yes',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            // Destroy username
                            this.userSrv.setUsername('');
                            // Show the logged out toast
                            yield this.showLoggedOutToast();
                            // Redirect to applications page after 1 second
                            this.navCtl.navigateBack('/applications');
                        })
                    },
                    {
                        text: 'No',
                        role: 'no'
                    }
                ]
            });
            yield logoutAlert.present();
        });
    }
    showLoggedOutToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loggedOutToast = yield this.toastCtl.create({
                message: 'Successfully logged out! Please wait while we redirect you',
                color: 'primary',
                duration: 1000
            });
            loggedOutToast.present();
        });
    }
    showPeopleModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const peopleModal = yield this.modal.create({
                component: _people_people_component__WEBPACK_IMPORTED_MODULE_3__["PeopleComponent"]
            });
            return yield peopleModal.present();
        });
    }
};
OptionsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _username_service__WEBPACK_IMPORTED_MODULE_4__["UsernameService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
OptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-options',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./options.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/options/options.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./options.component.scss */ "./src/app/applications/chat-web-app/chat-page/options/options.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _username_service__WEBPACK_IMPORTED_MODULE_4__["UsernameService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], OptionsComponent);



/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/people/people.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/people/people.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvY2hhdC1wYWdlL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/people/people.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/people/people.component.ts ***!
  \********************************************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/applications/chat-web-app/chat-page/chat.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _write_page_write_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../write-page/write.service */ "./src/app/applications/chat-web-app/chat-page/write-page/write.service.ts");
/* harmony import */ var _username_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../username.service */ "./src/app/applications/chat-web-app/chat-page/username.service.ts");






let PeopleComponent = class PeopleComponent {
    constructor(chat, modal, navCtl, writeSrv, username) {
        this.chat = chat;
        this.modal = modal;
        this.navCtl = navCtl;
        this.writeSrv = writeSrv;
        this.username = username;
        // executeOnceFuntion() {
        //   const index = this.users.findIndex(x => {
        //     return x.username === this.username.getUsername();
        //   });
        //   this.users.splice(index, 1);
        //   this.executeOnce = false;
        //   return;
        // }
        this.closePeopleModal = () => {
            this.modal.dismiss();
        };
    }
    ngOnInit() {
        // Get updated users via subject
        this.chat.getUsers();
        this.chat.getUpdatedUsers().subscribe(users => {
            this.users = users;
            console.log(this.users);
        });
    }
    redirectToWriteMessage(receiverId, receiverName) {
        this.closePeopleModal();
        // Write service code here
        this.writeSrv.setReceiverDetails(receiverId, receiverName);
        // Redirect to write page
        this.navCtl.navigateForward('/applications/chat-web-app/chat-page/write-page');
    }
};
PeopleComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _write_page_write_service__WEBPACK_IMPORTED_MODULE_4__["WriteService"] },
    { type: _username_service__WEBPACK_IMPORTED_MODULE_5__["UsernameService"] }
];
PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/people/people.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people.component.scss */ "./src/app/applications/chat-web-app/chat-page/people/people.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _write_page_write_service__WEBPACK_IMPORTED_MODULE_4__["WriteService"],
        _username_service__WEBPACK_IMPORTED_MODULE_5__["UsernameService"]])
], PeopleComponent);



/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/write-page/write.guard.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/write-page/write.guard.ts ***!
  \*******************************************************************************/
/*! exports provided: WriteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteGuard", function() { return WriteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _write_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./write.service */ "./src/app/applications/chat-web-app/chat-page/write-page/write.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let WriteGuard = class WriteGuard {
    constructor(writeSrv, navCtl) {
        this.writeSrv = writeSrv;
        this.navCtl = navCtl;
    }
    canLoad(route, segments) {
        if (!this.writeSrv.isReceiverSet()) {
            this.navCtl.navigateBack('/applications/chat-web-app');
        }
        return this.writeSrv.isReceiverSet();
    }
};
WriteGuard.ctorParameters = () => [
    { type: _write_service__WEBPACK_IMPORTED_MODULE_2__["WriteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
WriteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_write_service__WEBPACK_IMPORTED_MODULE_2__["WriteService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], WriteGuard);



/***/ }),

/***/ "./src/app/applications/chat-web-app/chat-page/write-page/write.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/applications/chat-web-app/chat-page/write-page/write.service.ts ***!
  \*********************************************************************************/
/*! exports provided: WriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteService", function() { return WriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _inbox_inbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inbox/inbox.service */ "./src/app/applications/chat-web-app/chat-page/inbox/inbox.service.ts");
/* harmony import */ var src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/applications/server.service */ "./src/app/applications/server.service.ts");





let WriteService = class WriteService {
    constructor(http, inboxSrv, serverAddress) {
        this.http = http;
        this.inboxSrv = inboxSrv;
        this.serverAddress = serverAddress;
    }
    setReceiverDetails(id, name) {
        this.receiverDetails = { receiverId: id, receiverName: name };
    }
    getReceiverDetails() {
        return this.receiverDetails;
    }
    isReceiverSet() {
        return this.receiverDetails.receiverName.length > 0;
    }
    // Push message to the database
    sendMessage(message) {
        this.http.post(this.serverAddress.getServerAddress() + '/push/message', message)
            .subscribe(val => {
            console.log(val.res);
        });
        // View message subject here to view message as they come i.e refresh inbox when new message is sent
        this.inboxSrv.getMessages();
    }
};
WriteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _inbox_inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"] },
    { type: src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"] }
];
WriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _inbox_inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"],
        src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]])
], WriteService);



/***/ })

}]);
//# sourceMappingURL=chat-page-chat-page-module-es2015.js.map