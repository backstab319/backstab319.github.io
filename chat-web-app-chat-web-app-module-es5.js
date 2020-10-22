function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-web-app-chat-web-app-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-web-app.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-web-app.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsChatWebAppChatWebAppPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref='/applications'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Chat web app</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding'>\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'><h1>Welcome to the chat web app</h1></ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>A simple chat web app that gets the job done.</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines='none'>\n              <ion-item>\n                <ion-icon name=\"checkmark\"></ion-icon>\n                <ion-label>Simple to use</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"checkmark\"></ion-icon>\n                <ion-label>Features that you would actually use</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"checkmark\"></ion-icon>\n                <ion-label>Simple design</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-icon name=\"checkmark\"></ion-icon>\n                <ion-label>No shady stuff in the background</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class=\"ion-padding\">\n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'><h1>Start chatting away!</h1></ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>\n              <ion-text color='danger'>Under beta phase!</ion-text>\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-buttons class='ion-padding-start'>\n              <ion-button expand='block' fill='solid' color='primary'\n              (click)='presentUsernameModal()'\n              ><ion-icon name=\"chatbubbles\" slot='start'></ion-icon>\n              Chat</ion-button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/sign-up/sign-up.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/sign-up/sign-up.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsChatWebAppSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sign up</ion-title>\n    <ion-buttons slot='end'>\n      <ion-button color='danger' (click)='closeSignUpModal()'><ion-icon name=\"close-circle-outline\" slot='icon-only'></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding'>\n          \n          <ion-card-header>\n            <ion-card-title class='ion-padding-start'>User credentials</ion-card-title>\n            <ion-card-subtitle class='ion-padding-start'>Please fill out the following credentials to start chatting</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content>\n            <form #userCred='ngForm' (ngSubmit)='signUpUser(userCred)'>\n              <ion-list lines='none'>\n\n                <ion-item>\n                  <ion-label position='floating'>Enter username</ion-label>\n                  <ion-input\n                  ngModel\n                  #username='ngModel'\n                  name='username'\n                  clearInput\n                  minlength='4'\n                  required\n                  type='text'\n                  ></ion-input>\n                </ion-item>\n                <ion-item *ngIf='username.invalid && username.touched'>\n                  <ion-label><ion-text color='danger'><p>Please check your username</p></ion-text></ion-label>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position='floating'>Enter password</ion-label>\n                  <ion-input\n                  ngModel\n                  #password1='ngModel'\n                  name='password1'\n                  minlength='4'\n                  type='password'\n                  required\n                  clearInput\n                  ></ion-input>\n                </ion-item>\n                <ion-item *ngIf='password1.invalid && password1.touched'>\n                  <ion-label><ion-text color='danger'><p>Please enter password</p></ion-text></ion-label>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position='floating'>Re-enter password</ion-label>\n                  <ion-input\n                  ngModel\n                  #password2='ngModel'\n                  name='password2'\n                  minlength='4'\n                  type='password'\n                  required\n                  clearInput\n                  ></ion-input>\n                </ion-item>\n                <ion-item *ngIf='password2.invalid && password2.touched'>\n                  <ion-label><ion-text color='danger'><p>Please re-enter your password</p></ion-text></ion-label>\n                </ion-item>\n\n                <ion-item *ngIf='password1.value !== password2.value'>\n                  <ion-label><ion-text color='danger'><p>The entered password do not match</p></ion-text></ion-label>\n                </ion-item>\n\n              </ion-list>\n              <ion-button color='primary' expand='block' fill='solid' type='submit'>\n                <ion-icon name=\"create\" slot='start'></ion-icon>Sign Up</ion-button>\n            </form>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/username/username.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/username/username.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplicationsChatWebAppUsernameUsernameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='end'>\n      <ion-button color='primary'\n      expand='block'\n      fill='solid'\n      (click)='gotoSignUpPage()'\n      ><ion-icon name=\"create\" slot='start'></ion-icon>Sign up</ion-button>\n      <ion-button color='danger' (click)='closeUsernameModal()'><ion-icon name=\"close-circle-outline\" slot='icon-only'></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size='12' size-sm='8' offset-sm='2'>\n        <ion-card class='ion-padding-start'>\n          <ion-card-content>\n\n            <form #usernameForm=ngForm (ngSubmit)='usernameFormProcessor(usernameForm)'>\n\n              <ion-list lines='none'>\n                <ion-item>\n                  <ion-label position='floating'>Enter your username</ion-label>\n                  <ion-input\n                  ngModel\n                  name='username'\n                  #username=ngModel\n                  clearInput\n                  required\n                  type='text'\n                  minlength='4'\n                  ></ion-input>\n                </ion-item>\n                <ion-item *ngIf='username.invalid && username.touched'>\n                  <ion-label><ion-text color='danger'><p>Please enter a valid username</p></ion-text></ion-label>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position='floating'>Enter your password</ion-label>\n                  <ion-input\n                  ngModel\n                  #password='ngModel'\n                  name='password'\n                  clearInput\n                  required\n                  type='password'\n                  minlength='4'\n                  ></ion-input>\n                </ion-item>\n                <ion-item *ngIf='password.invalid && password.touched'>\n                  <ion-label><ion-text color='danger'><p>Please enter your password</p></ion-text></ion-label>\n                </ion-item>\n                \n                <ion-button \n                type='submit'\n                expand='block'\n                color='primary'\n                fill='solid'\n                >Done</ion-button>\n              </ion-list>\n            </form>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <ion-card class='ion-padding'>\n          <ion-card-header>\n            <ion-card-title class=\"ion-padding-start\"><h1>\n              What is this?\n            </h1></ion-card-title>\n            <ion-card-subtitle class=\"ion-padding-start\">\n              To start chatting you need to have a username so that others can find you online\n            </ion-card-subtitle>\n            <ion-card-content>\n              <ion-list lines='none'>\n                <ion-item><p>Length of username must be qual to or greater than 4</p></ion-item>\n                <ion-item><p>Can be alphanumeric</p></ion-item>\n                <ion-item><p>For now the usernames are not restricted i.e one could take an already existing username. This will be patched once the app leaves beta phase.</p></ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/chat-page.guard.ts":
  /*!************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/chat-page.guard.ts ***!
    \************************************************************************/

  /*! exports provided: ChatPageGuard */

  /***/
  function srcAppApplicationsChatWebAppChatPageChatPageGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageGuard", function () {
      return ChatPageGuard;
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


    var _username_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./username.service */
    "./src/app/applications/chat-web-app/chat-page/username.service.ts");

    var ChatPageGuard =
    /*#__PURE__*/
    function () {
      function ChatPageGuard(us, router) {
        _classCallCheck(this, ChatPageGuard);

        this.us = us;
        this.router = router;
      }

      _createClass(ChatPageGuard, [{
        key: "canLoad",
        value: function canLoad(route, segments) {
          if (!this.us.isUserSet()) {
            this.router.navigateByUrl('/applications/chat-web-app');
          }

          return this.us.isUserSet();
        }
      }]);

      return ChatPageGuard;
    }();

    ChatPageGuard.ctorParameters = function () {
      return [{
        type: _username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ChatPageGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ChatPageGuard);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-page/username.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-page/username.service.ts ***!
    \*************************************************************************/

  /*! exports provided: UsernameService */

  /***/
  function srcAppApplicationsChatWebAppChatPageUsernameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsernameService", function () {
      return UsernameService;
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


    var _server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../server.service */
    "./src/app/applications/server.service.ts");

    var UsernameService =
    /*#__PURE__*/
    function () {
      function UsernameService(http, serverAddress) {
        var _this = this;

        _classCallCheck(this, UsernameService);

        this.http = http;
        this.serverAddress = serverAddress;
        this.UserSet = false;
        this.username = {
          username: ''
        };

        this.getTakenUsernames = function () {
          return _this.http.get(_this.serverAddress.getServerAddress() + '/get/users');
        };
      } // Authentication of login data


      _createClass(UsernameService, [{
        key: "authLoginData",
        value: function authLoginData(data) {
          // const auth = this.http.post<{message: string, status: string}>('http://localhost:3000/auth/user', data)
          //   .subscribe(response => {
          //     if (response.status === 'exist&&passcorrect') {
          //       this.onCorrectCred(response.message, data.username, response.status);
          //     } else {
          //       this.onIncorrectCred(response.message, response.status);
          //     }
          //   },
          //   error => {
          //     console.log('Error');
          //   },
          //   () => {
          //     console.log(this.stat);
          //   });
          // return auth;
          return this.http.post(this.serverAddress.getServerAddress() + '/auth/user', data);
        }
      }, {
        key: "onCorrectCred",
        value: function onCorrectCred(message, username, status) {
          this.setUsername(username);
          console.log(message);
          this.stat = status;
          console.log(this.stat);
        }
      }, {
        key: "onIncorrectCred",
        value: function onIncorrectCred(message, status) {
          console.log(message);
          this.stat = status;
        }
      }, {
        key: "isUserSet",
        value: function isUserSet() {
          return this.UserSet;
        }
      }, {
        key: "setUser",
        value: function setUser() {
          this.UserSet = true;
        }
      }, {
        key: "setUsername",
        value: function setUsername(username) {
          this.username.username = username;
          this.setUser();
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return this.username.username;
        } // Pushing username and password to the database

      }, {
        key: "signUpUser",
        value: function signUpUser(data) {
          this.pushUsernameToDatabase(data);
        }
      }, {
        key: "pushUsernameToDatabase",
        value: function pushUsernameToDatabase(signUpData) {
          this.http.post(this.serverAddress.getServerAddress() + '/push/username', signUpData).subscribe(function (message) {
            console.log(message);
          });
        }
      }]);

      return UsernameService;
    }();

    UsernameService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
      }];
    };

    UsernameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]])], UsernameService);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-web-app-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-web-app-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ChatWebAppPageRoutingModule */

  /***/
  function srcAppApplicationsChatWebAppChatWebAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatWebAppPageRoutingModule", function () {
      return ChatWebAppPageRoutingModule;
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


    var _chat_web_app_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-web-app.page */
    "./src/app/applications/chat-web-app/chat-web-app.page.ts");
    /* harmony import */


    var _chat_page_chat_page_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat-page/chat-page.guard */
    "./src/app/applications/chat-web-app/chat-page/chat-page.guard.ts");

    var routes = [{
      path: '',
      component: _chat_web_app_page__WEBPACK_IMPORTED_MODULE_3__["ChatWebAppPage"]
    }, {
      path: 'chat-page',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | chat-page-chat-page-module */
        "chat-page-chat-page-module").then(__webpack_require__.bind(null,
        /*! ./chat-page/chat-page.module */
        "./src/app/applications/chat-web-app/chat-page/chat-page.module.ts")).then(function (m) {
          return m.ChatPagePageModule;
        });
      },
      canLoad: [_chat_page_chat_page_guard__WEBPACK_IMPORTED_MODULE_4__["ChatPageGuard"]]
    }];

    var ChatWebAppPageRoutingModule = function ChatWebAppPageRoutingModule() {
      _classCallCheck(this, ChatWebAppPageRoutingModule);
    };

    ChatWebAppPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatWebAppPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-web-app.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-web-app.module.ts ***!
    \******************************************************************/

  /*! exports provided: ChatWebAppPageModule */

  /***/
  function srcAppApplicationsChatWebAppChatWebAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatWebAppPageModule", function () {
      return ChatWebAppPageModule;
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


    var _chat_web_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-web-app-routing.module */
    "./src/app/applications/chat-web-app/chat-web-app-routing.module.ts");
    /* harmony import */


    var _chat_web_app_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-web-app.page */
    "./src/app/applications/chat-web-app/chat-web-app.page.ts");
    /* harmony import */


    var _username_username_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./username/username.component */
    "./src/app/applications/chat-web-app/username/username.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/applications/chat-web-app/sign-up/sign-up.component.ts");

    var ChatWebAppPageModule = function ChatWebAppPageModule() {
      _classCallCheck(this, ChatWebAppPageModule);
    };

    ChatWebAppPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_web_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatWebAppPageRoutingModule"]],
      declarations: [_chat_web_app_page__WEBPACK_IMPORTED_MODULE_6__["ChatWebAppPage"], _username_username_component__WEBPACK_IMPORTED_MODULE_7__["UsernameComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"]],
      entryComponents: [_username_username_component__WEBPACK_IMPORTED_MODULE_7__["UsernameComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"]]
    })], ChatWebAppPageModule);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-web-app.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-web-app.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsChatWebAppChatWebAppPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvY2hhdC13ZWItYXBwLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/chat-web-app.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/applications/chat-web-app/chat-web-app.page.ts ***!
    \****************************************************************/

  /*! exports provided: ChatWebAppPage */

  /***/
  function srcAppApplicationsChatWebAppChatWebAppPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatWebAppPage", function () {
      return ChatWebAppPage;
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


    var _username_username_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./username/username.component */
    "./src/app/applications/chat-web-app/username/username.component.ts");

    var ChatWebAppPage =
    /*#__PURE__*/
    function () {
      function ChatWebAppPage(alertCtl, modalCtl) {
        _classCallCheck(this, ChatWebAppPage);

        this.alertCtl = alertCtl;
        this.modalCtl = modalCtl;
      }

      _createClass(ChatWebAppPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.presentWarning();
        }
      }, {
        key: "presentWarning",
        value: function presentWarning() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var warning;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtl.create({
                      header: 'Security warning!',
                      subHeader: 'Please do not use any username or password that you are using currently anywhere else',
                      buttons: [{
                        text: 'Ok',
                        role: 'ok'
                      }]
                    });

                  case 2:
                    warning = _context.sent;
                    _context.next = 5;
                    return warning.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentUsernameModal",
        value: function presentUsernameModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var username;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtl.create({
                      component: _username_username_component__WEBPACK_IMPORTED_MODULE_3__["UsernameComponent"]
                    });

                  case 2:
                    username = _context2.sent;
                    _context2.next = 5;
                    return username.present();

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

      return ChatWebAppPage;
    }();

    ChatWebAppPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ChatWebAppPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-web-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-web-app.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/chat-web-app.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-web-app.page.scss */
      "./src/app/applications/chat-web-app/chat-web-app.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ChatWebAppPage);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/sign-up/sign-up.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/sign-up/sign-up.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsChatWebAppSignUpSignUpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/sign-up/sign-up.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/sign-up/sign-up.component.ts ***!
    \************************************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppApplicationsChatWebAppSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
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


    var _chat_page_username_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../chat-page/username.service */
    "./src/app/applications/chat-web-app/chat-page/username.service.ts");

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(modalCtl, AlertCtl, toastCtl, userSrv) {
        _classCallCheck(this, SignUpComponent);

        this.modalCtl = modalCtl;
        this.AlertCtl = AlertCtl;
        this.toastCtl = toastCtl;
        this.userSrv = userSrv;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeSignUpModal",
        value: function closeSignUpModal() {
          this.modalCtl.dismiss();
        } // Process user signup data

      }, {
        key: "signUpUser",
        value: function signUpUser(signUpData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var pass1, pass2;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.isUsernameAvailable(signUpData.value.username);

                  case 2:
                    if (!this.usernameTaken) {
                      _context3.next = 5;
                      break;
                    }

                    console.log('The username is already taken!');
                    return _context3.abrupt("return");

                  case 5:
                    // Validate form fields
                    pass1 = signUpData.value.password1;
                    pass2 = signUpData.value.password2;

                    if (!((signUpData.valid && pass1.length > 3 && pass2.length > 3 && pass1 === pass2) === false)) {
                      _context3.next = 10;
                      break;
                    }

                    // Alert to check credentials
                    this.checkCredentialAlert();
                    return _context3.abrupt("return");

                  case 10:
                    // Pass data to the database
                    this.signUpData = {
                      username: signUpData.value.username,
                      password: signUpData.value.password1
                    };
                    this.userSrv.signUpUser(this.signUpData); // After passing data to the database

                    signUpData.resetForm();
                    this.modalCtl.dismiss();
                    this.successfullToast();

                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "checkCredentialAlert",
        value: function checkCredentialAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var checkCred;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.AlertCtl.create({
                      header: 'Error',
                      subHeader: 'Please check your credentials',
                      buttons: [{
                        text: 'Ok',
                        role: 'ok'
                      }],
                      translucent: true
                    });

                  case 2:
                    checkCred = _context4.sent;
                    _context4.next = 5;
                    return checkCred.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "successfullToast",
        value: function successfullToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var success;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastCtl.create({
                      message: 'Sign up successfull! Now you can login to start chatting!',
                      color: 'primary',
                      duration: 2000
                    });

                  case 2:
                    success = _context5.sent;
                    success.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "isUsernameAvailable",
        value: function isUsernameAvailable(username) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    // Fetch taken usernames
                    this.userSrv.getTakenUsernames().subscribe(function (taken) {
                      _this2.usernameTaken = taken.toString().split(',').includes(username);
                    }, function (error) {
                      return console.log('Some error occured while fetching usernames', error);
                    });
                    return _context6.abrupt("return", this.usernameTaken);

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _chat_page_username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"]
      }];
    };

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/sign-up/sign-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.scss */
      "./src/app/applications/chat-web-app/sign-up/sign-up.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _chat_page_username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"]])], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/username/username.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/username/username.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplicationsChatWebAppUsernameUsernameComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9jaGF0LXdlYi1hcHAvdXNlcm5hbWUvdXNlcm5hbWUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/applications/chat-web-app/username/username.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/applications/chat-web-app/username/username.component.ts ***!
    \**************************************************************************/

  /*! exports provided: UsernameComponent */

  /***/
  function srcAppApplicationsChatWebAppUsernameUsernameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsernameComponent", function () {
      return UsernameComponent;
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


    var _chat_page_username_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../chat-page/username.service */
    "./src/app/applications/chat-web-app/chat-page/username.service.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sign-up/sign-up.component */
    "./src/app/applications/chat-web-app/sign-up/sign-up.component.ts");

    var UsernameComponent =
    /*#__PURE__*/
    function () {
      function UsernameComponent(modalCtl, navCtl, us, toastCtl) {
        var _this3 = this;

        _classCallCheck(this, UsernameComponent);

        this.modalCtl = modalCtl;
        this.navCtl = navCtl;
        this.us = us;
        this.toastCtl = toastCtl;
        this.usernameExists = false;
        this.authStat = false;

        this.closeUsernameModal = function () {
          return _this3.modalCtl.dismiss();
        };
      }

      _createClass(UsernameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "usernameFormProcessor",
        value: function usernameFormProcessor(usernameData) {
          var _this4 = this;

          // // Check if the user already exists
          // if (this.checkValidUsername(usernameData.value.username)) {
          //   this.usernameExists = true;
          //   usernameData.resetForm();
          //   return;
          // }
          // // Add user and proceed to page
          // if (this.usernameValidator(usernameData.value.username)) {
          //   this.proceedToPage(usernameData.value.username);
          // } else {
          //   return;
          // }
          if (usernameData.invalid) {
            return;
          }

          var usr = usernameData.value.username;
          var pass = usernameData.value.password;
          this.us.authLoginData({
            username: usr,
            password: pass
          }).subscribe(function (response) {
            if (response.status === 'exist&&passcorrect') {
              _this4.us.onCorrectCred(response.message, usr, response.status);
            } else {
              _this4.us.onIncorrectCred(response.message, response.status);
            }
          }, function (error) {
            console.log('There was some error authenticating', error);
          }, function () {
            // Proceed accordingly
            if (_this4.us.stat !== 'exist&&passcorrect') {
              _this4.wrongCredToast();
            } else {
              _this4.proceedToPage(usr);
            }
          });
          usernameData.resetForm();
        }
      }, {
        key: "proceedToPage",
        value: function proceedToPage(username) {
          this.us.setUsername(username);
          this.modalCtl.dismiss();
          this.us.setUser();
          this.navCtl.navigateForward('/applications/chat-web-app/chat-page');
        } // Signup page segment

      }, {
        key: "gotoSignUpPage",
        value: function gotoSignUpPage() {
          this.modalCtl.dismiss();
          this.signUpPageModal();
        }
      }, {
        key: "signUpPageModal",
        value: function signUpPageModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var signUp;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalCtl.create({
                      component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
                    });

                  case 2:
                    signUp = _context7.sent;
                    _context7.next = 5;
                    return signUp.present();

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "wrongCredToast",
        value: function wrongCredToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var wrongCredToast;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.toastCtl.create({
                      message: 'Incorrect user credentials. Please check your user name and password and try again',
                      duration: 2000,
                      color: 'danger',
                      translucent: true
                    });

                  case 2:
                    wrongCredToast = _context8.sent;
                    wrongCredToast.present();

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return UsernameComponent;
    }();

    UsernameComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _chat_page_username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    UsernameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-username',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./username.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applications/chat-web-app/username/username.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./username.component.scss */
      "./src/app/applications/chat-web-app/username/username.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _chat_page_username_service__WEBPACK_IMPORTED_MODULE_3__["UsernameService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], UsernameComponent);
    /***/
  },

  /***/
  "./src/app/applications/server.service.ts":
  /*!************************************************!*\
    !*** ./src/app/applications/server.service.ts ***!
    \************************************************/

  /*! exports provided: ServerService */

  /***/
  function srcAppApplicationsServerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerService", function () {
      return ServerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ServerService = function ServerService() {
      var _this5 = this;

      _classCallCheck(this, ServerService);

      // Server address to use
      this.development = 'http://localhost:3000';
      this.prod = 'https://backstab319.herokuapp.com';
      this.address = this.prod;

      this.getServerAddress = function () {
        return _this5.address;
      };
    };

    ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ServerService);
    /***/
  }
}]);
//# sourceMappingURL=chat-web-app-chat-web-app-module-es5.js.map