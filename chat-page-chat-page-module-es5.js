function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-page-chat-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/chat-page.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/chat-page.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsChatWebAppChatPageChatPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/applications/chat-web-app'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Chat</ion-title>\n    <ion-buttons slot='end'>\n      <!-- <ion-button\n      expand='block'\n      color='primary'\n      fill='outline'\n      (click)='showPeopleModal()'>\n      <ion-icon name=\"person\" slot='start'></ion-icon>\n        People\n      </ion-button> -->\n      <ion-button\n      (click)='showOptions($event)'\n      color='primary'\n      ><ion-icon name=\"settings\" slot='start'></ion-icon>Options</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding'>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>Feature being worked on</ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>This part of the application is being developed. More features are being added.</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines='none'>\n              <ion-list-header>The following features are being added</ion-list-header>\n              <ion-item>\n                <ion-icon name=\"eye\" slot='start'></ion-icon>\n                <ion-label><p>Ability to find other people to connect to</p></ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"person-add\" slot='start'></ion-icon>\n                <ion-label><p>Being able to add friends</p></ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"chatbubbles\" slot='start'></ion-icon>\n                <ion-label><p>Being able to send message</p></ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"chatbubbles\" slot='start'></ion-icon>\n                <ion-label><p>Being able to chat in real time</p></ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsChatWebAppChatPageInboxInboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/applications/chat-web-app/chat-page'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Inbox</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding' *ngFor='let i of messages'>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>Sender: {{ i.senderName }}</ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>Sent on {{i.messageDate}} at {{i.messageTime}} </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <p class='ion-padding-start'>{{ i.messageBody }}</p>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class='ion-padding' *ngIf='!this.messagesInInbox'>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>You dont have any messages</ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>If you have any messages then they will appear here</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/options/options.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/options/options.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsChatWebAppChatPageOptionsOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list lines='none'>\n  <ion-item button (click)=\"gotoPage('inbox')\">\n    <ion-icon name=\"mail\" slot='start' color='primary'></ion-icon>\n    <ion-label>Inbox</ion-label>\n  </ion-item>\n  <ion-item button (click)=\"gotoPage('people')\">\n    <ion-icon name=\"people\" slot='start' color='primary'></ion-icon>\n    <ion-label>People</ion-label>\n  </ion-item>\n  <ion-item button (click)=\"logOut()\">\n    <ion-icon name=\"log-out\" slot='start' color='primary'></ion-icon>\n    <ion-label>Logout</ion-label>\n  </ion-item>\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/people/people.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/people/people.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsChatWebAppChatPagePeoplePeopleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>People</ion-title>\n    <ion-buttons slot='end'>\n      <ion-button (click)='closePeopleModal()' color='danger'><ion-icon name=\"close-circle-outline\" slot='icon-only'></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding'>\n          <ion-card-content>\n            <ion-list lines='none' *ngFor='let i of users'>\n              <ion-item>\n                <ion-label>{{ i.username }}</ion-label>\n                <ion-buttons slot='end'>\n                  <ion-button\n                  color='primary'\n                  (click)='redirectToWriteMessage(i._id, i.username)'\n                  ><ion-icon name=\"chatbubbles\" slot='icon-only'></ion-icon></ion-button>\n                </ion-buttons>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/chat-page-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/chat-page-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: ChatPagePageRoutingModule */

  /***/
  function srcAppApplicationsChatWebAppChatPageChatPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPagePageRoutingModule", function () {
      return ChatPagePageRoutingModule;
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


    var _chat_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-page.page */
    "./src/app/applications/chat-web-app/chat-page/chat-page.page.ts");
    /* harmony import */


    var _write_page_write_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./write-page/write.guard */
    "./src/app/applications/chat-web-app/chat-page/write-page/write.guard.ts");
    /* harmony import */


    var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inbox/inbox.component */
    "./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.ts");
    /* harmony import */


    var _inbox_inbox_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inbox/inbox.guard */
    "./src/app/applications/chat-web-app/chat-page/inbox/inbox.guard.ts");

    var routes = [{
      path: '',
      component: _chat_page_page__WEBPACK_IMPORTED_MODULE_3__["ChatPagePage"]
    }, {
      path: 'write-page',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | write-page-write-page-module */
        "write-page-write-page-module").then(__webpack_require__.bind(null,
        /*! ./write-page/write-page.module */
        "./src/app/applications/chat-web-app/chat-page/write-page/write-page.module.ts")).then(function (m) {
          return m.WritePagePageModule;
        });
      },
      canLoad: [_write_page_write_guard__WEBPACK_IMPORTED_MODULE_4__["WriteGuard"]]
    }, {
      path: 'inbox-page',
      component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_5__["InboxComponent"],
      canLoad: [_inbox_inbox_guard__WEBPACK_IMPORTED_MODULE_6__["InboxGuard"]]
    }];

    var ChatPagePageRoutingModule = function ChatPagePageRoutingModule() {
      _classCallCheck(this, ChatPagePageRoutingModule);
    };

    ChatPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/chat-page.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/chat-page.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ChatPagePageModule */

  /***/
  function srcAppApplicationsChatWebAppChatPageChatPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPagePageModule", function () {
      return ChatPagePageModule;
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


    var _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-page-routing.module */
    "./src/app/applications/chat-web-app/chat-page/chat-page-routing.module.ts");
    /* harmony import */


    var _chat_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-page.page */
    "./src/app/applications/chat-web-app/chat-page/chat-page.page.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _people_people_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./people/people.component */
    "./src/app/applications/chat-web-app/chat-page/people/people.component.ts");
    /* harmony import */


    var _options_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./options/options.component */
    "./src/app/applications/chat-web-app/chat-page/options/options.component.ts");
    /* harmony import */


    var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./inbox/inbox.component */
    "./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.ts");

    var ChatPagePageModule = function ChatPagePageModule() {
      _classCallCheck(this, ChatPagePageModule);
    };

    ChatPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPagePageRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
      declarations: [_chat_page_page__WEBPACK_IMPORTED_MODULE_6__["ChatPagePage"], _people_people_component__WEBPACK_IMPORTED_MODULE_8__["PeopleComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_9__["OptionsComponent"], _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_10__["InboxComponent"]],
      entryComponents: [_people_people_component__WEBPACK_IMPORTED_MODULE_8__["PeopleComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_9__["OptionsComponent"]]
    })], ChatPagePageModule);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/chat-page.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/chat-page.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsChatWebAppChatPageChatPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvY2hhdC1wYWdlL2NoYXQtcGFnZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/chat-page.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/chat-page.page.ts ***!
    \***********************************************************************/

  /*! exports provided: ChatPagePage */

  /***/
  function srcAppApplicationsChatWebAppChatPageChatPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPagePage", function () {
      return ChatPagePage;
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


    var _username_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./username.service */
    "./src/app/applications/chat-web-app/chat-page/username.service.ts");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat.service */
    "./src/app/applications/chat-web-app/chat-page/chat.service.ts");
    /* harmony import */


    var _options_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./options/options.component */
    "./src/app/applications/chat-web-app/chat-page/options/options.component.ts");

    var ChatPagePage =
    /*#__PURE__*/
    function () {
      function ChatPagePage(toastCtl, us, chat, popCtl) {
        _classCallCheck(this, ChatPagePage);

        this.toastCtl = toastCtl;
        this.us = us;
        this.chat = chat;
        this.popCtl = popCtl;
      }

      _createClass(ChatPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Getting the username before popping the toast
          this.username = this.us.getUsername();
          this.welcomeToast();
        }
      }, {
        key: "welcomeToast",
        value: function welcomeToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var welcomeToast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtl.create({
                      message: 'Welcome ' + this.username,
                      duration: 2000,
                      color: 'primary',
                      buttons: [{
                        icon: 'close',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    welcomeToast = _context.sent;
                    welcomeToast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showOptions",
        value: function showOptions(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var options;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popCtl.create({
                      component: _options_options_component__WEBPACK_IMPORTED_MODULE_5__["OptionsComponent"],
                      event: ev,
                      translucent: true
                    });

                  case 2:
                    options = _context2.sent;
                    _context2.next = 5;
                    return options.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ChatPagePage;
    }();

    ChatPagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"]
      }, {
        type: _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    ChatPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/chat-page.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-page.page.scss */
      "./src/app/applications/chat-web-app/chat-page/chat-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"], _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], ChatPagePage);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/chat.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/chat.service.ts ***!
    \*********************************************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppApplicationsChatWebAppChatPageChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _username_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./username.service */
    "./src/app/applications/chat-web-app/chat-page/username.service.ts");
    /* harmony import */


    var _server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../server.service */
    "./src/app/applications/server.service.ts");

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService(http, userSrv, serverAddress) {
        _classCallCheck(this, ChatService);

        this.http = http;
        this.userSrv = userSrv;
        this.serverAddress = serverAddress;
        this.updatedUsers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(ChatService, [{
        key: "getUsers",
        value: function getUsers() {
          var _this = this;

          this.http.post(this.serverAddress.getServerAddress() + '/get/usersandid', {
            username: this.userSrv.getUsername()
          }).subscribe(function (users) {
            console.log(users);
            _this.usersData = users;

            _this.updatedUsers.next(_this.usersData);
          });
        }
      }, {
        key: "getUpdatedUsers",
        value: function getUpdatedUsers() {
          return this.updatedUsers.asObservable();
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _username_service__WEBPACK_IMPORTED_MODULE_4__["UsernameService"]
      }, {
        type: _server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _username_service__WEBPACK_IMPORTED_MODULE_4__["UsernameService"], _server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"]])], ChatService);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsChatWebAppChatPageInboxInboxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvY2hhdC1wYWdlL2luYm94L2luYm94LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.ts ***!
    \******************************************************************************/

  /*! exports provided: InboxComponent */

  /***/
  function srcAppApplicationsChatWebAppChatPageInboxInboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxComponent", function () {
      return InboxComponent;
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


    var _inbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./inbox.service */
    "./src/app/applications/chat-web-app/chat-page/inbox/inbox.service.ts");

    var InboxComponent =
    /*#__PURE__*/
    function () {
      function InboxComponent(inboxSrv) {
        _classCallCheck(this, InboxComponent);

        this.inboxSrv = inboxSrv;
        this.messagesInInbox = true;
      }

      _createClass(InboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // Subscription to update messages automatically
          this.inboxSrv.getMessages();
          this.inboxSrv.getUpdatedMessages().subscribe(function (letter) {
            _this2.messages = letter;

            if (letter.length < 1) {
              _this2.messagesInInbox = false;
            }
          }); // Get new messages if any every 5 seconds

          this.inboxServiceRunner = setInterval(function () {
            _this2.inboxSrv.getMessages();
          }, 5000);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.inboxServiceRunner) {
            clearInterval(this.inboxServiceRunner);
          }
        }
      }]);

      return InboxComponent;
    }();

    InboxComponent.ctorParameters = function () {
      return [{
        type: _inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"]
      }];
    };

    InboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inbox',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inbox.component.scss */
      "./src/app/applications/chat-web-app/chat-page/inbox/inbox.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"]])], InboxComponent);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/inbox/inbox.guard.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/inbox/inbox.guard.ts ***!
    \**************************************************************************/

  /*! exports provided: InboxGuard */

  /***/
  function srcAppApplicationsChatWebAppChatPageInboxInboxGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxGuard", function () {
      return InboxGuard;
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


    var _username_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../username.service */
    "./src/app/applications/chat-web-app/chat-page/username.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var InboxGuard =
    /*#__PURE__*/
    function () {
      function InboxGuard(username, navCtl) {
        _classCallCheck(this, InboxGuard);

        this.username = username;
        this.navCtl = navCtl;
      }

      _createClass(InboxGuard, [{
        key: "canLoad",
        value: function canLoad(route, segments) {
          if (!this.username.isUserSet()) {
            this.navCtl.navigateBack('/applications/chat-web-app');
          }

          return this.username.isUserSet();
        }
      }]);

      return InboxGuard;
    }();

    InboxGuard.ctorParameters = function () {
      return [{
        type: _username_service__WEBPACK_IMPORTED_MODULE_2__["UsernameService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    InboxGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_username_service__WEBPACK_IMPORTED_MODULE_2__["UsernameService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], InboxGuard);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/inbox/inbox.service.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/inbox/inbox.service.ts ***!
    \****************************************************************************/

  /*! exports provided: InboxService */

  /***/
  function srcAppApplicationsChatWebAppChatPageInboxInboxServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxService", function () {
      return InboxService;
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


    var _username_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../username.service */
    "./src/app/applications/chat-web-app/chat-page/username.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/applications/server.service */
    "./src/app/applications/server.service.ts");

    var InboxService =
    /*#__PURE__*/
    function () {
      function InboxService(username, http, serverAddress) {
        var _this3 = this;

        _classCallCheck(this, InboxService);

        this.username = username;
        this.http = http;
        this.serverAddress = serverAddress;
        this.updatedMessages = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // Put message
        // A letter is a single message with the name of sender and receiver

        this.putMessages = function (letter) {
          _this3.messages.push(letter); // Call subject to update


          _this3.updatedMessages.next(_toConsumableArray(_this3.messages));
        };

        this.getUpdatedMessages = function () {
          return _this3.updatedMessages.asObservable();
        };
      } // Returns the messages


      _createClass(InboxService, [{
        key: "getMessages",
        value: function getMessages() {
          var _this4 = this;

          // tslint:disable-next-line: max-line-length
          this.http.post(this.serverAddress.getServerAddress() + '/pull/message', {
            username: this.username.getUsername()
          }).subscribe(function (res) {
            _this4.messages = res.message;

            _this4.updatedMessages.next(_this4.messages);
          });
        }
      }]);

      return InboxService;
    }();

    InboxService.ctorParameters = function () {
      return [{
        type: _username_service__WEBPACK_IMPORTED_MODULE_2__["UsernameService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"]
      }];
    };

    InboxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_username_service__WEBPACK_IMPORTED_MODULE_2__["UsernameService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"]])], InboxService);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/options/options.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/options/options.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsChatWebAppChatPageOptionsOptionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvY2hhdC1wYWdlL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/options/options.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/options/options.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: OptionsComponent */

  /***/
  function srcAppApplicationsChatWebAppChatPageOptionsOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionsComponent", function () {
      return OptionsComponent;
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


    var _people_people_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../people/people.component */
    "./src/app/applications/chat-web-app/chat-page/people/people.component.ts");
    /* harmony import */


    var _username_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../username.service */
    "./src/app/applications/chat-web-app/chat-page/username.service.ts");

    var OptionsComponent =
    /*#__PURE__*/
    function () {
      function OptionsComponent(navCtl, modal, popover, userSrv, alertCtl, toastCtl) {
        _classCallCheck(this, OptionsComponent);

        this.navCtl = navCtl;
        this.modal = modal;
        this.popover = popover;
        this.userSrv = userSrv;
        this.alertCtl = alertCtl;
        this.toastCtl = toastCtl;
      }

      _createClass(OptionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gotoPage",
        value: function gotoPage(pageName) {
          // Show people modal
          if (pageName === 'people') {
            this.popover.dismiss();
            this.showPeopleModal();
          } // Goto inbox page


          if (pageName === 'inbox') {
            this.popover.dismiss();
            this.navCtl.navigateForward('/applications/chat-web-app/chat-page/inbox-page');
          }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.showLogoutAlert();
        }
      }, {
        key: "showLogoutAlert",
        value: function showLogoutAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var logoutAlert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.popover.dismiss();
                    _context4.next = 3;
                    return this.alertCtl.create({
                      header: 'Logout',
                      subHeader: 'Are you sure?',
                      buttons: [{
                        text: 'Yes',
                        role: 'yes',
                        handler: function handler() {
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0,
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee3() {
                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    // Destroy username
                                    this.userSrv.setUsername(''); // Show the logged out toast

                                    _context3.next = 3;
                                    return this.showLoggedOutToast();

                                  case 3:
                                    // Redirect to applications page after 1 second
                                    this.navCtl.navigateBack('/applications');

                                  case 4:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3, this);
                          }));
                        }
                      }, {
                        text: 'No',
                        role: 'no'
                      }]
                    });

                  case 3:
                    logoutAlert = _context4.sent;
                    _context4.next = 6;
                    return logoutAlert.present();

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "showLoggedOutToast",
        value: function showLoggedOutToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var loggedOutToast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastCtl.create({
                      message: 'Successfully logged out! Please wait while we redirect you',
                      color: 'primary',
                      duration: 1000
                    });

                  case 2:
                    loggedOutToast = _context5.sent;
                    loggedOutToast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "showPeopleModal",
        value: function showPeopleModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var peopleModal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modal.create({
                      component: _people_people_component__WEBPACK_IMPORTED_MODULE_3__["PeopleComponent"]
                    });

                  case 2:
                    peopleModal = _context6.sent;
                    _context6.next = 5;
                    return peopleModal.present();

                  case 5:
                    return _context6.abrupt("return", _context6.sent);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return OptionsComponent;
    }();

    OptionsComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _username_service__WEBPACK_IMPORTED_MODULE_4__["UsernameService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    OptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-options',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./options.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/options/options.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./options.component.scss */
      "./src/app/applications/chat-web-app/chat-page/options/options.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _username_service__WEBPACK_IMPORTED_MODULE_4__["UsernameService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], OptionsComponent);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/people/people.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/people/people.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsChatWebAppChatPagePeoplePeopleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvY2hhdC1wYWdlL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/people/people.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/people/people.component.ts ***!
    \********************************************************************************/

  /*! exports provided: PeopleComponent */

  /***/
  function srcAppApplicationsChatWebAppChatPagePeoplePeopleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeopleComponent", function () {
      return PeopleComponent;
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


    var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../chat.service */
    "./src/app/applications/chat-web-app/chat-page/chat.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _write_page_write_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../write-page/write.service */
    "./src/app/applications/chat-web-app/chat-page/write-page/write.service.ts");
    /* harmony import */


    var _username_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../username.service */
    "./src/app/applications/chat-web-app/chat-page/username.service.ts");

    var PeopleComponent =
    /*#__PURE__*/
    function () {
      function PeopleComponent(chat, modal, navCtl, writeSrv, username) {
        var _this6 = this;

        _classCallCheck(this, PeopleComponent);

        this.chat = chat;
        this.modal = modal;
        this.navCtl = navCtl;
        this.writeSrv = writeSrv;
        this.username = username; // executeOnceFuntion() {
        //   const index = this.users.findIndex(x => {
        //     return x.username === this.username.getUsername();
        //   });
        //   this.users.splice(index, 1);
        //   this.executeOnce = false;
        //   return;
        // }

        this.closePeopleModal = function () {
          _this6.modal.dismiss();
        };
      }

      _createClass(PeopleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          // Get updated users via subject
          this.chat.getUsers();
          this.chat.getUpdatedUsers().subscribe(function (users) {
            _this7.users = users;
            console.log(_this7.users);
          });
        }
      }, {
        key: "redirectToWriteMessage",
        value: function redirectToWriteMessage(receiverId, receiverName) {
          this.closePeopleModal(); // Write service code here

          this.writeSrv.setReceiverDetails(receiverId, receiverName); // Redirect to write page

          this.navCtl.navigateForward('/applications/chat-web-app/chat-page/write-page');
        }
      }]);

      return PeopleComponent;
    }();

    PeopleComponent.ctorParameters = function () {
      return [{
        type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _write_page_write_service__WEBPACK_IMPORTED_MODULE_4__["WriteService"]
      }, {
        type: _username_service__WEBPACK_IMPORTED_MODULE_5__["UsernameService"]
      }];
    };

    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-people',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./people.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-page/people/people.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./people.component.scss */
      "./src/app/applications/chat-web-app/chat-page/people/people.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _write_page_write_service__WEBPACK_IMPORTED_MODULE_4__["WriteService"], _username_service__WEBPACK_IMPORTED_MODULE_5__["UsernameService"]])], PeopleComponent);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/write-page/write.guard.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/write-page/write.guard.ts ***!
    \*******************************************************************************/

  /*! exports provided: WriteGuard */

  /***/
  function srcAppApplicationsChatWebAppChatPageWritePageWriteGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WriteGuard", function () {
      return WriteGuard;
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


    var _write_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./write.service */
    "./src/app/applications/chat-web-app/chat-page/write-page/write.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var WriteGuard =
    /*#__PURE__*/
    function () {
      function WriteGuard(writeSrv, navCtl) {
        _classCallCheck(this, WriteGuard);

        this.writeSrv = writeSrv;
        this.navCtl = navCtl;
      }

      _createClass(WriteGuard, [{
        key: "canLoad",
        value: function canLoad(route, segments) {
          if (!this.writeSrv.isReceiverSet()) {
            this.navCtl.navigateBack('/applications/chat-web-app');
          }

          return this.writeSrv.isReceiverSet();
        }
      }]);

      return WriteGuard;
    }();

    WriteGuard.ctorParameters = function () {
      return [{
        type: _write_service__WEBPACK_IMPORTED_MODULE_2__["WriteService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    WriteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_write_service__WEBPACK_IMPORTED_MODULE_2__["WriteService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], WriteGuard);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/write-page/write.service.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/write-page/write.service.ts ***!
    \*********************************************************************************/

  /*! exports provided: WriteService */

  /***/
  function srcAppApplicationsChatWebAppChatPageWritePageWriteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WriteService", function () {
      return WriteService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _inbox_inbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../inbox/inbox.service */
    "./src/app/applications/chat-web-app/chat-page/inbox/inbox.service.ts");
    /* harmony import */


    var src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/applications/server.service */
    "./src/app/applications/server.service.ts");

    var WriteService =
    /*#__PURE__*/
    function () {
      function WriteService(http, inboxSrv, serverAddress) {
        _classCallCheck(this, WriteService);

        this.http = http;
        this.inboxSrv = inboxSrv;
        this.serverAddress = serverAddress;
      }

      _createClass(WriteService, [{
        key: "setReceiverDetails",
        value: function setReceiverDetails(id, name) {
          this.receiverDetails = {
            receiverId: id,
            receiverName: name
          };
        }
      }, {
        key: "getReceiverDetails",
        value: function getReceiverDetails() {
          return this.receiverDetails;
        }
      }, {
        key: "isReceiverSet",
        value: function isReceiverSet() {
          return this.receiverDetails.receiverName.length > 0;
        } // Push message to the database

      }, {
        key: "sendMessage",
        value: function sendMessage(message) {
          this.http.post(this.serverAddress.getServerAddress() + '/push/message', message).subscribe(function (val) {
            console.log(val.res);
          }); // View message subject here to view message as they come i.e refresh inbox when new message is sent

          this.inboxSrv.getMessages();
        }
      }]);

      return WriteService;
    }();

    WriteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _inbox_inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"]
      }, {
        type: src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]
      }];
    };

    WriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _inbox_inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"], src_app_applications_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]])], WriteService);
    /***/
  }
}]);
//# sourceMappingURL=chat-page-chat-page-module-es5.js.map